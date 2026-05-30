const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mi_base_datos'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la BD:', err.message);
    return;
  }
  console.log('Conectado exitosamente a la base de datos');

  connection.query('SELECT 1 + 1 AS resultado', (error, results) => {
    if (error) {
      console.error('Error en la consulta de prueba:', error.message);
    } else {
      console.log('Consulta de prueba exitosa, resultado:', results[0].resultado);
    }

    connection.end();
  });
});