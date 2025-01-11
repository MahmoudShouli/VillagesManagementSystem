import GeneralModel from '../models/GeneralInfoModel.js'
import ChartModel from '../models/ChartsModel.js'
import AdminModel from '../models/AdminModel.js'

export const resolvers = {
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
                return chartData
            } catch (error) {
                throw new Error('Failed to fetch chart data')
            }
        },
        admins: async() => {
            try {
                const admins = await AdminModel.find()
                return admins
            } catch (error) {
                throw new Error('Failed to fetch chart data')
            }
        }

    },
}
