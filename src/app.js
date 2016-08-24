import React from 'react'; // necessary for the jsx transform to work
import ReactDOM from 'react-dom';
import App from './components/App';
import Hello from './components/Hello';

ReactDOM.render(
    <App>
        <Hello name="Chris" />
    </App>,
    document.getElementById('app')
);
