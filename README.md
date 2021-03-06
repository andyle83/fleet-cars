# fleet-cars

This project is building a simple web api that return some query of fleet car from a data source in JSON format.

## Build & Testing

The `package.json` file defines a list of commands:

- `npm run test` - running a unit test scrip using Jest framework
- `npm run server-dev` - using hot reloading to run / reload web api in development environment

## Production

The `package.json` provide command to build and run project in production

- `npm run server-build` - build project for production environment
- `npm run server-start` - build and run project for production environment

In additional, it defines `Dockerfile` and `docker-compose.yml` to build Docker images and execute service in a Docker container:

- `docker-compose up`- run service in a docker container

## Future work

### Code Improvement

- Should add logging to monitor performance and issues in run-time environment
- Should implement error handling for exception that throwing in some methods (i.e, reading file issues)
- Should use a dependency injection to reduce dependency between some layers (i.e, controller / service)
- Should add another layer (repository) when service may work with difference data source (database providers, flat file..)

### CI/CD

Suggesting solution:

Using `CloudFormation` or `AWS CDK` to build infrastructure as code for the project. The main benefits is that we can implement a dynamic pipeline for the whole project (multi branch build, different deployed environment). In this approach, we can use:

* `CodeCommit`: for code repository (currently, project's using github)
* `CodeBuild`: 
  * create docker image whenever source code get update
  * use build command to run unit test script to report in `Report group`
* `CodeDeploy`: to deploy new docker image into the `ECS` or `AWS Fargate`

Note: I did implement a case study for this approach and publish a medium post about it. You can refer it in here: `https://medium.com/andy-le/building-a-dynamic-aws-pipeline-with-cdk-5d5426fc0493` or my personal blog about micro-service `https://www.microservicesvn.com/docs/cicd/codepipeline_revised.html`