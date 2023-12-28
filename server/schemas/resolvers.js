const { User, Mountain } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("mountains");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("mountains");
    },
    mountains: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Mountain.find(params).sort({ createdAt: -1 });
    },
    mountain: async (parent, { _id }) => {
      return Mountain.findOne({ _id });
    },
  },
};

module.exports = resolvers;
