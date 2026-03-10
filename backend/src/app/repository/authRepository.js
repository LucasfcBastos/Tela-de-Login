const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const { createUser, findUserByName, findUserByEmail } = require("../models/userModel")

const SECRET = process.env.JWT_SECRET

const findUserEmail = (res) => {
    return findUserByEmail(res)
}

const findUserName = (res) => {
    return findUserByName(res)
}

const createNewUser = async (user) => {
    const hash = await bcrypt.hash(user.password, 10)

    createUser({
        name: user.name,
        email: user.email,
        password: hash,
    })
}

const confirmPassword = async (pass, pass_user) => {
    return await bcrypt.compare(pass, pass_user)
}

const createToken = (user) => {
    return jwt.sign({ user }, SECRET, { expiresIn: "1h" })
}

module.exports = {
    findUserName,
    createNewUser,
    findUserEmail,
    confirmPassword,
    createToken,
}