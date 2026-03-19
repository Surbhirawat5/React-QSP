import React, { useState, useMemo, useCallback } from 'react'
import MemoChild from './MemoChild';

const MemoExample = () => {

    const [add, setAdd] = useState(0);
    const [minus, setMinus] = useState(100);

    // function multiply(){
    //     console.log("I am multiply");
    //     return add * 5;
    // }

    //! it returns Memoized value
    let multiply = useMemo(() => {
        console.log("I am multiply");
        return add * 5;
    }, [add]);

     //! it returns Memoized function
    const display = useCallback(() => {
        console.log("I am display");
    }, [minus]);

  return (
    <div className='text-center p-5'>
        <h1 className='text-4xl font-bold'>Learn useMemo and useCallback</h1> <br />

        <article className='my-2'>
            Addition : {add} 
            <button className='ms-5 bg-gray-300 px-4 rounded' onClick={() => setAdd((prev) => prev + 1)}>increment</button>
        </article>

        <br />

        <article className='my-2'>
            Substraction : {minus}
            
            <button className='ms-5 bg-gray-300 px-4 rounded' onClick={() => setMinus((prev) => prev - 1)}>decrement</button>
        </article>
        <br />
        
        <article className='my-2'>
            Multiplication : {multiply}
        </article>
        
        <hr />

        <MemoChild display={display} />

    </div>
  );
};

export default MemoExample;