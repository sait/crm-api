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


var pool = mysql.createPool(config);


pool.getConnection(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexion la BD  "' + config.database + '"  correcta.');
    }
});


var consulta = function (sql, values) {

    //se crea objeto defer
    var deferred = Q.defer();

    //se validan parametros del query
    values === undefined ? values = [] : null;

    //se obtiene una nueva conexion del pool
    pool.getConnection(function (error, conn) {
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
        }//if - error
    });

    // retorna la promesa
    return deferred.promise;
};//consulta


var multipleQuery = function (querys) {

    // validamos que sea array
    if (Array.isArray(querys)) {

        //creamos un arreglo donde guardaremos las promesas
        var promises = [];

        //recorremos el array de consultas
        for (var i = 0; i < querys.length; i++) {

            //validamos que tengan values
            querys[i].values === undefined ? querys[i].values = [] : null;

            //se guardan las promises en el array
            promises.push(consulta(querys[i].sql, querys[i].values));

        }//for

    }//if is array

    // se ejecutan totas las promesas
    return Q.all(promises);

};


module.exports = {consulta: consulta, pool: pool, multipleQuery: multipleQuery};



