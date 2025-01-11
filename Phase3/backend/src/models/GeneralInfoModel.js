import mongoose from "mongoose"

const GeneralSchema = mongoose.Schema({
    villages: { type: Number },
    urban: { type: Number },
    popSize: { type: Number },
    avgArea: { type: Number }   
})

const GeneralModel = mongoose.model('General', GeneralSchema, 'general_info')

export default GeneralModel