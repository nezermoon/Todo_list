import React from 'react';
import './NewTaskBar.scss';

function NewTaskBar({ newTask, onInputChange, addTask }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter') addTask();
  }

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
      <span className='new-task-bar__btn' onClick={addTask}>
        &#10596;
      </span>
    </>
  );
}

export default NewTaskBar;
