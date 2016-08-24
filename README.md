# About this Repo

This is for a talk given at the [Lexington JavaScript User Group](http://www.meetup.com/Kentucky-JavaScript-Users-Group/).

Each git tag represents a step along the way. So you can `git checkout 001` and
see the first step.

The goal here is to get a really quick overview of [React](https://facebook.github.io/react/)
by taking an example app from the first steps through routing.

# Step 6 (Separate Pages?)

### Goals

- Use react router to split up our hello things

### Routing?

In web-style MVC terms (think Rails, Django, Laravel, or Symfony) routing
usually means mapping the incoming request to a *controller* or *view* callback
that can render something back to the user.

With a single page react app, routing -- specifically `react-router` -- is about
mapping the URL (or URL hash) to a component.

`react-router` is pretty much the community standard and is under Facebook's
umbrella now.

### React Router

You declare your routes just like any other component: with JSX. You give each
route a `component` to render. Nested routes are build a component hierarchy for
you.

So something like this...

```jsx
<Route path="/" component={App}>
    <IndexRoute component={Hello} />
</Route>
```

...will render `<App><Hello /></App>` at the url `/`.

We'll use react routers browser history to get clean URLs.

### Webpack Dev Server Integration

A new setting is required in `webpack.confg.js`:

```js
module.exports = {
    // ...
    devServer: {
        historyApiFallback: true
    }
};
```

This will route all non-file requests to our `index.html` file.

### Linking

Rather than use a normal anchor tag, we use `<Link to={...} />` from the react
router library.
