import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these awesome mountains!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://myskisearch.com/wp-content/uploads/Araphahoe-Basin-Ski-Area-Trail-Map.png"
              text='Known as "The Legend," A-Basin has the longest ski and ride season in Colorado, the highest restaurant in the U.S., and the steepest in-bounds terrain in the state. Challenge yourself or learn on our beginner terrain, all in a relaxed atmosphere and stunning setting.'
              label="ARAPAHOE BASIN"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_800,q_auto,w_800/v1/production/trail_maps/835b7f313bb133afa7da31c1209d9728.jpg"
              text="When new snow at Aspen Highlands reaches mammoth proportions, you’re in for a epic day of Colorado’s signature light-and-dry powder. Insiders at the ski area recommend studying the trail map to find hidden gems that drop into gladed, untouched expert areas."
              label="ASPEN HIGHLANDS"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://www.freeride.com/img/resort/skimap/large/193.jpg"
              text="While Aspen is known throughout the world as a posh winter playground, more skiers are discovering the mountain’s challenging double blacks and chutes. In town, stop into the numerous galleries and the Aspen Art Museum or see a show at the Wheeler Opera House or the Harris Concert Hall."
              label="ASPEN MOUNTAIN"
              path="/services"
            />
            <CardItem
              src="https://files.skimap.org/g7h3ja29nc7c60g5dquqp6damw5x"
              text="Beaver Creek charms with fantastic extras: Heated moving walkways, fresh-baked cookies, a first-tracks program for early risers, a white-carpet club, wine-and-snowshoe excursions and acres of corduroy and powder waiting for skiers and riders to swish through."
              label="BEAVER CREEK"
              path="/services"
            />
            <CardItem
              src="https://www.visitbreck.com/sites/default/files/uploads/trail_maps_1.jpg"
              text="Breckenridge is one of North America’s most popular resorts, in part because of its variety of terrain: long groomed trails, monster mogul runs, steep chutes, glades and plenty of family-friendly beginner areas. The resort was also one of the first to allow snowboarding on its slopes, and its Freeway Terrain Park is arguably one of the best in North America."
              label="BRECKENRIDGE"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_800,q_auto,w_800/v1/production/trail_maps/95f168cea962cf73d6de0d34e038228a.jpg"
              text="Buttermilk has a well-earned reputation as a great venue for beginner skiers and snowboarders. Wide, rolling trails are ideal for those just getting their snow legs, and none of its runs are rated expert. For an unprecedented 18 straight years, it has been the home of ESPN’s Winter X Games, where the likes of Olympians Shaun White, Hannah Teter, local Gretchen Bleiler and many more have captured snowboarding medals."
              label="BUTTERMILK"
              path="/services"
            />
            <CardItem
              src="https://www.coppervacations.com/sites/default/files/uploads/copper_mountain_frontside_skiing_trail_map.jpeg"
              text="People who ski and ride Copper love to tout its perfect layout. They have Mother Nature to thank for arranging its slopes so adeptly: Beginner, intermediate and expert runs are each clustered with like-leveled terrain, ensuring beginners won’t make a surprise trip to the top of a steep, mogul-laden run."
              label="COPPER MOUNTAIN"
              path="/services"
            />
            <CardItem
              src="https://cdn.ski/UjqutMyKAtDVRmbK.jpeg"
              text="Crested Butte has it all: wide-open green and blue trails, expert bowls and plenty of unexplored lines and uncrowded slopes. One thing to really take advantage of, however, is the CB Backcountry Guide. Professional instructors teach would-be backcountry enthusiasts how to navigate safely and explore untouched powder."
              label="CRESTED BUTTE"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/echo-mountain/20190121193926/xlarge.jpg"
              text="Just south of Idaho Springs you'll find 60 acres of skiable terrain, making it the closest ski resort to Denver. Complete with a redesigned lodge featuring a restaurant and bar overlooking the Continental Divide, Echo Mountain is an affordable option for skiers and boarders along the Front Range. For those who can’t get up there before the work day ends, the slopes are open til 9pm for skiing under the stars."
              label="ECHO MOUNTAIN"
              path="/services"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/salt-lake-city/eldora-mountain-resort/20190212183827/large.jpg"
              text="Eldora’s proximity to Boulder and Denver is one of the reasons it’s known as a “locals’ mountain.” The fact that they have terrain to keep the whole family busy all day doesn’t hurt either. The Eldora Nordic Center features a network of nearly 25 miles of peaceful cross-country ski and snowshoe trails just steps from the downhill ski area."
              label="ELDORA MOUNTAIN"
              path="/services"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/solvista-golf-ski-ranch-silver-creek/20141211133509/large.jpg"
              text="Ski Granby Ranch’s fun lesson programs, easy pace and affordable prices make it a long-time family favorite. There’s no better place to wind down at the end of the day than the fire pit at the base of the mountain, where the hot cocoa flows and everyone recounts the day’s snowy triumphs."
              label="GRANBY RANCH"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://files.skimap.org/2pfbbaezjaqmo0j4vjs2j06rjg2p"
              text="Eleven miles west of Durango, Hesperus has been is an especially great option for families in the southwest part of Colorado since 1962, and it's the region's largest night-skiing operation. Hesperus' unassuming, small-ski-area ambiance makes its 26 trails and 160 acres an idyllic winter escape."
              label="HESPERUS SKI AREA"
              path="/services"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/howelsen-hill/20190215174428/large.jpg"
              text="Routinely in the shadow of its much larger neighbor, Steamboat, it's easy to forget Howelsen's pedigree. Open since 1915, it's the oldest ski area in Colorado, has the largest natural ski-jumping complex in North America and has long been a training ground for Olympic skiers. It’s also one a handful of resorts in Colorado to offer after-dark skiing. Floating through the night beneath the glow of the slope’s lights is an other-worldly experience."
              label="HOWELSEN HILL SKI AREA"
              path="/services"
            />
            <CardItem
              src="https://images.squarespace-cdn.com/content/v1/5dade5d6f3de04278ab5ade9/1572538676771-GIKU5P0148RTON4N579G/image-asset.jpeg?format=2500w"
              text="Situated in Silverton, Kendall Mountain is loved by locals for its intimate, family-friendly ambiance. The ski area has four groomed trails, a terrain park and tree skiing. Off-the-slopes activities include ice skating, sledding, snowshoeing and cross-country skiing."
              label="KENDALL MOUNTAIN SKI AREA"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/keystone/20161208212713/large.jpg"
              text="Keystone boasts three mountains full of bowls, steeps, trails, a lift-served tubing hill and one of the state’s longest ski days. Skiers can watch the sun set at 11,000 feet and ski into the night. After a day on the slopes, a moonlight gondola ride takes you to the top of North Peak for a romantic dinner at Alpenglow Stube."
              label="KEYSTONE"
              path="/services"
            />
            <CardItem
              src="https://files.skimap.org/xme65bmmsvtidi5dg878jvjvnplm"
              text="One of Loveland’s favorite things to brag about is that it averages nearly 400 inches of snow each season, more than any other Front Range ski area. You’re more likely to find untracked snow even days after a storm. For added convenience, they have two separate base areas, one catering to beginners with wide-open terrain and one for intermediate to advanced skiers and riders with runs steep and deep."
              label="LOVELAND SKI AREA"
              path="/services"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/monarch-mountain/20190927174743/large.jpg"
              text="Monarch’s perch, high atop the Continental Divide, makes it one of the best spots in the state for fresh powder. A short walk from the parking lot to the lifts, roomy slopes and one of Colorado’s most laid-back attitudes has made it a hit with families. Ride to the top of the narrow, between-tree Panorama Lift for 360-degree views of the divide."
              label="MONARCH MOUNTAIN"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/michigan/big-powderhorn-mountain/20190205185311/large.jpg"
              text="This resort near Grand Junction has one of the most unique views in Colorado’s ski country. Located on the Grand Mesa, the largest flat-top mountain in the world, skiers and riders will see something more like the Grand Canyon than the typical alpine view."
              label="POWDERHORN"
              path="/services"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/durango-mountain-resort/20181218175225/large.jpg"
              text="Purgatory's (formerly Durango Mountain Resort) unintimidating slopes, Old West fun park and Pitchfork Terrain Garden beginners’ park are a few things that make it a hit with families. Within its boundaries are 105 trails, four terrain parks, a racing course and 35,000 acres of snowcat skiing and snowboarding."
              label="PURGATORY"
              path="/services"
            />
            <CardItem
              src="https://images.prismic.io/snowpak/5310ef0d-5061-489b-9806-060d283e974e_silverton-map.jpg?auto=compress%2Cformat&rect=0%2C0%2C2000%2C1031&w=1920&fit=max"
              text="As Silverton’s motto proclaims, this southwest Colorado ski area is “All thrills, no frills.” Colorado’s highest and steepest ski mountain serves up un-groomed, no-easy-way-down expert terrain for those who prefer skiing the old-school way."
              label="SILVERTON MOUNTAIN"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_800,q_auto,w_800/v1/production/trail_maps/2709d5742fd3fbae7ea6ffc4e0795d42.jpg"
              text="Ski Cooper is famous for being the former training site for the 10th Mountain Division, the legendary World War II ski troops. Its sweeping runs follow some of the same paths used by the soldiers who skied Europe’s mountain battlefields. Today, it’s popular with families looking for a cheerful and low-stress skiing holiday."
              label="SKI COOPER"
              path="/services"
            />
            <CardItem
              src="https://res.cloudinary.com/liftopia/image/upload/c_fit,d_defaults:default_logo_1.png,f_auto,h_800,q_auto,w_800/v1/production/trail_maps/5d7b5f6851c1b5715b1e6c84446dce08.jpg"
              text="The mountain itself is enormous. Snowmass trumpets that 36 Disneylands could fit within its boundaries. At 4,406 feet, “Snowmassive” also has one of the highest vertical rise of any ski area in the country, and runner-up for Colorado’s longest run — a staggering 5.3 miles of peaceful schussing before you even have to think about the lift line."
              label="SNOWMASS"
              path="/services"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/steamboat/20181217173518/large.jpg"
              text="Steamboat feels so confident about the special-ness of its powder, it trademarked it so you’d know just where to find the genuine article: Champagne Powder®. It’s light, it’s dry, it’s smooth and it’s only found in this 112-year-old western town. Despite its size — six breathtaking peaks and 3,000 acres — Steamboat still manages to stay true to its friendly, down-home roots."
              label="STEAMBOAT"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://sunlightmtn.com/images/2022/10/06/sunlight_trailmap_2022_final_web.jpg"
              text="Affordability, friendliness and a mix of terrain are Sunlight’s hallmarks. Hundreds of acres of mild greens, intermediate slopes and black-diamond extremes satisfy all abilities. The slope’s proximity to the world’s largest hot springs pool at Glenwood Hot Springs lets you reward your ski muscles’ big day with a long soak."
              label="SUNLIGHT MOUNTAIN"
              path="/services"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/telluride/20181004155715/large.jpg"
              text="Driving into the authentic, Victorian-era town of Telluride, it’s hard to imagine 2,000 hundred acres of ski terrain and towering, glossy, modern resort amenities are moments away. That’s because it’s all hidden behind a soaring mountain ridge. A quick gondola ride ferries you to everything from refined, groomed runs to challenging moguls to freestyle parks."
              label="TELLURIDE"
              path="/services"
            />
            <CardItem
              src="https://dam-assets.vailresorts.com/is/image/vailresorts/22248-Vail-Winter22-23-MAP-And-Sponsors-TMobile-R2-FrontSide?wid=4000&hei=2467&resMode=sharp2"
              text="Vail sets the standard for ski resorts in North America, and the bar is only getting higher. With its famed seven back bowls, 193 trails and a staggering 5,289 skiable acres, it’s one of the nation’s largest ski areas. Add to that an array of luxury accommodations and residences, shopping and dining, and endless off-slope activities."
              label="VAIL"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/winter-park-resort/20150210135755/large.jpg"
              text="Winter Park proudly boasts award-winning diverse terrain, deep snow, friendly employees and top-notch lodging and dining options. If you’re looking for a bumpy ride, Winter Park is your destination. Skiing Magazine rated Mary Jane (one of the park’s three peaks) No. 1 in North America for mogul skiing."
              label="WINTER PARK"
              path="/services"
            />
            <CardItem
              src="https://s3.onthesnow.com/images/trailmaps/colorado/wolf-creek-ski-area/20200114155606/large.jpg"
              text="Wolf Creek Ski Area is famous for getting the most snow of any resort in Colorado — an astounding annual average of 430 inches. So if you like floating through powder, this is your destination. Wolf Pups ski school is the ideal way to ensure the kids become lifelong powder lovers."
              label="WOLF CREEK"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
