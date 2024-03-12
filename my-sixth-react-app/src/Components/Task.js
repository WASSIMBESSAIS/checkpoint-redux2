import React from 'react';

const Task = ({ task, onToggle, onEdit }) => (
  <div>
    <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
      {task.description}
    </span>
    <button onClick={() => onToggle(task.id)}>Toggle</button>
    <button onClick={() => onEdit(task.id)}>Edit</button>
  </div>
);

export default Task;
