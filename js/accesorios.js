window.addEventListener("load", () => {
    const contenedorDeAccesorios = document.getElementById("tablaDeAccesorios");

    fetch('../data/accesorios.json')
    .then(response => response.json())
    .then(accesorios => {
        accesorios.forEach((accesorio) => agregarProductosATabla(accesorio, contenedorDeAccesorios));
        accesorios.forEach(prepararBotonesAgregarAlCarrito);
    });
});