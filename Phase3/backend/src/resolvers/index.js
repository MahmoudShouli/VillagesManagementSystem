import GeneralModel from '../models/GeneralInfoModel.js'
import ChartModel from '../models/ChartsModel.js'

export const resolvers = {
    Query: {
        generalInfo: async () => {
            try {
                const generalInfo = await GeneralModel.findOne();
                return generalInfo;
            } catch (error) {
                console.error('Error fetching general info:', error);
                throw new Error('Failed to fetch general info');
            }
        },
        chart: async () => {
            try {
                const chartData = await ChartModel.findOne();
                return chartData;
            } catch (error) {
                console.error('Error fetching chart data:', error);
                throw new Error('Failed to fetch chart data');
            }
        },
    },
};
