import React, { useRef } from 'react'

const UncontrolledForm = () => {
    // console.log(useRef("")); // current : undefine
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        // console.log(emailRef.current.value);
        // console.log(passwordRef.current.value);

        let user = {
            email : emailRef.current.value,
            password : passwordRef.current.value
        };
        console.log(user);
        
    };


     
  return (
    <div>
        <h1 className='text-center text-5xl'>UncontrolledForm</h1>
        <br />

        <form className='flex flex-col items-center p-5' onSubmit={handleSubmit}>

            <input type="text" placeholder='Enter Email'className='border'ref={emailRef}/>
            <br />
            <input type="text" placeholder='Enter Password' className='border'ref={passwordRef}/>
            <br />

            <button className='bg-violet-300 py-1 px-2'>Submit</button>
        </form>
    </div>
  );
};

export default UncontrolledForm;