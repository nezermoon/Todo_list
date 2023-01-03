import React, { useState } from 'react';
import './App.css';
import NewTaskBar from './Components/NewTaskBar/NewTaskBar';
import Tasks from './Components/Tasks/Tasks';
import CompletedTasksTitle from './Components/CompletedTasks/CompletedTasksTitle';

function App() {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const completedTasksArray = tasks.filter((task) => task.isDone === true);
  const inCompletedTasksArray = tasks.filter((task) => task.isDone === false);

  function onInputChange(e) {
    setNewTask(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setTasks([
        ...tasks,
        { name: newTask, isDone: false, id: new Date().valueOf() },
      ]);
      setNewTask('');
    }
  }

  return (
    <div className='App'>
      <NewTaskBar
        newTask={newTask}
        onInputChange={onInputChange}
        handleKeyDown={handleKeyDown}
      ></NewTaskBar>
      <Tasks
        tasks={tasks}
        array={inCompletedTasksArray}
        setTasks={setTasks}
      ></Tasks>
      <CompletedTasksTitle></CompletedTasksTitle>
      <Tasks array={completedTasksArray}></Tasks>
    </div>
  );
}

export default App;
