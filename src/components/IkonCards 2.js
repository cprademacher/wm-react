import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import mountains from "../db/mountains.json";

function IkonCards() {
  const ikonMountains = mountains.filter(
    (mountain) => mountain.pass === "ikon"
  );

  return (
    <div className="cards">
      <h1>Have an Ikon Pass? Here are your mountains!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {ikonMountains.map((mountain) => (
              <CardItem
                key={mountain.id}
                src={mountain.imageUrl}
                text={mountain.description}
                label={mountain.name}
                path={`/weather/${mountain.id}`}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IkonCards;
