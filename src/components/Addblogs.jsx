import React from "react";

const Addblogs = () => {
  return (
    <section>
      <div className="container">
        <div className="bg-[#FFFFFF] border-[1px] border-solid border-[#D8D8D880] max-w-[1088px] rounded-[10px] pt-[35px] pb-[77px] px-[42px]">
          <form>

            <label className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  inline-block pb-[13px] w-full">
              Upload thumbnail
            </label>



            <label className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  inline-block pb-[13px] w-full">
              Blog title
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="py-[13px] px-3 border-[1px] w-full rounded-[4px]  outline-none border-solid border-[#2525254D]"
            />

            <label className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  pt-[22px] inline-block pb-[13px] w-full">
              Sub title
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="py-[13px] px-3 border-[1px] w-full rounded-[4px]  outline-none border-solid border-[#2525254D]"
            />

            <label className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  pt-[22px] inline-block pb-[13px] w-full">
              Blog description
            </label>
            <textarea
              name=""
              id=""
              placeholder="Type here"
              className="py-[13px] px-3 border-[1px] w-full rounded-[4px] outline-none  border-solid border-[#2525254D]"
            ></textarea>

            <label  className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  pt-[22px] inline-block pb-[13px] w-full">
              Blog category
            </label>
            <select
              id="role"
              className="px-3 text-[#808080] outline-none p-2 border-[1px] border-[#2525254D] rounded-[4px] inline-block"
            >
              <option value="">--Select--</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            <div className="flex gap-3 items-center pb-10">
                 <label  className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  pt-[22px] inline-block pb-[13px]">
              Publish Now               
            </label>
            <input type="checkbox" />
            </div>
            <input type="submit" value='Add blog' className="text-white font-outfit text-[16px] leading-[100%] bg-[#5044E5] rounded-[4px] py-3 px-[46px]" />
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Addblogs;
