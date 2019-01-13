# **Super Galactic Age Calculator**
####  Week1 JavaScript Independent Project at Epicodus, 01/12/2019
#### Tanvi Garg   

## Description
An application that determines a user’s age, lifespan and years left to live based on a planet’s solar years.

## Table of Contents
  1. [Specifications](#specs-work)
  2. [Technologies Used](#Tech-used)
  3. [Configuration/dependencies](#config-dep)
  4. [MIT License](#mit-lic)

  ---
## Specifications

| Behavior | Input | Output |
|----------|-------|--------|
|  Program takes a user's date of birth and calculate Earth years.| Year: 1985, Month: 3, Date: 5 | 33.85 Earth years
|  Program takes a user's date of birth and converts to Mercury Years.| 33 Earth Yrs | 33 / .24 = 137.5 Mercury Yrs
| Program takes a user's date of birth and converts to Venus Years. | 33 Earth Yrs | 33 / .62 = = 53.23 Venus Yrs |
| Program takes a user's date of birth and converts to Mars Years. |  33 Earth Yrs  | 33 / 1.88 = 17.55 Mars Yrs |
| Program takes a user's date of birth and converts to Jupiter Years. |  33 Earth Yrs  | 33 / 11.86 = 2.78 Jupiter Years |
| Program takes a user's date of birth and gives life expectancy in selected planet's years. |  User Age = 33 Earth Years, User Earth Life Expectancy = 75, User Mars Life Expectancy = 39.89 Mars Years   | Life Expectancy in Mars Years = 22.34 Mars Years |
| Program takes a user's date of birth and calculates how many years a user has lived longer on a selected planet based on life expectancy. |  User Age = 79 Earth Years, User Earth Life Expectancy = 75, User Mars Life Expectancy = 39.89 Mars Years   | Years past Life Expectancy in Mars = 22.34 Mars Years |
| Program takes a user's age and calculates how many years a user has lived longer on a selected planet based on life expectancy. |  User Age = 79 Earth Years, User Earth Life Expectancy = 75, User Mars Life Expectancy = 39.89 Mars Years   | Years past Life Expectancy in Mars = 22.34 Mars Years |
 ---
## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

 ---
## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

---
## Configuration/Dependencies

  | Dependency                           | Description                                                                |
  | ------------------------------------ | -------------------------------------------------------------------------- |
  | babel-core v. 6.26.0                 | Babel compiler core                                                        |
  | babel-loaded v. 7.1.3                | Babel loader for webpack                                                   |
  | babel-present-es2015 v. 6.24.1       | Specifies how Babel can convert ES6 to ES5                                 |
  | clean-webpack-plugin v. 0.1.18       | Clean your build folder(s) before building                                 |
  | css-loader v. 0.28.10                | Interprets `@import` and `url()` like `import/require()` and resolves them |
  | eslint v. 4.18.2                     | Identifies and reports on patterns found in Javscript code                 |
  | eslint-loader v. 2.0.0               | ESLint loader for webpack                                                  |
  | html-webpack-plugin v. 3.0.6         | Simplifies creation of HTML files to serve webpack bundles                 |
  | jasmine v. 3.1.0                     | Allows Jasmine specs to be run                                             |
  | jasmine-core v. 2.99.1               | JavaScript BDD testing framework                                           |
  | karma v. 2.0.0                       | Allows the execution of JavaScript code in multiple *real* browsers        |
  | karma-chrome-launcher v. 2.2.0       | Launcher for Google Chrome, Google Chrome Canary, and Google Chromium      |
  | karma-cli v. 1.0.1                   | Use Karma from the command line                                            |
  | karma-jasmine v. 1.1.1               | Plugin - adapter for Jasmine testing framework                             |
  | karma-jasmine-html-reporter v. 0.2.2 | Dynamically shows test results at debug.html page                          |
  | karma-jquery v. 0.2.2                | Plugin - adapter for jQuery framework                                      |
  | karma-webpack v. 2.0.13              | Use webpack to preprocess files in Karma                                   |
  | style-loader v. 0.20.2               | adds CSS to the DOM by injecting a `<style>` tag                           |
  | uglifyjs-webpack-plugin v. 1.2.2     | Minifies JavaScript                                                        |
  | webpack v. 4.19.1                     | A module bundler used to bundle JavaScript files and additional resources   *Note - Remove carrot sign ^ in version number if webpack issues occur* |
  | webpack-cli v. 2.0.9                 | Use webpack from command line                                              |
  | webpack-dev-server v. 3.1.0          | Provides live reloading during development                                 |

---
## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Tanvi Garg**
