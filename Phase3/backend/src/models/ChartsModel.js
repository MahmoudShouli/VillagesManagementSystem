import mongoose from "mongoose"

const ChartSchema = mongoose.Schema({
    age: { type: [Number] },
    gender: { type: [Number] },
    bar: { type: [Number] }  
})

const ChartModel = mongoose.model('Chart', ChartSchema, 'charts')

export default ChartModel