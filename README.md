# About this Repo

This is for a talk given at the [Lexington JavaScript User Group](http://www.meetup.com/Kentucky-JavaScript-Users-Group/).

Each git tag represents a step along the way. So you can `git checkout 001` and
see the first step.

The goal here is to get a really quick overview of [React](https://facebook.github.io/react/)
by taking an example app from the first steps through routing.

# Step 8 (Flux)

### Goals

- Get a quick overview of the flux architecture
- Write a simple, in-memory TODO app

### Flux

[Flux](https://facebook.github.io/flux/) is an application architecture.
Definitely check out the docs, but in brief there are four components:

- Actions: Similar to events, actions instruct the system as a whole to
  do something. (*add a todo*, *delete a todo*, etc).
- A dispatcher: An object through which actions are sent.
- Stores: One or more objects that listen to the actions sent through the
  dispatcher and (optionally) do something based on them. Stores are also where
  your application's data lives.
- Views: React components in our case, but these can be anything. Views react to
  user inputs to dispatch actions as well as display the data from stores.

The core idea is that data flows in a single direction. Views -- or other things
-- dispatch actions and stores handle them. When a store updates its state, it
emits events the views can subscribe too so they are notified of and can display
the changes.

### Pros

- Very decoupled and easy to refactor.
- Unidirectional data flow tends to make how data changed a bit clearer
  (subjective).

### Cons

- Traditional "flux" has a lot of global state, can make things hard to test
- Ends up a bit more verbose (subjective).

### Even Moar Dependencies

```
npm install --save flux eventemitter3
```
