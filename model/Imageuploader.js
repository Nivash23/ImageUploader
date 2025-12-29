const mongoose = require('mongoose');

const Imageschema = new mongoose.Schema({
    image:String
})

const Images = mongoose.model('Images', Imageschema, 'Image')

module.exports = Images;