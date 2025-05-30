import React from 'react'
import Start from '../assets/svg/star_icon.svg'
import Gradient from '../assets/webp/gradientBackground.png'

const Home = () => {
  return (
    <section>
        <div className="container">
            <div className="flex flex-col items-center relative pt-[114px]">
                <div className=" absolute  -z-10 top-[-10%]">
                    <img src={Gradient} alt="" />
                </div>
                <h5 className=' font-outfit font-normal text-[16px] leading-[100%] text-[#5044E5] flex gap-1  border-[0.3px] border-solid  border-[#7A7A7A] rounded-[50px] py-2 px-[27px] bg-[#5044E51A] '>New: AI feature integrated <img src={Start} alt="" /></h5>
                <h1 className='font-outfit font-medium text-[80px] leading-[88px] text-[#3B3B3B] max-w-[654px] text-center  pt-[18px]'>Your own <span className='text-[#5044E5]'>blogging</span> platform.</h1>
                <p className='text-[#808080] text-center font-poppins leading-[28px] font-normal pt-[10px] max-w-[787px] pb-[37px]'>This is your space to think out loud, to share what matters, and to write without filters. Whether it’s one word or a thousand, your story starts right here.</p>
                <div className=" border-[1px] border-solid bg-white w-full max-w-[679px] border-[#0000004D] rounded-[10px] flex  py-2 px-[10px]">
                    <input type="text" placeholder='Search blogs' className='w-full font-outfit font-normal text-[18px] bg-transparent leading-[100%] text-[#757575]  outline-none' />
                    <input type="submit" value='Search' className='font-outfit text-white text-[18px] leading-[100%] font-normal  py-2 px-[28px] bg-[#5044E5] rounded-[8px]' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home