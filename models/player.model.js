const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },

        number: {
            type: Number,
            required: [true, "Please enter quantity"],
            default: 0,
        },

        image: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    });

const Players = mongoose.model("Player", PlayerSchema);

module.exports = Players;