import { gql } from 'apollo-server-express';

export const AdminSchema = gql`
    type Admin {
        userName: String!
        password: String!
        fullName: String!
    }

    type Mutation {
        addAdmin(userName: String!, password: String!, fullName: String!): Admin
    }
`;
