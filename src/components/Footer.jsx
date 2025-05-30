import React from 'react'
import Logo from '../assets/svg/logo.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className='bg-[#F8F9FD]'>
        <div className="container">
            <div className="flex flex-row flex-wrap mx-[-12px] pt-[60px] pb-[43px]">
                <div className="lg:w-6/12  w-full px-3">
                    <img src={Logo} alt="" />
                    <p className=' font-poppins font-normal text-[16px] text-[#373737CC] leading-[30px] max-w-[453px] pt-[17px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde quaerat eveniet cumque accusamus atque qui error quo enim fugiat?</p>
                    
                </div>
                <div className="lg:w-2/12  sm:w-4/12 w-full lg:pt-0 pt-4  px-3"> 
                    <ul>
                        <li className='font-outfit  font-medium text-black text-[16px]'>Quick Links</li>
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Home</Link> </li>                        
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Best Sellers</Link> </li>                        
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Offers & Deals</Link> </li>                        
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Contact Us</Link> </li>                        
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>FAQs</Link> </li>                        
                    </ul>
                </div>
                 <div className="lg:w-2/12  sm:w-4/12 w-full lg:pt-0 pt-4 flex  sm:justify-center px-3"> 
                    <ul>
                        <li className='font-outfit  font-medium text-black text-[16px]'>Need help?</li>
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Delivery Information</Link> </li>                        
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Return & Refund Policy</Link> </li>                        
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Payment Methods</Link> </li>                        
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Track your Order</Link> </li>                        
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Contact Us</Link> </li>                        
                    </ul>
                </div>
                <div className="lg:w-2/12  sm:w-4/12 w-full lg:pt-0 pt-4 flex sm:justify-end px-3"> 
                    <ul>
                        <li className='font-outfit  font-medium text-black text-[16px]'>Follow Us</li>
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Instagram</Link> </li>                        
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Twitter</Link> </li>                        
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>Facebook</Link> </li>                        
                        <li className='pt-2'> <Link to='' className=' font-outfit  font-normal text-[16px] text-[#5D5D5DE5] '>YouTube</Link> </li>                        
                        
                    </ul>
                </div>

            </div>
            <div className="">
                <h6 className='font-outfit font-normal text-[16px] leading-[30px] text-center pb-[23px] pt-[13px] border-t-[1px] border-solid border-[#0000004D] text-[#5D5D5D]'>Copyright {year} © QuickBlog All Right Reserved.</h6>
            </div>
        </div>
    </footer>
  )
}

export default Footer