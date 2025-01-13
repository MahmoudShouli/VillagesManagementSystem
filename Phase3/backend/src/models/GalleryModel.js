import mongoose from "mongoose"

const GallerySchema = mongoose.Schema({
    URL: { type: String },
    Description: { type: String },
})

const GalleryModel = mongoose.model('Gallery', GallerySchema, 'gallerys')

export default GalleryModel