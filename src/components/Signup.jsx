import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="min-h-screen  flex  items-center">
      <div className="container  flex justify-center">
        <form className="p-6 bg-white border border-[#808080] rounded-md max-w-[400px] w-full">
          <h4 className="text-black text-[30px] font-outfit font-semibold text-center mb-4">
            Sign Up
          </h4>

          <label for="name" className="text-[#808080] font-outfit text-[16px]">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full text-[#808080] outline-none p-2 border-b border-[#808080] mb-5"
          />

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

          <label for="role" className="text-[#808080] font-outfit text-[16px]">
            Choose your role:
          </label>
          <select
            id="role"
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
