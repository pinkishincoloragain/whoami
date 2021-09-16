import React from "react";
import "styles/Command.scss";
import Example from "./Example";

function Command() {
  return (
    <div>
      <div className="terminal_line">
        &gt; Developer mode (currently not available)
        <Example />
      </div>
    </div>
  );
}
export default Command;
