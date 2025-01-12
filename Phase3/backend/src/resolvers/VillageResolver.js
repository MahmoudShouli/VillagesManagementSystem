import VillageModel from '../models/VillageModel.js';

const resolvers = {
  Query: {
    getVillages: async () => {
      try {
        const villageData = await VillageModel.find();
        return villageData;
      } catch (error) {
        console.error('Error fetching village data:', error);
        throw new Error('Failed to fetch village data');
      }
    },
    getVillageByName: async (_, { Name }) => {
      try {
        const villageData = await VillageModel.findOne({ Name });
        return villageData;
      } catch (error) {
        console.error('Error fetching village data:', error);
        throw new Error('Failed to fetch village data');
      }
    },
  },
  Mutation: {
    addVillage: async (_, { Name, Region, Area, Latitude, Longitude, Path, Categories, Populationsize, Agedistribution, Genderratios, Populationgrowth }) => {
      try {
        const villagefind = await VillageModel.findOne({ Name });
        if (villagefind) return null;

        const village = new VillageModel({ Name, Region, Area, Latitude, Longitude, Path, Categories, Populationsize, Agedistribution, Genderratios, Populationgrowth });
        await village.save();
        return village;
      } catch (error) {
        console.error('Error adding village:', error);
        throw new Error('Failed to add village');
      }
    },
    updateVillage: async (_, { NameUpdated, Name, Region, Area, Latitude, Longitude, Path, Categories }) => {
      try {
    const fixedPath = typeof Path === 'string' ? Path : Path.name;
        var newvalues = { $set: { Name: Name, Region: Region, Area: Area, Latitude: Latitude, Longitude: Longitude, Path: Path, Categories: Categories } };
        const updatedVil = await VillageModel.updateOne({Name: NameUpdated}, newvalues);
    
        return updatedVil;
      } catch (error) {
        console.error('Error updating village:', error);
        throw new Error('Failed to update village');
      }
    },
    updateData: async (_, { NameUpdated, Populationsize, Agedistribution, Genderratios, Populationgrowth }) => {
      try {
        var newvalues = { $set: { Populationsize: Populationsize, Agedistribution: Agedistribution, Genderratios: Genderratios, Populationgrowth: Populationgrowth } };
        const village = await VillageModel.updateOne({ Name:NameUpdated }, newvalues);
        console.log(village);
        return village;
      } catch (error) {
        console.error('Error updating village data:', error);
        throw new Error('Failed to update village data');
      }
    },
    deleteVillage: async (_, { Name }) => {
      try {
        const village = await VillageModel.deleteOne({ Name });

      } catch (error) {
        console.error('Error deleting village:', error);
        throw new Error('Failed to delete village');
      }
    },
  },
};

export default resolvers;