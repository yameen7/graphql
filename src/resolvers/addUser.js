const mongoose = require('mongoose');
const users = require('../model/user');
const adduserRessolver = {
    Mutation: {
        addUser: (_, args) => insertUser(args),
    },
};

const insertUser = async (args) => {
    try {
        const query = {...args.input}
        const Users = await users.insertMany([query]);
        return Users?"User Added":"Error";

    } catch (error) {
        console.error('Error fetching users:', error);
        return [{ 'Error fetching users': error }];
    }
}

module.exports = adduserRessolver