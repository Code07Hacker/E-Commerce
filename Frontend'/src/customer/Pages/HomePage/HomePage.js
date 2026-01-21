import React from 'react'
import MainCarosel from '../../components/HomeCarosel/MainCarosel';
import HomeSectionCarosel from '../../components/HomeSectionCarosel/HomeSectionCarosel';
import { mens_kurtas } from "../../../Data/mens_kurta";

 const HomePage = () => {
  return (
    <div>
        <div>
        <MainCarosel/>
        </div>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
           <HomeSectionCarosel data={mens_kurtas} sectionName={"Men's Kurta"}/>
           <HomeSectionCarosel data={mens_kurtas} sectionName={"Men's Shoes"}/>
           <HomeSectionCarosel data={mens_kurtas} sectionName={"Men's Shirt"}/>
           <HomeSectionCarosel data={mens_kurtas} sectionName={"Women's Saree"}/>
           <HomeSectionCarosel data={mens_kurtas} sectionName={"Women's Dress"}/>
        </div>
    </div>
  )
}

export default HomePage;