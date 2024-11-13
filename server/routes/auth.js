const express = require('express');
const authRouter = express.Router();

// ## authRouter
// - POST /auth/signup
// - POST /auth/login
// - POST /auth/logout

authRouter.get('/auth', (req, res) => {
    res.send('Auth Route');
});

module.exports = authRouter;