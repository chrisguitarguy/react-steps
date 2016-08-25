import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-inverse navbar-static-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">React Steps</Link>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/stateful-hello">Stateful Hello</Link></li>
                        <li><Link to="/uncontrolled-hello">Uncontrolled Hello</Link></li>
                        <li><Link to="/todos">Todos</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}
