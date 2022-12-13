const express = require('express');
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const authRoutes = require('./routes/auth');

// MIDDLEWARE
app.use(express.json());
// Db connect

mongoose.connect(process.env.DB_CONNECT,() => {
    console.log("connected to database");
});

// ROUTES MIDDLEWARE
app.use('/user', authRoutes);

// Get
app.get('/',(req,res) => {
    res.send("get works fine")
});







app.listen(3000,() => {
    console.log("hello");
});