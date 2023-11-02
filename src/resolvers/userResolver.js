const mongoose = require('mongoose');
const users = require('../model/user');
const userRessolver = {
  Query: {
    users: (_, args) => getUsers(args),
    searchUsers:(_,args)=>searchUser(args)
  },
};

const getUsers = async (args) => {
  try {

    if (args.search) {
      const query = { ...args.search };      
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

const searchUser = async (args) => {
  try {
    // console.log("first")

    if (args.search) {
      // const query = { ...args.search };
      // console.log("add",args.search)
      const srchTerm = new RegExp(args.search, 'i');
      const Users = await users.find({$or: [{ fname: { $regex: srchTerm } },{ lname: { $regex: srchTerm } },{ city: { $regex: srchTerm } }]})
      return Users.length?Users:[{message: "User Not found"}];
    }

  } catch (error) {
    console.error('Error fetching users:', error);
    return [{ 'Error fetching users': error }];
  }
}

module.exports = userRessolver