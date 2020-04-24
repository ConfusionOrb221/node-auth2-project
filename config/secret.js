require('dotenv').config();

module.exports = {
    jwtSecret: JSON.parse(`"${process.env.JWT_SECRET}"`) || 'fdsafdsafdsafdsafdsafdsafdsafdsaf-04324',
    jwtPublic: JSON.parse(`"${process.env.JWT_PUBLIC}"`) || 't'
}