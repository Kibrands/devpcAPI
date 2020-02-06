const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes.js');

mongoose.connect("mongodb+srv://julio:julio@cluster0-pdbce.mongodb.net/devpc?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(db => console.log("DB correctly connected"))
    .catch(error => console.log("Error connecting DB: " + error));

const app = express();

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(process.env.PORT || 3000, () => console.log("Server initialized..."));