import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, toggleTask, setFilter } from './Actions/Actions';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import "./App.css"

const App = () => {
  const tasks = useSelector((state) => state.reducer.tasks);
  const filter = useSelector((state) => state.reducer.filter);
  const dispatch = useDispatch();

  const handleAdd = (task) => dispatch(addTask(task));
  const handleEdit = (taskId) => {
    const updatedTask = prompt('Enter the updated task:');
    if (updatedTask !== null) {
      dispatch(editTask(taskId, { id: taskId, description: updatedTask, isDone: false }));
    }
  };
  const handleToggle = (taskId) => dispatch(toggleTask(taskId));
  const handleFilter = (newFilter) => dispatch(setFilter(newFilter));

  return (
    <div>
      <AddTask onAdd={handleAdd} />
      <ListTask tasks={tasks} filter={filter} onToggle={handleToggle} onEdit={handleEdit} />
      <div>
        <button onClick={() => handleFilter('ALL')}>All</button>
        <button onClick={() => handleFilter('DONE')}>Done</button>
        <button onClick={() => handleFilter('NOT_DONE')}>Not Done</button>
      </div>
    </div>
  );
};

export default App;
