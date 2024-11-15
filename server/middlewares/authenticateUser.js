function authenticateUser(req, res, next) {
    if (req.session.user) {
        // If user is authenticated, include user details to req.user
        const user = req.session.user;
        req.user = user;
        next();  // Proceed to the next middleware or route handler
    } else {
        return res.status(401).send('Unauthorized: Please login');
    }
}

module.exports = {authenticateUser};