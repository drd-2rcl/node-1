var mysql = require('mysql');

var connMySQL = function(){
  return mysql.createConnection({
    // esses dados não são válidos
    hots : 'localhost',
    user: 'root',
    password : '1234',
    database : 'portal_noticias'
  });
}

module.export = function() {
  return connMySQL;
}
