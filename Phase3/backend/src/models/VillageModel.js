import mongoose from "mongoose"

const VillageSchema = mongoose.Schema({
    Name: { type: String },
    Region: { type: String },
    Area: { type: Number },
    Latitude: { type: Number },
    Longitude: { type: Number },
    Path: { type: String },
    Categories: { type: String },
    Populationsize: { type: String },
    Agedistribution: { type: String },
    Genderratios: { type: String },
    Populationgrowth: { type: String },
})

const VillageModel = mongoose.model('Village', VillageSchema, 'villages')

export default VillageModel