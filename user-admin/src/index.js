import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const UserAdminApp = () => <App />;

export { UserAdminApp };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);