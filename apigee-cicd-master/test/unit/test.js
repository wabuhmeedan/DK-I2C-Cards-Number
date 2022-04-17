// test.js

var expect = require('expect.js');
var sinon = require('sinon');
var rewire = require('rewire');

var fakeContext = {							//declaring fake contexts
  getVariable: function (s) { },
  setVariable: function (s) { }
};
var fakeContent = {
  getVariable: function (s) {
  },
  setVariable: function (s) {
  }
};

global.print = function print(input) {
  console.log(input);
};
var contextGetVariableMethod;
var contextSetVariableMethod;
//stubbing all Apigee objects and the methods we need
beforeEach(function () {												//This method will execute before every it() method in the test
  contextGetVariableMethod = sinon.stub(fakeContext, 'getVariable');
  contextSetVariableMethod = sinon.stub(fakeContext, 'setVariable');

  global.context = fakeContent;
  global.context.getVariable = function (name) {
    contextGetVariableMethod.withArgs(name);
  };
});

afterEach(function () {						//restore all stubbed methods back to their original implementation
  contextGetVariableMethod.restore();
  contextSetVariableMethod.restore();
});
