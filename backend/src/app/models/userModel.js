let users = []

const createUser = (user) => {
    users.push(user)
}

const findUserByEmail = (email) => {
    return users.find(u => u.email === email)
}

module.exports = {
    createUser,
    findUserByEmail
}