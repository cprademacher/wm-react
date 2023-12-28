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
    mountain: async (parent, { thoughtId }) => {
      return Mountain.findOne({ _id: thoughtId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
