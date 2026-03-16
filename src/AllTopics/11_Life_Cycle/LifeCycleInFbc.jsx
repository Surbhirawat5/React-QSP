import {useEffect, useRef, useState} from 'react'

const LifeCycleInFbc = () => {

    const [count, setCount] = useState(0);
    const initialRender = useRef(true);    // {current : true}

    useEffect(() => {
        console.log("Component Mounted");
        let id = setInterval(()=>{
            console.log("API CALL");
            }, 1500);

        return () => {
            console.log("Component Unmounted 👋");
            clearInterval(id)
        };
    }, []);

    useEffect (() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }

        console.log("Component updated");   
    }, [count]);
    

  return (
    <div className='p-5'>
        <h1 className='text-center text-4xl'>
            Learn LifeCycle in Function Component {count}
        </h1>

        <button onClick={() => setCount((prev) => prev + 1)}  className='p-2 border-3'>increment</button>
    </div>
  );
};

export default LifeCycleInFbc;