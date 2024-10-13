import React, { useState } from 'react';

const taskItemStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  marginBottom: '15px',
  backgroundColor: '#f1f1f1',
  border: '1px solid #ddd',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  transition: 'background-color 0.3s ease',
};

const taskTextStyles = {
  fontSize: '18px',
  flexGrow: 1,
  paddingRight: '20px',
  color: '#2c3e50',
};

const completedTaskStyles = {
  ...taskTextStyles,
  textDecoration: 'line-through',
  color: '#95a5a6',
};

const buttonContainerStyles = {
  display: 'flex',
  gap: '10px',
};

const buttonStyles = {
  padding: '10px 15px',
  fontSize: '14px',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const editButtonStyles = {
  ...buttonStyles,
  backgroundColor: '#e67e22',
};

const deleteButtonStyles = {
  ...buttonStyles,
  backgroundColor: '#e74c3c',
};

function TaskItem({ task, updateTask, deleteTask, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskText, setNewTaskText] = useState(task.text);

  const handleUpdate = () => {
    updateTask(task.id, { text: newTaskText });
    setIsEditing(false);
  };

  return (
    <li
      style={{
        ...taskItemStyles,
        backgroundColor: task.completed ? '#d4efdf' : '#f1f1f1',
      }}
    >
      {isEditing ? (
        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            style={{ ...taskTextStyles, padding: '5px' }}
          />
          <button style={editButtonStyles} onClick={handleUpdate}>
            Save
          </button>
        </div>
      ) : (
        <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <span
            style={task.completed ? completedTaskStyles : taskTextStyles}
          >
            {task.text}
          </span>
        </div>
      )}

      <div style={buttonContainerStyles}>
        <button style={editButtonStyles} onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button style={deleteButtonStyles} onClick={() => deleteTask(task.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
