const User = require('../models/user');
const CryptoJs = require('crypto-js')

//npm i crypto-js
const handleRegister = async (req,res) => {
    const {user, mail, image, pwd} = req.body
    if(!user || !mail  || !pwd) return res.status(401).json("Fields cannot be empty")
    try {
         encryptPwd = CryptoJs.AES.encrypt(pwd, process.env.HASHEDPWD)
         const newUser = await User.create({
            username: user,
            email: mail,
            password: encryptPwd,
            image: image,
         })
         res.status(201).json(newUser)
        
    } catch (error) {
        res.status(500).json(`ERROR: ${error.message}`)
    }
}

module.exports = {handleRegister}