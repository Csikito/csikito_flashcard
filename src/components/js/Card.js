import { useState } from "react";
import "../styles/Card.css";
import "remixicon/fonts/remixicon.css";

export default function Card(props) {
  const [isFront, setFront] = useState(true);

  const handleClick = () => {
    setFront((oldFront) => !oldFront);
  };

  const handleDelete = () => {
    props.cardDelete(props.id);
  };

  const cardClass = `card ${isFront ? "" : "flip"}`;
  const cardDeleteClass = `ri-close-circle-fill close-btn ${
    isFront ? "frontsideClose" : "backsideClose"
  }`;

  return (
    <div className={cardClass} onClick={handleClick}>
      <div className="card__front">{props.frontSide}</div>
      <div className="card__back">{props.backSide}</div>
      <i className={cardDeleteClass} onClick={handleDelete}></i>
    </div>
  );
}
