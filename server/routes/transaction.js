const express = require('express');
const transactionRouter = express.Router();

// ## transactionRouter
// - POST /transaction - Add a new transaction.
// - GET /transaction - Retrieve all transactions for the logged-in user.
// - PUT /transaction/:id - Edit an existing transaction.
// - DELETE /transaction/:id - Delete a transaction.

transactionRouter.get('/transaction', (req, res) => {
    res.send('Transaction Route');
});

module.exports = transactionRouter;