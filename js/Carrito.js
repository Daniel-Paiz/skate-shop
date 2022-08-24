window.addEventListener('load', () => {
    (async () => {

        const { value: accept } = await Swal.fire({
            title: 'Se nesesita ser mayor de edad para proceder con la compra en caso contrario recurir  a padres o tutor a cargo',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder:
                'aceptar condiciones',
            confirmButtonText:
                'Continue <i class="fa fa-arrow-right"></i>',
            inputValidator: (result) => {
                return !result && 'vas a tener que aceptar no hay de otra'
            }
        })

        if (accept) {
            Swal.fire('gracias por confiar en nosotros atte skateshop campana')
        }
    })()
})

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
        borrarProductoDelcarrito(producto.nombre);
    });
}

function inicializarPantallaDeCarrito(productosEnCarrito) {
    const contenedorDeProductos = document.getElementById("tablaDeCarrito");
    console.log(productosEnCarrito);
    contenedorDeProductos.innerHTML = '';
    productosEnCarrito.forEach((tabla) => {
        contenedorDeProductos.innerHTML += obtenerHTMLPorProductodecarrito(tabla);
    });
    productosEnCarrito.forEach(prepararBotonesBorrarDeCarrito);
}

window.addEventListener("load", () => {
    const productosEnCarrito = obtenerCarritoDelStorage();
    inicializarPantallaDeCarrito(productosEnCarrito);
})
