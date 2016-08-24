import React from 'react'; // necessary for the jsx transform to work
import ReactDOM from 'react-dom';
import App from './components/App';
import Hello from './components/Hello';
import StatefulHello from './components/StatefulHello';
import UncontrolledHello from './components/UncontrolledHello';

ReactDOM.render(
    <App>
        <Hello name="Chris" />
        <StatefulHello />
        <UncontrolledHello />
    </App>,
    document.getElementById('app')
);
