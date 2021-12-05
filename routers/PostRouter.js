const express = require('express');
const authenticate = require('../middleware/authentication');
const {getPost, createPost, deletePost, updatePost, updateTitle} = require('../database/post');

const router = express.Router();

router.get('/posts', authenticate, (req, res) => {
    res.status(200).send(getPost());
});

router.post('/posts', authenticate, (req, res) =>{
    createPost(req.body);
    res.status(200).send({
        message: "Post created.",
        ...req.body
    });
});

router.delete('/posts/:id',authenticate,(req,res)=>{
    deletePost(req.params.id);
    res.status(200).send("silindi");
});

router.put('/posts/:id',authenticate, (req, res) => {
    updatePost(req.params.id, req.body);
    res.status(200).send({
        message: "Post updated.",
        ...req.body
    });
});

router.patch('/posts/:id', authenticate, (req, res) => {
    updateTitle(req.params.id, req.body);
    res.status(200).send({
        message: "Post updated.",
        ...req.body
    });
});

module.exports = router;