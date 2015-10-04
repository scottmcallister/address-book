# Address Book

A Node JS app using the [Sails](http://sailsjs.org) MVC framework that can be used to create, list, update and delete contacts for a logged in user. Running app locally requires Node, NPM and Sails to be installed. A running instance of this app can be seen [here](http://ec2-52-88-58-45.us-west-2.compute.amazonaws.com/).

##To run this app locally:

* Install sails: `npm install sails -g`
* clone this repository 
* run `$ npm install` to install the app's dependencies
* run `$ sails lift` to start the node server locally
* open `http://localhost:1337` in your browser

##Session Management

Authentication and session management for users was built using [Passport JS](http://passportjs.org/). Support for Facebook, Twitter and Google authentication for this app may be implemented in the future. 

##Test Coverage

This app can be tested using [Mocha JS](https://mochajs.org/). To run tests locally use:

`$ npm test`

If everything runs smoothly, you should see a happy kitty in your terminal: 

```
-_-_-_-_-_-_,------,
-_-_-_-_-_-_|   /\_/\
-_-_-_-_-_-^|__( ^ .^)
-_-_-_-_-_-  ""  ""
```
