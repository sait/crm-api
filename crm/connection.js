/**
 * Created by gerardo on 1/28/2016.
 */

var mysql = require('mysql');
var appconfig =  require('./utils/config');


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
        console.log('Conexion la BD  "'+config.database+'"  correcta.');
    }
});


module.exports = conexion;



