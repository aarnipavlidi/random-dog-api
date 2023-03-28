import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar JSONObject

  type Dogs {
    message: JSONObject
    status: String!
  }
  type Query {
    getAllBreeds: Dogs
  }
`

export default typeDefs;