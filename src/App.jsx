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
import ModalTest from './components/custom-modal-popup/modal-test';

import GitHubProfileFinder from './components/gitHubProfileFinder/Index';
import SearchAutoCompleteAPI from './components/search-auto-complete-with-API/searchAutoComplete';
import TicTactToe from './components/tic-tact-toe/tic-tact-toe';
import FeatureFlags from "./components/feature-flag/Feature-flag";
import FeatureFlagGlobalState from './components/feature-flag/context/Context';
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnClickOutsideTest from "./components/use-outside-click/useOutSideClickTest";
import WindowResizer from "./components/use-window-resize/WindowResize";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom/ScrollToTopAndBottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scrollToSection";
import Weather from './components/weather/Weather';



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

        {/* Custom Model Popup} */}
        {/* <ModalTest/> */}

        {/* Git profile finder */}
        {/* <GitHubProfileFinder/> */}

        {/* Search Auto complete with API */}
        {/* <SearchAutoCompleteAPI/> */}

        {/* Tic Tac Toe */}
        {/* <TicTactToe/> */}

        {/* Feature Flage Component */}
        {/* <FeatureFlagGlobalState>
          <FeatureFlags />
        </FeatureFlagGlobalState> */}

        {/* Usefeth Custom hook */}
        {/* <UseFetchHookTest/> */}

        {/* out side click component */}
        {/* <UseOnClickOutsideTest/> */}

        {/* Use Window Resize Component */}
       {/* <WindowResizer/> */}

       {/* Scroll Top to Bottom */}
        {/* <ScrollToTopAndBottom/> */}

        {/* Scroll to a perticular section */}
        {/* <ScrollToSection/> */}
        <Weather/>
      </div>
    </>
  )
}

export default App
