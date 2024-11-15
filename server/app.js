const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');

// Load environment variables from .env file
require('dotenv').config();
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;

//Session Middleware to store session's user data
app.use(session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Middleware to allow cross-origin requests
app.use(cors());

// Import the database connection
const connectDB = require('./config/database');

// Import all routes
const authRouter = require('./routes/auth');
const budgetRouter = require('./routes/budget');
const transactionRouter = require('./routes/transaction');

// Load all routes - app.use(path, router) connects a group of routes (the router) to a specific base path in your application.
app.use('/', authRouter);
app.use('/', budgetRouter);
app.use('/', transactionRouter);

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