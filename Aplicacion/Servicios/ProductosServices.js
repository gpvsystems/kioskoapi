const productosRepo = require('../../Infraestructura/Repositories/productosRepository.js');

class ProductosService {
 
    constructor() {
        this.productosRepo = new productosRepo();
    }
    async obtenerTodosLosProductos() {
        let productos = await this.productosRepo.obtenerTodos();
        return productos;
    }
       
    
    async obtenerProductoPorId(id) {
        return await this.productosRepo.obtenerPorId(id);
    }
    async crearProducto(producto) {
        return await this.productosRepo.crear(producto);
    }
    async actualizarProducto(id, producto) {
        return await this.productosRepo.actualizar(id, producto);
    }
    async eliminarProducto(id) {
        return await this.productosRepo.eliminar(id);
    }
}

module.exports = ProductosService;  