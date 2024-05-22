const usersRouter = require("express").Router();


const {
    sendAllUsers, 
    sendUserCreated, 
    sendUserById, 
    sendUserUpdated, 
    sendUserDeleted
} = require("../controllers/users");

const {
    findAllUsers, 
    createUser, 
    findUserById, 
    updateUser, 
    deleteUser, 
    checkEmptyNameAndEmailAndPassword, 
    checkEmptyNameAndEmail, 
    checkIsUserExists, 
    filterPassword, 
    hashPassword
} = require("../middlewares/users");

const { checkAuth } = require("../middlewares/auth.js");

const {sendMe} = require("../controllers/users.js")


usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
usersRouter.post(
    "/users", 
    findAllUsers,
    checkIsUserExists, 
    checkEmptyNameAndEmailAndPassword,
    checkAuth,  
    hashPassword,
    createUser, 
    sendUserCreated);
usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);
usersRouter.get("/me", checkAuth, sendMe); 
usersRouter.put(
    "/users/:id", // Слушаем запросы по эндпоинту
    findUserById,
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser, // Обновляем запись в MongoDB
    sendUserUpdated // Возвращаем ответ на клиент
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
