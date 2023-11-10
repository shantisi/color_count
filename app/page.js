"use client"
import React, { useState } from "react";
import ColorButton from './color_button'; 
import CountColor from './count_color';
import ColorDisplay from './color_display';

function Page() {
  const initialCounts = {
    red:0,
    blue:0,
    orange:0,
    green: 0,
  };
  const [counts, setCounts] = useState(initialCounts);
  const [colour,setcolour]=useState("red")

  const handleIncrement = (color) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [color]: prevCounts[color] + 1,
    }));
    setcolour(color)
  };

  return (
    <>
      <ColorDisplay count={counts} colour={colour}/>  
      <div className="color_button_container">
        
        <ColorButton color="red" onClick={() => handleIncrement("red")} />
        <ColorButton color="blue" onClick={() => handleIncrement("blue")} />
        <ColorButton color="orange" onClick={() => handleIncrement("orange")} />
        <ColorButton color="green" onClick={() => handleIncrement("green")} />
      </div>
    </>
  );
}

export default Page;

