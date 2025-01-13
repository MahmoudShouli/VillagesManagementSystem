import { GraphQLScalarType, Kind } from "graphql";
import GeneralModel from "../models/GeneralInfoModel.js";
import ChartModel from "../models/ChartsModel.js";
import AdminModel from "../models/AdminModel.js";
import MessageModel from "../models/MessageModel.js";
import GalleryModel from "../models/GalleryModel.js";
import VillageModel from "../models/VillageModel.js";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Custom scalar for Date type",
  serialize(value) {
    return value.toISOString();
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});

export const resolvers = {
  Date: dateScalar,
  Query: {
    generalInfo: async () => {
      try {
        const generalInfo = await GeneralModel.findOne();
        return generalInfo;
      } catch (error) {
        throw new Error("Failed to fetch general info");
      }
    },
    chart: async () => {
      try {
        const chartData = await ChartModel.findOne();
        return chartData;
      } catch (error) {
        throw new Error("Failed to fetch chart data");
      }
    },
    admins: async () => {
      try {
        const admins = await AdminModel.find();
        return admins;
      } catch (error) {
        throw new Error("Failed to fetch chart data");
      }
    },
    messages: async (parent, args) => {
      try {
        const sender = await AdminModel.findOne({ fullName: args.sender });
        const receiver = await AdminModel.findOne({ fullName: args.receiver });
        const messages1 = await MessageModel.find({
          sender: sender.userName,
          receiver: receiver.userName,
        });
        const messages2 = await MessageModel.find({
          sender: receiver.userName,
          receiver: sender.userName,
        });

        let messages = [...messages1, ...messages2];

        messages = messages.sort(
          (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
        );

        return messages;
      } catch (error) {
        throw new Error("Failed to fetch messages");
      }
    },
    getGallery: async () => {
      try {
        const galleryData = await GalleryModel.find();
        return galleryData;
      } catch (error) {
        console.error("Error fetching gallery data:", error);
        throw new Error("Failed to fetch gallery data");
      }
    },
    getVillages: async () => {
      try {
        const villageData = await VillageModel.find();
        return villageData;
      } catch (error) {
        console.error("Error fetching village data:", error);
        throw new Error("Failed to fetch village data");
      }
    },
    getVillageByName: async (_, { Name }) => {
      try {
        const villageData = await VillageModel.findOne({ Name });
        return villageData;
      } catch (error) {
        console.error("Error fetching village data:", error);
        throw new Error("Failed to fetch village data");
      }
    },
  },

  Message: {
    senderFullName: async (parent) => {
      try {
        const admin = await AdminModel.findOne({ userName: parent.sender });
        return admin ? admin.fullName : null;
      } catch (error) {
        throw new Error("Failed to fetch sender full name");
      }
    },
  },

  Mutation: {
    createMessage: async (parent, args) => {
      try {
        let { sender, receiver, content, timestamp } = args;

        const senderNeeded = await AdminModel.findOne({ fullName: sender });
        const receiverNeeded = await AdminModel.findOne({ fullName: receiver });

        sender = senderNeeded.userName;
        receiver = receiverNeeded.userName;

        if (!sender || !receiver || !content) {
          throw new Error(
            "All fields (sender, receiver, content) are required."
          );
        }

        const newMessage = new MessageModel({
          sender,
          receiver,
          content,
          timestamp: timestamp || new Date(),
        });

        const savedMessage = await newMessage.save();

        return savedMessage;
      } catch (error) {
        throw new Error("Failed to create message");
      }
    },
    addGallery: async (parent, args) => {
      try {
        let { URL, Description } = args;
        const gallery = new GalleryModel({ URL, Description });
        await gallery.save();
        return gallery;
      } catch (error) {
        console.error("Error adding gallery:", error);
        throw new Error("Failed to add gallery");
      }
    },
    addVillage: async (parent, args) => {
      try {
        let {
          Name,
          Region,
          Area,
          Latitude,
          Longitude,
          Path,
          Categories,
          Populationsize,
          Agedistribution,
          Genderratios,
          Populationgrowth,
        } = args;
        const villagefind = await VillageModel.findOne({ Name });
        if (villagefind) return null;

        const village = new VillageModel({
          Name,
          Region,
          Area,
          Latitude,
          Longitude,
          Path,
          Categories,
          Populationsize,
          Agedistribution,
          Genderratios,
          Populationgrowth,
        });
        await village.save();
        return village;
      } catch (error) {
        console.error("Error adding village:", error);
        throw new Error("Failed to add village");
      }
    },
    updateVillage: async (
      _,
      { Name, Region, Area, Latitude, Longitude, Path, Categories }
    ) => {
      try {
        const fixedPath = typeof Path === "string" ? Path : Path.name;
        var newvalues = {
          $set: {
            Name: Name,
            Region: Region,
            Area: Area,
            Latitude: Latitude,
            Longitude: Longitude,
            Path: Path,
            Categories: Categories,
          },
        };
        const updatedVil = await VillageModel.updateOne(
          { Name: Name },
          newvalues
        );

        return updatedVil;
      } catch (error) {
        console.error("Error updating village:", error);
        throw new Error("Failed to update village");
      }
    },
    updateData: async (
      _,
      { Name, Populationsize, Agedistribution, Genderratios, Populationgrowth }
    ) => {
      try {
        var newvalues = {
          $set: {
            Populationsize: Populationsize,
            Agedistribution: Agedistribution,
            Genderratios: Genderratios,
            Populationgrowth: Populationgrowth,
          },
        };
        const village = await VillageModel.updateOne({ Name: Name }, newvalues);
        return village;
      } catch (error) {
        console.error("Error updating village data:", error);
        throw new Error("Failed to update village data");
      }
    },
    deleteVillage: async (_, { Name }) => {
      try {
        const village = await VillageModel.deleteOne({ Name });
      } catch (error) {
        console.error("Error deleting village:", error);
        throw new Error("Failed to delete village");
      }
    },
  },
};
