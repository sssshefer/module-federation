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

Install all dependencies for project
```bash
$ npm install
```
> [!TIP]
> You don't need to install dependencies for each service separately. 
> Just run `npm install` in the root directory and all dependencies will be installed for all services without duplication.
> This is one of the advantages of workspaces in npm

Example of running one specific microservice
```bash
$ npm run start -w admin
```

How to run all services at once
```bash
$ npm run startAll
```

> [!NOTE]
It is possible to run all services at once with package called concurrently. it allows you to run multiple commands *concurrently*
<!-- basically it is like publishing a package to npm, but you are doing it locally -->


