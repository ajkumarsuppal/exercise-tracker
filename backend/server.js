const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//env. var in dotenv files
require('dotenv').config();

//create express server
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());

//parse json 
app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})