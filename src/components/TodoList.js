import React, { PropTypes, Component } from 'react';
import TodoStore from '../stores/todos';
import connectToStore from './connectToStore';
import Todo from './Todo';

// displays a list of all todos.
// export this so we can test it independent of
export class TodoList extends Component {
    render() {
        let ids = this.props.ids;
        let todos = this.props.todos;

        return (
            <ul className="list-unstyled">
                {ids.map(id => <Todo key={id} todo={todos[id]} />)}
            </ul>
        );
    }
}

TodoList.propTypes = {
    ids: PropTypes.array.isRequired,
    todos: PropTypes.object.isRequired,
};

export default connectToStore(todos => {
    return todos.getTodos();
}, TodoStore)(TodoList);
