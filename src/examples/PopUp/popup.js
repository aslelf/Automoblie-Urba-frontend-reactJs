import React from "react";
import "./popup.css";

function popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div class="modal">
          <div className="modal-content">{props.children}</div>
          <div class="modal__footer">
            <button class="bn632-hover bn28" onClick={()=>props.setTrigger(false)}>Button</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default popup;
