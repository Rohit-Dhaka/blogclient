import React, { useEffect } from "react";
import { Delete, Done } from "../../common/icon";
import { Mycontext } from "../../context/context";

const Comments = () => {
  const { allblogs, blogs, comments, getComments } = Mycontext();

  console.log("comments", comments);
  console.log("blogs", blogs);
  useEffect(() => {
    allblogs();
    getComments();
  }, []);
  return (
    <section>
      <div className="container">
        <h6 className="font-outfit text-[#696B80] font-medium text-[18px] pb-[13px]">
          Comments
        </h6>
        <div className="bg-white border-[1px] border-solid border-[#D8D8D880] rounded-[10px]">
          <table className="w-full">
            <tr className="border-b-[1px] border-solid border-[#D8D8D880]">
              <th className=" ps-[30px] py-[17px] text-start">
                BLOG TITLE & COMMENT
              </th>
              <th className="text-start">DATE</th>
              <th className="text-start">ACTIONS</th>
            </tr>
            <tr className="">
              <th className="pt-[22px] pb-[25px]">
                <div className="flex flex-col items-start ps-[30px]">
                  <h6 className="font-outfit text-[#323232CC] font-medium">
                    Blog:{" "}
                    <span className="font-normal">
                      AI Tools That Can Instantly Boost Your Productivity in
                      2025
                    </span>{" "}
                  </h6>
                  <h6 className="font-outfit text-[#323232CC] font-medium py-1">
                    Name: <span className="font-normal">Michael Scott</span>{" "}
                  </h6>
                  <h6 className="font-outfit text-[#323232CC] font-medium">
                    Comment:{" "}
                    <span className="font-normal">This is my new comment</span>{" "}
                  </h6>
                </div>
              </th>
              <th className="font-outfit text-[#696B80] font-normal text-[16px] text-start pt-[22px]">
                24th July, 2024
              </th>
              <th className="">
                <div className="flex gap-[21px]">
                  <button>
                    <Done />
                  </button>
                  <button>
                    <Delete />
                  </button>
                </div>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comments;
