const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    HomeTeam: {
        required: true,
        type: String
    },
    AwayTeam: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('data', dataSchema, 'BundesLiga')