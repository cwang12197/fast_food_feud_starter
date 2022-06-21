import * as React from "react"
import "./Chip.css"

export function Chip({label = "", isActive = false, onClick}) {
  let buttonClassName = isActive == false ? "chip": "chip active";

  return (
    <button onClick={onClick} className={buttonClassName} >
    <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
  </button>

)}
//curly braces destructure thre object so props can be destructed into curly braces
export default Chip
