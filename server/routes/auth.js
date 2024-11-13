const express = require('express');
const authRouter = express.Router();

// ## authRouter
// - POST /signup
// - POST /login
// - POST /logout

authRouter.post('/signup', (req, res) => {
    res.send('signup Route');
});

authRouter.post('/login', (req, res) => {
    res.send('signup Route');
});

authRouter.post('/logout', (req, res) => {
    res.send('signup Route');
});

module.exports = authRouter;