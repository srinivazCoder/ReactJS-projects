import { useState } from 'react'
import './App.css'
import Accordian from "./components/accordion/Index";
import RandomColor from './components/random-color/Index';
import StarRating from './components/start-rating/Index';
import ImageSlider from "./components/image-slider/index";
import LoadMoreButton from "./components/load-more-button/Index";
import TreeView from './components/Tree-view';
import menus from './components/Tree-view/data';

import QRcodeGenerator from "./components/qr-code-generator/Index"

import SwitchMode from "./components/switch-mode/Index"
import ScrollIndicator from "./components/scroll-indicator/Index"

import TabTest from "./components/custom-tabs/tab-test";

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
        {/* <LoadMoreButton/> */}

        {/* Tree View / Menu UI component */}
        {/* <TreeView menus={menus}/> */}

        {/* QR code Generator */}
        {/* <QRcodeGenerator/> */}

        {/* Switch Mode */}
        {/* <SwitchMode/> */}

        {/* scroll-indicator */}
        {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}

        {/* Custom Tabs */}
        {/* <TabTest/> */}
      </div>
    </>
  )
}

export default App
