process.env.NODE_ENV = 'test';

// register babel so it transpiles ES6 -> ES5 before the tests
require('babel-register')();

// Set up enzyme
var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

// Set up JSDOM and global vars
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
var exposedProps = ['window', 'navigator', 'document'];

const { document } = (new JSDOM('')).window;
global.document = document;
global.navigator = { userAgent: 'node.js' };
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProps.push(property);
    global[property] = document.defaultView[property];
  }
});

documentRef = document;