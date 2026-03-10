import { useState } from "react";

const ControlledForm2 = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    //  console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);

    //! to get existing user from local storage, if user are present Parse it else initialize with empty array []
    let users = JSON.parse(localStorage.getItem("users")) || []


    //! Create user data with id 
    let userData = {...formData, id: Math.random()};

    //! add userData to user Array
    users.push(userData);

    //! set users array to local storage after converting into json
    localStorage.setItem("users",JSON.stringify(users));

    // clear input fields
    setFormData({username: "",email: "", password: ""})
  };

  return (
    <div>
      <h1>Learn Controlled Forms</h1>
      <p>Manage multiple input with single state</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <br />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm2;
