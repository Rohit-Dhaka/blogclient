import React from 'react'
import Footer from '../components/layout/Footer'
import Subscribe from '../components/layout/Subscribe'
import Blogslist from '../components/blogs/Blogslist'
import Home from '../components/layout/Home'
import Navbar from '../components/layout/Navbar'

const HomePage = () => {
  return (
    <>
    
    <Home/>
    <Blogslist/>
    <Subscribe/>
    <Footer/>
    </>
  )
}

export default HomePage