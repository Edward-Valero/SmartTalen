import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../store/taskSlice';
import TaskList from './TaskList';

function renderWithRedux(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { tasks: taskReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

describe('TaskList', () => {
  it('renders task list', () => {
    renderWithRedux(<TaskList />, {
      preloadedState: {
        tasks: [{ id: 1, title: 'Test Task', completed: false }],
      },
    });
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('adds a new task', () => {
    renderWithRedux(<TaskList />);
    const input = screen.getByPlaceholderText('Enter new task');
    const addButton = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
  });
});