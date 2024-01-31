
import React from "react";
import ReactDOM from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: 'white',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '90%',
  width: '90%'
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#909E84',
  zIndex: 1000
};

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        
        {children}
        <div style={{display:"flex",justifyContent:"center",}} className="bto">
        <button style={{backgroundColor: "rgb(64, 150, 133)",
  color: "black",
  border: "none",
  borderRadius: "5px",
  padding: "10px",
  cursor: "pointer",}} onClick={onClose}>Close</button>
        </div>
      </div>
      
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
