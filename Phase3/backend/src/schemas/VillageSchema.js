import { gql } from 'apollo-server-express';

export const VillageSchema = gql`
    type Village {
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
    }

    type Query {
        getVillages: [Village]
        getVillageByName(Name: String!): Village
    }

    type Mutation {
        addVillage(Name: String!, Region: String!, Area: Int!, Latitude: Float!, Longitude: Float!, Path: String!, Categories: String!, Populationsize: String!, Agedistribution: String, Genderratios: String, Populationgrowth: String!): Village
        updateVillage(Name: String!, Region: String!, Area: Int, Latitude: Float, Longitude: Float, Path: String!, Categories: String!): Village
        updateData(Name: String!, Populationsize: String!, Agedistribution: String, Genderratios: String, Populationgrowth: String!): Village
        deleteVillage(Name: String!): Village
    }
`;
