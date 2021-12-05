const express = require('express');
const {getUsers} = require('../database/user');
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post('/login', (req, res) =>{
    const {name, password} = req.body;
    if(name && password){
        const userInfo = getUsers().find((u) => u.name === name);
        console.log(userInfo);
        if(userInfo){
            if(userInfo.password === userInfo.password){
                const token = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1w' });
                res.status(200).send({
                    message: "Login success",
                    token
                });
            } else {
                res.status(404).send("incorrect password")
            }
        } else{
            res.status(404).send("No such user");
        }
    } else {
        res.status(404).send("Inrorrect user informations");
    }
});
module.exports = router;