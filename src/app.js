import React from 'react'; // necessary for the jsx transform to work
import ReactDOM from 'react-dom';
import Hello from './components/Hello';

ReactDOM.render(<Hello name="Chris" />, document.getElementById('app'));
