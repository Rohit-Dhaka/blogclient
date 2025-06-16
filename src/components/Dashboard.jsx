import React, { useEffect } from "react";
import {
  Blognumber,
  Commentsnumber,
  Draftsnumber,
  Latestblog,
} from "../common/icon";
import { Mycontext } from "../context/context";

const Dashboard = () => {
  const { allblogs, blogs } = Mycontext();
  console.log(blogs);
  useEffect(() => {
    allblogs();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="flex  gap-[19px] ">
          <div className="bg-[#FFFFFF] rounded-[6px]  shadow-soft flex max-sm:flex-col max-sm:items-center gap-3 sm:py-[18px] py-2 max-w-[264px] w-full sm:px-5 px-2">
            <div className="bg-[#F6F8FF] rounded-[10px]  h-[65px] w-[65px]  flex items-center justify-center">
              <Blognumber />
            </div>
            <div className="">
              <h5 className=" font-outfit  font-medium text-[24px] max-sm:text-center ">{blogs.length}</h5>
              <h6 className=" font-outfit font-normal text-[16px] text-[#8893B0] ">
                Blogs
              </h6>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-[6px]  shadow-soft flex max-sm:flex-col max-sm:items-center gap-3 sm:py-[18px] py-2 max-w-[264px] w-full sm:px-5 px-2">
            <div className="bg-[#F6F8FF] rounded-[10px]  h-[65px] w-[65px]  flex items-center justify-center">
              <Commentsnumber />
            </div>
            <div className="">
              <h5 className=" font-outfit  font-medium text-[24px] max-sm:text-center"> {blogs.reduce((acc,blog) => acc + blog.comments.length, 0)}</h5>
              <h6 className=" font-outfit font-normal text-[16px] text-[#8893B0] ">
                Comments
              </h6>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-[6px]  shadow-soft flex max-sm:flex-col max-sm:items-center gap-3 sm:py-[18px] py-2 max-w-[264px] w-full sm:px-5 px-2">
            <div className="bg-[#F6F8FF] rounded-[10px]  h-[65px] w-[65px]  flex items-center justify-center">
              <Draftsnumber />
            </div>
            <div className="">
              <h5 className=" font-outfit  font-medium text-[24px]  max-sm:text-center">{blogs.filter(blog => blog.status === 'draft').length}</h5>
              <h6 className=" font-outfit font-normal text-[16px] text-[#8893B0] ">
                Drafts
              </h6>
            </div>
          </div>
        </div>
        <div className="flex gap-[9px] pt-[52px] ps-[21px]">
          <Latestblog />
          <h6 className="font-outfit font-medium text-[18px] text-[#323232] pb-[26px]">
            Latest Blogs
          </h6>
        </div>

        <div className="rounded-[10px] border-[1px] border-solid border-[#D8D8D880]  w-full  overflow-x-scroll  mb-32">
          <table className="bg-white w-full min-w-[900px]">
            <tr className="border-b-[1px] border-solid border-[#D8D8D880]">
              <th className="py-[18px]">#</th>
              <th className="text-start">BLOG TITLE</th>
              <th className="text-start">DATE</th>
              <th className="text-start">STATUS</th>
              <th className="text-start">ACTIONS</th>
            </tr>

            {blogs.map((blog, index) => {
              const dateObj = new Date(blog.createdAt);
              const formattedDate = dateObj.toLocaleDateString("en-GB", {
                  month: "long",
                  year: "numeric",
                day: "numeric",
              });

              return (
                <tr key={blog._id} className="border-b-[1px] border-solid border-[#D8D8D880] h-[20px]" >
                  <td className=" font-outfit text-[#696B80] py-[18px] px-[12px] text-center">{index + 1}</td>
                  <td  className=" font-outfit text-[#696B80] ">{blog.title}</td>
                  <td  className=" font-outfit text-[#696B80] ">{formattedDate}</td>
                  <td  className={`  ${blog.status === 'public' ? 'text-green-500' :'text-red-500'}  font-outfit text-[#00A63E] capitalize `}>{blog.status}</td> 
                   <td  className={`  ${blog.status === 'public' ? 'text-green-500' :'text-red-500'}  font-outfit text-[#00A63E] capitalize `}>{blog.status}</td> 
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
