import { useState } from "react";
import './Dropdown.scss';

const Dropdown = ({title})=> {
  const [open,setOpen] = useState()
  return(
    <div className={`drop ${open ? 'open'  : ''}`}>
      <div  className="toggle" onClick={() => setOpen(!open)}><span className='line'> {title}</span></div>
      <div className="list">
        <span className="drop-line">To Go</span>
        <span className="drop-line">Delivery</span>
      </div>
    </div>
  )
}
export default Dropdown;