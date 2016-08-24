import React, { PropTypes, Component } from 'react';
import Navbar from './Navbar';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
