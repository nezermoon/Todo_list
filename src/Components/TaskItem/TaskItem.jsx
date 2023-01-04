import React from 'react';
import './TaskItem.scss';

function TaskItem({ taskItem, setTasks, tasks }) {
  function onClickTask() {
    setTasks(
      [
        ...tasks,
        (tasks.find((item) => item.id === taskItem.id).isDone =
          !taskItem.isDone),
      ].slice(0, -1)
    );
  }

  function deleteTask() {
    setTasks([...tasks.filter((item) => item.id !== taskItem.id)]);
  }

  return (
    <>
      {taskItem.isDone === false ? (
        <div className='tasks__task'>
          <div className='tasks__elipse' onClick={onClickTask}></div>
          <span className='tasks__text' onClick={onClickTask}>
            {taskItem.name}
          </span>
          <span className='tasks__cross' onClick={deleteTask}>
            &#10540;
          </span>
        </div>
      ) : (
        <div className='tasks__task completed-tasks__task'>
          <div
            className='tasks__elipse completed-tasks__elipse'
            onClick={onClickTask}
          ></div>
          <span
            className='tasks__text completed-tasks__text'
            onClick={onClickTask}
          >
            {taskItem.name}
          </span>
          <span className='tasks__cross' onClick={deleteTask}>
            &#10540;
          </span>
        </div>
      )}
    </>
  );
}

export default TaskItem;
