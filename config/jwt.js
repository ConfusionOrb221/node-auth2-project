const jwt = require('jsonwebtoken');
const {jwtSecret, jwtPublic} = require('../config/secret');

function generateToken(user){
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    }
    const options = {
        issuer: 'Nathans Software',
        subject: user.username,
        audience: 'NathanSoftware.com',
        expiresIn: '24h',
        algorithm: 'RS256'
    }

    return jwt.sign(payload, jwtSecret, options)
}

function verifyOptions(user, token){

    const verifyOptions = {
        issuer: 'Nathans Software',
        subject: user.username,
        audience: 'NathanSoftware.com',
        maxAge: '24h',
        algorithms: ["RS256"]
    }
    
    return jwt.verify(token, jwtPublic, verifyOptions);
}

module.exports ={
    generateToken,
    verifyOptions
}