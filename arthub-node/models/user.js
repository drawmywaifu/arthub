const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    experience: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    tags: {
        type: [String]
    },
    requests: {
        type: [mongoose.Schema.ObjectId]
    },
    artworks: {
        type: [mongoose.Schema.ObjectId]
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
