const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Ruta GET básica
app.get('/', (req, res) => {
  res.send('¡Servidor Express funcionando!');
});

// Ruta POST ejemplo
app.post('/api/datos', (req, res) => {
  res.json({ mensaje: 'Datos recibidos', datos: req.body });
});

// Iniciar el servidor
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PUERTO}`);
});