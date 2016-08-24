import React, { PropTypes, Component } from 'react';

export default class StatefulHello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'World'
        };
        this.onFormChange = this.onFormChange.bind(this);
    }

    onFormChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div className="stateful-hello">
                <h1>Hello, {this.state.name}!</h1>
                <input type="text" className="form-control" value={this.state.name} onChange={this.onFormChange} />
            </div>
        );
    }
}
