# Monolithic Architecture with Webpack Module Federation
 This project demonstrates how to consolidate multiple microservices into a one monolith application using webpack module federation


> <h3> Motivation </h3> 
> Multiple separate builds should form a single application. These separate builds act like containers and can expose and consume code between builds, creating a single, unified application.
> This is often known as Micro-Frontends, but is not limited to that. <br/>

> From official webpack documentation. You can read more about module federation [here](https://webpack.js.org/concepts/module-federation/)

## Usage

Git clone the repo 
```bash
$ git clone https://github.com/sssshefer/monorepo.git
```

Install all project dependencies 
```bash
$ npm install
```
> [!TIP]
> You don't need to install dependencies for each service separately. 
> Just run `npm install` in the root directory and all dependencies will be installed for all services without duplication.
> This is one of the advantages of workspaces in npm

basically it is like publishing a package to npm, but you are doing it locally

Example of running one specific microservice
```bash
$ npm run start -w admin
```

Example of running all services
```bash
$ npm run startAll
```

concurrently is used to run multiple services at the same time. Can be added to the project

