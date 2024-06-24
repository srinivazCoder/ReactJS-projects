
import './modal.css';

export default function Modal({ colsed, id, header, body, footer }) {
   return <div id={id || "Modal"} className="modal">
      <div className="modal-content">
         <div className="header">
            <h2>{header ? header : "Header"}</h2>
            <span className="close-modal-icon" onClick={colsed}>&times;</span>


         </div>
         <div className="body">
            {
               body ? body : <div>This is our Modal Body</div>
            }
         </div>
         <div className="footer">
            {
               footer ? footer : <h2>This is our Modal Footer</h2>
            }
         </div>
      </div>

   </div>
}