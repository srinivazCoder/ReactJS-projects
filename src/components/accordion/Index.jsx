
//Single selection
// Multiple selection

import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {

    const [selected, setSeleted] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);


    function handleSingleSelection(getCurrentID) {
        setSeleted(getCurrentID === selected ? null : getCurrentID);
    }

    function handleMultiSelection(getCurrentID) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentID);

        if (findIndexOfCurrentId === -1){
            copyMultiple = [...copyMultiple,getCurrentID];
        }else{
            copyMultiple = copyMultiple.filter((e)=>e!== getCurrentID);
        }
        setMultiple(copyMultiple);

        
    }

    console.log(selected,multiple);

    return (
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className="accordian">
                {data && data.length > 0 ? data.map((dataItem) => (
                    <div className="item">
                        <div onClick={
                            enableMultiSelection
                                ? () => handleMultiSelection(dataItem.id)
                                : () => handleSingleSelection(dataItem.id)
                        } className="title">
                            <h3>{dataItem.question}</h3>
                            <span>+</span>

                        </div>
                        {
                            (selected === dataItem.id || multiple.includes(dataItem.id)) && <div className="content">{dataItem.answer}</div>
                        }

                    </div>))
                    : <div>No data found !</div>}
            </div>
        </div>
    );

}