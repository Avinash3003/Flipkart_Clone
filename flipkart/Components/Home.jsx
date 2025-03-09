import React from 'react'
import Carousuel from './Carousuel'
import Header from  './Header'
import Brands from './Brands'
import Category from '../newComponents/Category'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
        <Header/>
        <Brands/>
        <Carousuel/>
        {/* <ClothingSection/> */}
        <Category/>
        <Footer/>

    </div>
  )
}

export default Home