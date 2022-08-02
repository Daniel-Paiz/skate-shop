const EdadPermitida = 18;
const EdadDelUsuario = prompt('Ingresar edad por favor');
if (EdadPermitida <= EdadDelUsuario) {
    alert('PerfectoContinue')
}
else { alert('Para contactar con el negocio, por favor llenar datos con los datos de un adulto responsable gracias') }
switch (EdadDelUsuario) {
    case '19':
        alert('tenes envio gratis')
        break;
    case '20':
        alert(' por tener 20 tenes descueto de10 % y envio gratis')
        break;
    case '23':
        alert('por tener 23 tenes descuento de 25% y envio gratis.')
        break;
}
const productos = [
    { id: 1, type: 'tabla', nombre: 'santa cruz verde', stock: 15, price: 16000 },
    { id: 2, type: 'tabla', nombre: 'santa cruz marron', stock: 10, price: 16000 },
    { id: 3, type: 'tabla', nombre: 'cleaver grafitti', stock: 5, price: 12000 },
    { id: 4, type: 'tabla', nombre: 'cleaver negra y rosa', stock: 13, price: 12000 },
    { id: 5, type: 'tabla', nombre: 'milton martinez', stock: 5, price: 18000 },
    { id: 6, type: 'tabla', nombre: 'tabla basica', stock: 19, price: 15000 },
    { id: 7, type: 'truck', nombre: 'independent hollow', stock: 15, price: 3500 },
    { id: 8, type: 'truck', nombre: 'independent 11 pro', stock: 15, price: 2700 },
    { id: 9, type: 'truck', nombre: 'thunder morado', stock: 9, price: 4200 },
    { id: 10, type: 'truck', nombre: 'hunder 149', stock: 10, price: 5000 },
    { id: 11, type: 'truck', nombre: 'element carbon', stock: 13, price: 2500 },
    { id: 12, type: 'truck', nombre: 'element rasta', stock: 12, price: 3800 },
    { id: 13, type: 'accesorio', nombre: 'lijas santa cruz', stock: 8, price: 2000 },
    { id: 14, type: 'accesorio', nombre: 'ruedas', stock: 24, price: 1800 },
    { id: 15, type: 'accesorio', nombre: 'rulemanes', stock: 24, price: 2100 },
    { id: 16, type: 'accesorio', nombre: 'pads', stock: 12, price: 600 },
    { id: 17, type: 'accesorio', nombre: 'llaves t', stock: 6, price: 1700 }
];
const tablas = productos.filter((producto) => producto.type === 'tabla');
const trucks = productos.filter((producto) => producto.type === 'truck');
const accesorios = productos.filter((producto) => producto.type === 'accesorio');
const carrito = [];

function agregarALcarrito(productoAAgregar) {
    const tenemosStock = validarStock(productoAAgregar);
    if (tenemosStock) {
        carrito.push(productoAAgregar);
    }

    console.log(carrito);
}

function validarStock(productoAAgregar) {
    const cantidadEnCarrito = carrito.filter(productoEnCarrito => productoEnCarrito === productoAAgregar).length;
    const cantidadSolicitada = cantidadEnCarrito + 1;

    if (productoAAgregar.stock >= cantidadSolicitada) {
        return true;
    }
    return false;
}

function borrarProductoDelcarrito(nombreDelProducto) {
    const productoABorrar = carrito.findIndex((producto) => producto.nombre === nombreDelProducto);
    carrito.splice(productoABorrar, 1);

    console.log(carrito);
}
// agregarALcarrito(productos[0], 12);
// agregarALcarrito(productos[4], 18);
// agregarALcarrito(productos[9], 1);
// agregarALcarrito(productos[12], 5);

// borrarProductoDelcarrito('santa cruz verde');
