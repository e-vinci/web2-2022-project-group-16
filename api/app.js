const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const cors = require('cors');

const corsOptions = {
  origin: 'https://crapsdorian.github.io',
};

const usersRouter = require('./routes/users');
const authsRouter = require('./routes/auths');
const scoreRouter = require('./routes/score')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users',cors(corsOptions), usersRouter);
app.use('/auths',cors(corsOptions), authsRouter);
app.use('/score',cors(corsOptions), scoreRouter)

module.exports = app;
