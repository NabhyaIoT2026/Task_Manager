import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

const appStyles = {
  maxWidth: '700px',
  margin: '50px auto',
  padding: '30px',
  backgroundColor: '#fefefe',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '15px',
  textAlign: 'center',
  fontFamily: "'Roboto', sans-serif",
  transition: 'box-shadow 0.3s ease',
};

const headerStyles = {
  color: '#2c3e50',
  fontSize: '42px',
  marginBottom: '40px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
};

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), ...task, completed: false }]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={appStyles}>
      <h1 style={headerStyles}>Task Tracker</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;
