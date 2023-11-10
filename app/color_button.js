import React from 'react';

const ColorButton = ({ color, onClick }) => {
   return (
     <div className="box1">
       <button className="box" onClick={onClick}>{color}</button>
     </div>
   );
};

export default ColorButton;





