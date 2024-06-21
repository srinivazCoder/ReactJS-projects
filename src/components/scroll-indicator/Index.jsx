import { useEffect, useState } from "react"

export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage,setScrollPercentage] = useState(0);

    async function fetchData(getURL) {
        try {
            const response = await fetch(getURL);
            const data = await response.json();



            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);

            }
        } catch (e) {
            console.log(e);
            setErrorMessage(e.message);


        }
    }
    useEffect(() => {
        fetchData(url);
    }, [url]);

    function handleScrollPercentage(){
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight

        );
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleScrollPercentage);
        return (()=>{
            window.removeEventListener('scroll',()=>{})
        })
    })

    console.log(data, loading)
    return (<div>

        <h1>Custom Scroll Indicator</h1>
        <div className="data-container">
            {
                data && data.length > 0  ? data.map((e)=><p>{e.title}</p>): null
            }
        </div>

    </div>)
}