const categoriesRouter = require('express').Router();

const {
    sendAllCategories, 
    sendCategoryCreated, 
    sendCategoryById, 
    sendCategoryUpdated, 
    sendCategoryDeleted
} = require('../controllers/categories');

const {
    findAllCategories, 
    createCategory, 
    findCategoryById, 
    updateCategory, 
    deleteCategory, 
    checkIsCategoryExists, 
    checkEmptyName
} = require("../middlewares/categories")

const { checkAuth } = require("../middlewares/auth.js");
 

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post(
    "/categories", 
    findAllCategories, 
    checkIsCategoryExists, 
    checkEmptyName, 
    checkAuth, 
    createCategory, 
    sendCategoryCreated
);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put(
    "/categories/:id", // Слушаем запросы по эндпоинту
    findCategoryById,
    checkEmptyName,
    checkAuth,
    updateCategory, // Обновляем запись в MongoDB
    sendCategoryUpdated // Возвращаем ответ на клиент
);
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;