const mongoose = require('mongoose');
const users = require('../model/user');
const userRessolver = {
  Query: {
    users: (_, args) => getUsers(args),
  },
};

const getUsers = async (args) => {
  try {

    if (args.search) {
      const query = { ...args.search };
      console.log("fhd", query)
      
      const Users = await users.find(query);
      return Users;
    }
    else {
      const Users = await users.find();
      return Users;
    }

  } catch (error) {
    console.error('Error fetching users:', error);
    return [{ 'Error fetching users': error }];
  }
}

module.exports = userRessolver