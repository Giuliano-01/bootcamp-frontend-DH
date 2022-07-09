import React, { useState } from 'react';
import { AddTask } from './AddTask';
import { Task } from './Task';
import { generateId, setAppData, getAppTitle, getAppVersion, getAppLanguage, getDemoTasks} from './utils';
import './App.css';

export default () => {
  
  const app = {
    title: "🙀 Tareas Pendientes"
  };

  const [tasks, setTasks] = useState(getDemoTasks());

  const addTask = (task) => {
    setTasks(tasks => [task,...tasks])
  }

  const removeTask = (taskIdToRemove) => {
    setTasks(tasks => 
      tasks.filter(task => task.id !== taskIdToRemove))
  }

  setAppData(); // should this call be async?
  return (

    <main>
    
      <header>
        <h1>{getAppTitle()}</h1>
        <small>VERSION {getAppVersion()} ({getAppLanguage()})</small>
      </header>
      <AddTask addTask={addTask} />
      <ul className="tasks">
        {
          tasks.map((task) => (
            <Task 
              removeTask={removeTask} 
              key={task.id} 
              task={task} />
          ))
        }
      </ul>
      { tasks.length == 0 && <div id="emptyListPlaceholder">(∩_∩)</div> }
      
    </main>
  
  );
  
}
