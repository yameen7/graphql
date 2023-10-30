const userRessolver  = require("./userResolver");
const adduserRessolver = require("./addUser");

const resolvers = { ...userRessolver, ...adduserRessolver };

module.exports = { resolvers };