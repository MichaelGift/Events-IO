const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const eventsRoute = require('./routes/event.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


mongoose.connect(`${process.env.MONGODB_URI}`,)
    .then(() => {
        console.log("Connected to database!")
        app.listen(process.env.PORT, () => {
            console.log("Server running on port 3000")
        });
    })
    .catch((error) => {
        console.trace(error)
    });

app.use('/api/events', eventsRoute);