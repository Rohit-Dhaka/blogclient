import React from 'react'
import { Blognumber, Commentsnumber, Draftsnumber, Latestblog } from '../common/icon'

const Dashboard = () => {
  return (
    <section>
        <div className="container">
            <div className="flex gap-[19px]">
                <div className="bg-[#FFFFFF] rounded-[6px]  shadow-soft flex gap-3 py-[18px] max-w-[264px] w-full px-5">                    
                    <div className="bg-[#F6F8FF] rounded-[10px]  h-[65px] w-[65px]  flex items-center justify-center">
                        <Blognumber/>
                    </div>
                    <div className="">
                        <h5 className=' font-outfit  font-medium text-[24px] '>14</h5>
                        <h6 className=' font-outfit font-normal text-[16px] text-[#8893B0] '>Blogs</h6>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] rounded-[6px]  shadow-soft flex gap-3 py-[18px] max-w-[264px] w-full px-5">                    
                    <div className="bg-[#F6F8FF] rounded-[10px]  h-[65px] w-[65px]  flex items-center justify-center">
                        <Commentsnumber/>
                    </div>
                    <div className="">
                        <h5 className=' font-outfit  font-medium text-[24px] '>12</h5>
                        <h6 className=' font-outfit font-normal text-[16px] text-[#8893B0] '>Comments</h6>
                    </div>
                </div>

                <div className="bg-[#FFFFFF] rounded-[6px]  shadow-soft flex gap-3 py-[18px] max-w-[264px] w-full px-5">                    
                    <div className="bg-[#F6F8FF] rounded-[10px]  h-[65px] w-[65px]  flex items-center justify-center">
                        <Draftsnumber/>
                    </div>
                    <div className="">
                        <h5 className=' font-outfit  font-medium text-[24px] '>5</h5>
                        <h6 className=' font-outfit font-normal text-[16px] text-[#8893B0] '>Drafts</h6>
                    </div>
                </div>

            </div>
            <div className="flex gap-[9px] pt-[52px] ps-[21px]">
                <Latestblog/>
                <h6 className='font-outfit font-medium text-[18px] text-[#323232]'>Latest Blogs</h6>
            </div>
            <table >
                <tr>
                    <th>#</th>
                    <th>BLOG TITLE</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                    <th>ACTIONS</th>
                </tr>

            </table>
        </div>
    </section>
  )
}

export default Dashboard