import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mycontext } from "../context/context";
import { Back } from "../common/icon";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const { login } = Mycontext();
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showBar, setShowBar] = useState(false);
  const navigate = useNavigate();


   const [role, setRole]   = useState(null);   // null = loading
    
  
   
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode(token);
          setRole(decoded.role);               // "admin" | "user"
        } catch {
          console.error("Bad token");          // stay null → treat as guest
        }
      }
      
    }, []);
  
    



    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formdata.email || !formdata.password) {
      setMessage("Please enter both email and password");
      setShowBar(true);

      setTimeout(() => {
        setMessage("");
        setShowBar(false);
      }, 1500);

      return; // ⛔ Prevent login and navigation
    }

    const res = await login(formdata);
    setMessage(res.message);

    // Optional: only navigate if login is successful
    if (res.success) {
      setShowBar(true);
      
      setTimeout(() => {
        setMessage("");
        setShowBar(false);
        if(role === 'admin'){

          navigate("/", { state: { message: res.message } });
        }else{
          navigate("/all", { state: { message: res.message } });

        }      
        setFormdata({ email: "", password: "" });
      }, 1000);
    } else {
      // Show error and don't navigate
      setShowBar(true);
      setTimeout(() => {
        setMessage("");
        setShowBar(false);
      }, 1500);
    }
  };

  
  return (
    <section className="min-h-screen  flex  items-center relative">
      <div className=" absolute sm:top-28  sm:left-32 top-6 left-4">
        <Link to='/'><Back/></Link>
      </div>
      {message && (
        <div className="shadow-lg rounded-md py-2 px-4 absolute top-[4%] translate-x-[-50%] left-[50%] bg-white text-center text-black font-medium z-50 w-[300px]">
          {message}
          <div>
            {showBar && (
              <div className="h-1 bg-blue-500 mt-2 rounded-full animate-progress" />
            )}
          </div>
        </div>
      )}
      <div className="container  flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white border border-[#808080] rounded-md max-w-[400px] w-full"
        >
          <h4 className="text-black text-[30px] font-outfit font-semibold text-center mb-4">
            Login
          </h4>

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
            value={formdata.password}
            onChange={(e) =>
              setFormdata({ ...formdata, password: e.target.value })
            }
            id="password"
            placeholder="Enter your password"
            className="w-full text-[#808080] outline-none p-2 border-b border-[#808080] mb-5"
          />

          <input
            type="submit"
            value="Login"
            className="text-white bg-[#5044e5] rounded-md py-3 w-full cursor-pointer"
          />
          <h6 className="text-center text-gray-600 font-outfit mt-4">
            Don't have an account?
            <Link to="/Signup" className="tex t-[#5044e5] font-semibold ">
              Signup
            </Link>
          </h6>
        </form>
      </div>
    </section>
  );
};

export default Login;
