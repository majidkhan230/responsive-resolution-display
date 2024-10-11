import React, { useRef, useState } from "react";

const App = () => {
  // const [counter, setCounter] = useState(0);
  // const num = useRef(0);

  // const numUpdate = () => {
  //   num.current += 1;
  //   console.log("updated", num.current);
  // };
  // console.log(useRef(0));

  // 2nd scnerio
  const inputRef = useRef(null);
  const btnRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.classList.add("input");
    btnRef.current.setAttribute("disabled", "disabled");

    console.log(inputRef.current.type);
  };
  const removeAtt = () => {
    btnRef.current.removeAttribute("disabled", "disabled");
  };

  const imgRef = useRef(null);
  const hanleImg = () => {
    console.log(imgRef.current.src);
  };

  return (
    <div>
      <input ref={inputRef} placeholder="hello" type="text" />
      <button ref={btnRef} onClick={handleClick}>
        get plac
      </button>
      <button onClick={removeAtt}>enabled</button>
      <img ref={imgRef} onClick={hanleImg} src="/vite.svg" />
      {/* <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <p>{num.current}</p>
      <button onClick={numUpdate}>Ref click</button> */}
    </div>
  );
};

export default App;
