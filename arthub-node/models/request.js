const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    deadline: {
        type: Date,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    artist: {
        type: mongoose.Schema.ObjectId,
        required: true
    },
    customer: {
        type: mongoose.Schema.ObjectId,
        required: true
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Request', requestSchema);
