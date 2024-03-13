import React from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem.js";
import NewTodoForm from "./NewTodoForm.js";

const TodoList = ({ todo = [{ "text" : "Hello"}] }) => (
    <div className="list-wrapper">
        <NewTodoForm/>
        {todo.map(todo => <TodoListItem todo={todo}/>)}
    </div>
);

export default TodoList;