import { gql } from 'apollo-server-express';

export const typeDefs = gql`
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

    type Query {
        generalInfo: GeneralInfo
        chart: Chart
    }
`;
