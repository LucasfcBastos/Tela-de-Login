let users = []

const createUser = (user) => {
    users.push(user)
}

const findUserByEmail = (email) => {
    return users.find(u => u.email === email)
}

const findUserByName = (name) => {
    return users.find(u => u.name === name)
}

module.exports = {
    createUser,
    findUserByEmail,
    findUserByName
}