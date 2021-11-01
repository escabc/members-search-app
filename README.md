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

### Development

Make sure the API is running and database is populated before starting. If you need to test API changes on staging or live, rename `.env.default` to `.env` and update the url.

You may need to install and older version of node in order to run `yarn`.  You can use [`n`](https://www.npmjs.com/package/n) to install version `10.15.0`.


### How to Deploy

If you need to build the project without publishing it, simply run:

```shell
$ yarn build # Compiles the app into the /public/dist folder
```

To push changes live, run the following after building the project:

```shell
$ aws s3 cp ./public/app.css s3://members-search-app/app.css
$ aws s3 cp ./public/dist/main.*.js s3://members-search-app/app.js
```

Using the `aws` docker image instead of a local install of `aws`

```shell
docker run --rm -it -v ~/.aws:/root/.aws -v "$(pwd)":/aws amazon/aws-cli s3 cp ./public/app.css s3://members-search-app/app.css

docker run --rm -it -v ~/.aws:/root/.aws -v "$(pwd)":/aws amazon/aws-cli s3 cp ./public/dist/main.*.js s3://members-search-app/app.js
```