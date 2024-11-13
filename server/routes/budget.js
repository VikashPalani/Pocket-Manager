const express = require('express');
const budgetRouter = express.Router();

// ## budgetRouter
// - POST /budget/set - Set a monthly budget limit.
// - GET /budget/alert - Get alerts if the budget is exceeded.

budgetRouter.post('/budget/set',(req,res) => {
    res.send("Budget Route");
});

budgetRouter.get('/budget/alert',(req,res) => {
    res.send("Budget Route");
})

module.exports = budgetRouter;