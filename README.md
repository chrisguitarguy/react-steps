# About this Repo

This is for a talk given at the [Lexington JavaScript User Group](http://www.meetup.com/Kentucky-JavaScript-Users-Group/).

Each git tag represents a step along the way. So you can `git checkout 001` and
see the first step.

The goal here is to get a really quick overview of [React](https://facebook.github.io/react/)
by taking an example app from the first steps through routing.

# Step 7 (Test All the Things)

### Goals

- Write some tests


### Test Frameworks

Generally speaking the [Mocha](https://mochajs.org/) or
[Jest](https://facebook.github.io/jest/) are the two test frameworks that get
used. [Chai](http://chaijs.com/) or [expect](https://github.com/mjackson/expect)
to do assertions.

Additionally [Karma](https://karma-runner.github.io) is sometimes use to execute
tests in the browser.

We'll stick with running our tests just from the command line use only mocha and
expect.

We also need to make mocha play nice with our babel compiliation stuff. We'll
use [babel's require override for that](https://babeljs.io/docs/usage/require/).

We also need [jsdom](https://github.com/tmpvar/jsdom) to fake the a browser's
DOM model.

```
npm install --save-dev mocha expect babel-register jsdom
```

### What Should I Test?

Behavior. The first components written in this repo had no behavior. Now we
have a few examples of behavior to test:

- The `Hello` component should display the name passed to its props
- The `StatefulHello` should update the displayed name whenever the form input
  changes.
- The `UncontrolledHello` component should change its displayed greeting when
  the form is submitted.

All tests will do some setup, an action (like changing the form fields or
submitting), and verification to ensure that we we expected to happen happened.

### React Test Utils

The react team provides a set of [testing utilities](https://facebook.github.io/react/docs/test-utils.html)
to make things like finding components and DOM elements easy.

```
npm install --save-dev react-addons-test-utils
```

### Test Bootstrapping

See `test/bootstrap.js`.

It sets up some global variables (like `document` and `window`) as well as puts
a few things like `expect` and the react test utils in globals as well.

### Actually Running the Tests

```
./node_modules/.bin/mocha --compilers js:babel-register --recursive --require ./test/bootstrap.js
```

Be sure to look in the `test` directory for the tests themselves.
