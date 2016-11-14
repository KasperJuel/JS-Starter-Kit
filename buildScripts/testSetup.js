// This file isn't transpiled, so must use CommonJS and ES5

// Register babel to transpile before tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand - treat it as an empty function if it find any
require.extensions['.css'] = function() {};
