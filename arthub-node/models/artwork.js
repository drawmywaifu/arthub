const mongoose = require('mongoose');

const artworkSchema = mongoose.Schema({
    src: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    tags: {
        type: [String]
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Artwork', artworkSchema);