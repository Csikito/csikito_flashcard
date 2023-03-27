import { getAllByDisplayValue } from "@testing-library/react";
import Card from "./Card";
import "../styles/CardList.css";

export default function CardList(props) {
  return (
    <div className="cards">
      {props.cards.map((data) => (
        <Card key={data.id} cardDelete={props.cardDelete} {...data} />
      ))}
    </div>
  );
}
