const {verifyOptions} = require('../config/jwt');

module.exports = (req, res, next) =>{
    const user = req.body;
    const token = req.headers.authorization;

    if(token && verifyOptions(user, token)){
        next();
    } else {
        res.status(403).json({message: 'YOU SHALL NOT PASS!'})
    }
}