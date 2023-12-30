import React from "react";
import { useQuery } from "@apollo/client";
import CardItem from "./CardItem";
import "./Cards.css";

import { QUERY_MOUNTAINS } from "../utils/queries";

function Cards() {
  const { loading, data } = useQuery(QUERY_MOUNTAINS);
  const mountains = data?.mountains || [];

  return (
    <div className="cards">
      <h1>Check out these awesome mountains!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {loading ? (
              <div>Loading...</div>
            ) : (
              mountains &&
              mountains.map((mountain) => (
                <CardItem
                  key={mountain._id}
                  src={mountain.imageUrl}
                  text={mountain.description}
                  label={mountain.name}
                  path={`/weather/${mountain._id}`}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
