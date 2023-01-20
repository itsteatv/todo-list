import { useState } from 'react';
import './App.css';
import DarkMode from "./components/DarkMode/DarkMode"
import Header from "./components/Header/Header";
import TaskInput from "./components/Tasks/TaskInput/TaskInput";
import TaskList from "./components/Tasks/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { task: "Follow my github", id: "task1"},
    { task: "Star this repository", id: "task2"},
  ])
  // Add task functionality
  const taskHandler = function(enteredValueInput) {
    setTasks(prevTasks => {
      const newTasks = [...prevTasks];
      newTasks.unshift({ task: enteredValueInput, id: Math.random().toString() });
      return newTasks;      
    })
  };

  // Delete task functionality
  const deleteTaskHandler = function(Tasks) {
    setTasks(prevTasks => {
      const newTasks = prevTasks.filter(task => task.id !== Tasks);
      return newTasks;
    })
  }

  return (
    <div className="App">
      <Header />
      <DarkMode />
        <section className="form-container">
          <TaskInput onAddTasks={taskHandler} />
        </section>
        <div className="no-task-container">
        {tasks.length > 0 ? <TaskList tasks={tasks} onDeleteTask={deleteTaskHandler} /> : <div className='no-task' style={{textAlign: "center", fontWeight: "bold", marginTop: "3rem"}}>No Task, You Wanna Add Some ?</div>}
        </div>
    </div>
  )
}

export default App
