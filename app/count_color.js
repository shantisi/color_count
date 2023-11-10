import ColorDisplay from './color_display';

const CountColor=({count})=> {
  return (
    <div className="count-box">
    
        <div className="red1">red : {count["red"]}</div>
        <div className="blue1">blue : {count["blue"]}</div>
        <div className="orange1">orange : {count["orange"]}</div>
        <div className="green1">green : {count["green"]}</div>
    </div>
   
  );    
};
export default CountColor;
