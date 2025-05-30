import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Footer from "./components/Footer";
import AdminBoard from "./components/AdminBoard";
import Addblogs from "./components/Addblogs";
import Blogslist from "./components/Blogslist";
import Comments from "./components/Comments";
import Dashboard from "./components/Dashboard";
import Subscribe from "./components/Subscribe";
import HomePage from "./pages/HomePage";
import Allblog from "./components/Allblog";
import Technology from "./components/Technology";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<HomePage />} />

          <Route index element={<AdminBoard />} />
          <Route path="/" element={<AdminBoard />}>
            <Route path="" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="addblogs" element={<Addblogs />} />
            <Route path="bloglist" element={<Blogslist />} />
            <Route path="comments" element={<Comments />} />
          </Route>
          {/* <Route element={Blogslist}> */}
            <Route path="all" element={<Allblog/>} />
            <Route path="technology" element={<Technology/>} />

          {/* </Route> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
