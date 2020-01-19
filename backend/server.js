const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require("passport");

const companyRouter = require('./routes/company');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('connection established');
})

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use('/company', companyRouter);

app.listen(port, ()=>{
    console.log("Server is running on port " + port);
})