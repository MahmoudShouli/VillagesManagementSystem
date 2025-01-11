import GalleryModel from "../models/GalleryModel.js";

const resolvers = {
    Query: {
        getGallery: async () => {
            try {
                const galleryData = await GalleryModel.find();
                return galleryData;
            } catch (error) {
                console.error('Error fetching gallery data:', error);
                throw new Error('Failed to fetch gallery data');
            }
        },
    },
    Mutation: {
        addGallery: async (_, { URL, Description }) => {
            try {
                const gallery = new GalleryModel({ URL, Description });
                await gallery.save();
                return gallery;
            } catch (error) {
                console.error('Error adding gallery:', error);
                throw new Error('Failed to add gallery');
            }
        },
    },
};

export default resolvers;