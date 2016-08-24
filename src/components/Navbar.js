import React, { PropTypes, Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">React Steps</a>
                    </div>
                </div>
            </div>
        );
    }
}
