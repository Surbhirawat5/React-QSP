import { useContext } from "react";
import { todoContext } from "./TodoContextProvider";

const CreateTodo = () => {
  let { newTodo, setNewTodo, addTodo } = useContext(todoContext);

  return (
    <div>
      <h1>Create Todos</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          name="todo"
          id="todo"
          required
          placeholder="Enter Todo.."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default CreateTodo;
