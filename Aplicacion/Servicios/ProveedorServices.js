const ProveedorRepository = require('../../Infraestructura/Repositories/ProveedorRepository.js');

class ProveedorServices {
    constructor() {
        this.proveedorRepository = new ProveedorRepository();
    }
    async obtenerTodosLosProveedores() {
        return await this.proveedorRepository.obtenerTodosLosProveedores();
    }   
}
module.exports = ProveedorServices;