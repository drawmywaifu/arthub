const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    users: {
        type: [mongoose.Schema.ObjectId]
    },
    artworks: {
        type: [mongoose.Schema.ObjectId]
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Tag', tagSchema);