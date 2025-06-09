import React, { useState } from "react";
import { Mycontext } from "../context/context";
import { Uploadimg } from "../common/icon";

const Addblogs = () => {

  const {addblog} = Mycontext();
  const [formdata, setFormdata] = useState({title:"" ,subtitle:"",description:"",category:"" ,  image:null ,status: "draft"})
  
  const handleSubmit = (e) =>{
    e.preventDefault()    
    
    const data = new FormData();
    data.append('title' , formdata.title)
    data.append('subtitle' , formdata.subtitle)
    data.append('description' , formdata.description)
    data.append('category' , formdata.category)
    data.append('image' , formdata.image)
    data.append('status' , formdata.status)
    addblog(data)
    



    setFormdata({title:"" ,subtitle:"",description:"",category:"" , image:null})
    
  }
  return (
    <section>
      <div className="container">
        <div className="bg-[#FFFFFF] border-[1px] border-solid border-[#D8D8D880] max-w-[1088px] rounded-[10px] pt-[35px] pb-[77px] sm:px-[42px] px-5 mb-32">
          <form onSubmit={handleSubmit}>
             <label className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  inline-block pb-[13px] w-full">
              Upload thumbnail
            </label>

            <label htmlFor="file-upload" className="bg-[#F8F8F8]  py-[18px] px-5  w-[130px]  flex items-center justify-center border-[1px] border-dashed rounded-[10px] border-[#00000033]  cursor-pointer ">
              <Uploadimg/>
            </label>
            
            <input id="file-upload" className="hidden" type="file"  onChange={(e) => setFormdata({...formdata,image:e.target.files[0]})} />



            <label className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  inline-block pb-[13px] w-full pt-[21px]">
              Blog title
            </label>
            <input
              type="text"
              value={formdata.title}
              onChange={(e) => setFormdata({...formdata , title:e.target.value})}
              placeholder="Type here"
              className="py-[13px] px-3 border-[1px] w-full rounded-[4px]  outline-none border-solid border-[#2525254D]"
            />

            <label className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  pt-[22px] inline-block pb-[13px] w-full">
              Sub title
            </label>
            <input
              type="text"
              value={formdata.subtitle}              
              onChange={(e) => setFormdata({...formdata, subtitle:e.target.value})}
              placeholder="Type here"
              className="py-[13px] px-3 border-[1px] w-full rounded-[4px]  outline-none border-solid border-[#2525254D]"
            />

            <label className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  pt-[22px] inline-block pb-[13px] w-full">
              Blog description
            </label>
            <textarea
              name=""
              id=""
               value={formdata.description}              
              onChange={(e) => setFormdata({...formdata, description:e.target.value})}
              placeholder="Type here"
              className="py-[13px] px-3 border-[1px] w-full rounded-[4px] outline-none  border-solid border-[#2525254D]"
            ></textarea>

            <label  className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  pt-[22px] inline-block pb-[13px] w-full">
              Blog category
            </label>
            <select
              id="role"
              value={formdata.category}
              onChange={(e) => setFormdata({...formdata,category:e.target.value})}
              className="px-3 text-[#808080] outline-none p-2 border-[1px] border-[#2525254D] rounded-[4px] inline-block"
            >
              <option value="">--Select--</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Startup">Startup</option>
              <option value="Technology">Technology</option>
              <option value="Finance">Finance</option>
            </select>
            <div className="flex gap-3 items-center pb-10">
                 <label  htmlFor="publishNow"  className="font-outfit font-normal text-[18px] leading-[100%] text-[#252525B2]  pt-[22px] inline-block pb-[13px]">
              Publish Now               
            </label>
            <input id="publishNow"  type="checkbox"
            checked={formdata.status === "public"}
             onChange={(e) => setFormdata({ ...formdata, status: e.target.checked ? "public" : "draft" })}
            
            
            />
            </div>
            <input type="submit" value='Add blog' className="text-white cursor-pointer border-[1px]  hover:bg-white duration-300 hover:border-[#5044E5]  hover:text-[#5044E5] font-outfit text-[16px] leading-[100%] bg-[#5044E5] rounded-[4px] py-3 px-[46px]" />
            
          </form>
        </div>
      </div>
    </section>
  );
};

export default Addblogs;
 


