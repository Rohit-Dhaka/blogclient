import { Navigate, Route, Routes  } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useState, useEffect } from "react";


import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import AdminBoard from "./components/AdminBoard";
import Addblogs from "./components/Addblogs";

import Comments from "./components/Comments";
import Dashboard from "./components/Dashboard";
import HomePage from "./pages/HomePage";
import Allblog from "./components/Allblog";
import Bloglistadmin from "./components/Bloglistadmin";
import Blogcontent from "./components/Blogcontent";
import Category from "./components/Category";
import BlogContentPage from "./pages/BlogContentPage";
import { Mycontext } from "./context/context";

function App() {
  

  const { role, loading } = Mycontext();

  console.log("role", role);
  

  if (loading) return null;


  

  

  return (
    <>
      

      {role === "admin" && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<Navbar />}>
            <Route path="/" element={<AdminBoard />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="addblogs" element={<Addblogs />} />
              <Route path="bloglist" element={<Bloglistadmin />} />
              <Route path="blog/:id" element={<Blogcontent />} />
              <Route path="all" element={<Allblog />} />
            </Route>
          </Route>
        </Routes>
      )}

      
      {role === "user" && (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route element={<Navbar />}>
            <Route path="/" element={<HomePage />}>
              
              <Route path=":category" element={<Category />} />
              <Route path="all" element={<Allblog />} />
              <Route index element={<Navigate to="all" replace />} />
            </Route>
            <Route path="blogcontent/:id" element={<BlogContentPage />} />
          </Route>
        </Routes>
      )}

      
      {role !== "admin" && role !== "user" && (
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<HomePage />}>
              <Route path=":category" element={<Category />} />
              <Route path="all" element={<Allblog />} />
              <Route index element={<Navigate to="all" replace />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;
