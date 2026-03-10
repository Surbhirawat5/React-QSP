import {useState} from 'react';

const ControlledForm2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  return (
    <div>
        <h1>Learn Controlled Forms</h1>
        <p>Manage multiple input with single state</p>

        <form>
          <input type="text" placeholder='Enter Username' value={formData.username}/>

          <br /><br />

          <input type="text" placeholder='Enter Email' value={formData.email}/>

          <br /><br />

          <input type="text" placeholder='Enter Password' value={formData.password}/>
        </form>
    </div>
  );
};

export default ControlledForm2;