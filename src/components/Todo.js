import React, { PropTypes, Component } from 'react';
import dispatcher from '../dispatcher';
import { deleteTodo, markAsDone, markNotDone } from '../actions/todos';

export default class Todo extends Component {
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
