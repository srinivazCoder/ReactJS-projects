import { useState } from 'react'
import './App.css'
import Accordian from "./components/accordion/Index";
import RandomColor from './components/random-color/Index';

function App() {

  return (
    <>
      <div className='App'>
        {/* Accordian Component */}
        <Accordian />
        {/* Random Color Component */}
        <RandomColor/>
      </div>
    </>
  )
}

export default App
