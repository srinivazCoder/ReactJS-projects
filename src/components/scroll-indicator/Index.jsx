import { useEffect, useState } from "react";
import "./styles.css"

export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [scrollPercentage, setScrollPercentage] = useState(0);

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

    function handleScrollPercentage() {

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled / height) * 100);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);
        return (() => {
            window.removeEventListener('scroll', () => { })
        })
    });
    

    if(loading){
        return <div>Loading... Please wait...</div>
    }
    return (<div>

        <div className="top-conatainer">
            <h1>Custom Scroll Indicator</h1>
            <div className="scroll-progress-tracking-container">
                <div className="current-progressbar" style={{ width: `${scrollPercentage}%` }}></div>
            </div>
        </div>


        <div className="data-container">
            {
                data && data.length > 0 ? data.map((e,i) => <p key={i}>{e.title}</p>) : null
            }
        </div>

    </div>)
}