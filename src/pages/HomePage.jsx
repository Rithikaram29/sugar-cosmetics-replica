import React from 'react';
import Navbar from '../components/Navbar.jsx';
import CarouselElement from '../components/carouselElement.jsx';
import { bestSeller, newLaunch, sugarPlay, topCarousel, priceDrop, executiveKit, sugarBlogs, sugarIcons } from '../utils/allData';
import Footer from '../components/Footer.jsx';
import RadioCarouselElement from '../components/radioCarousel.jsx';
import NormalCarouselElement from '../components/NormalCarousel.jsx';
import ReadMore from '../components/ReadMore.jsx';
import './homepage.css'

// const bestSeller = require('../utils/allData')

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <RadioCarouselElement array={topCarousel} no={1}/>

        <div className='heading'><h2>BEST SELLER</h2></div>
        <CarouselElement list={bestSeller} no = {4}/>

        <div className='heading'><h2>PRICE DROP</h2></div>
        <div className='priceDrop'><div><img src={priceDrop.img} /></div></div>

        <div className='heading'><h2>EXCLUSIVE KIT SERIES</h2></div>
        <NormalCarouselElement array={executiveKit} no={3}/>

        <div className='heading'><h2>NEW LAUNCH</h2></div>
        <CarouselElement list={newLaunch} no = {4}/>

        <div className='heading'><h2>SUGAR ICONICS IN-FOCUS</h2></div>
        <NormalCarouselElement array={sugarIcons} no={3}/>

        <div className='heading'><h2>SUGAR PLAY RANGE</h2></div>
        <CarouselElement list={sugarPlay} no = {3}/>

        <div className='heading'><h2>SUGAR BEAUTY BLOG</h2></div>
        <NormalCarouselElement array={sugarBlogs} no={3}/>
        
       <ReadMore/>
     
        <Footer/>
    </div>
  )
}

export default HomePage