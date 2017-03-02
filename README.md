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


After attempting to integrate `rx.js` into `nodejs`, I find that it is redundant - there's no advantage of using functional reactive programming concept against promises. In fact, the code using promises is much more verbose compared to that of FRP.

For example, with rx.js the code will look as follow:

```javascript
// Using rx.js
Endpoint.all = (req, res) => {
    // 1. Parse the request and validate it
    const requestStream = rx.Observable.just(req.query)
    .flatMap(schema.all)

    // 2. Using the validated request, make a call
    // to the database
    const responseStream = requestStream
    .flatMap(service.all)

    // 3. Since we will need the parsed request for the response
    // we join both the request and response stream
    rx.Observable.forkJoin(requestStream, responseStream)
    .subscribe(([request, response]) => {
      successJSON(res)({
        meta: {
          page: request.page,
          per_page: request.per_page
        },
        data: response
      })
    }, errorJSON(res))
}
```

And the code with Promises:

```javascript

Endpoint.all = (req, res) => {
    const request = Promise.resolve(req.query).then(schema.all)
    Promise.all([
        request,
        request.then(service.all)
    ])
    .then(([request, response]) => {
      successJSON(res)({
        meta: {
          page: request.page,
          per_page: request.per_page
        },
        data: response
      })
    })
    .catch(errorJSON(res))
}
```

Both the codes are equall readable, in my opinion.