const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const { createUser, findUserByEmail, findUserByName } = require("../../models/userModel")

const SECRET = process.env.JWT_SECRET

exports.register = async (req, res) => {

    const { name, email, password } = req.body

    const userExists = findUserByEmail(email)

    if (userExists) {
        return res.status(400).json({ message: "Usuário já existe" })
    }

    const hash = await bcrypt.hash(password, 10)

    createUser({
        name,
        email,
        password: hash
    })

    res.json({ message: "Usuário criado" })
}

exports.login = async (req, res) => {

    const { name, password } = req.body

    const user = findUserByName(name)

    if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado" })
    }

    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
        return res.status(401).json({ message: "Senha inválida" })
    }

    const token = jwt.sign({ name }, SECRET, { expiresIn: "1h" })

    res.json({
        token,
        user: {
            name: user.name,
            email: user.email
        }
    })
}