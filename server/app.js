const express = require('express');
const app = express();
const cors = require('cors');

const connectDB = require('./config/database');

// Load environment variables from .env file
require('dotenv').config();
const PORT = process.env.PORT;

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Middleware to allow cross-origin requests
app.use(cors());

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