/**
 * Created by gerardo on 1/28/2016.
 */

var mysql = require('mysql');


var config = {
    host: '192.168.0.160',
    user: 'remoto',
    password: 'nachito',
    connectionLimit: 10,
    database: 'crm',
    port: 3306,
    dateStrings: 'date',
    debug: false
};


var conexion = mysql.createPool(config);


conexion.getConnection(function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conexion la BD  "'+config.database+'"  correcta.');
    }
});


module.exports = conexion;



