//const ProductosModel = require('../../Proveedor.js');

module.exports = class ProductosRepository {

    constructor() {
        // Aquí podrías inicializar la conexión a la base de datos si es necesario
    }
    
    async obtenerTodos() {
       
        var productos = [
            {
                id: 1,
                nombre: 'Producto 1',
                descripcion: 'Descripción del Producto 1',
                precio: 10.0,
                stock: 100
            },
            {
                id: 2,
                nombre: 'Producto 2',
                descripcion: 'Descripción del Producto 2',
                precio: 20.0,
                stock: 50
            },
            {
                id: 3,
                nombre: 'Producto 3',
                descripcion: 'Descripción del Producto 3',
                precio: 30.0,
                stock: 75
            }
        ];
        console.log("Repositorio: ", productos);
        return productos;
    }
}
        