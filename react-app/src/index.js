import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App txt="This is the prop txt" cat={5}/>,
  document.getElementById('root')
);
