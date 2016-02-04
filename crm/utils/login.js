/**
 * Created by gerardo on 2/3/2016.
 */

var md5 = require('md5');
var conexion = require('../connection');

var login = function (req, res, next) {
    var data = req.body;

    var user = data['user'];
    var pswd = data['passwd'];
    console.log("golasdasd ", user, pswd);

    if (user != undefined && pswd != undefined) {

        conexion.query('SELECT iduser, name, mail FROM usuarios WHERE name  = ? AND pswd = ?', [user, md5(pswd)], function (error, result) {


            if (error) {
                // throw error;
                res.status(500).json({'error': error});
                next();

            } else {

                if (result.length > 0) {

                    res.status(200).json({'data': result});
                } else {

                    res.status(404).json();
                }
            }
        });
    }else{
        res.status(400).json();
    }


};


module.exports = login;