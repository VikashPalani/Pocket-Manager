# Pocket Manager APIs

## authRouter
- POST /user/signup
- POST /user/login
- POST /user/logout

## transactionRouter
- POST /transaction - Add a new transaction.
- GET /transaction - Retrieve all transactions for the logged-in user.
- PUT /transaction/:id - Edit an existing transaction.
- DELETE /transaction/:id - Delete a transaction.

## budgetRouter
- POST /budget/set - Set a monthly budget limit.
- GET /budget/alert - Get alerts if the budget is exceeded.