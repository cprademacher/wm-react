import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function IkonCards() {
  return (
    <div className="cards">
      <h1>Have an Ikon Pass? Here are your mountains!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://myskisearch.com/wp-content/uploads/Araphahoe-Basin-Ski-Area-Trail-Map.png"
              text='Known as "The Legend," A-Basin has the longest ski and ride season in Colorado, the highest restaurant in the U.S., and the steepest in-bounds terrain in the state. Challenge yourself or learn on our beginner terrain, all in a relaxed atmosphere and stunning setting.'
              label="ARAPAHOE BASIN"
              path="/weather"
            />
            <CardItem
              src="https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_800,q_auto,w_800/v1/production/trail_maps/835b7f313bb133afa7da31c1209d9728.jpg"
              text="When new snow at Aspen Highlands reaches mammoth proportions, you’re in for a epic day of Colorado’s signature light-and-dry powder. Insiders at the ski area recommend studying the trail map to find hidden gems that drop into gladed, untouched expert areas."
              label="ASPEN HIGHLANDS"
              path="/weather"
            />
            <CardItem
              src="https://www.freeride.com/img/resort/skimap/large/193.jpg"
              text="While Aspen is known throughout the world as a posh winter playground, more skiers are discovering the mountain’s challenging double blacks and chutes. In town, stop into the numerous galleries and the Aspen Art Museum or see a show at the Wheeler Opera House or the Harris Concert Hall."
              label="ASPEN MOUNTAIN"
              path="/weather"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_800,q_auto,w_800/v1/production/trail_maps/95f168cea962cf73d6de0d34e038228a.jpg"
              text="Buttermilk has a well-earned reputation as a great venue for beginner skiers and snowboarders. Wide, rolling trails are ideal for those just getting their snow legs, and none of its runs are rated expert. For an unprecedented 18 straight years, it has been the home of ESPN’s Winter X Games, where the likes of Olympians Shaun White, Hannah Teter, local Gretchen Bleiler and many more have captured snowboarding medals."
              label="BUTTERMILK"
              path="/weather"
            />
            <CardItem
              src="https://www.coppervacations.com/sites/default/files/uploads/copper_mountain_frontside_skiing_trail_map.jpeg"
              text="People who ski and ride Copper love to tout its perfect layout. They have Mother Nature to thank for arranging its slopes so adeptly: Beginner, intermediate and expert runs are each clustered with like-leveled terrain, ensuring beginners won’t make a surprise trip to the top of a steep, mogul-laden run."
              label="COPPER MOUNTAIN"
              path="/weather"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/salt-lake-city/eldora-mountain-resort/20190212183827/large.jpg"
              text="Eldora’s proximity to Boulder and Denver is one of the reasons it’s known as a “locals’ mountain.” The fact that they have terrain to keep the whole family busy all day doesn’t hurt either. The Eldora Nordic Center features a network of nearly 25 miles of peaceful cross-country ski and snowshoe trails just steps from the downhill ski area."
              label="ELDORA MOUNTAIN"
              path="/weather"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_800,q_auto,w_800/v1/production/trail_maps/5d7b5f6851c1b5715b1e6c84446dce08.jpg"
              text="The mountain itself is enormous. Snowmass trumpets that 36 Disneylands could fit within its boundaries. At 4,406 feet, “Snowmassive” also has one of the highest vertical rise of any ski area in the country, and runner-up for Colorado’s longest run — a staggering 5.3 miles of peaceful schussing before you even have to think about the lift line."
              label="SNOWMASS"
              path="/weather"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/steamboat/20181217173518/large.jpg"
              text="Steamboat feels so confident about the special-ness of its powder, it trademarked it so you’d know just where to find the genuine article: Champagne Powder®. It’s light, it’s dry, it’s smooth and it’s only found in this 112-year-old western town. Despite its size — six breathtaking peaks and 3,000 acres — Steamboat still manages to stay true to its friendly, down-home roots."
              label="STEAMBOAT"
              path="/weather"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/winter-park-resort/20150210135755/large.jpg"
              text="Winter Park proudly boasts award-winning diverse terrain, deep snow, friendly employees and top-notch lodging and dining options. If you’re looking for a bumpy ride, Winter Park is your destination. Skiing Magazine rated Mary Jane (one of the park’s three peaks) No. 1 in North America for mogul skiing."
              label="WINTER PARK"
              path="/weather"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IkonCards;
