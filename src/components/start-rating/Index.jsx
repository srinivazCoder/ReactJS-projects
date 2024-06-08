import {FaStar} from "react-icons/fa"
import { useState } from "react";
import './styles.css';
export default function StarRating({noOfStars = 5}) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        console.log(getCurrentIndex);
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex){
        console.log(getCurrentIndex);
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(){
        setHover(rating);
    }
    return (<div className="start-rating">
        {
            [...Array(noOfStars)].map((_,index)=>{
                index += 1
                return <FaStar 
                className={
                    index <= (hover || rating) ? 'active' :'inactive'
                }
                key={index}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                size={40}
                />
            })
        }
    </div>)
}