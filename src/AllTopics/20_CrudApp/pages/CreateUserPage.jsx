import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


const CreateUserPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const handleCreateUser = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      //! USING AXIOS
      let resp = await axios.post("http://localhost:9000/users", formData);
      console.log(resp);
      toast.success("User Created");
      navigate("/all-users");
    } catch (error) {
      console.log(error);
      toast.error("Unable to create");
    }
  };

  return (
    <section className="pt-20 px-4 min-h-screen bg-gray-100">
      <header>
        <h1 className="text-4xl font-bold text-center items-center m-5">Create User Form</h1>
      </header>

      <article className="border-2 rounded-2xl p-4 flex flex-col items-center justify-center min-h-4 w-95">
        <form>
          <div>
            <label htmlFor="username" className="font-bold rounded">Username : </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter Username"
              value={formData.username}
              onChange={handleChange}
              className="ps-2 pe-2 m-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-bold rounded">Email : </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="ps-2 pe-2 m-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-bold rounded">Password : </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              className="ps-2 pe-2 m-2 border rounded"
            />
          </div>
          <div className="text-center">
            <button type="button" onClick={handleCreateUser} className="ps-3 pe-3 mx-1 my-1 border rounded font-bold">
              Create
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreateUserPage;