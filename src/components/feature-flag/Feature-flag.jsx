
import menus from "../Tree-view/data";
import Accordian from "../accordion/Index";
import RandomColor from "../random-color/Index";
import SwitchMode from "../switch-mode/Index";
import TicTactToe from "../tic-tact-toe/tic-tact-toe";
import TreeView from "../Tree-view";
import TabTest from "../custom-tabs/tab-test";
import { useContext } from "react";
import {FeatureFlagesContext} from "./context/Context";

export default function FeatureFlags(){

    const { loading,enableFlags } = useContext(FeatureFlagesContext);

    
     
    const componentsToRender =[
        {
            key:'showLightAndDarkMode',
            component : <SwitchMode/>
        },
        {
            key:'showTicTacToeBoard',
            component : <TicTactToe/>
        },
        {
            key:'showRandomColorGenerator',
            component :  <RandomColor/> 
        },
        {
            key:'showAccordian',
            component : <Accordian />
        },
        {
            key:'showTreeView',
            component : <TreeView menus={menus}/>
        },{
            key:'showTabs',
            component : <TabTest/>
        }

    ]

    console.log(loading,enableFlags);

    function checkEnabledFlages(getCurrentKey){
        return enableFlags[getCurrentKey]
    }

    if(loading){
        return <h4>Loading...</h4>
    }
    return (
        <div>
            <h1>Feature Flage</h1>

            {
                componentsToRender.map((ComponentItem)=>{
                    return checkEnabledFlages(ComponentItem.key) ? ComponentItem.component : null
                })
            }

        </div>
    )
}

