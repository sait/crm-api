/**
 * Created by gerardo on 1/28/2016.
 */

var mysql = require('mysql');
var Q = require('q');
var appconfig = require('./utils/config');


var config = {
    host: appconfig.devDatabase.host,
    user: appconfig.devDatabase.user,
    password: appconfig.devDatabase.pass,
    connectionLimit: 10,
    database: appconfig.devDatabase.name,
    port: 3306,
    dateStrings: 'date',
    debug: false
};


var conexion = mysql.createPool(config);


conexion.getConnection(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexion la BD  "' + config.database + '"  correcta.');
    }
});


conexion.consulta = function (sql, values) {

    //se crea objeto defer
    var deferred = Q.defer();

    //se validan parametros del query
    values === undefined ? values = [] : null;
    console.log(values)

    //se obtiene una nueva conexion del pool
    conexion.getConnection(function (error, conn) {
        if (error) {
            throw error;
        } else {
            //se empieza una transaccion
            conn.beginTransaction(function (err) {

                //se hace la consulta
                conn.query(sql, values, function (error, result) {

                    if (error) {
                        //si hubo error en la transaccion
                        conn.rollback(function () {
                            //falla la promesa y retorna el error
                            deferred.reject(err)
                        });
                        //si hubo un error en el query  falla la promesa y retorna el error
                        deferred.reject(error)
                    } else {
                        //si el la transsacion se realizo correctamente se hace commit
                        conn.commit(function () {
                            // si hubo un error en el commit , falla promesa y retorna error
                            deferred.reject(err)
                        });
                        //si el query se realizo correctamente , retorna el resultado
                        deferred.resolve(result);
                    }

                    //desocupa la conexion del pool
                    conn.release();
                });//query

            });//transaction
        }
    });

    // retorna la promesa
    return deferred.promise;
};//consulta


module.exports = conexion;



