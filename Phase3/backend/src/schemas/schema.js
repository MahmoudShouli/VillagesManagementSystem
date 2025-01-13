import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar Date

  type Admin {
    id: ID
    fullName: String
    userName: String
    password: String
  }
  type GeneralInfo {
    villages: Int
    urban: Int
    popSize: Int
    avgArea: Float
  }

  type Chart {
    age: [Int]
    gender: [Int]
    bar: [Int]
  }

  type Message {
    sender: String
    senderFullName: String
    receiver: String
    content: String
    timestamp: Date
  }

  type Gallery {
    URL: String!
    Description: String!
  }

  type Village {
    Name: String
    Region: String
    Area: Int
    Latitude: Float
    Longitude: Float
    Path: String
    Categories: String
    Populationsize: String
    Agedistribution: String
    Genderratios: String
    Populationgrowth: String
  }

  type Query {
    generalInfo: GeneralInfo
    chart: Chart
    admins: [Admin]
    messages(sender: String, receiver: String): [Message]
    getGallery: [Gallery]
    getVillages: [Village]
    getVillageByName(Name: String!): Village
  }

  type Mutation {
    createMessage(
      sender: String
      receiver: String
      content: String
      timestamp: Date
    ): Message
    addGallery(URL: String!, Description: String!): Gallery
    addVillage(
      Name: String!
      Region: String!
      Area: Int!
      Latitude: Float!
      Longitude: Float!
      Path: String!
      Categories: String!
      Populationsize: String
      Agedistribution: String
      Genderratios: String
      Populationgrowth: String
    ): Village
    updateVillage(
      Name: String
      Region: String
      Area: Int
      Latitude: Float
      Longitude: Float
      Path: String
      Categories: String
    ): Village
    updateData(
      Name: String
      Populationsize: String!
      Agedistribution: String
      Genderratios: String
      Populationgrowth: String!
    ): Village
    deleteVillage(Name: String!): Village
  }
`;
