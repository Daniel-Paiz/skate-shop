window.addEventListener("load", () => {
    const contenedorDeAccesorios = document.getElementById("tablaDeAccesorios");
    accesorios.forEach((accesorio) => agregarProductosATabla(accesorio, contenedorDeAccesorios));

    accesorios.forEach(prepararBotonesAgregarAlCarrito);
});