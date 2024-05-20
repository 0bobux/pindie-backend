const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const apiRouter = require('./routes/apiRouter');

const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const PORT = 3000;

const app = express();

connectToDatabase();

app.use(
  cors, 
  bodyParser.json(),
  apiRouter,
  express.static(path.join(__dirname, 'public')),
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});