import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Addblogs, Blogslist, Comments, Dashboard } from "../../common/icon";

const AdminBoard = () => {
  return (
    <section className=" ">
      <div className="flex max-sm:flex-col ">
        <aside className="sm:min-h-screen sm:border-r-[1px] sm:border-t-[1px] sm:border-solid border-[#D8D8D8] sm:min-w-[320px]  max-sm:flex-row  max-sm:flex  max-sm:overflow-x-auto ">
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#F2F3FF] sm:border-r-[6px]  max-sm:border-b-[2px] border-solid border-[#5F6FFF] text-[#000] "
                  : ""
              } flex gap-2 py-4  text-[#515151]  sm:ps-10 max-sm:px-8 text-nowrap   duration-300   ease-linear  sm:pt-5`
            }
            to="dashboard"
          >
            {" "}
            <Dashboard /> Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#F2F3FF] sm:border-r-[6px]  max-sm:border-b-[2px] border-solid border-[#5F6FFF] text-[#000]"
                  : ""
              } flex gap-2 py-4  text-[#515151]  sm:ps-10 max-sm:px-8 text-nowrap   duration-300   ease-linear `
            }
            to="addblogs"
          >
            {" "}
            <Addblogs /> Add blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-[#F2F3FF] sm:border-r-[6px]  max-sm:border-b-[2px] border-solid border-[#5F6FFF] text-[#000]"
                  : ""
              } flex gap-2 py-4  text-[#515151]  sm:ps-10 max-sm:px-8 text-nowrap   duration-300   ease-linear `
            }
            to="bloglist"
          >
            {" "}
            <Blogslist /> Blogs list
          </NavLink>        
        </aside>
        <div className="border-t-[1px] border-solid border-[#D8D8D8] w-full bg-[#F6FAFE] sm:pt-[45px] pt-8 sm:ps-[45px] max-sm:pb-40">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AdminBoard;
