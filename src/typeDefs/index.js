const users  = require("./userTypes");
const userMutation = require("./userMutation")

const typeDefs = [users,userMutation];

 module.exports = {typeDefs}