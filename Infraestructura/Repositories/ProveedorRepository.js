const  proveedorModel = require('../../Dominio/Entidades/proveedor.js');

class ProveedorRepository {
    constructor() {
        // Aquí podrías inicializar la conexión a la base de datos si es necesario
    }   

    async obtenerTodosLosProveedores() {
        // Simulación de datos de proveedores
        var proveedores =[];
        let proveedor1 =new proveedorModel(1, "Proveedor A", "Calle 123", "555-1234");
        let proveedor2 =new proveedorModel(2, "Proveedor B", "Avenida 456", "555-5678");
        let proveedor3 =new proveedorModel(3, "Proveedor C", "Boulevard 789", "555-9012");

        proveedores.push(proveedor1,proveedor2,proveedor3);
        
        return proveedores;
    }
}
export default ProveedorRepository;