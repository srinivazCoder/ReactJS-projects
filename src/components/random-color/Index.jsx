import { useState } from "react"

export default function RandomColor(){

    const [tyepOfColor,setTypeOfColor] = useState('hex');
    const [ color, setColor ] = useState('#000000');

    function generateRandomNumber(length){
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor(){

        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

        let hexColor = "#";

        for(let i=0; i<6; i++){
            hexColor += hex[generateRandomNumber(hex.length)]
        }
        setColor(hexColor);
    }
    function handleCreateRandomRgbColor(){

    }

    return(
        <div style={{
            width:'100vw',
            height:'100vh',
            background:color
        }}>
            <button onClick={()=>setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={tyepOfColor==='hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} >Generate Random Color</button>
        </div>
    )
}