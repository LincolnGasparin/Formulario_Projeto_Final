// db.js
const mysql = require('mysql2/promise'); // Importa a versão com promises

const connection = mysql.createPool({
  host: 'localhost',     // O endereço do servidor MySQL
  user: 'root',    // O nome de usuário para conectar ao banco
  password: '', // A senha do usuário
  database: 'formulario' // O nome do seu banco de dados
});

module.exports = connection;