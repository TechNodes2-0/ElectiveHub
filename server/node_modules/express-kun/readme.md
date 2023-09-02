# Express-Kun

Express Kun is providing you common helper for common express use case with functional programming mindset.

## Installation

`yarn add express-kun`
or
`npm install express-kun`

## Philosophy

Express Kun philosophy is An helper should only extends the functionality without redefining how we write our application.
think of it as Redux vs Mobx. in Redux, you don't redefine how you write your components. redux only extends the functionality fia `connect` function to access your reducer. meanwhile MobX requiring you to wrap your function in decorator. by extending instead of redefining we can achieve smoother learning curve and more expressive.
Express Kun does not dictate you. instead, you provided it with `express` `Router` object and returning modified `Router` express object or providing callback to play with modified `Router` Object.
Express Kun is your friend and servant.

## API

## Base

#### `withMiddleware(router: Router, middlewares: RequestHandler[]): Router`;

with middleware apply middleware to your router and return back the midlewared router

```javascript
// your router
const router = Router();
// with auth middleware
const protectedRouter = withMiddleware(router, authMiddleware); // also support array of middleware ex: [authMiddleware, myMiddleware2]

protectedRouter.get("/user", (req, res) => {
  res.send({
    message: "success"
  });
});
```

because this is only return the midlewared router. you can chain it without modifying the first router behavior

```javascript
// your router
const router = Router();
// with auth middleware
const protectedRouter = withMiddleware(router, authMiddleware); // also support array of middleware ex: [authMiddleware, myMiddleware2]
// will apply authMiddleware and uploadMiddleware
const protectedUploadRouter = withMiddleware(protectedRouter, uploadMiddleware);

protectedRouter.get("/user", (req, res) => {
  res.send({
    message: "success"
  });
});
protectedUploadRouter.post("/user", (req, res) => {
  res.send({
    message: "success upload photo"
  });
}))
```

#### `withErrorHandler(router: Router, errorHandler: ErrorRequestHandler): Router;`

withErrorHandler returning a router that when that route error it will use the provided error handler

for example

```javascript
function errorHandler(err, req, res, next) {
  res.json({
    error: true,
    mesage: "wow error"
  });
}

const withErrorHandlerRoute = withErrorHandler(router, errorHandler);

// when accessed will return json { error: true, message: 'wow error' }
withErrorHandlerRoute.get("/errorrouter", (req: Request, res: Response) => {
  throw new Error("Error here");
});
```

this provide further more functionality to compose middleware with error handler

```javascript
function errorHandler(err, req, res, next) {
  res.json({
    error: true,
    mesage: "wow error"
  });
}

function middleware(req, res, next) {
  console.log("midleware");
  next();
}

const middlewaredRoute = withMiddleware(router, middleware);

const withErrorHandlerRoute = withErrorHandler(middlewaredRoute, errorHandler);

// when accessed will return json { error: true, message: 'wow error' }
withErrorHandlerRoute.get("/errorrouter", (req: Request, res: Response) => {
  throw new Error("Error here");
});
```

#### `partialWithMiddleware(middlewares: RequestHandler[]): (router: Router) => void`

partially use withMiddleware. this is useful if you want to create abstraction of midleware. for example you want to build helper to generate route
with auth middleware. you can do like this

```javascript
// in generateAuthMiddleware.js
const generateAuthMiddleware = partialWithMiddleware(authMiddleware);

// in your routes.js
const router = new Router();
const protectedRoute = generateAuthMiddleware(router);
```

this even support supplying partialWithmiddleware with middleware for easy composition

```javascript
// in generateAuthMiddleware.js
const generateAuthMiddleware = partialWithMiddleware(authMiddleware);

// in uploadProtectedMiddleware.js
const generateUploadProtectedMiddleware = generateAuthMiddleware(
  uploadMiddleware
);

// in your routes.js
const router = new Router();
const uploadProtectedRouter = generateUploadProtectedMiddleware(router);
```

#### `partialWithErrorHandler(errorHandler: ErrorRequestHandler): (router: Router) => void;`

like partialWithMiddleware but for error handler

```javascript
// in generateLoggingErrorRoute.js
const loggedErrorHandler = partialWithErrorHandler(errorHandler);

// in your routes.js
const router = new Router();
const loggedRoute = generateLoggingErrorRoute(routeer);
```

#### `groupErrorHandler(routerOrApp: RouterOrApplication, handler: ErrorRequestHandler): (callback: (router: Router) => void) => void;`

this wass Laravel-like route for reusable error handling. you can write it like this

```javascript
// your router
const router = Router();
// define error handler
const errorHandler = (err, req, res, next) => {
  // log the error
  console.log(error);

  // sendJson
  res.json({
    error: true,
    messsage: "wow error"
  });
};

// use it
groupErrorHandler(
  router,
  errorHandler
)(withErrorHandlerRoute => {
  // when every route defined here return an error it will passed to the error handler
  withErrorHandleRoute.get("/testError", (req, res) => {
    throw new Error("error Here");
  });
});
```

by providing error this way you can provide multiple error handle for different route easily

```javascript
const userRouter = Router();
const customerRouter = Router();
// define error handler
const errorHandlerUser = (err, req, res, next) => {
  // log the error
  console.log(error);

  // sendJson
  res.json({
    error: true,
    messsage: "wow error in user"
  });
};

const errorHandlerCustomer = (err, req, res, next) => {
  // log the error
  console.log(error);

  // sendJson
  res.json({
    error: true,
    messsage: "wow error in customer"
  });
};

// use it
groupErrorHandler(
  userRouter,
  errorHandlerUser
)(withErrorHandlerRoute => {
  // when every route defined here return an error it will passed to the error handler
  withErrorHandleRoute.get("/user/testError", (req, res) => {
    throw new Error("error Here");
  });
});

groupErrorHandler(
  customerRouter,
  errorHandlerCustomer
)(withErrorHandlerRoute => {
  // when every route defined here return an error it will passed to the error handler
  withErrorHandleRoute.get("/customer/testError", (req, res) => {
    throw new Error("error Here");
  });
});
```

## Extended

#### withJWTAuthMiddleware(router: Router, secretKey: string, getToken?: GetTokenFun, preCheckFun?: PreCheckFun, errorHandler?: ErrorRequestHandler, verifyOptions?: jwt.VerifyOptions): Router;

##### typings

```typescript
type GetTokenFun = (req: Request) => any;
type PreCheckFun = (req: Request, res: Response) => any;
```

##### use

```typescript
const protectedRouter = withJWTAuthMiddleware(router, "mySecretKey");
```

withJWTAuthMiddleware make it simple to create middleware for authentication if you are using jwt. the only required parameter is `secretKeey` that you use
to sign your jwt. by default it will get token from the bearer from authorization header for example

```
Headers: ...
  Authorizatation: Bearer 321lnasljndjijno214
```

but you can also provide getToken Function that will pass the request object as parameter and should return the token, for example

```typescript
function getTokenFromBearer(req: Request) {
  const authorization = req.headers.authorization;
  if (!authorization) {
    throw new Error("No Authorization Header");
  }
  try {
    const token = authorization?.split("Bearer ")[1];
    return token;
  } catch {
    throw new Error("Invalid Token Format");
  }
}
```

and then use like below

```typescript
const protectedRouter = withJWTAuthMiddleware(
  router,
  "mySecretKey",
  getTokenFromBearer
);
```

you can also provide pre check for example to check if user exist

```typescript
function checkUser(req: Request, res: Response) {
  // check user object
  // ...
  // user not found
  if (!user) {
    res.status(404).json({
      message: "User Not Found",
      error: true
    });
  }
}
```

and then use like below

```typescript
withJWTAuthMiddleware(router, "mySecretKey", getTokenFromBearer, checkUser);
```

### `partialWithJWTAuthMiddleware(secretKey: string, getToken?: GetTokenFun, preCheckFun?: PreCheckFun, errorHandler?: ErrorRequestHandler, verifyOptions?: jwt.VerifyOptions)`

this function is like withJWTAuthMiddleware but you can pass the Router later;

```typescript
export const authMiddleware = partialWithJWTAuthMiddleware(
  "mySecretKey",
  getTokenFromBearer,
  checkUser
);

// later
const protectedRoute = authMiddleware(router);
```

## Callback API

#### `groupMiddleware(router: Router, middlewares: SupportedMiddleware): (callback: (router: Router) => void) => void;`

This is like `groupErrorHandler` but instead of error handler you can pass middleware here
for example

```javascript
// your router
const router = Router();
// define error handler
const myMiddleware = (err, req, res, next) => {
  // log or do something
  console.log("logging in something");
};

// use it
groupMiddleware(
  router,
  myMiddleware // also support array of middleware ex: [myMiddleware, myMiddleware2]
)(middlewaredRoute => {
  // when every route defined here return an error it will passed to the error handler
  middlewaredRoute.get("/user/middlewared", (req, res) => {
    res.send("hello world");
  });
});
```

#### `groupPrefix(router: Router, prefix: string): (callback: (router: Router) => void) => void;`

Provide laravel-like grouping route/controller with the same prefix

```javascript
// your router
const router = Router();
// add prefix
groupPrefix(
  router,
  "/customer"
)(prefixedRoute => {
  // the route will be '/customer/test'
  prefixedRoute.get("/test", (req, res) => {
    res.send("hello world");
  });
});
```

## Features

- Functional Like
- extendable
- built with Typescript
