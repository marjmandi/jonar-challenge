const User = require('../Models/User.model');

const getUserList = async () => {
    return await User.findAll();
}


module.exports = getUserList