import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar JSONObject

  type ChosenDog {
    breed: String
    likes: Int
    dislikes: Int
  }

  type Dogs {
    message: JSONObject
    status: String!
  }

  type Dog {
    message: String!
    status: String!
    data: ChosenDog!
  }

  type Query {
    getAllDogs: Dogs
    getChosenDog(breed: String!): Dog
  }

  type Mutation {
    giveLikesForChosenDog(breed: String!): ChosenDog
    giveDislikesForChosenDog(breed: String!): ChosenDog
  }
`

export default typeDefs;