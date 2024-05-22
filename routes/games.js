const gamesRouter = require("express").Router();

const {sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted} = require("../controllers/games");
const {
  findAllGames, 
  createGame, 
  findGameById, 
  updateGame, 
  deleteGame, 
  checkEmptyFields, 
  checkIfUsersAreSafe, 
  checkIfCategoriesAvaliable, 
  checkIsGameExists, 
  checkIsVoteRequest
} = require("../middlewares/games")

const { checkAuth } = require("../middlewares/auth.js");


gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games", 
  findAllGames, 
  checkIsGameExists, 
  checkIfCategoriesAvaliable, 
  checkEmptyFields, 
  checkAuth, 
  createGame, 
  sendGameCreated
);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put(
    "/games/:id", // Слушаем запросы по эндпоинту
    findGameById,// Шаг 1. Находим игру по id из запроса
    checkIsVoteRequest, // Шаг 2. Выполняем проверки для корректного обновления (опционально)
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,// Шаг 3. Обновляем запись с игрой
    sendGameUpdated// Шаг 4. Возвращаем на клиент ответ с результатом обновления
); 
gamesRouter.delete(
    "/games/:id", // Слушаем запросы по эндпоинту
    checkAuth,
    deleteGame,
    sendGameDeleted
  );

module.exports = gamesRouter;
