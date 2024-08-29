import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const TaskManagementApp = () => <App />;

export { TaskManagementApp };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);