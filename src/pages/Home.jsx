import React from 'react'
import MainBanner from "../compontents/MainBanner.jsx";
import Categories from '../compontents/Categories.jsx'
import BestSeller from '../compontents/BestSeller.jsx'
import BottomBanner from '../compontents/BottomBanner.jsx'  
import NewsLetter from '../compontents/NewsLetter.jsx'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner/>
      <Categories/>
      <BestSeller/>
      <BottomBanner/>
      <NewsLetter/>
    </div>
  )
}

export default Home;
