const express = require('express');
const router = express.Router();
const { getPlayers, getSinglePlayer, createPlayer, updatePlayer, deletePlayer } = require("../controllers/player.controller.js");

router.get('/', getPlayers )
router.get('/:id', getSinglePlayer)

router.post('/', createPlayer);

router.put('/:id', updatePlayer);

router.delete('/:id', deletePlayer);

module.exports = router;