import React from 'react';

export function Task(props) {
  const { task, removeTask } = props;

  const handleRemoveClick = () => {
    removeTask(task.id);
  };

  return (
    <li className="task">
      <div className="text">{task.id}. { task.text }</div>
      <div className="buttons">
        <button
          aria-label="Eliminar Tarea"
          className="action-btn remove-button"
          onClick={handleRemoveClick}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
