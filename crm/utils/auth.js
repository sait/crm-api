var basicAuth = require('basic-auth');
var md5 = require('md5');
var jwt = require('jsonwebtoken');

var conexion = require('../connection');
var appconfig = require('../utils/config');


var check = function (req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        res.status(401).json();
    };

    var user = basicAuth(req);

    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    }
    ;


    ///aqui va la consulta a la Base de datos!
    if (user.name === 'foo' && user.pass === 'bar') {
        return next();
    } else {
        return unauthorized(res);
    }
    ;
};


var verify = function (req, res, next) {

    if ('OPTIONS' != req.method) {

        var token = req.body.token || req.query.token || req.headers['x-token'];

        if (token) {

            jwt.verify(token, appconfig.secret, function (err, decoded) {
                if (err) {
                    return res.json({success: false, message: 'Failed to authenticate token.'});
                } else {
                    req.decoded = decoded;
                    next();

                }
            });

        } else {
            return res.status(403).json({
                success: false,
                message: 'No token provided.'
            });
        }

    }//check  options
    else {
        next();
    }
};


var login = function (req, res, next) {
        var data = req.body;

        var user = data['user'];
        var pswd = data['passwd'];

        if (user != undefined && pswd != undefined) {

            conexion.query('SELECT iduser, name, mail FROM usuarios WHERE name  = ? AND pswd = ?', [user, md5(pswd)]).then(function (user) {

                    if (user.length > 0) {

                        //genera token
                        var token = jwt.sign(user, appconfig.secret, {
                            expiresIn: 86400 // expires in 24 hours
                        });

                        res.status(200).send({'user': user[0], 'token': token});
                    } else {

                        res.status(404).json();
                        next();
                    }//else

                }
                , function (error) {

                    if (error) {

                        res.status(500).json({'error': error});
                        next();

                    }
                });
        }
        else {
            res.status(400).json();
        }


    }
    ;


module.exports = {'login': login, 'verify': verify};