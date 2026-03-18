import React, { useReducer } from 'react'

let initialState = 0;
const reducerFunc = (prevState, action) => {
    switch (action) {
        case "incre":
            return prevState + 1;
        case "decre":
            return prevState - 1;  
        case "reset":
            return 0;      
    }
};

const ReducerCounter = () => {

    const [count, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <div>
        <h1 className='text-center text-4xl font-bold'>Learn useReducer Hook</h1>

        <p className='text-center'>useReducer is a state management hook used for complex state management</p>

        <h1 className='text-2xl font-semibold text-center'>Counter : {count}</h1>

        <button className='p-2 bg-green-400' onClick={() => dispatch("incre")}>increment</button>
        <button className='p-2 bg-amber-300' onClick={() => dispatch("decre")}>decrement</button>
        <button className='p-2 bg-green-400' onClick={() => dispatch("reset")}>reset</button>
    </div>

  );
};

export default ReducerCounter;