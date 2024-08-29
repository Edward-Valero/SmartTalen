import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './store/taskSlice';
import App from './App';

test('renders Task Management heading', () => {
  const store = configureStore({
    reducer: {
      tasks: taskReducer,
    },
  });

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headingElement = screen.getByText(/Task Management/i);
  expect(headingElement).toBeInTheDocument();
});