# About this Repo

This is for a talk given at the [Lexington JavaScript User Group](http://www.meetup.com/Kentucky-JavaScript-Users-Group/).

Each git tag represents a step along the way. So you can `git checkout 001` and
see the first step.

The goal here is to get a really quick overview of [React](https://facebook.github.io/react/)
by taking an example app from the first steps through routing.

# Step 4 (All My Components Children)

### Goals

- Build more of a real application structure
- Take a peek at the react dev tools


### Nesting Components

Custom components can be nested just like HTML can be nested, letting you build
bigger structures and re-usable pieces. Take a look in `src/components`.

### Children

JSX passed into your component as children becomes available at
`this.props.children`.

Components can choose whether or not to render those children.

```jsx
<App>
    // these <App /> can render these or not.
    <Header />
    <Hello />
</App>
```

### React Dev Tools

The react team [offers a few browser extensions](https://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html)
to let you view the structure of your application and inspect component
props/state.
