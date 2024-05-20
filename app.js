const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require("cookie-parser");

const apiRouter = require('./routes/apiRouter');
const pagesRouter = require('./routes/pages')

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const PORT = 3000;

const app = express();

connectToDatabase();

app.use(
  cors,
  cookieParser(),  
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, 'public')),
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});