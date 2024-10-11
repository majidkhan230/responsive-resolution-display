import React, { useContext, useEffect, useState } from "react";
import { themeContext } from "../context/MyProvider";

const ShowResolution = () => {
  const { theme, setTheme } = useContext(themeContext);

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateDimensions = () => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  };
  //   console.log("mounted");
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    // console.log("Updated ");
    // updateDimensions();

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [dimensions]);

  const { width, height } = dimensions;
  return (
    <div
      className={`${
        theme === "light" ? "bg-white text-black" : "bg-[#23272F] text-[#58C4DC]"
      } min-h-screen flex flex-col items-center justify-center`}
    >
      <h1 className="text-4xl font-bold mb-4">My Screen Resolution</h1>
      <p className="text-2xl">
        Width: {width}px, Height: {height}px
      </p>
      <button
        onClick={() => {
          // console.log(clicked)
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
        }}
        className="mt-6 transition-transform rounded-full active:scale-95 hover:bg-primary/5 hover:dark:bg-primary-dark/5 outline-link"
      >
        {theme === "light" ? (
         <i className="ri-moon-line text-2xl"></i>
        ) : (
          <i className="ri-moon-fill text-2xl"></i>
        )}
      </button>
    </div>
  );
};

export default ShowResolution;
