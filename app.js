/**
 * Created by gerardo on 1/28/2016.
 */

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var app = express();
//var router = express.Router();


/**
 * Modules Dependencies
 * **/
var auth = require('./crm/utils/auth');


var contactos = require('./crm/routes/contactos');
var usuarios = require('./crm/routes/usuarios');
var ordenes = require('./crm/routes/ordenes');


/**
 * Middelware
 * **/

// Middleware para logger
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-Token, Content-Type, Accept");
    next();
});


/**
 * Test Resources
 * **/

app.get('/', function (req, res, next) {
    res.json({'mode': app.get('env'), 'date': new Date()});
});

app.get('/hello', function (req, res, next) {
    res.json({'message': "hola mundo", 'date': new Date()});

});

app.post('/login', auth.login);

/**
 * Resources
 * **/
// se usa el modulo de cliente como middleware..
app.use('/contactos', auth.verify,contactos);

app.use('/usuarios', auth.verify, usuarios);

app.use('/ordenes', auth.verify, ordenes);


/**
 * Error Handlers
 * **/

//// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//    var err = new Error('Not Found');
//    err.status = 404;
//    next(err);
//});

// error handlers

 //development error handler
 //will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message1: err.message,
        error: err
    });
});


module.exports = app;
