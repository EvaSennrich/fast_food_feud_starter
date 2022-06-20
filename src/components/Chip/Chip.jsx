import * as React from "react";
import "./Chip.css";

var buttonClassName;

export function Chip({ label = "", isActive = false, handleClick = () => {} }) {
  if (isActive) {
    isActive = false;
    buttonClassName = "chip active";
  } else {
    isActive = true;
    buttonClassName = "chip";
  }

  return (
    <button className={buttonClassName} onClick={handleClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  );
}

export default Chip;
