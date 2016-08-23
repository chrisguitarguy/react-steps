# About this Repo

This is for a talk given at the [Lexington JavaScript User Group](http://www.meetup.com/Kentucky-JavaScript-Users-Group/).

Each git tag represents a step along the way. So you can `git checkout 001` and
see the first step.

The goal here is to get a really quick overview of [React](https://facebook.github.io/react/)
by taking an example app from the first steps through routing.

# Step 1

### Goals

- Get a first look at JSX
- Compile JSX with babel
- Render something in the browser using ReactJS

### JSX?

Think of it like [JavaScript mixed with XML](https://facebook.github.io/react/docs/jsx-in-depth.html).

Checkout `src/app.js` for an example.

XML-like tags embedded withing JavaScript. A pre-processor like
[babel](http://babeljs.io/) is used to turn that JSX into plain JavaScript.


### We'll need a few things

The react core library as well as its DOM component (which is used to render
react's JSX stuff into the browser).

```
npm install --save react react-dom
```

And we'll also need babel (core as well as cli) and a babel "preset" (set of
plugins/transforms) for react.

```
npm install --save-dev babel-core babel-cli babel-preset-react
```

### Compile JSX

Babel requires a [configuration file](https://babeljs.io/docs/usage/babelrc/).
Ours will include the React preset.

With that in place, we can compile.

```
./node_modules/.bin/babel --recursive -d build src/
```

Or, let's wrap that up in an npm script:

```json

{
    "scripts": {
        "compile": "babel --recursive -d build src/"
    }
}
```

And then...

```
npm compile
```
