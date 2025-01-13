import AdminModel from '../models/AdminModel.js';

export const resolvers = {
  Mutation: {
    addAdmin: async (_, { userName, password, fullName }) => {
      try {
        const user = await AdminModel.findOne({userName: userName})
        if (user) return null;

        const admin = new AdminModel({ userName, password, fullName });
        await admin.save();
        return admin;
      } catch (error) {
        console.error('Error adding admin:', error);
        throw new Error('Failed to add admin');
      }
    },
  },
};