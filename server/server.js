const express = require('express');
const mongoose = require('mongoose');
const admin = require('firebase-admin');
const cors = require('cors');
require('dotenv').config();

const eventsRoute = require('./routes/event.routes');
const transactionRoute = require('./routes/transaction.routes');
const userRoute = require('./routes/user.routes');

const authVerification = require('./middlewares/auth-verification');

const app = express();
admin.initializeApp();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(authVerification);


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
app.use('/api/transactions', transactionRoute);
app.use('/api/users', userRoute);