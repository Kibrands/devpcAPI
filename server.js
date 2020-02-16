require('dotenv').config();
const path = require('path');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes.js');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, { useNewUrlParser: true })
    .then(db => console.log("DB correctly connected"))
    .catch(error => console.log("Error connecting DB: " + error));

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log("Server initialized..."));