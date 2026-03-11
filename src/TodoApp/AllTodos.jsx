import { useContext } from "react";
import { todoContext } from "./TodoContextProvider";

const AllTodos = () => {
  let { todos } = useContext(todoContext);
  console.log(todos);

  return (
    <div>
      <h1>All Todos</h1>
    </div>
  );
};

export default AllTodos;
