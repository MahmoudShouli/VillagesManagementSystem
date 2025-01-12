import { gql } from 'apollo-server-express';

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

    type Query {
        generalInfo: GeneralInfo
        chart: Chart
        admins: [Admin]
        messages(sender: String, receiver: String): [Message]
    }
`;
