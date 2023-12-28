const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    mountains: [Mountain]!
  }

  type Mountain {
    _id: ID
    name: String
    imageUrl: String
    description: String
    pass: String
    lat: Number
    long: Number
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
