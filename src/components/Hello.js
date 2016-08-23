import React, { PropTypes, Component } from 'react';

export default class Hello extends Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

Hello.propTypes = {
    name: PropTypes.string
};
Hello.defaultProps = {
    name: 'World'
};
