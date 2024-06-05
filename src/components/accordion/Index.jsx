
//Single selection
// Multiple selection

import { useState } from "react";
import data from "./data"

export default function Accordian() {
    const [selected, setSeleted] = useState(null);

    function handleSingleSelection(getCurrentID){
        setSeleted(getCurrentID)
    }

    return (
        <div className="wrapper">
            <div className="accordian">
                {data && data.length > 0 ? data.map((dataItem) => (
                    <div className="item">
                        <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>

                        </div>
                        {
                            selected === dataItem.id && <div>{dataItem.answer}</div>
                        }

                    </div>))
                    : <div>No data found !</div>}
            </div>
        </div>
    );

}