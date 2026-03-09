const users = require("../../models/userModel")
const jwt = require("jsonwebtoken")

const SECRET = "segredo_super"

exports.register = (req, res) => {

    const { name, email, password } = req.body

    const userExists = findUserByEmail(email)

    if(userExists){
        return res.status(400).json({message:"Usuário já existe"})
    }

    users.push({
        name,
        email,
        password
    })

    res.json({message:"Usuário criado"})
}

exports.login = (req, res) => {

    const { email, password } = req.body

    const user = users.find(u => u.email === email)

    if(!user){
        return res.status(404).json({message:"Usuário não encontrado"})
    }

    if(user.password !== password){
        return res.status(401).json({message:"Senha incorreta"})
    }

    const token = jwt.sign(
        { email: user.email },
        SECRET,
        { expiresIn: "1h" }
    )

    res.json({
        token
    })
}