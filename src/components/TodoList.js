import React, { PropTypes, Component } from 'react';
import dispatcher from '../dispatcher';
import TodoStore from '../stores/todos';
import { deleteTodo, markAsDone, markNotDone } from '../actions/todos';

// displays a list of all todos.
export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = TodoStore.getTodos();
        this.unsubscribe = null;
    }

    componentWillMount() {
        // subscribe to the TodoStore for updates!
        this.unsubscribe = TodoStore.addListener(this.onStoreChange, this);
    }

    componentWillUnmount() {
        // unsubscribe on `unmount`
        if (this.unsubscribe) {
            this.unsubscribe();
            this.unsubscribe = null;
        }
    }

    onStoreChange(ids, todos) {
        this.setState({
            ids: ids,
            todos: todos
        });
    }

    render() {
        let ids = this.state.ids;
        let todos = this.state.todos;

        return (
            <ul className="list-unstyled">
                {ids.map(id => <Todo key={id} todo={todos[id]} />)}
            </ul>
        );
    }
}

class Todo extends Component {
    constructor(props) {
        super(props);
        this.onDoneChange = this.onDoneChange.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onDoneChange(event) {
        let todo = this.props.todo;
        if (todo.done) {
            dispatcher.dispatch(markNotDone(todo.id));
        } else {
            dispatcher.dispatch(markAsDone(todo.id));
        }
    }

    onRemove(event) {
        event.preventDefault();
        dispatcher.dispatch(deleteTodo(this.props.todo.id));
    }

    render() {
        let todo = this.props.todo;
        return (
            <li className="todo" id={`todo-${todo.id}`}>
                <input type="checkbox" onChange={this.onDoneChange} checked={todo.done} style={{marginRight: '5px'}} />
                {todo.text}
                <a href="#" onClick={this.onRemove} style={{color: 'red', display: 'inline-block', marginLeft: '5px'}}>
                    <i className="glyphicon glyphicon-remove"></i>
                </a>
            </li>
        );
    }
}
Todo.propTypes = {
    todo: PropTypes.object.isRequired
};
