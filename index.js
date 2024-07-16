// Config
require('dotenv').config({path:'./config/.env'});
const uri = process.env.MONGODB_URI;
// Imports
const express = require('express');
const app = express();
const PORT  = process.env.PORT || 8080;

// MongoDB Connection
const mongoose = require('mongoose');
const playerRoute = require('./routes/player.route.js');

// Port listening on 8080 and connecting to mongoDB
mongoose.connect(uri)
    .then(() => { app.listen(PORT,() => console.log(`It's live on http://localhost:${PORT}/api/player_numbers`));
    console.log("connected to MongoDB...")
}).catch(err => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/player_numbers', playerRoute);

// Endpoints
app.get('/', async (req, res) => {
    res.status(200).send({});
})