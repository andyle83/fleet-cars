# multi-stage docker
# build stage
FROM node:14-alpine3.10
WORKDIR /home/node/app

COPY package*.json ./
COPY tsconfig*.json ./
COPY cars.json ./

# Copy source code to working directory
COPY src ./src

# Install all node packages
RUN npm install
RUN npm run build

# run stage
FROM node:14-alpine3.10
WORKDIR /home/node/app

COPY package.json ./
COPY cars.json ./
RUN npm install --only=production

COPY --from=0 /home/node/app/build .
RUN npm install pm2 -g
EXPOSE 8000
CMD ["pm2-runtime","index.js"]

