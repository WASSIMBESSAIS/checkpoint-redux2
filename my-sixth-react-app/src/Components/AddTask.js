import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim()) {
      onAdd({ id: Date.now(), description: newTask, isDone: false });
      setNewTask('');
    }
  };

  return (
    <div>
      <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTask;
