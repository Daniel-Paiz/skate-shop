// const EdadPermitida = 18;
// const EdadDelUsuario = prompt('PorFvavorIngresarEdad');
// // const ListaUsuarios = [0, 1, 2,]
// if (EdadPermitida <= EdadDelUsuario) {
//     alert('PerfectoContinue')
// }
// else { alert('ParaContactarLlenarDatosConTuturACargo') }
// // ListaUsuarios[0]
// // let ContadorDeUsuario = 0
// // for (let Posicion = 0 ; Posicion < 3; Posicion++) {
// //     ContadorDeUsuario = ContadorDeUsuario + ListaUsuarios[Posicion];
// //     console.log(ContadorDeUsuario);
// // }
// // for aun no lo implemente en la pagina como tal no se me ocurruo un ejemplo
// switch (EdadDelUsuario) {
//     case '19':
//         alert('tenes envio gratis')
//         break;
//     case '20':
//         alert(' por tener 20 tenes descueto de10 % y envio gratis')
//         break;
//     case '23':
//         alert('por tener 23 tenes descuento de 25% y envio gratis padre')
//         break;
// }
function agregarALcarrito(producto, stock) {
    const tenemosStock = validarStock(stock);
    if (tenemosStock == 'tenemos stock') {
        console.log("agregas el producto al carrito: " + producto);
    }
}
function validarStock(stockDELproducto) {
    if (stockDELproducto < 5) {
        return 'tenemos stock';
    } else {
        return 'no tenemos stock';
    }
}
// const stockQueTieneELproducto = prompt('cuanto de estock tiene ese producto?');
agregarALcarrito('santa cruz verde', 10)
agregarALcarrito('santa cruz marron', 10)
agregarALcarrito('cleaver grafitti', 3)

// function Producto(objeto, stock, precio) {
//     this.objeto = objeto;
//     this.stock = stock;
//     this.precio = precio;
// }
// const Producto1 = new Producto('santa cruz verde', 10, 16000);
// const Producto2 = new Producto('santa cruz marron', 10, 16000);
// const Producto3 = new Producto('cleaver grafitti', 3, 12000);

class Persona {
    constructor(objeto, stock, precio) {
        this.objeto = objeto;
        this.stock = stock;
        this.precio = precio;
    }
}
const persona1 = new Persona('objeto, stock, precio')

const carrito = [];

function agregarALcarritoa(producto) {
    carrito.push(producto);
    console.log(carrito);
}

agregarALcarritoa({ id: 12, name: 'elemento1', price: 900 })
agregarALcarritoa({ id: 23, name: 'elemento2', price: 1900 })
agregarALcarritoa({ id: 36, name: 'elemento3', price: 2900 })

function borrarProductoDelcarito(idDelproducto) {
    const index = carrito.findIndex((producto) => producto.id === idDelproducto);
    // console.log(index);
    carrito.splice(index, 1);
    console.log(carrito);
}

borrarProductoDelcarito(2900);






