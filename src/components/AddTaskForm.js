import React, { useState } from 'react';

const formStyles = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '30px',
  gap: '10px',
};

const inputStyles = {
  width: '80%',
  padding: '12px',
  fontSize: '16px',
  border: '2px solid #ddd',
  borderRadius: '25px',
  outline: 'none',
  transition: 'border-color 0.3s ease',
};

const inputFocusStyles = {
  ...inputStyles,
  borderColor: '#4a90e2',
};

const buttonStyles = {
  padding: '12px 25px',
  backgroundColor: '#27ae60',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
};

const buttonHoverStyles = {
  ...buttonStyles,
  backgroundColor: '#1e8449',
};

function AddTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask({ text: taskText });
      setTaskText('');
    }
  };

  return (
    <form style={formStyles} onSubmit={handleSubmit}>
      <input
        style={inputFocus ? inputFocusStyles : inputStyles}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button
        style={buttonHover ? buttonHoverStyles : buttonStyles}
        onMouseEnter={() => setButtonHover(true)}
        onMouseLeave={() => setButtonHover(false)}
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
}

export default AddTaskForm;
