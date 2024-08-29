import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, updateTask } from '../store/taskSlice';
import { CustomButton } from 'shared-components';

function TaskList() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const newTask = { id: Date.now(), title: newTaskTitle, completed: false };
      dispatch(addTask(newTask));
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
      <CustomButton text="Add Task" onClick={handleAddTask} color="#28a745" />
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => dispatch(updateTask({ ...task, completed: !task.completed }))}
            />
            {task.title}
            <CustomButton text="Remove" onClick={() => dispatch(removeTask(task.id))} color="#dc3545" size="small" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;