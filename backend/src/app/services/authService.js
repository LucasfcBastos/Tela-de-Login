const { findUserEmail, createNewUser, findUserName, confirmPassword, createToken } = require("../repository/authRepository")

const cadastro = (arry, res) => {

    if (!arry.name || !arry.email || !arry.password) {
        return res.status(400).json({
            message: "Requisição inválida"
        })
    }

    const userExists = findUserEmail(arry.email)

    if (userExists) {
        return res.status(400).json({ message: "Usuário já existe" })
    }

    createNewUser(arry)

    res.json({ message: "Usuário criado" })
    
}

const entrar = (arry, res) => {

    if (!arry.name || !arry.password) {
        return res.status(400).json({
            message: "Requisição inválida"
        })
    }

    const user = findUserName(arry.name)

    if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" })
    }

    const valid = confirmPassword(arry.password, user.password)

    if (!valid) {
        return res.status(401).json({ message: "Senha inválida" })
    }

    const token = createToken(arry.name)

    res.json({
        token,
        user: {
            name: user.name,
            email: user.email
        }
    })
}

module.exports = {
    cadastro,
    entrar,
}