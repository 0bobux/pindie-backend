const categoriesRouter = require('express').Router();
  
const findAllCategories = require('../middlewares/categories');
const sendAllCategories = require('../controllers/categories');

const createCategory = require("../middlewares/categories");
const sendCategoryCreated = require("../controllers/categories");

const findCategoryById = require("../middlewares/categories");
const sendCategoryById = require("../controllers/categories");

const updateCategory = require("../middlewares/categories");
const sendCategoryUpdated = require("../controllers/categories");

const deleteCategory = require("../middlewares/categories");
const sendCategoryDeleted = require("../controllers/categories");
  
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCategoryCreated);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put(
    "/categories/:id", // Слушаем запросы по эндпоинту
    findCategoryById,
    updateCategory, // Обновляем запись в MongoDB
    sendCategoryUpdated // Возвращаем ответ на клиент
);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;