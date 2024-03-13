import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./action";

import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePresseed }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        value={inputValue}
        placeholder="Enter your new todo item"
        onChange={() => setInputValue(e.target.value)}
        type="text"
        className="new-todo-input"
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicate = todos.some((todo) => todo.text === inputValue);
          if (!isDuplicate) {
            onCreatePresseed(inputValue);
            setInputValue("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressd: (text) => dispatch(createTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
