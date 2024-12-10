import React from 'react';
import Navbar from '../components/Navbar';
import CarouselElement from '../components/carouselElement';
import { bestSeller, newLaunch, sugarPlay, topCarousel } from '../utils/allData';
import Footer from '../components/Footer';
import RadioCarouselElement from '../components/radioCarousel';

// const bestSeller = require('../utils/allData')

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <RadioCarouselElement array={topCarousel} no={1}/>
        <CarouselElement array={bestSeller} no = {4}/>
        <CarouselElement array={newLaunch} no = {4}/>
        <CarouselElement array={sugarPlay} no = {3}/>
     
        <Footer/>
    </div>
  )
}

export default HomePage