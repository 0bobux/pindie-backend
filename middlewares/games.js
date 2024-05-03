const games = require("../models/game");

const findAllGames = async (req, res, next) => {
    req.gamesArray = await games.find({});
    next();
}

module.exports = findAllGames;