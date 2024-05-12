const gamesRouter = require("express").Router();

const {findAllGames} = require("../middlewares/games");
const sendAllGames = require("../controllers/games");

const {createGame} = require("../middlewares/games");
const sendGameCreated = require("../controllers/games");

const {findGameById} = require("../middlewares/games");
const sendGameById = require("../controllers/games");

const {updateGame} = require("../middlewares/games");
const sendGameUpdated = require("../controllers/games");

const {deleteGame} = require("../middlewares/games");
const sendGameDeleted = require("../controllers/games");

const {checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists} = require("../middlewares/games")

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, createGame, sendGameCreated);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put(
    "/games/:id", // Слушаем запросы по эндпоинту
    findGameById,// Шаг 1. Находим игру по id из запроса
      // Шаг 2. Выполняем проверки для корректного обновления (опционально)
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    updateGame,// Шаг 3. Обновляем запись с игрой
    sendGameUpdated// Шаг 4. Возвращаем на клиент ответ с результатом обновления
); 
gamesRouter.delete(
    "/games/:id", // Слушаем запросы по эндпоинту
    deleteGame,
    sendGameDeleted
  );

module.exports = gamesRouter;
