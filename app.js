var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


//Aca agregue 
var productRouter = require('./routes/products');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const profileRouter = require('./routes/profile')
const productAddRouter = require('./routes/productadd');
const searchResultsRouter = require('./routes/searchResults');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



//Aca agregue 
app.use('/products', productRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/profile', profileRouter);
app.use('/products/add', productAddRouter);
app.use('/search-results', searchResultsRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
