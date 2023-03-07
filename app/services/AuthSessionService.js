const AuthSession = require('../models/mongoose/AuthSession');
const { v4: uuidv4 } = require('uuid');
module.exports = {
    makeSession: async (userId) => {
        const token = uuidv4();
        let newSession = new AuthSession({
            userId,
            token
        });
        return await newSession.save();
    },
    checkSession: async (userId, token) => {
        return await AuthSession.findOne({userId, token, isExpired: false});
    }
}