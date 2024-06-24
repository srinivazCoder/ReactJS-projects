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
         isOpen && <Modal colsed={handleModelClosed} header={<div>Costomized Header</div>} body={<div>Costomized Body</div>} footer={<h2>Costomized footer</h2>}/>
      }
    </div>
 }