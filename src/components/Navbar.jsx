import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../assets/svg/logo.svg";
import Arrow from "../assets/svg/arrow.svg";
import { Logout } from "../common/icon";
import { Mycontext } from "../context/context";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
   const { logout, role } = Mycontext();


  // ✅ Check login token on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLogin(true);
  }, []);

  const handleLogout = () => {
    // localStorage.removeItem("token");
    // setIsLogin(false);
    // navigate("/login");

      logout();
    // optionally redirect to login
    window.location.href = "/login"; 
  };

  return (
    <nav>
      <div className="container">
        <div className="flex justify-between py-[22px] items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="max-sm:w-[60%]" />
          </Link>

          {role ? (
            <button
              onClick={handleLogout}
              className="flex items-center text-white gap-3 bg-[#5044E5] font-outfit py-2.5 px-6 rounded-full"
            >
              Log Out <Logout />
            </button>
          ) : (
            <Link
              to="/signup"
              className="bg-[#5044E5] py-2.5 px-8 text-white flex gap-2 rounded-[33px]"
            >
              Login <img src={Arrow} alt="Arrow" />
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
