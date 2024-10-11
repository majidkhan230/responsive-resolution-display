import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [dimensions, setDimentions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const updateDimention = () => {
    setDimentions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  console.log("mounted");
  useEffect(() => {
    window.addEventListener("resize", updateDimention);
    console.log("Updated ");
    // clean up function
    return () => {
      window.removeEventListener("resize", updateDimention);
      console.log("unmounted");
    };
  }, [dimensions]);
  return (
    <div>
      <h1>
        {dimensions.width} X {dimensions.height}
      </h1>
    </div>
  );
};

export default CleanUp;
