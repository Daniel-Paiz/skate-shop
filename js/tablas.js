window.addEventListener("load", () => {
    const contenedorDeTablas = document.getElementById("tablaDeTablas");
    tablas.forEach((tabla) => agregarProductosATabla(tabla, contenedorDeTablas));

    tablas.forEach(prepararBotonesAgregarAlCarrito);
});