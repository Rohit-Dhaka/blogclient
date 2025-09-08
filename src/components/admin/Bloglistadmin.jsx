import React, { useEffect } from "react";
import { Mycontext } from "../../context/context";
import api from "../../utils/api";


const Bloglistadmin = () => {
  const { allblogs, blogs } = Mycontext();

  const updateStatus = async (id, newStatus) => {
    try {      
      await api.put(`/blog/updateblogs/${id}`, {
        status: newStatus,
      });      
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() =>{
    allblogs()
  },[])

  return (
    <section className="  ">
      <div className="container">
        <h4 className="font-outfit font-medium text-[#696B80] text-[18px] pb-[13px] pt-[38px]">
          All Blogs 
        </h4>
        <div className="rounded-[10px] border-[1px] border-solid border-[#D8D8D880]  w-full overflow-x-scroll mb-32">
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
                <tr
                  key={blog._id}
                  className="border-b-[1px] border-solid border-[#D8D8D880] h-[20px]"
                >
                  <td className=" font-outfit text-[#696B80] py-[18px] px-[12px] text-center">
                    {index + 1}
                  </td>
                  <td className=" font-outfit text-[#696B80] ">{blog.title}</td>
                  <td className=" font-outfit text-[#696B80] ">
                    {formattedDate}
                  </td>
                  <td
                    className={` ${
                      blog.status === "public"
                        ? "text-[#00A63E]"
                        : "text-red-500"
                    }         font-outfit   capitalize`}
                  >
                    {blog.status}
                  </td>{" "}
                  
                  <td className=" font-outfit text-[#696B80] ">
                    <button
                      onClick={() =>
                        updateStatus(
                          blog._id,
                          blog.status === "public" ? "draft" : "public"
                        )
                      }
                      className={`px-3 py-2  rounded-[2px] border-[1px] border-solid  ${
                        blog.status === "public" ? "text-red-500 border-red-500" : "text-green-500 border-green-500"
                      } `}
                    >
                      {blog.status === "public" ? "Unpublish" : "Publish"}
                    </button>
                  </td>{" "}
                  
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Bloglistadmin;
