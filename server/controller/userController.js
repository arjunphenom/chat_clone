const User = require('../model/userModel');
const bcrypt = require('bcrypt');



module.exports.register = async (req, res, next) => {
    const {username, email, password} = req.body;
    const usernameCheck = await User.findOne({username: username});
    if (usernameCheck) {
        return res.json({msg: "Username already used",status: "false"});
    }
    const emailcheck = await User.findOne({email: email});
    if (emailcheck) {
        return res.json({msg: "Username already used",status: "false"});
    }
}