import { GraphQLScalarType, Kind } from 'graphql'
import GeneralModel from '../models/GeneralInfoModel.js'
import ChartModel from '../models/ChartsModel.js'
import AdminModel from '../models/AdminModel.js'
import MessageModel from '../models/MessageModel.js'

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Custom scalar for Date type',
    serialize(value) {
        return value.toISOString()
    },
    parseValue(value) {
        return new Date(value);
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            return new Date(ast.value)
        }
        return null
    },
})

export const resolvers = {
    Date: dateScalar, 
    Query: {
        generalInfo: async () => {
            try {
                const generalInfo = await GeneralModel.findOne()
                return generalInfo
            } catch (error) {
                throw new Error('Failed to fetch general info')
            }
        },
        chart: async () => {
            try {
                const chartData = await ChartModel.findOne()
                return chartData;
            } catch (error) {
                throw new Error('Failed to fetch chart data')
            }
        },
        admins: async () => {
            try {
                const admins = await AdminModel.find()
                return admins
            } catch (error) {
                throw new Error('Failed to fetch chart data')
            }
        },
        messages: async (parent, args) => {
            try {
                const sender = await AdminModel.findOne({fullName: args.sender})
                const receiver = await AdminModel.findOne({fullName: args.receiver})
                const messages1 = await MessageModel.find({sender: sender.userName, receiver: receiver.userName})
                const messages2 = await MessageModel.find({sender: receiver.userName, receiver: sender.userName})
                
                let messages = [...messages1, ...messages2]

                messages = messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
                
                return messages
            } catch (error) {
                throw new Error('Failed to fetch messages')
            }
        }
    },

    Message: {
        senderFullName: async (parent) => {
            try {
                const admin = await AdminModel.findOne({userName: parent.sender})
                return admin ? admin.fullName : null
            } catch (error) {
                throw new Error('Failed to fetch sender full name');
            }
        }
    }
}
