# Members Search App

App for Members Search.

### Getting Started

Compile and launch your app by running:

```shell
$ yarn start # Compiles the app and opens it in a browser with "live reload"
```

You can also test your app in release (production) mode by running `yarn start -- --release` or
with HMR and React Hot Loader disabled by running `yarn start -- --no-hmr`. The app should become
available at [http://localhost:8080/](http://localhost:8080/).


### How to Test

The unit tests are powered by [chai](http://chaijs.com/) and [mocha](http://mochajs.org/).

```shell
$ yarn lint # Check JavaScript and CSS code for potential issues
$ yarn test # Run unit tests. Or, `yarn run test:watch`
```


### How to Deploy

If you need to build the project without publishing it, simply run:

```shell
$ yarn build # Compiles the app into the /public/dist folder
```
