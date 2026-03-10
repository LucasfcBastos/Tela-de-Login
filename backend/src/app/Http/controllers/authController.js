const { cadastro, entrar } = require("../../services/authService")

exports.register = async (req, res) => {
    cadastro(req.body, res)
}

exports.login = async (req, res) => {
    entrar(req.body, res)
}