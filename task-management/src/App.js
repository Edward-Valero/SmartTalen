import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TaskList from './components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Management</h1>
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;