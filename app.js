var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productRouter = require('./routes/product');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');//模板引擎
//调用一些方法
app.use(logger('dev'));//记录日志
app.use(express.json());//客户端向服务端传递的json对象
app.use(express.urlencoded({ extended: false }));//从客户端上传表单数据
app.use(cookieParser());//上传的cookie上传到服务器转化为json对象
app.use(express.static(path.join(__dirname, 'public')));//静态数据直接返回，不通过路由处理
//注册一级路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter)

// catch 404 and forward to error handler
//检测错误的
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
