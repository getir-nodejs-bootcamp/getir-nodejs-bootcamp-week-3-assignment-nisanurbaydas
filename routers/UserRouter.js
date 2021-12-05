const express = require('express');
const {getUsers, createUser} = require('../database/user');

const router = express.Router();

router.get('/users', (req, res) => {
    res.status(200).send(getUsers());
})

router.post('/users', (req, res) =>{
    createUser(req.body);
    res.status(200).send({
        message: "User created.",
        ...req.body,
    });
});

module.exports = router;