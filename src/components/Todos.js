import React, { PropTypes, Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

// The overall todos view.
export default class Todos extends Component {
    render() {
        return (
            <div className="todos row">
                <div className="col-md-6 col-md-offset-3">
                    <h1>Todo List</h1>
                    <AddTodo />
                    <TodoList />
                </div>
            </div>
        );
    }
}
