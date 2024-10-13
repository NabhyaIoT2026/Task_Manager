import React from 'react';
import TaskItem from './TaskItem';

const listStyles = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
};

function TaskList({ tasks, updateTask, deleteTask, toggleComplete }) {
  return (
    <ul style={listStyles}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
