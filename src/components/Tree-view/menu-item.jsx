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
    return (<li className="menu-item"> 
        <div style={{ display:'flex', gap:'20px'}}>
            <p>{item.label}</p>
            {
                item &&  item.children?.length > 0  ? <p onClick={()=>handleToggleChildren(item.label)}>{
                    displayCurrentChildren[item.label] ? <FaMinus color="#000" size={25}/> : <FaPlus  color="#000" size={25}/>
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