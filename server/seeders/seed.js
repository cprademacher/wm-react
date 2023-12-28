const db = require("../config/connection");
const { User, Mountain } = require("../models");
const userSeeds = require("./userSeeds.json");
const mountainSeeds = require("./mountainSeeds.json");
const cleanDB = require("./cleanDb");

db.once("open", async () => {
  try {
    await cleanDB("Mountain", "mountains");

    await cleanDB("User", "users");

    await User.create(userSeeds);
    await Mountain.create(mountainSeeds);

    for (let i = 0; i < mountainSeeds.length; i++) {
      const { _id } = await Mountain.create(mountainSeeds[i]);
      const user = await User.findOneAndUpdate();
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("all done!");
  process.exit(0);
});
