import React from 'react'
import Image from '../assets/webp/blog_pic_1.png'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Blogslist = () => {
  return (
     <section>
        <div className="container">
          <div className="pt-[64px]">
            <div className="flex gap-[33px] justify-center">
              <NavLink  to='all' className={({isActive}) => `${isActive ? ' ' : ''} font-outfit font-normal leading-[100%] text-[#565656]`}>All</NavLink>  
              <NavLink  to='technology' className={({isActive}) => `${isActive ? 'text-white' : ''} font-outfit font-normal leading-[100%] text-[#565656]`}>Technology</NavLink>  
            </div> 

          </div>

                     
            <div className="flex flex-row flex-wrap mx-[-12px] pt-[66px]">
                <div className="w-3/12">
                    <div className=" shadow-card rounded-[15px]  overflow-hidden">
                      <img src={Image} alt=""  className='w-full'/>
                      <div className="pt-5 px-[28px] pb-[40px]">
                      <span className='font-outfit text-[#5044E5] text-[14px] leading-[100%] bg-[#5044E533] rounded-[50px] py-[6px] px-[17px]'>Lifestyle</span>                      
                      <h4 className='font-outfit font-medium text-[20px] leading-[30px] py-3'>A detailed step by step guide to manage your lifestyle</h4>
                      <p className='font-outfit font-medium leading-[28px] text-[#636363]'>Lorem Ipsum is simply dummy text of the printing and typesetting..</p>
                

                      </div>

                        
                    </div>
                </div>
            </div>
        </div>
        
        
    </section>
  )
}

export default Blogslist