import CountColor from './count_color';

const ColorDisplay = ({count,colour}) => {
  return (
   <div className="colour_box">
      <div className={colour}></div>
      <CountColor count={count}/>
   </div>
    );
};
export default ColorDisplay;



