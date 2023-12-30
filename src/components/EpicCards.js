import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function EpicCards() {
  return (
    <div className="cards">
      <h1>Have an Epic Pass? Here are your mountains!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://files.skimap.org/g7h3ja29nc7c60g5dquqp6damw5x"
              text="Beaver Creek charms with fantastic extras: Heated moving walkways, fresh-baked cookies, a first-tracks program for early risers, a white-carpet club, wine-and-snowshoe excursions and acres of corduroy and powder waiting for skiers and riders to swish through."
              label="BEAVER CREEK"
              path="/weather/beaver-creek-mountain"
            />
            <CardItem
              src="https://www.visitbreck.com/sites/default/files/uploads/trail_maps_1.jpg"
              text="Breckenridge is one of North America’s most popular resorts, in part because of its variety of terrain: long groomed trails, monster mogul runs, steep chutes, glades and plenty of family-friendly beginner areas. The resort was also one of the first to allow snowboarding on its slopes, and its Freeway Terrain Park is arguably one of the best in North America."
              label="BRECKENRIDGE"
              path="/weather/breckenridge-mountain"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://cdn.ski/UjqutMyKAtDVRmbK.jpeg"
              text="Crested Butte has it all: wide-open green and blue trails, expert bowls and plenty of unexplored lines and uncrowded slopes. One thing to really take advantage of, however, is the CB Backcountry Guide. Professional instructors teach would-be backcountry enthusiasts how to navigate safely and explore untouched powder."
              label="CRESTED BUTTE"
              path="/weather/crested-butte-mountain"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/solvista-golf-ski-ranch-silver-creek/20141211133509/large.jpg"
              text="Ski Granby Ranch’s fun lesson programs, easy pace and affordable prices make it a long-time family favorite. There’s no better place to wind down at the end of the day than the fire pit at the base of the mountain, where the hot cocoa flows and everyone recounts the day’s snowy triumphs."
              label="GRANBY RANCH"
              path="/weather/granby-ranch-mountain"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/keystone/20161208212713/large.jpg"
              text="Keystone boasts three mountains full of bowls, steeps, trails, a lift-served tubing hill and one of the state’s longest ski days. Skiers can watch the sun set at 11,000 feet and ski into the night. After a day on the slopes, a moonlight gondola ride takes you to the top of North Peak for a romantic dinner at Alpenglow Stube."
              label="KEYSTONE"
              path="/weather/keystone-mountain"
            />
            <CardItem
              src="https://dam-assets.vailresorts.com/is/image/vailresorts/22248-Vail-Winter22-23-MAP-And-Sponsors-TMobile-R2-FrontSide?wid=4000&hei=2467&resMode=sharp2"
              text="Vail sets the standard for ski resorts in North America, and the bar is only getting higher. With its famed seven back bowls, 193 trails and a staggering 5,289 skiable acres, it’s one of the nation’s largest ski areas. Add to that an array of luxury accommodations and residences, shopping and dining, and endless off-slope activities."
              label="VAIL"
              path="/weather/vail-mountain"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EpicCards;
