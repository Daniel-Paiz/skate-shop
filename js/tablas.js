window.addEventListener("load", () => {
    const contenedorDeTablas = document.getElementById("tablaDeTablas");

    fetch('../data/tablas.json')
    .then(response => response.json())
    .then(tablas => {
        tablas.forEach((tabla) => agregarProductosATabla(tabla, contenedorDeTablas));
        tablas.forEach(prepararBotonesAgregarAlCarrito);
    });
});