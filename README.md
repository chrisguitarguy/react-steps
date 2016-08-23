# About this Repo

This is for a talk given at the [Lexington JavaScript User Group](http://www.meetup.com/Kentucky-JavaScript-Users-Group/).

Each git tag represents a step along the way. So you can `git checkout 001` and
see the first step.

The goal here is to get a really quick overview of [React](https://facebook.github.io/react/)
by taking an example app from the first steps through routing.

# Step 2 (The Bundling)

### Goals

- Use a module bundler to get all dependencies in one place.
- Explore the webpack dev server

### Module Bundler

A module bundler let's build a set of AMD or CommonJS modules into a single
file.

Some examples:

- [Webpack](https://webpack.github.io/)
- [Browserify](http://browserify.org/)
- [Rollup.js](http://rollupjs.org/)

The react community seems to like Webpack, so let's use that.

```
npm install --save-dev webpack
```

And to use it, we'll need to set up some configuration (see `webpack.config.js`).

Then run...

```
./node_modules/.bin/webpack
```
