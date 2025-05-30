import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Logo from '../assets/svg/logo.svg'
import Arrow from '../assets/svg/arrow.svg'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="flex justify-between py-[22px] ">
                <Link to='/'><img src={Logo} alt="" /></Link>
                <div className="">
                    <Link to='/signup' className='bg-[#5044E5] py-2.5 px-8  text-white flex gap-2 rounded-[33px]'>login <img src={Arrow} alt="" /></Link>
                </div>
                
            </div>            
        </div>
        <Outlet/>
        
    </nav>
  )
}

export default Navbar