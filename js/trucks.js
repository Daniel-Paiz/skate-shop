window.addEventListener("load", () => {
    const contenedorDeTrucks = document.getElementById("tablaDeTrucks");

    fetch('../data/trucks.json')
    .then(response => response.json())
    .then(trucks => {
        trucks.forEach((tabla) => agregarProductosATabla(tabla, contenedorDeTrucks));
        trucks.forEach(prepararBotonesAgregarAlCarrito);
    });
});