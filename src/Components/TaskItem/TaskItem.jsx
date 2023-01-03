import React from 'react';
import './TaskItem.scss';

function TaskItem({ task, setTasks, tasks }) {
  function onClickTask() {
    setTasks([
      ...tasks,
      (tasks.find((item) => item.name === task.name).isDone = !task.isDone),
    ]);
  }

  return (
    <>
      {task.isDone === false ? (
        <div className='tasks__task' onClick={onClickTask}>
          <div className='tasks__elipse'></div>
          <span className='tasks__text'>{task.name}</span>
        </div>
      ) : (
        <div
          className='tasks__task completed-tasks__task'
          onClick={onClickTask}
        >
          <div className='tasks__elipse completed-tasks__elipse'></div>
          <span className='tasks__text completed-tasks__text'>{task.name}</span>
        </div>
      )}
    </>
  );
}

export default TaskItem;
