import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mycontext } from "../context/context";
import { Back } from "../common/icon";

const Signup = () => {
  const { signup } = Mycontext();

  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [message, setMessage] = useState('')
   const [showBar, setShowBar] = useState(false);
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signup(formdata);
    setMessage(res.message)
    setShowBar(true);
     
    

    
    
    
    setTimeout(() => {
      setMessage("");
      setShowBar(false);
      setFormdata({ name: "", email: "", password: "", role: "" });
      navigate("/login", { state: { message: res.message } }); 
    }, 1000);
  };

  return (
    <section className="min-h-screen  flex  items-center relative">
       <div className=" absolute sm:top-12 top-4    sm:left-32 left-6">
              <Link to='/'><Back/></Link>
              
            </div>
       {message && (
        <div className="shadow-lg rounded-md py-2 px-4 absolute top-[4%] translate-x-[-50%] left-[50%] bg-white text-center text-black font-medium z-50 w-[300px]">
          <p>{message}</p>
          {showBar && (
            <div className="h-1 bg-blue-500 mt-2 rounded-full animate-progress" />
          )}
        </div>
      )}

      <div className="container  flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white border border-[#808080] rounded-md max-w-[400px] w-full"
        >
          <h4 className="text-black text-[30px] font-outfit font-semibold text-center mb-4">
            Sign Up
          </h4>

          <label for="name" className="text-[#808080] font-outfit text-[16px]">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formdata.name}
            onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
            placeholder="Enter your name"
            className="w-full text-[#808080] outline-none p-2 border-b border-[#808080] mb-5"
          />

          <label for="email" className="text-[#808080] font-outfit text-[16px]">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formdata.email}
            onChange={(e) =>
              setFormdata({ ...formdata, email: e.target.value })
            }
            placeholder="Enter your email"
            className="w-full text-[#808080] outline-none p-2 border-b border-[#808080] mb-5"
          />

          <label
            for="password"
            className="text-[#808080] font-outfit text-[16px]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formdata.password}
            onChange={(e) =>
              setFormdata({ ...formdata, password: e.target.value })
            }
            placeholder="Enter your password"
            className="w-full text-[#808080] outline-none p-2 border-b border-[#808080] mb-5"
          />

          <label for="role" className="text-[#808080] font-outfit text-[16px]">
            Choose your role:
          </label>
          <select
            id="role"
            value={formdata.role}
            onChange={(e) => setFormdata({ ...formdata, role: e.target.value })}
            className="w-full text-[#808080] outline-none p-2 border-b border-[#808080] mb-5 inline-block"
          >
            <option value="">--Select--</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>

          <input
            type="submit"
            value="Sign up"
            className="text-white bg-[#5044e5] rounded-md py-3 w-full cursor-pointer"
          />
          <h6 className="text-center text-gray-600 font-outfit mt-4">
            Already have an account?
            <Link to="/login" className="tex t-[#5044e5] font-semibold ">
              Login
            </Link>
          </h6>
        </form>
      </div>
    </section>
  );
};

export default Signup;
