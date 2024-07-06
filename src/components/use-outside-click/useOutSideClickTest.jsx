import { useRef, useState } from "react"
import UseOutSideClick from "./useOutSideClick"

export default function UseOnClickOutsideTest(){

    const ref  = useRef();
    const [showContent,setShowContent] = useState(false);



    UseOutSideClick(ref,()=>setShowContent(false));

    return <div ref={ref}>
        {
            showContent ? <div onClick={()=>{setShowContent(!showContent)}}>
                <h1>This is a random content</h1>
                <p>Please click outside of this to close this, it wont close if click inside the content</p>
            </div> : <button onClick={()=>setShowContent(true)}>Show Content</button>
        }
    </div>
}