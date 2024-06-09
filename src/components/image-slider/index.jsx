import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import "./style.css";
export default function ImageSlider({ url, limit, page = 1 }) {
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

    if (loading) {
        return <h1>Loading... Data! Please wait</h1>
    }

    if (errorMsg !== null) {
        return <h1>Error Occured {errorMsg}</h1>
    }

    function handlePrevious() {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }

    function handleNext() {
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }
    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
            {
                images && images.length ? images.map(((imageItem, index) => (
                    <img
                        key={imageItem.id}
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                    />
                ))) : null
            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />
            <span className="circle-indicators">
                {
                    images && images.length ? images.map((_, index) =>
                        <button key={index} className={
                            currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"
                        } onClick={()=> setCurrentSlide(index)}></button>
                    ) : null
                }
            </span>

        </div>
    )
}