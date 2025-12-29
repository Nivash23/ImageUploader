const express = require('express');
const app = express();
const cors = require('cors');


const ImageRouter = require('./Controller/Imageuploader');
app.use(cors())
app.use(express.json());

app.use(express.static('public'))

app.use('/api/uploadimage/',ImageRouter)

module.exports = app;