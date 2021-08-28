import Draggable from "react-draggable";
import folder_logo from "../assets/folder.jpg";
import React, { useRef, useState } from "react";
import Command from "./commands/Command";
import "styles/App.scss";
import "styles/Window.scss";

function Window() {
  const [size, setSize] = useState(true);

  function exitHandler(e) {
    alert("exit");
  }

  function minimizeHandler(e) {
    alert("minimize");
  }

  function maximizeHandler(e) {
    alert("maximize");
  }

  function mouseDownHandler(e) {
    e.stopPropagation();
  }

  const headerDraggerRef = useRef(null);
  const exitRef = useRef(null);

  return (
    <div id="resizer">
      <Draggable
        className="draggable"
        ref={headerDraggerRef}
        axis="both"
        handle=".handle"
        // defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[1, 1]}
        scale={1}
        onDragStart={(e) => {
          e.preventDefault();
        }}
        // onDrag={handleDrag}
        // onStop={handleStop}
      >
        <div>
          <div className="handle">
            <div className="Whead">
              <button
                id="icon_exit"
                className="icon"
                onClick={exitHandler}
                onMouseDown={mouseDownHandler}
                ref={exitRef}></button>
              <button
                id="icon_minimize"
                className="icon"
                onClick={minimizeHandler}
                onMouseDown={mouseDownHandler}></button>
              <button
                id="icon_maximize"
                className="icon"
                onClick={maximizeHandler}
                onMouseDown={mouseDownHandler}></button>
              <img src={folder_logo} className="icon_img" alt="folder_logo" />
              <div id="head_cover">&nbsp;~&nbsp;MYUNGBIN SON</div>
            </div>
          </div>
          <div className="Wbody">
            <Command />
          </div>
        </div>
      </Draggable>
    </div>
  );
}

export default Window;
