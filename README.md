# residenz-microservice
Microservices for the coming Residenz platform

We'll use express.js and reactive programming concepts for this project.

The goal of this project is to understand the following:

+ basic functional reactive programming concepts (FRP)
+ declarative vs imperative
+ is FRP useful on the server side?

## Miscellaneous

Other than FRP in the endpoints, the architecture is similar to other projects and includes the following:

+ configurations are stored in environment variables
+ configurations are validated upon loaded using `convict`
+ request is validated using `Joi`
+ each service is placed in it's respective folders
+ using `JSON-API`