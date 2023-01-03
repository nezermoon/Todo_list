import React from 'react';
import './NewTaskBar.scss';

function NewTaskBar({ newTask, onInputChange, handleKeyDown }) {
  return (
    <>
      <input
        className='new-task-bar'
        type='text'
        placeholder='Add new task'
        onChange={onInputChange}
        onKeyDown={handleKeyDown}
        value={newTask}
      />
    </>
  );
}

export default NewTaskBar;
