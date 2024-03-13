import React, { useState } from "react";

import "./NewTodoForm.css";

const NewTodoForm = () => {
  const [inputValue, setInputValue] = useState();
  return (
    <div className="new-todo-form">
      <input
        value={inputValue}
        placeholder="Enter your new todo item"
        onChange={() => setInputValue(e.target.value)}
        type="text"
        className="new-todo-input"
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
