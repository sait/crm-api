/**
 * Created by gerardo on 1/28/2016.
 */


var express = require('express');
var router = express.Router();

var conexion = require('../connection');


router.get('/', function (req, res, next) {

    conexion.query('select * from contactos', function (error, result) {
        // res.status(200).json({'result': result, error : error});

        if (error) {
            // throw error;
            res.status(500).json({'error': error});
            next();

        } else {

            if (result.length > 0) {

                res.status(200).json({'total_count': result.length, 'data': result});
            } else {

                res.status(204).json();
            }
        }
    });


    // res.send(app);

});


router.get('/:idcontacto', function (req, res, next) {

    var idcontacto = req.params['idcontacto'];

    if (idcontacto != undefined || idcontacto > 0) {

        conexion.query('select * from contactos where idcont = ?', [idcontacto], function (error, result) {
            // res.status(200).json({'result': result, error : error});

            if (error) {
                // throw error;
                res.status(500).json({'error': error});
                next();

            } else {

                if (result.length > 0) {

                    res.status(200).json({'data': result});
                } else {

                    res.status(204).json();
                }
            }
        });


    } else {
        res.status(50).json();
    }


});


router.post('/', function (req, res, next) {

    var nuevocontacto = req.body;

    if (nuevocontacto['nombre'] != undefined && nuevocontacto['email'] && nuevocontacto['empresa'] && nuevocontacto['telefono']) {

        conexion.query('INSERT INTO contactos (nombre, empresa, email, telefono) VALUES (?,?,?,?)',
            [
                nuevocontacto['nombre'],
                nuevocontacto['empresa'],
                nuevocontacto['email'],
                nuevocontacto['telefono']
            ],
            function (error, result) {


                if (error) {
                    // throw error;
                    res.status(500).json({'error': error});
                    next();

                } else {

                    if (result.affectedRows > 0) {

                        nuevocontacto['idcont'] = result.insertId;

                        res.status(201).json({'data': nuevocontacto});

                    } else {

                        res.status(204).json();
                    }
                }
            });


    } else {
        res.status(400).json();
    }

});


router.post('/:idcontacto', function (req, res, next) {

    var idcontacto = req.params['idcontacto'];

    var nuevocontacto = req.body;


    if (nuevocontacto['email'] != undefined && nuevocontacto['telefono'] != undefined) {
        if (idcontacto != undefined || idcontacto > 0) {

            conexion.query('UPDATE contactos SET email=?, telefono=? WHERE  idcont = ?',
                [
                    nuevocontacto['email'],
                    nuevocontacto['telefono'],
                    idcontacto
                ],
                function (error, result) {

                    if (error) {
                        // throw error;
                        res.status(500).json({'error': error});
                        next();

                    } else {

                        if (result.affectedRows > 0) {

                            nuevocontacto['idcont'] = idcontacto;

                            res.status(200).json({'data': nuevocontacto});

                        } else {

                            res.status(204).json();
                        }
                    }
                });


        } else {
            res.status(400).json({'error': 'el id del contacto no es correcto'});
        }
    }//validacion de campos
    else {
        res.status(400).json({'error': 'los datos no son correctos'});
    }


});


router.delete('/:idcontacto', function (req, res, next) {

    var idcontacto = req.params['idcontacto'];

    if (idcontacto != undefined || idcontacto > 0) {

        conexion.query('DELETE FROM contactos WHERE  idcont = ?',
            [
                idcontacto
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
        res.status(400).json({'error': 'el id del contacto no es correcto'});
    }

});


/***
 *
 *
 **/


router.get('/:idcontacto/ordenes', function (req, res, next) {

    var idcontacto = req.params['idcontacto'];

    if (idcontacto != undefined || idcontacto > 0) {

        conexion.query('SELECT ordenes.idord, ordenes.fecha, ordenes.obs, ordenes.duracion FROM contactos INNER JOIN ordenes ON contactos.idcont = ordenes.idcont WHERE contactos.idcont = ? ',
            [idcontacto],
            function (error, result) {

                if (error) {
                    // throw error;
                    res.status(500).json({'error': error});
                    next();

                } else {

                    if (result.length > 0) {

                        res.status(200).json({'data': result});
                    } else {

                        res.status(204).json();
                    }
                }
            });


    } else {
        res.status(50).json();
    }


});


router.get('/:idcontacto/ordenes/:idorden', function (req, res, next) {

    var idcontacto = req.params['idcontacto'];
    var idorden = req.params['idorden'];

    if (idcontacto != undefined || idcontacto > 0) {

        conexion.query('SELECT ordenes.idord, ordenes.fecha, ordenes.obs, ordenes.duracion FROM contactos INNER JOIN ordenes ON contactos.idcont = ordenes.idcont WHERE contactos.idcont = ? AND ordenes.idord = ? ',
            [idcontacto, idorden],
            function (error, result) {

                if (error) {
                    // throw error;
                    res.status(500).json({'error': error});
                    next();

                } else {

                    if (result.length > 0) {

                        res.status(200).json({'data': result});
                    } else {

                        res.status(204).json();
                    }
                }
            });


    } else {
        res.status(50).json();
    }


});


router.post('/:idcontacto/ordenes', function (req, res, next) {

    var nuevaorden = req.body;
    var idcontacto = req.params['idcontacto'];

    if (nuevaorden['obs'] != undefined && nuevaorden['duracion'] != undefined && idcontacto > 0) {

        conexion.query('INSERT INTO ordenes (obs, duracion, idcont) VALUES (?,?,?)',
            [
                nuevaorden['obs'],
                nuevaorden['duracion'],
                idcontacto
            ],
            function (error, result) {

                if (error) {
                    // throw error;
                    res.status(500).json({'error': error});
                    next();

                } else {

                    if (result.affectedRows > 0) {

                        nuevaorden['idcont'] = idcontacto;
                        nuevaorden['idord'] = result.insertId;

                        res.status(200).json({'data': nuevaorden});

                    } else {

                        res.status(204).json();
                    }
                }
            });


    } else {
        res.status(500).json();
    }


});


router.delete('/:idcontacto/ordenes/:idorden', function (req, res, next) {

    var idcontacto = req.params['idcontacto'];
    var idorden = req.params['idorden'];

    if (idcontacto != undefined || idcontacto > 0) {

        conexion.query('DELETE FROM ordenes WHERE  idcont = ? AND idord = ?',
            [
                idcontacto,
                idorden
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
        res.status(50).json();
    }


});

module.exports = router;