import React, { useRef } from "react";

const TextInputWithFocusButton = () => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};

export default TextInputWithFocusButton;

// make a input with type file and hide it and make a button to upload a image
