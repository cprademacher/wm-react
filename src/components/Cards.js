import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import mountains from "../db/mountains.json";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these awesome mountains!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {mountains &&
              mountains.map((mountain) => (
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

export default Cards;
