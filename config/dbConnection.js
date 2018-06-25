var mysql = require('mysql');

var connMySQL = function(){
  console.log('Conexão com bd foi estabelecida');
  return mysql.createConnection({
    // esses dados não são válidos
    hots : 'localhost',
    user: 'root',
    password : '1234',
    database : 'portal_noticias'
  });
}

module.export = function() {
  console.log('O autoload carregou o módulo de conexão com bd');
  return connMySQL;
}
