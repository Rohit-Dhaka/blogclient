import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'
import  { Addblogs, Blogslist, Comments, Dashboard } from '../common/icon'

const AdminBoard = () => {
  return (
    <section>
        <div className="flex">
            <aside className='min-h-screen border-r-[1px] border-t-[1px] border-solid border-[#D8D8D8] max-w-[320px] w-full'>
                <NavLink className={({isActive}) => `${isActive  ? 'bg-[#F2F3FF] border-r-[6px] border-solid border-[#5F6FFF] text-[#000]' : ''} flex gap-2 py-4  text-[#515151]  ps-10  duration-300   ease-linear  pt-5`} to='dashboard'> <Dashboard/>  Dashboard</NavLink>
                <NavLink className={({isActive}) => `${isActive  ? 'bg-[#F2F3FF] border-r-[6px] border-solid border-[#5F6FFF] text-[#000]' : ''} flex gap-2 py-4  text-[#515151]  ps-10  duration-300   ease-linear `} to='addblogs'> <Addblogs/>  Add blogs</NavLink>
                <NavLink className={({isActive}) => `${isActive  ? 'bg-[#F2F3FF] border-r-[6px] border-solid border-[#5F6FFF] text-[#000]' : ''} flex gap-2 py-4  text-[#515151]  ps-10  duration-300   ease-linear `} to='bloglist'> <Blogslist/>  Blogs list</NavLink>
                <NavLink className={({isActive}) => `${isActive  ? 'bg-[#F2F3FF] border-r-[6px] border-solid border-[#5F6FFF] text-[#000]' : ''} flex gap-2 py-4  text-[#515151]  ps-10  duration-300   ease-linear `} to='comments'> <Comments/>  Comments</NavLink>
                

                

            </aside>
            <div className="border-t-[1px] border-solid border-[#D8D8D8] w-full bg-[#F6FAFE] pt-[45px] ps-[45px]">
                <Outlet/>
            </div>            

        </div>
    </section>
  )
}

export default AdminBoard