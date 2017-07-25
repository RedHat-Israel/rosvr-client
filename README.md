# Redhat Open Virtual Reality - Client

ROVR(Redhat Open Virtual Reality) enables creating data generated, interactable, AR visualizations 🖲📊

## Getting Started

To get started simply clone the repository and run:
```shell
yarn install
yarn start-server
```
and you are up and going!

### Installing

We recommend working against the webpack development server by running:
```shell
yarn start-server
```
> Note: The development server will watch for changes and hot-reload as required ✨

But if you want to statically build the code for development purposes, you can manually run:
```shell
yarn build
```
which will generate the requested `/dist` folder

## Running the tests

In order to run the tests simply run:
```shell
yarn test
```

### Tests Structure

Each component/entity is joined with a `\*.test.js` file which **at least** passes a smoke test on it's generation function and **additionally** verifies custom functionality it performs(component life-cycle functions)

For example, basicEntities.js holds are most basic entities(surprisingly😏)
```
.
├── basicEntities.js
└── basicEntities.test.js
```
Thus basicEntities.test.js will hold a test suite for the entire file and sub-suite for each entity
```javascript
import * as BasicEntities from './basicEntities.js'

describe('Basic Entities Suite', () => {
	describe('scene tests', () => {
		it('scene smoke test', () => {
			expect(BasicEntities.scene()).toBeDefined()
		})
	})
})
```

### Tests Configuration

We are using [Karma](https://karma-runner.github.io/1.0/index.html) as our test runner and [Jasmine](https://jasmine.github.io/) as our test suite and assertion platform. By running `yarn test`, all `*.test.js` files will be ran on [PhantomJS](http://phantomjs.org/) and results reported to the command-line

```
yarn test v0.27.5
$ karma start
clean-webpack-plugin: ./dist has been removed.
25 07 2017 23:42:27.026:INFO [karma]: Karma v1.7.0 server started at http://0.0.0.0:9876/
25 07 2017 23:42:27.034:INFO [launcher]: Starting browser PhantomJS

.
PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 1 of 1 SUCCESS (0.003 secs / 0.002 secs)
Done in 11.46s.
```

## Code Structure
The code is structured such that components and entities are loaded from separate folders as designed by [ECS](https://en.wikipedia.org/wiki/Entity%E2%80%93component%E2%80%93system) and singularly loaded into the entry-point, procedurally loaded onto the DOM

```
.
├── src - source files
│   ├── components - A-Frame components
│   ├── entities - A-Frame entities
│   │   ├── basicEntities.js
│   │   └── basicEntities.test.js
│   ├── index.ejs - autogeneration view template
│   └── index.js - entry point
├── ... README and licences
└── ... configuration files
```

## Deployment

In order to deploy the project to production simply run:
```shell
yarn build-production
```
which will create a `/dist` folder with uglified, hot-replaced, concated and minified, production-ready project! 🏭

## Built With

* [A-Frame](https://aframe.io/) - 3D assets visualization
* [AR.js](https://github.com/jeromeetienne/AR.js) - Augmented reality marker integration
* [LeapJS](https://github.com/leapmotion/leapjs) - LeapMotion controller API
* [Webpack](https://webpack.js.org/) - Module bundler and transpiler
* [Karma](https://karma-runner.github.io/1.0/index.html) - Test runner platform
* [Jasmine](https://jasmine.github.io/) - Test suite and assertion engine

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. Current version is

## Authors

* **Shaked Lokits** - *Initial work* - [shakedlokits](https://github.com/shakedlokits)

## License

This project is licensed under the GPL-3.0 License - see the [LICENSE.md](LICENSE.md) file for details
