const ProductosModel = require('../../Dominio/Entidades/producto.js');

module.exports = class ProductosRepository {

    constructor() {
        // Aquí podrías inicializar la conexión a la base de datos si es necesario
    }
    
    async obtenerTodos() {
       
        let productos = [];
        let producto1 = new ProductosModel(1, 'Producto 1', 'Descripción del Producto 1', 10.0, 100);
        let producto2 = new ProductosModel(2, 'Producto 2', 'Descripción del Producto 2', 20.0, 50);
        let producto3 = new ProductosModel(3, 'Producto 3', 'Descripción del Producto 3', 30.0, 75);
        let producto4 = new ProductosModel(4, 'Producto 4', 'Descripción del Producto 4', 15.0, 120);
        let producto5 = new ProductosModel(5, 'Producto 5', 'Descripción del Producto 5', 25.0, 80);
        let producto6 = new ProductosModel(6, 'Producto 6', 'Descripción del Producto 6', 35.0, 60);
        let producto7 = new ProductosModel(7, 'Producto 7', 'Descripción del Producto 7', 22.5, 90);
        let producto8 = new ProductosModel(8, 'Producto 8', 'Descripción del Producto 8', 18.0, 110);
        let producto9 = new ProductosModel(9, 'Producto 9', 'Descripción del Producto 9', 28.0, 70);
        let producto10 = new ProductosModel(10, 'Producto 10', 'Descripción del Producto 10', 32.0, 85);
        
        productos.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10);

        console.log("Repositorio: ", productos);
        return productos;
    }     
        
     
}
        