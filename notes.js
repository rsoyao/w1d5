*/ Background :
OBJECTS : (collection of key-value pairs, where keys are unique)
FUNCTIONS: (they're contracts, they take in inputs, they usually output some value)

function add(a, b, callback) { (callback refers to the show function)
  show (a + b);
}

fucntion show() {
  console.log('showing', input);
}

Program 1
add(10, 20, show);
Program 2
add(30, 40);

MODULES: (collection of objects and functions that is "exported" and can be "imported")

function add(a, b) {
  var result = a + b
  return result;
}

module.exports = {
    add: add,
    multiply: multiply
};

var basicMath = require('./notes.js'); ------- importing function command to another file

!! Ability to export functions within the file as long as you are calling the right key value that is
associated with the function

PACKAGES: (description of one or more modules that are available to a developer)

NPM : node package manager
{
Collection of packages
package.json
npm init
npm install & npm install -g & npm install --production (installs to the global scope of your local machine)
npm install --save & npm install --save-dev
}

TESTING:

Installing Mocha npm install -g mocha
describe - describe what th
it - describe scenarios you are testing
assert - check if the value you get are true or false
*/
