import React from 'react'

const Subscribe = () => {
  return (
    <section>
        <div className="container">
            <div className="flex flex-col  items-center pt-[181px] pb-[316px]">
                <h3 className='font-outfit font-medium text-[36px] leading-[100%] text-[#373737]'>Never Miss a Blog!</h3>
                <h6 className='font-outfit font-normal text-[18px] text-[#9A9A9A] text-center pt-[18px] pb-[46px]'>Subscribe to get the latest blog, new tech, and exclusive news.</h6>
                <div className=" rounded-[6px] flex overflow-hidden w-full  max-w-[724px] ">
                    <input type="text" placeholder='Enter your email id' className='font-outfit outline-none border-[1px] rounded-s-[6px] px-5 border-solid border-[#C7C7C7] w-full text-[16px] leading-[100%] text-[#9A9A9A] ' />
                    <button className='font-outfit  font-normal text-[16px] text-white bg-[#6257E8] py-[21px] px-[44px] '>SUBSCRIBE</button>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Subscribe