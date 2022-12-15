const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const authRoutes = require('./routes/auth');
const cors = require('cors');

// MIDDLEWARE
app.use(express.json());
// Db connect

mongoose.connect(process.env.DB_CONNECT,() => {
    console.log("connected to database");
});

app.use(cors());
// ROUTES MIDDLEWARE
app.use('/user', authRoutes);

// Get
app.get('/',(req,res) => {
    res.send("get works fine")
});







app.listen(5000,() => {
    console.log("hello");
});