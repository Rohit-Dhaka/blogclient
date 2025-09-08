import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mycontext } from "../../context/context";
import { Back } from "../../common/icon";
import { jwtDecode  } from 'jwt-decode';


const Login = () => {
  const { login } = Mycontext();
  const [formdata, setFormdata] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showBar, setShowBar] = useState(false);
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
      } catch {
        console.error("Bad token");
      }
    }
  }, []);

 const handleSubmit = async (e) => {
  e.preventDefault();



  const res = await login(formdata);
  console.log("res" ,res)

  
    
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded = jwtDecode(token);          
          const userRole = decoded.role;          
          if (userRole === "admin"){        
            setMessage(res.message)
            setShowBar(true)
           setTimeout(() => {            
             navigate("/dashboard");            
           }, 2500);
          }
          else {                        
          

            setTimeout(() => {
                setMessage(res.message)
            setShowBar(true)
              
            }, 2000);
             setTimeout(() => {
              navigate("/all")
              
            }, 0);
          }
        } catch (err) {
          console.error("Invalid token");
        }
      }
      setFormdata({ email: "", password: "" });

};




  return (
    <section className="min-h-screen flex items-center relative">
  

      {message && (
        <div className="shadow-lg rounded-md py-2 px-4 absolute top-[4%] left-1/2 -translate-x-1/2 bg-white text-center text-black font-medium z-50 w-[300px]">
          {message}
          {showBar && (
            <div className="h-1 bg-blue-500 mt-2 rounded-full animate-progress" />
          )}
        </div>
      )}

      <div className="container flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white border border-[#808080] rounded-md max-w-[400px] w-full"
        >
          <h4 className="text-black text-[30px] font-outfit font-semibold text-center mb-4">
            Login
          </h4>

          <label htmlFor="email" className="text-[#808080] font-outfit text-[16px]">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formdata.email}
            onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
            placeholder="Enter your email"
            className="w-full text-[#808080] outline-none p-2 border-b border-[#808080] mb-5"
          />

          <label htmlFor="password" className="text-[#808080] font-outfit text-[16px]">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={formdata.password}
            onChange={(e) => setFormdata({ ...formdata, password: e.target.value })}
            placeholder="Enter your password"
            className="w-full text-[#808080] outline-none p-2 border-b border-[#808080] mb-5"
          />

          <input
            type="submit"
            value="Login"
            className="text-white bg-[#5044e5] rounded-md py-3 w-full cursor-pointer"
          />

          <h6 className="text-center text-gray-600 font-outfit mt-4">
            Don't have an account?{" "}
            <Link to="/Signup" className="text-[#5044e5] font-semibold">
              Signup
            </Link>
          </h6>
        </form>
      </div>
    </section>
  );
};

export default Login;
