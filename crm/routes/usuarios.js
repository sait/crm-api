/**
 * Created by gerardo on 2/1/2016.
 */


var express = require('express');
var router = express.Router();
var Q = require('q');

var conexion = require('../connection');


router.get('/', function (req, res, next) {

    //conexion.query('select iduser, name, mail from usuarios', function (error, result) {
    //
    //
    //    if (error) {
    //        // throw error;
    //        res.status(500).json({'error': error});
    //        next();
    //
    //    } else {
    //
    //        if (result.length > 0) {
    //
    //            res.status(200).json({'total_count': result.length, 'data': result});
    //        } else {
    //
    //            res.status(204).json();
    //        }
    //    }
    //});

    var consulta = conexion.consulta('select iduser, name, mail from usuarios').then(
        function (result) {

            if (result.length > 0) {

                res.status(200).json({'total_count': result.length, 'data': result});
            } else {

                res.status(204).json();
            }

        }, function (error) {
            res.status(500).json({'error': error});
            next();
        });


    Q.allSettled(consulta).then(console.log("consulta terminada"));


    // res.send(app);

});


router.get('/:idusuario', function (req, res, next) {

    var idusuario = req.params['idusuario'];

    if (idusuario != undefined || idusuario > 0) {

        conexion.consulta('SELECT iduser, name, mail FROM usuarios WHERE iduser = ?', [idusuario]).then(function (result) {

            if (result.length > 0) {
                res.status(200).json({'data': result});
            } else {

                res.status(204).json();
            }

        }, function (error) {
            res.status(500).json({'error': error});
            next();

        });

    } else {
        res.status(500).json();
    }


});


router.post('/', function (req, res, next) {

    var nuevousuario = req.body;

    if (nuevousuario['name'] != undefined && nuevousuario['mail'] && nuevousuario['pswd']) {

        conexion.consulta('INSERT INTO usuarios (name, mail, pswd) VALUES (?,?,?)',
            [
                nuevousuario['name'],
                nuevousuario['mail'],
                nuevousuario['pswd']
            ]).then(
            function (result) {

                if (result.affectedRows > 0) {

                    nuevousuario['iduser'] = result.insertId;

                    res.status(201).json({'data': nuevousuario});

                } else {

                    res.status(204).json();
                }

            }, function (error) {
                res.status(500).json({'error': error});
                next();

            });


    } else {
        res.status(400).json();
    }

});


router.post('/:idusuario', function (req, res, next) {

    var idusuario = req.params['idusuario'];

    var nuevousuario = req.body;


    if (nuevousuario['email'] != undefined && nuevousuario['pswd'] != undefined) {
        if (idusuario != undefined || idusuario > 0) {

            conexion.query('UPDATE usuarios SET email=?, pswd=? WHERE  iduser = ?',
                [
                    nuevousuario['email'],
                    nuevousuario['pswd'],
                    idusuario
                ],
                function (error, result) {

                    if (error) {
                        // throw error;
                        res.status(500).json({'error': error});
                        next();

                    } else {

                        if (result.affectedRows > 0) {

                            nuevousuario['iduser'] = idcontacto;

                            res.status(200).json({'data': nuevousuario});

                        } else {

                            res.status(204).json();
                        }
                    }
                });


        } else {
            res.status(400).json({'error': 'el id del usuario no es correcto'});
        }
    }//validacion de campos
    else {
        res.status(400).json({'error': 'los datos no son correctos'});
    }


});


router.delete('/:idusuario', function (req, res, next) {

    var idusuario = req.params['idusuario'];

    if (idusuario != undefined || idusuario > 0) {

        conexion.query('DELETE FROM usuarios WHERE  iduser = ?',
            [
                idusuario
            ],
            function (error, result) {

                if (error) {
                    // throw error;
                    res.status(500).json({'error': error});
                    next();

                } else {

                    if (result.affectedRows > 0) {

                        res.status(200).json();

                    } else {

                        res.status(404).json();
                    }
                }
            });


    } else {
        res.status(400).json({'error': 'el id del usuario no es correcto'});
    }

});


module.exports = router;