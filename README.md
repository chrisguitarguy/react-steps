# About this Repo

This is for a talk given at the [Lexington JavaScript User Group](http://www.meetup.com/Kentucky-JavaScript-Users-Group/).

Each git tag represents a step along the way. So you can `git checkout 001` and
see the first step.

The goal here is to get a really quick overview of [React](https://facebook.github.io/react/)
by taking an example app from the first steps through routing.

# Step 3 (Components & ES What)

### Goals

- Extract the Hello, World into a component (with props)
- Use ES2015 modules

### Components

Pieces of functionality can be extracted into *components*, re-usable pieces of
UI that are classes extending `React.Component`.

We'll use ES2015 modules.

### Making Babel Work for Us (again)

```
npm install --save-dev babel-preset-es2015
```

The above preset will let babel turn es2015 modules into something all browsers
can use. It should be added to `.babelrc`.

Now we can extract the hello world stuff into it's own component and import it.

See the `src` directory.

### Props (or Properties)

Props are the values you pass into a react component via XML attributes.

```jsx
<ComponentName thisIs="A Prop" />
```

Our new component uses props to pass in a name of someone to greet.
