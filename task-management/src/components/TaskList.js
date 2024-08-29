import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, updateTask } from '../store/taskSlice';

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      dispatch(addTask({ id: Date.now(), title: newTaskTitle, completed: false }));
      setNewTaskTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(updateTask({ ...task, completed: !task.completed }))}
            />
            {task.title}
            <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;