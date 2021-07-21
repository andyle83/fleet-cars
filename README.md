# fleet-cars

This project is building a simple web api that return some query of fleet car from a data source in JSON format.

## Build & Testing

The `package.json` file defines a list of commands:

- `npm run test` - running a unit test scrip using Jest framework
- `npm run dev` - using hot reloading to run / reload web api in development environment

## Production

The `package.json` provide command to build and run project in production

- `npm run build` - build project for production environment
- `npm run start` - build and run project for production environment

In additional, it defines `Dockerfile` and `docker-compose.yml` to build Docker images and execute service in a Docker container.

## Future work

- Should add logging to monitor performance and issues in run-time environment
- Should implement error handling for exception that throwing in some methods (i.e, reading file issues)
- Should use a dependency injection to reduce dependency between some layers (i.e, controller / service)
- Should add another layer (repository) when service may work with difference data source (database providers, flat file..)