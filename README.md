# monorepo
This application shows how to connect multiple microservices into one effective monolith application 

You don't need to install dependencies for each service separately. 
Just run `npm install` in the root directory and all dependencies will be installed for all services without duplication.
This is one of the advantages of workspaces in npm

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

