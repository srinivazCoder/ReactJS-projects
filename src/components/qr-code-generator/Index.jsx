// import React from 'react';
import { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QRcodeGenerator(){
    const [qrCode,setQRCode] = useState("");
    const [input,setInput] = useState("");

    function handleQRcode(){
        setQRCode(input);
        setInput("");
    }

    return <div>
        <h1>QR code generator</h1>
        <div>
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" name="qr-code" placeholder="Enter your text here"  />
            <button onClick={handleQRcode} disabled={input && input.trim() !== "" ? false : true}>Generate</button>
        </div>
        


        <div style={{marginTop:20}}>
            <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='#fff'/>
        </div>
    </div>
}