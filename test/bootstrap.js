import { jsdom } from 'jsdom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import React from 'react';

// we'll use expect everywhere, so put it in the global scope
global.expect = expect;

// similarl TestUtils will get used a lot. The `Simulate` object is how 
// events are done to rendered components.
global.TestUtils = TestUtils;
global.Simulate = global.TestUtils.Simulate;

// Almost all of our tests will have JSX in them. Since babel compiles that to
// React.createElement, we have to either impor `React` wherever JSX is or put
// it in the global scope here.
global.React = require('react');

// finally we need to "fake" the document and window with jsdom
global.document = jsdom('<doctype! html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;
