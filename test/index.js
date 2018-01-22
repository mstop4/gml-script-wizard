process.env.NODE_ENV = 'test';

// register babel so it transpiles ES6 -> ES5 before the tests
require('babel-register')();

// Set up JSDOM and global vars
var jsdom = require('jsdom').jsdom;
var exposedProps = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.navigator = { userAgent: 'node.js' };
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProps.push(property);
    global[property] = document.defaultView[property];
  }
});

documentRef = document;