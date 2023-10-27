const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    fname:{type: String},
    lname: {type: String},
    mobile: {type: String},
    active: {type: Boolean},
    city: {type: String}

})

module.exports = mongoose.model("User",userSchema);