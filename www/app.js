'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

const app = express();
const staticRoot = process.env.AWS_LAMBDA_FUNCTION_NAME ? 'https://s3.amazonaws.com/somebucket/' : '/static/';

app.use(morgan('dev'));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');

app.use('/static', express.static(`${__dirname}/public`));
app.use((req, res, next) => {
  res.locals.staticRoot = staticRoot;
  next();
});

// req.body is, by default, undefined, and is populated when you
// use body-parsing middleware such as body-parser and multer.
// more http://expressjs.com/en/api.html#req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

module.exports = app;
