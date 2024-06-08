import { useEffect, useState } from "react"

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
        const r = generateRandomNumber(256);
        const g = generateRandomNumber(256);
        const b = generateRandomNumber(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect( ()=>{
        if(tyepOfColor === "rgb")handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    },[tyepOfColor])

    return(
        <div style={{
            width:'100vw',
            height:'100vh',
            background:color,
            flexDirection:'column',
            gap:'20px'
        }}>
            <button onClick={()=>setTypeOfColor('hex')}>Create HEX Color</button> &nbsp;
            <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button> &nbsp;
            <button onClick={tyepOfColor==='hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} >Generate Random Color</button>
            <div style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                color:'#fff',
                fontSize:'30px',
                marginTop:'50px',
                flexDirection:"column"
            }}>
                <h3>{tyepOfColor ==="hex" ? "HEX Color" : "RGB Color"}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    )
}