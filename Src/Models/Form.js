const mongoose = require("mongoose")
const form = new mongoose.Schema({
    name: {
        name: String,
        
    },
    PhoneNumber: {
        type: Number,
        
    },
    Email: {
        type: String,
        
    },
    intrest: {
        type: String,
        
    },
    message: {
        type: String,
        
    }

}, { timestamps: true })
module.exports = mongoose.model("Forms", form);