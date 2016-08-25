# About this Repo

This is for a talk given at the [Lexington JavaScript User Group](http://www.meetup.com/Kentucky-JavaScript-Users-Group/).

Each git tag represents a step along the way. So you can `git checkout 001` and
see the first step.

The goal here is to get a really quick overview of [React](https://facebook.github.io/react/)
by taking an example app from the first steps through routing.

# Step 9 (Higher Order Components)

### Goals

- Build a higher order component to abstract away listening to store changes

### Higher Order Components?

The JavaScript community's invent term for the [Decorator Pattern](https://en.wikipedia.org/wiki/Decorator_pattern).

The idea is you wrap another component up with a component class scoped via a
closure.

The basic pattern looks like this...


```js
import React, { Component } from 'react';

// args here are whatever you need for the component to do its job
export function higherOrder(one, two, three) {
    // return a function that accepts a react component class
    return function (WrappedComponent) {
        class HigherOrderComponent extends Component {
            // do stuff with the component lifecylcle here. Like subscribing
            // to stores on mount.
            // https://facebook.github.io/react/docs/component-specs.html

            // render the original component
            render() {
                // you can pass whatever props you want to the wrapped component
                // in this case, we're passing whatever was given to the component
                return React.createElement(WrappedComponent, this.props);
            }
        }

        // return the higher order component
        return HigherOrderComponent;
    };
}
```

And the usage of that...

```js
export const Whatever = higherOrder('one', 'two', 'three')(OtherComponent);
```

### Advantages?

It's another form of code re-use.

In the case of our `connectToStore` component, it makes the actual component its
wrapping a bit more testable (it's no longer bound to global state).
