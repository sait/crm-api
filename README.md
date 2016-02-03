# crm-api
API REST del CRM de ejemplo utilizando nodejs


1.- Para instalar las dependecias del proyecto, debemos estar en el directorio donde esta **package.json** y ejecutar este comando en la consola.

``` npm install```

2.- Restaurar [Base de datos] (https://github.com/sait/crm-api/blob/master/crm-database.sql) y cambiar [configuracion del server](https://github.com/sait/crm-api/blob/master/crm/connection.js)

3.- Posteriormente que se ejecuta el servidor HTTP en el directorio raiz del proyecto.

``node bin/www``




###Recursos de la API


|  Metodo | Recurso      |   |
|------|-----------------|---|
| GET  |  /              | fecha   |
| GET  |  /hello         | holamundo y fecha  |
| GET  |  /contactos      | Todos los contactos  |
| POST |  /contactos | Crear nuevo contacto|
| GET  |  /contactos/:idcontacto | Obtener un contacto por ID|
| POST |  /contactos/:idcontacto| Modificar un contacto por ID|
| DELETE | /contactos/:idcontacto | Eliminar un contacto por ID|
| GET | /contactos/:idcontacto/ordenes| Todas las ordenes relacionadas con un contacto|
| GET|/contactos/:idcontacto/ordenes/:idorden| Una orden por ID de un contacto|
| POST | /contactos/:idcontacto/ordenes| Crear una orden para un contacto|
| DELETE | /contactos/:idcontacto/ordenes/:idorden| Eliminar una orden para un contacto|
||
| GET | /ordenes/| Todas las ordenes|
| GET | /ordenes/:idorden| Obtener una orden por ID|
| POST | /ordenes/| Crear una orden|
| POST| /ordenes/:idorden| Modificar una orden por ID|
| DELETE| /ordenes/:idorden| Eliminar una orden |
||
| GET | /usuarios/| Obtener todos los usuarios|
| GET | /usuarios/:idusuario| Obtener un usuario por ID|
| POST| /usuarios | Crear un usuario|
|POST| /usuarios/:idusuario| Modificar un usuario|
|DELETE | /usuarios/:idusuario| Eliminar un usuario por ID|


