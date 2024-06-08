import { useState } from 'react'
import './App.css'
import Accordian from "./components/accordion/Index";
import RandomColor from './components/random-color/Index';
import StarRating from './components/start-rating/Index'

function App() {

  return (
    <>
      <div className='App'>

        {/* Accordian Component */}
        {/* <Accordian /> */}

        {/* Random Color Component */}
        {/* <RandomColor/> */}

        {/* Star Rating */}
        <StarRating noOfStars={10}/>
      </div>
    </>
  )
}

export default App
