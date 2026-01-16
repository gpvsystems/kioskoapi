const productosRepo = require('../../Infraestructura/Repositories/productosRepository.js');

class ProductosService {
    constructor() {
        this.productosRepo = new productosRepository();
    }
    async obtenerTodosLosProductos() {
        return await this.productosRepo.obtenerTodos();
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