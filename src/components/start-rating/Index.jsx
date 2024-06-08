import {FaStar} from "react-icons/fa"
export default function StarRating({noOfStars = 5}) {
    // const [rating, setRating] = useState(0);
    // const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){
        console.log(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex){
        console.log(getCurrentIndex);
    }

    function handleMouseLeave(getCurrentIndex){
        console.log(getCurrentIndex);
    }
    return (<div className="start-rating">
        {
            [...Array(noOfStars)].map((_,index)=>{
                return <FaStar 
                key={index}
                onClick={()=>handleClick(index + 1)}
                onMouseEnter={()=>handleMouseEnter(index + 1)}
                onMouseLeave={()=>handleMouseLeave(index + 1)}
                size={40}
                />
            })
        }
    </div>)
}