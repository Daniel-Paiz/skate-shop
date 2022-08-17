// window.addEventListener('load', () => {
//     (async () => {

//         const { value: accept } = await Swal.fire({
//             title: 'Se nesesita ser mayor de edad para proceder con la compra en caso contrario recurir  a padres o tutor a cargo',
//             input: 'checkbox',
//             inputValue: 1,
//             inputPlaceholder:
//                 'aceptar condiciones',
//             confirmButtonText:
//                 'Continue <i class="fa fa-arrow-right"></i>',
//             inputValidator: (result) => {
//                 return !result && 'You need to agree with T&C'
//             }
//         })

//         if (accept) {
//             Swal.fire('gracias por confiar en nosotros atte skateshop campana')
//         }
//     })()
// })

function obtenerHTMLPorProductodecarrito(producto) {
    return `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.price}</td>
            <td>
                <button id="${producto.type}_${producto.id}" class="btn btn-primary" type="button">eliminar</button>
            </td>
        </tr>
    `;
}
function prepararBotonesBorrarDeCarrito(producto) {
    const botonBorrarProducto = document.getElementById(`${producto.type}_${producto.id}`);
    botonBorrarProducto.addEventListener("click", () => {
        borrarProductoDelcarrito(producto);
    });
}
window.addEventListener("load", () => {
    const contenedorDeProductos = document.getElementById("tablaDeCarrito");
    tablas.forEach((tabla) => {
        contenedorDeProductos.innerHTML += obtenerHTMLPorProductodecarrito(tabla);
    });
    tablas.forEach(prepararBotonesBorrarDeCarrito);
})