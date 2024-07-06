import useFetch from "../use-fetch/use-fetch";

export default function ScrollToTopAndBottom(){
    const {data,error,pending} = useFetch("https://dummyjson.com/products",{})
    return <div>
            <h4>Scroll to Top andd Bottom Feature</h4>
            <h5>This is top Section </h5>
            <button>Scroll to Bottom</button>
    </div>
}