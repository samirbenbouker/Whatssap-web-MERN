import mongoose from "mongoose";

var Schema = mongoose.Schema

const whatsappSchema = new Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
})

const Message = mongoose.model("messagecontents", whatsappSchema)

export default Message