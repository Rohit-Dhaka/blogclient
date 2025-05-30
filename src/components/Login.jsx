
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="min-h-screen  flex  items-center">
      <div className="container  flex justify-center">
        <form className="p-6 bg-white border border-[#808080] rounded-md max-w-[400px] w-full">
          <h4 className="text-black text-[30px] font-outfit font-semibold text-center mb-4">
            Login
          </h4>

       

          <label for="email" className="text-[#808080] font-outfit text-[16px]">
            Email
          </label>
          <input
            type="email"
            id="email"
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
