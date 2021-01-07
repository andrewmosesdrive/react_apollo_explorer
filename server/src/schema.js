const { gql } = require("apollo-server");

// scalar type = primitives, else object type
const typeDefs = gql`
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }

  type Rocket {
      id: ID!
      email: String!
      trips: [Launch]!
      token: String
  }

  type User {
      id: ID!
      email: String!
      trips: [Launch]!
      token: String
  }
  
  type Mission {
      name: String
      missionPatch(size: PatchSize: String)
  }

  enum PatchSize {
      SMALL
      LARGE
  }
`;

module.exports = typeDefs;
