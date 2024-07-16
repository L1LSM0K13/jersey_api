const Player = require("../models/player.model");
const getPlayers = async (req, res) => {
    try {
        const players = await Player.find({})
        res.status(200).json(players);

        console.log(players)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

const getSinglePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const player = await Player.findById(id);
        res.status(200).json(player);


        console.log(player)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
};

const createPlayer = async (req, res) => {
    try {
        const player = await Player.create(req.body);
        res.status(200).json(player);

        console.log(player)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const updatePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const player = await Player.findByIdAndUpdate(id, req.body)

        if (!player) {
            return res.status(404).json({message: 'Player not found'});
        }

        const updatedPlayer = await Player.findById(id);
        res.status(200).json(updatedPlayer);

        console.log(player)
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

const deletePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const player = await Player.findByIdAndDelete(id);

        if (!player) {
            return res.status(404).json({message: 'Player not found'});
        }

        res.status(200).json({message: 'Player removed from the DB'});

    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

module.exports = {
    getPlayers,
    getSinglePlayer,
    createPlayer,
    updatePlayer,
    deletePlayer
}