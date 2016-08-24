import React from 'react'; // necessary for the jsx transform to work
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import App from './components/App';
import Hello from './components/Hello';
import StatefulHello from './components/StatefulHello';
import UncontrolledHello from './components/UncontrolledHello';

function createRouter(history) {
    return (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Hello} />
                <Route path="stateful-hello" component={StatefulHello} />
                <Route path="uncontrolled-hello" component={UncontrolledHello} />
            </Route>
        </Router>
    );
}

ReactDOM.render(createRouter(browserHistory), document.getElementById('app'));
