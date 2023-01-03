import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './Tasks.scss';

function Tasks({ array, setTasks, tasks }) {
  return (
    <>
      <div className='tasks'>
        {array.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
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
