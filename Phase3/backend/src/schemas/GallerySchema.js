import { gql } from 'apollo-server-express';

export const GallerySchema = gql`
    type Gallery {
        URL: String!
        Description: String!
    }

    type Query {
        getGallery: [Gallery]
    }

    type Mutation {
        addGallery(URL: String!, Description: String!): Gallery
    }
`;
