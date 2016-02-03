/**
 * Created by gerardo on 2/1/2016.
 */


var express = require('express');
var router = express.Router();

var conexion = require('../connection');


router.get('/', function (req, res, next) {

    conexion.query('SELECT ordenes.idord, ordenes.fecha, ordenes.obs, ordenes.duracion, contactos.nombre, contactos.telefono, contactos.empresa, contactos.email ' +
        'FROM ordenes INNER JOIN contactos ON contactos.idcont = ordenes.idcont',

        function (error, result) {


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


router.get('/:idorden', function (req, res, next) {

    var idorden = req.params['idorden'];

    if (idorden != undefined || idorden > 0) {

        conexion.query('SELECT ordenes.idord, ordenes.fecha, ordenes.obs, ordenes.duracion, contactos.nombre, contactos.telefono, contactos.empresa, contactos.email  ' +
            'FROM ordenes INNER JOIN contactos ON contactos.idcont = ordenes.idcont  AND ordenes.idord = ?',
            [
                idorden
            ],
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


router.post('/', function (req, res, next) {

    var nuevaorden = req.body;

    if (nuevaorden['obs'] != undefined && nuevaorden['duracion'] != undefined && nuevaorden['idcont'] != undefined) {

        conexion.query('INSERT INTO ordenes (obs, duracion, idcont) VALUES (?,?,?)',
            [
                nuevaorden['obs'],
                nuevaorden['duracion'],
                nuevaorden['idcont']
            ],
            function (error, result) {

                if (error) {
                    // throw error;
                    res.status(500).json({'error': error});
                    next();

                } else {

                    if (result.affectedRows > 0) {

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


router.post('/:idorden', function (req, res, next) {

    var nuevaorden = req.body;
    var idorden = req.params['idorden'];

    if (nuevaorden['obs'] != undefined && nuevaorden['duracion'] != undefined && idorden > 0) {

        conexion.query('UPDATE ordenes SET obs=?, duracion=?, idcont=? WHERE idord = ?',
            [
                nuevaorden['obs'],
                nuevaorden['duracion'],
                nuevaorden['idcont']
            ],
            function (error, result) {

                if (error) {
                    // throw error;
                    res.status(500).json({'error': error});
                    next();

                } else {

                    if (result.affectedRows > 0) {

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


router.delete('/:idorden', function (req, res, next) {

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

module.exports = router;