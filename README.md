# Web portal to manage cooking recipes

This repository contains an application to manage cooking recipes for my family, using the following technology stack:
* [Spring Boot](https://spring.io/guides/gs/spring-boot/)
* [GraphQL Java](https://www.graphql-java.com)
* [React](https://reactjs.org/docs/getting-started.html)
* [TypeScript](https://www.typescriptlang.org/)
* [Apollo GraphQL for React](https://github.com/apollographql/react-apollo)

## Installing and starting

### Required software:
* [Java/JDK 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
* [NodeJS (I'm using version 12.10.0)](https://nodejs.org/en/)
* [yarn (I'm using version 1.17.3)](https://yarnpkg.com/lang/en/)
* [GraphQL Playground](https://github.com/prisma/graphql-playground)

### Prerequisites:
* Port 4000 must be available for the backend server
* Port 3000 must be available for the frontend webserver

### Before you start: clone this repository
1. `git clone https://github.com/sandra-markerud/recipes.git`

### Build the project
1. Open a new terminal inside the the project's root folder
2. Run the `./build-project.sh` script to start the maven build. Due to the `frontend-maven-plugin`, the frontend is also built in addition to the backend

### Build and start the backend
1. Open a new terminal inside the the project's root folder
3. Run the  `./run-backend.sh` script to start the spring boot backend via maven
4. Start the GraphQL Playground and enter the following url endpoint `http://localhost:4000/query` to access the graphQL endpoint

### Install, build and start the frontend 
1. Open a new terminal inside the `frontend` folder
3. Start the webpack web server with `yarn start`
4. The webserver now should listen on `http://localhost:3000`

#### Have fun!
