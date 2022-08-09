window.addEventListener("load", () => {
    const contenedorDeTrucks = document.getElementById("tablaDeTrucks");
    trucks.forEach((truck) => agregarProductosATabla(truck, contenedorDeTrucks));

    trucks.forEach(prepararBotonesAgregarAlCarrito);
});