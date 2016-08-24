import React, { PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';

// State is still used here, but the form is uncontrolled.
// Also: don't do this for real, it's an example. It sucks to deal
// with in real life.
export default class UncontrolledHello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'World'
        };
        this.submitForm = this.submitForm.bind(this);
        this.input = null;
    }

    submitForm(event) {
        event.preventDefault();
        // have to react out and find the actual DOM node to get the value
        const newName = ReactDOM.findDOMNode(this.input).value;
        this.setState({
            name: newName
        });
    }

    render() {
        return (
            <div className="uncontrolled-hello">
                <h1>Hello, {this.state.name}!</h1>
                <form className="form" onSubmit={this.submitForm}>
                    <div className="input-group">
                        <input type="text" className="form-control" ref={(i) => this.input = i} defaultValue={this.state.name} />
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-default">Change</button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}
