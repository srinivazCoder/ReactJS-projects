import MenuList from "./manu-list";
import { useState } from 'react'
import {FaMinus,FaPlus} from "react-icons/fa"
export default function MenuItem({ item }) {

    const [displayCurrentChildren,setDisplayCurrentChildren] = useState({});
    
    function handleToggleChildren(getCurrentLable){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLable] : !displayCurrentChildren[getCurrentLable]
        })
    }
    console.log(displayCurrentChildren)
    return (<li > 
        <div className="menu-item">
            <p style={{color:"#fff"}}>{item.label}</p>
            {
                item &&  item.children?.length > 0  ? <p onClick={()=>handleToggleChildren(item.label)}>{
                    displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={15}/> : <FaPlus  color="#fff" size={15}/>
                }</p> : null
            }
        </div>

        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
            <MenuList list={item.children}/>
            : null
        }
    </li>)
}