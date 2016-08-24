# About this Repo

This is for a talk given at the [Lexington JavaScript User Group](http://www.meetup.com/Kentucky-JavaScript-Users-Group/).

Each git tag represents a step along the way. So you can `git checkout 001` and
see the first step.

The goal here is to get a really quick overview of [React](https://facebook.github.io/react/)
by taking an example app from the first steps through routing.

# Step 5 (State of the Component)

### Goals

- See how component state works
- Look at our first forms

### In Addition to Props Components can Have State

While props come from elsewhere, state is manged by the component itself.

The easiest way to think about component state is thinking about how almost
every HTML and other JavaScript library works.

- Forms in plain HTML managed their own state (you type, the DOM displays what
  what input).
- Things like bootstrap's tabs hide or show DOM elements. Active classes are
  added to DOM elements to keep track of what's visibile.

Both of those examples are good candidate to keep in component state.

The state of a component is changed by calling `this.setState` and whenver state
does change, react triggers a re-render.

### React + Forms

React has a concept of [controlled](https://facebook.github.io/react/docs/forms.html#controlled-components)
vs [uncontrolled](https://facebook.github.io/react/docs/forms.html#uncontrolled-components)
forms. Uncontrolled work just like plain old HTML forms: the DOM (or React
itself) manages the state. Controlled are the opposite, you component has to
handle input change and display by providing `onChange` and `value` props to
your form's inputs.

See `src/components/StatefulHello.js` for an example of a controlled form
and `src/components/UncontrolledHello.js` for an uncontrolled form.

### Refs

To facilitate the `UncontrolledHello` we used [a `ref`](https://facebook.github.io/react/docs/more-about-refs.html).
Refs are a way to "react out" to components rendered and inspect them or invoke
methods on them.

### A quick note about uncontrolled forms

Don't use them. Seriously. It's nice to not write a bunch of boilerplate and
`onChange` handlers, but practically they are a pain. A library can help you
with the form change handlers and validation.
