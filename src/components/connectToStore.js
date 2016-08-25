/**
 * A higher order component that connects stores to props.
 */

import React, { Component } from 'react';
import invariant from 'invariant';

function displayNameFor(WrappedComponent) {
    return WrappedComponent.name || WrappedComponent.displayName || 'Component';
}

export default function connectToStore(mapStoresToProps, ...stores) {
    invariant(typeof mapStoresToProps === 'function', 'mapStoresToProps must be a function');

    return function (WrappedComponent) {
        class ConnectToStore extends Component {

            constructor(props, context) {
                super(props, context);
                this.unsubs = [];
                this.state = {
                    props: mapStoresToProps(...stores)
                };
            }

            componentWillMount() {
                this.unsubs = stores.map(store => store.addListener(this.onStoreChange, this));
            }

            componentWillUnmount() {
                this.unsubs.forEach(us => us());
                this.unsubs = [];
            }

            onStoreChange() {
                this.setState({
                    props: mapStoresToProps(...stores)
                });
            }

            render() {
                return React.createElement(WrappedComponent, Object.assign(
                    {},
                    this.state.props,
                    this.props
                ));
            }
        }

        ConnectToStore.displayName = `ConnectToStore(${displayNameFor(WrappedComponent)})`;
        ConnectToStore.WrappedComponent = WrappedComponent;

        return ConnectToStore;
    };
}
