import mongoose from "mongoose"

const AdminSchema = mongoose.Schema({
    fullName: { type: String, required: true },
    userName: { type: String, required: true, unique:true },
    password: { type: String, required: true}
})

const AdminModel = mongoose.model('Admin', AdminSchema)

export default AdminModel