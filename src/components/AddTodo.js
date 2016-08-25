import React, { PropTypes, Component } from 'react';
import dispatcher from '../dispatcher';
import { addTodo } from '../actions/todos';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            text: ''
        };
    }

    onInputChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    addTodo(event) {
        event.preventDefault();
        dispatcher.dispatch(addTodo(this.state.text));
        this.setState({
            text: ''
        });
    }

    render() {
        return (
            <form className="form" onSubmit={this.addTodo}>
                <div className="input-group">
                    <input type="text" className="form-control" value={this.state.text} onChange={this.onInputChange} />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-default">Add</button>
                    </span>
                </div>
            </form>
        );
    }
}
