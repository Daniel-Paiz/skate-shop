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
const Producto1 = { type: 'tabla', nombre: 'santa cruz verde', stock: 15, price: 16000 };
const Producto2 = { type: 'tabla', nombre: 'santa cruz marron', stock: 10, price: 16000 };
const Producto3 = { type: 'tabla', nombre: 'cleaver grafitti', stock: 5, price: 12000 };
const Producto4 = { type: 'tabla', nombre: 'cleaver negra y rosa', stock: 13, price: 12000 };
const Producto5 = { type: 'tabla', nombre: 'milton martinez', stock: 5, price: 18000 };
const Producto6 = { type: 'tabla', nombre: 'tabla basica', stock: 19, price: 15000 };
const Producto7 = { type: 'truck', nombre: 'independent hollow', stock: 15, price: 3500 };
const Producto8 = { type: 'truck', nombre: 'independent 11 pro', stock: 15, price: 2700 };
const Producto9 = { type: 'truck', nombre: 'thunder morado', stock: 9, price: 4200 };
const Producto10 = { type: 'truck', nombre: 'hunder 149', stock: 10, price: 5000 };
const Producto11 = { type: 'truck', nombre: 'element carbon', stock: 13, price: 2500 };
const Producto12 = { type: 'truck', nombre: 'element rasta', stock: 12, price: 3800 };
const Producto13 = { type: 'accesorio', nombre: 'lijas santa cruz', stock: 8, price: 2000 };
const Producto14 = { type: 'accesorio', nombre: 'ruedas', stock: 24, price: 1800 };
const Producto15 = { type: 'accesorio', nombre: 'rulemanes', stock: 24, price: 2100 };
const Producto16 = { type: 'accesorio', nombre: 'pads', stock: 12, price: 600 };
const Producto17 = { type: 'accesorio', nombre: 'llaves t', stock: 6, price: 1700 };

const tablas = [Producto1, Producto2, Producto3, Producto4, Producto5, Producto6];
const trucks = [Producto7, Producto8, Producto9, Producto10, Producto11, Producto12];
const accesorios = [Producto13, Producto14, Producto15, Producto16, Producto17];
const carrito = [];
function agregarALcarrito(producto, stock) {
    const tenemosStock = validarStock(stock);
    if (tenemosStock == 'tenemos stock') {
        console.log("agregas el producto al carrito: " + producto);
    }
    carrito.push(producto);
    console.log(carrito);
}
function validarStock(stockDELproducto) {
    if (stockDELproducto < 5) {
        return 'tenemos stock';
    } else {
        return 'no tenemos stock';
    }
}
function borrarProductoDelcarito(nombreDELproducto) {
    const borrar = carrito.findIndex((producto) => producto.id === nombreDELproducto);
    carrito.splice(borrar, 1);
    console.log(carrito);
}
agregarALcarrito(Producto1);
agregarALcarrito(Producto5);
agregarALcarrito(Producto10);
agregarALcarrito(Producto13);

borrarProductoDelcarito('santa cruz verde');
