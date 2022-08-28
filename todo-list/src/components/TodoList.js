import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  const todoList = todos.map((todo) => (
    <TodoItem key={todo.id} done={todo.done}>
      {todo.text}
    </TodoItem>
  ));

  return <div>{todoList}</div>;
}

export default TodoList;
