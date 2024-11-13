const express = require('express');
const transactionRouter = express.Router();

// ## transactionRouter
// - POST /transaction - Add a new transaction.
// - GET /transaction - Retrieve all transactions for the logged-in user.
// - PATCH /transaction/:id - Edit an existing transaction.
// - DELETE /transaction/:id - Delete a transaction.

transactionRouter.post('/transaction', (req, res) => {
    res.send('Transaction Route');
});

transactionRouter.get('/transaction', (req, res) => {
    res.send('Transaction Route');
});
transactionRouter.patch('/transaction', (req, res) => {
    res.send('Transaction Route');
});
transactionRouter.delete('/transaction', (req, res) => {
    res.send('Transaction Route');
});

module.exports = transactionRouter;