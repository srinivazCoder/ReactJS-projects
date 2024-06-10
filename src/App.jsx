import { useState } from 'react'
import './App.css'
import Accordian from "./components/accordion/Index";
import RandomColor from './components/random-color/Index';
import StarRating from './components/start-rating/Index';
import ImageSlider from "./components/image-slider/index";
import LoadMoreButton from "./components/load-more-button/Index";

function App() {

  return (
    <>
      <div className='App'>

        {/* Accordian Component */}
        {/* <Accordian /> */}

        {/* Random Color Component */}
        {/* <RandomColor/> */}

        {/* Star Rating */}
        {/* <StarRating noOfStars={10}/> */}

        {/* Image Slider */}
        {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10}/> */}

        {/* Load More Button */}

        <LoadMoreButton/>
      </div>
    </>
  )
}

export default App
