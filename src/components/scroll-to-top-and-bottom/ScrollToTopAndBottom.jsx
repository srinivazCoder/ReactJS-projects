import { useRef } from "react";
import useFetch from "../use-fetch/use-fetch";

export default function ScrollToTopAndBottom(){
    const {data,error,pending} = useFetch("https://dummyjson.com/products?limit=50",{})
    console.log(data)

    const bottomRef = useRef(null);
    

    // if(pending){
    //     return <h1>Pending...</h1>
    // }
    // if(error){
    //     return <h1>somthing went wrong please try again later</h1>
    // }

    function handleScrollToTop(){
        window.scrollTo({
            top:0,
            left: 0,
            behavior:'smooth'
        })
    }

    function handleScrollFromBottom(){
        bottomRef.current.scrollIntoView({behavior:"smooth"})
    }
    return <div>
            <h4>Scroll to Top andd Bottom Feature</h4>
            <h5>This is top Section </h5>
            <button onClick={handleScrollFromBottom}>Scroll to Bottom</button>

            {
                pending ? <h3>Pending...</h3> : null
            }
            {
                error ? <h4>Error Occured Try Again Later...</h4> : null
            }

            <ul style={{listStyle:"none"}}>
                {
                    data && data.products.length ? data.products.map((e)=>{
                        return <li key={e.id}>{e.title}</li>
                    }) : null
                }
            </ul>

            <button onClick={handleScrollToTop}>Scroll to Top</button>
            <div ref={bottomRef}></div>
            <h5>This is the bottom of the page</h5>
    </div>
}