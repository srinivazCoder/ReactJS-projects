import { useEffect, useState } from "react"

export default function ImageSlider({ url, limit ,page=1}) {
    console.log(url)
    console.log(limit)
    console.log(page)
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);


    async function fetchImages(getURL) {
        console.log(getURL)
        try {
            setLoading(true);
            const response = await fetch(`${getURL}?page=${1}&limit=${limit}`);
            const data = await response.json();
            if (data) {
                setImages(data);
                setLoading(false);
            }

        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

 console.log(images);

    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url])

    if(loading){
        return <h1>Loading... Data! Please wait</h1>
    }

    if(errorMsg !== null ){
        return <h1>Error Occured {errorMsg}</h1>
    }
    return (<div>{images && images.map((img)=>{
        console.log(img)
        return <div>nhello{img.author}</div>
    })}</div>)
}