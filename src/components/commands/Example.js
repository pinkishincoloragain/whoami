import React, { useRef, useState } from "react";

const Example = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    inputRef.current.blur();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        refs={inputRef}
      />
    </form>
  );
};
export default Example;
