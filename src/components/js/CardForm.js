import { useState } from "react";
import "../styles/CardForm.css";

export default function CardForm(props) {
  const [frontSide, setFrontSide] = useState("");
  const [backSide, setBackSide] = useState("");

  const handleFrontSideCahnge = (e) => {
    setFrontSide(e.target.value);
  };
  const handleBackSideCahnge = (e) => {
    setBackSide(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.cardData(frontSide, backSide);
  };

  return (
    <div className="form__input">
      <form action="#" onSubmit={handleSubmit} className="card__form">
        <label htmlFor="frontSide">
          FrontSide:
          <input
            type="text"
            name="frontSide"
            id="frontSide"
            placeholder="..."
            value={frontSide}
            onChange={handleFrontSideCahnge}
            required
          />
        </label>
        <label htmlFor="backSide">
          BackSide:
          <input
            type="text"
            name="backSide"
            id="backSide"
            placeholder="..."
            value={backSide}
            onChange={handleBackSideCahnge}
            required
          />
        </label>
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="submit__btn"
        />
      </form>
    </div>
  );
}
