const mongoose = require('mongoose');
const users = require('../model/user');
const userRessolver = {
  Query: {
    users: () => getUsers(),
  },
};

const getUsers = async() => {
  try {
    const user = await users.find();
    return user;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

module.exports = userRessolver