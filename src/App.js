import "./App.css";
import Header from "./components/js/Header";
import CardForm from "./components/js/CardForm";
import CardList from "./components/js/CardList";
import Notification from "./components/js/Notification";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [cards, setCards] = useState([]);
  const [notification, setNotification] = useState(false);

  useEffect(() => {
    if (notification === true) {
      setTimeout(() => {
        setNotification((oldNotification) => (oldNotification = false));
      }, 5000);
    }
  });

  const cardData = (frontSide, backSide) => {
    if (cards.find((data) => data.frontSide === frontSide)) {
      setNotification((oldNotification) => (oldNotification = true));
    } else {
      const newCard = {
        frontSide,
        backSide,
        id: uuidv4(),
      };
      setCards((oldCards) => [...oldCards, newCard]);
    }
  };

  const cardDelete = (id) => {
    setCards((oldCard) => oldCard.filter((data) => data.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <CardForm cardData={cardData} />
      <CardList cards={cards} cardDelete={cardDelete} />
      <Notification notification={notification} />
    </div>
  );
}

export default App;
