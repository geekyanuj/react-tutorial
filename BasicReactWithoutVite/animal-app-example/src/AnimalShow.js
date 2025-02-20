import { useState } from "react";
import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import heart from "./svg/heart.svg";
import "./AnimalShow.css";

const svgMap = {
  bird: bird,
  cat: cat,
  cow: cow,
  dog: dog,
  gator: gator,
  horse: horse,
};

function AnimalShow({ type }) {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  };

  return (
    <div onClick={handleClick} className="animal-show">
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img 
        className="heart"
        alt="heart" 
        src={heart} 
        style={{ width: 20 + 10 * click+'px' }} />
    </div>
  );
}
export default AnimalShow;
