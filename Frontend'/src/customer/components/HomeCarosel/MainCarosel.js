import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';


const MainCarosel = () => {
    const items = MainCaroselData.map((item)=> <img className='cursor-pointer' src={item.image} alt=""/>)

  return (
    <div className='z-10'>
    <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        controlsStrategy="alternate"
    />
    </div>
  )
}

export default MainCarosel