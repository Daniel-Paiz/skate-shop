function obtenerCarritoDelStorage() {
    const carrito = localStorage.getItem('carrito');
    return carrito ? JSON.parse(carrito) : [];
}

function agregarALcarrito(productoAAgregar) {
    const carrito = obtenerCarritoDelStorage();
    const tenemosStock = validarStock(productoAAgregar, carrito);
    if (tenemosStock) {
        carrito.push(productoAAgregar);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarEtiquetaCantidadCarrito();
    }
}

function validarStock(productoAAgregar, carrito) {
    const cantidadEnCarrito = carrito.filter(productoEnCarrito => productoEnCarrito === productoAAgregar).length;
    const cantidadSolicitada = cantidadEnCarrito + 1;

    if (productoAAgregar.stock >= cantidadSolicitada) {
        return true;
    }
    return false;
}

function borrarProductoDelcarrito(nombreDelProducto) {
    const carrito = obtenerCarritoDelStorage();
    const productoABorrar = carrito.findIndex((producto) => producto.nombre === nombreDelProducto);
    carrito.splice(productoABorrar, 1);

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarEtiquetaCantidadCarrito();
    inicializarPantallaDeCarrito(carrito);
}

function actualizarEtiquetaCantidadCarrito() {
    const carrito = obtenerCarritoDelStorage();

    const etiquetaCantidadCarrito = document.getElementById("etiqueta_cantidad_carrito");
    etiquetaCantidadCarrito.innerHTML = carrito.length;
}

function obtenerHTMLPorProducto(producto) {
    return `
        <tr>
            <td scope="row">${producto.stock}</td>
            <td>${producto.nombre}</td>
            <td>${producto.price}</td>
            <td>
                <button id="${producto.type}_${producto.id}" class="btn btn-primary" type="button">Agregar al carrito</button>
            </td>
        </tr>
    `;
}

function prepararBotonesAgregarAlCarrito(producto) {
    const botonAgregarProducto = document.getElementById(`${producto.type}_${producto.id}`);

    botonAgregarProducto.addEventListener("click", () => {
        agregarALcarrito(producto);
    });
}

function agregarProductosATabla(producto, contenedorDeProductos) {
    contenedorDeProductos.innerHTML += obtenerHTMLPorProducto(producto);
}

window.addEventListener("load", () => {
    actualizarEtiquetaCantidadCarrito();
});

