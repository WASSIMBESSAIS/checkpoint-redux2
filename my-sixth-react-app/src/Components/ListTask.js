import React from 'react';
import Task from './Task';

const ListTask = ({ tasks, filter, onToggle, onEdit }) => {
  const filteredTasks = tasks.filter(
    (task) => filter === 'ALL' || (filter === 'DONE' && task.isDone) || (filter === 'NOT_DONE' && !task.isDone)
  );

  return (
    <div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} onToggle={onToggle} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ListTask;
