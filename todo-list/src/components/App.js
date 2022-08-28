import React, { useState } from "react";
import PageTemplate from "./PageTemplate";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

var id = 2;

function App() {
  const [state, setState] = useState({
    input: "",
    todos: [
      { id: 0, text: "리액트 공부하기", done: true },
      { id: 1, text: "컴포넌트 스타일링", done: false },
    ],
  });

  const getId = () => {
    return ++id;
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setState({
      ...state,
      input: value,
    });
  };

  const handlInsert = () => {
    const { todos, input } = state;
    const newTodo = {
      text: input,
      done: false,
      id: getId(),
    };

    setState({
      todos: [...todos, newTodo],
      input: "",
    });
  };

  const handleToggle = (id) => {
    const { todos } = state;
    const index = todos.findIndex((todo) => todo.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done,
    };

    setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length),
      ],
    });
  };

  return (
    <PageTemplate>
      <TodoInput
        onChange={handleChange}
        onInsert={handlInsert}
        value={state.input}
      ></TodoInput>
      <TodoList todos={state.todos} onToggle={handleToggle}></TodoList>
    </PageTemplate>
  );
}

export default App;
