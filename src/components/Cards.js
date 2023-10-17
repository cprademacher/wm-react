import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text='Known as "The Legend," A-Basin has the longest ski and ride season in Colorado, the highest restaurant in the U.S., and the steepest in-bounds terrain in the state. Challenge yourself or learn on our beginner terrain, all in a relaxed atmosphere and stunning setting.'
              label="ARAPAHOE BASIN"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="When new snow at Aspen Highlands reaches mammoth proportions, you’re in for a epic day of Colorado’s signature light-and-dry powder. Insiders at the ski area recommend studying the trail map to find hidden gems that drop into gladed, untouched expert areas."
              label="ASPEN HIGHLANDS"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="ASPEN MOUNTAIN"
              label="IKON PASS"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="BEAVER CREEK"
              label="EPIC PASS"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="BRECKENRIDGE"
              label="EPIC PASS"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="BUTTERMILK"
              label="IKON PASS"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="COPPER MOUNTAIN"
              label="IKON PASS"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="CRESTED BUTTE"
              label="EPIC PASS"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="ECHO MOUNTAIN"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="COPPER MOUNTAIN"
              label="IKON PASS"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="CRESTED BUTTE"
              label="EPIC PASS"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="BUTTERMILK"
              label="IKON PASS"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="COPPER MOUNTAIN"
              label="IKON PASS"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="CRESTED BUTTE"
              label="EPIC PASS"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;