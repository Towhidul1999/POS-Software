const User = require('../models/mongoose/User');
const { db } = require('../helpers');
const Hash = require('../helpers/Hash');
const AuthSessionService = require('./AuthSessionService');

async function create (data) {
    data.password = await Hash.make(data.password);
    let newUser = new User(data);
    return await newUser.save();
}

async function check (data){
    console.log("password",data.email)

    const user = await checkUser(data.email, data.password)
    console.log(user);
    if (user) {
        const session = await AuthSessionService.makeSession(user._id)
        return {
            userId: user._id,
            token: session.token
        }
    }
}

async function checkUser(email, password){
    const dbuser = await User.findOne({email: email});
    if (dbuser) {
        const isPasswordCorrect = await Hash.compare(password, dbuser.password);
        if (isPasswordCorrect) {
            return dbuser;
        }
    }
}

//Create Admin
async function make (data) {
    data.password = await Hash.make(data.password);
    let newUser = new User(data);
    return await newUser.save();
}

// Adnin Login
async function adminCheck (data){
    console.log("password",data.email)

    const user = await checkAdmin(data.email, data.password)
    console.log(user);
    if (user) {
        const session = await AuthSessionService.makeSession(user._id)
        return {
            userId: user._id,
            token: session.token
        }
    }
}

async function checkAdmin(email, password){
    const dbuser = await User.findOne({email: email});
    if (dbuser) {
        const isPasswordCorrect = await Hash.compare(password, dbuser.password);
        if (isPasswordCorrect) {
            return dbuser;
        }
    }
}

async function list () {
    return await User.find();
}

async function details (id) {
    if(!db.isValidObjectId(id)){
        return null;
    } // return null if id is not valid ObjectId to avoid error in mongoose.
    console.log(id);
    return await User.findOne({_id: id});
}

module.exports = {
    create,
    list,
    details,
    check,
    make,
    adminCheck
}


