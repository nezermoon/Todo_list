import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './Tasks.scss';

function Tasks({ array, setTasks, tasks }) {
  return (
    <>
      <div className='tasks'>
        {array.map((taskItem) => {
          return (
            <TaskItem
              key={taskItem.id}
              taskItem={taskItem}
              setTasks={setTasks}
              tasks={tasks}
            ></TaskItem>
          );
        })}
      </div>
    </>
  );
}

export default Tasks;
