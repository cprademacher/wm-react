import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import mountains from "../db/mountains.json";

function EpicCards() {
  const epicMountains = mountains.filter(
    (mountain) => mountain.pass === "epic"
  );

  return (
    <div className="cards">
      <h1>Have an Epic Pass? Here are your mountains!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {epicMountains.map((mountain) => (
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

export default EpicCards;
