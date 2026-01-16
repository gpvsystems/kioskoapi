const express = require('express');
const app = express();
require('dotenv').config();
const ProductosService = require('./Aplicacion/Servicios/productosServices.js');
const productosService = new ProductosService();  


// Middleware para parsear JSON
app.use(express.json());

// Ruta GET básica
app.get('/', (req, res) => {
  res.send('¡Servidor Express funcionando!');
});

app.get('/api/productos', (req, res) => {

  let productos = productosService.obtenerTodosLosProductos();
 /*  productos = []; // Simular sin productos */

 console.log(productos);
  if(productos.length === 0) {
    return res.status(404).json({ mensaje: 'No se encontraron productos', productos: [] });
  }else{
    return res.status(200).json({ mensaje: 'Lista de productos', productos: productos });
  }

  res.json({ mensaje: 'Lista de productos', productos: productos });
});



// Iniciar el servidor
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PUERTO}`);
});