import React, { useState } from 'react';
import { createTask } from '../services/taskService';

const TaskForm = () => {
  const [task, setTask] = useState({ title: '', description: '', dueDate: '' });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(task);
    setTask({ title: '', description: '', dueDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Title" required />
      <input type="text" name="description" value={task.description} onChange={handleChange} placeholder="Description" required />
      <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
