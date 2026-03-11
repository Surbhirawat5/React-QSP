import React from 'react'
import CreateTodo from './CreateTodo';
import AllTodos from './AllTodos';

const TodoWrapper = () => {
  return (
    <div>
        <h1>TodoWrapper</h1>
        <CreateTodo/>
        <AllTodos/>

    </div>

    
  )
}

export default TodoWrapper;