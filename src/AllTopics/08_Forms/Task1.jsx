import {useState} from 'react'

const Task1 = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [message, setMessage] = useState("");


    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    };

    const handleLastName = (e) => {
        setLastName(e.target.value)
    };

    const handleDob = (e) => {
        setDob(e.target.value)
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
    };

    const handleMobileNo = (e) => {
        setMobileNo(e.target.value)
    };


    const handleForm = (e) => {
        e.preventDefault();
        console.log("form submitted");

        let data = {
            fullname: {firstname, lastname},
            dob: {dob},
            email: {email},
            mobileNo: {mobileNo}
        };
        console.log(data);

        setMessage(`Welcome ${firstname} ${lastname} and your DOB is ${dob} and Email is ${email} and Mobile No is ${mobileNo}`);

        // Clearing input fields
        setFirstName("");
        setLastName("");
        setDob("");
        setEmail("");
        setMobileNo("");
    };

    const handleResetBtn = (e) => {
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setDob("");
        setEmail("");
        setMobileNo("");
    }



  return (
    <div>
        <h1>HTML Form</h1>

        <form onSubmit={handleForm}>
            <label htmlFor="firstname">First Name : </label>
            <input type="text" id='firstname' value={firstname} onChange={handleFirstName}/>

            <br /><br />

            <label htmlFor="lastname">Last Name : </label>
            <input type="text" id='lastname' value={lastname} onChange={handleLastName}/>

            <br /><br />

            <label htmlFor="dob">Date of Birth : </label>
            <input type="date" id='dob' value={dob} onChange={handleDob}/>

            <br /><br />

            <label htmlFor="email">Email id : </label>
            <input type="email" id='email' value={email} onChange={handleEmail}/>

            <br /><br />

            <label htmlFor="mobile">Mobile Number : </label>
            <input type="mobileNo" id='mobile' value={mobileNo} onChange={handleMobileNo}/>

            <br /><br />

            <button type='submit'>Submit</button>
            <button type='reset' onClick={handleResetBtn}>Reset</button>
            
        </form>

        {message && <h2>{message}</h2>}
    </div>
  );
};

export default Task1;