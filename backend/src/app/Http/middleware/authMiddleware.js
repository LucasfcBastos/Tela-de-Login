const jwt = require("jsonwebtoken")

const SECRET = "segredo_super"

function authMiddleware(req,res,next){

    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({message:"Token não enviado"})
    }

    try{

        const decoded = jwt.verify(token,SECRET)

        req.user = decoded

        next()

    }catch(err){

        res.status(401).json({message:"Token inválido"})

    }
}

module.exports = authMiddleware