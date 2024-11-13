const express = require('express');
const app = express();
const cors = require('cors');

// Import the database connection
const connectDB = require('./config/database');

// Import all routes
const authRouter = require('./routes/auth');
const budgetRouter = require('./routes/budget');
const transactionRouter = require('./routes/transaction');

// Load all routes - app.use(path, router) connects a group of routes (the router) to a specific base path in your application.
app.use('/auth', require('./routes/auth'));
app.use('/budget', require('./routes/budget'));
app.use('/transaction', require('./routes/transaction'));

// Load environment variables from .env file
require('dotenv').config();
const PORT = process.env.PORT;

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Middleware to allow cross-origin requests
app.use(cors());

//Test Route using GET request to check if server is running
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Connect to Database first before starting the server [IMPORTANT]
connectDB()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(PORT, () => {
            console.log(`Server is successfully listening on port : ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Connection to database failed", err);
    });