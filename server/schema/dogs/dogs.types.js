import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar JSONObject

  type Dogs {
    message: JSONObject
    status: String!
  }

  type Dog {
    message: [String!]
    status: String!
  }

  type Query {
    getAllDogs: Dogs
  }

  type Mutation {
    getChosenDog(name: String!): Dog
  }
`

export default typeDefs;