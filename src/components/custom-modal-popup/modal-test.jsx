import { useState } from "react"
import Modal from "./modal";

 export default function ModalTest(){

   const [isOpen,setIsOpen] = useState(false);

   function handleModalPopup(){
      setIsOpen(!isOpen);
   }

   function handleModelClosed(){
      setIsOpen(false)
   }
    return <div>
      <button onClick={handleModalPopup}>Open Model Popup</button>
      {
         isOpen && <Modal colsed={handleModelClosed} body={<div>Costomized Body</div>}/>
      }
    </div>
 }