import { createContext, useState } from "react";

export const todoContext = createContext();

const TodoContextProvider = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setAllTodos] = useState([{ id: 1, text: "Default Todo" }]);

  const addTodo = (e) => {
    e.preventDefault();
    console.log(newTodo);

    if (newTodo.trim() === "") {
      alert("No Todo Available");
      setNewTodo("");
      return;
    }

    let todo = {
      id: Date.now(),
      text: newTodo.trim(),
    };
    console.log(todo);

    //used for previous value
    setAllTodos((prev) => [...prev, todo]);

    //clear input field
    setNewTodo("");
  };

  const removeTodo = () => {};

  return (
    <todoContext.Provider
      value={{ newTodo, setNewTodo, todos, setAllTodos, addTodo, removeTodo }}
    >
      {props.children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
