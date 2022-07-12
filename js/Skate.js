const EdadPermitida = 18;
const EdadDelUsuario = prompt('PorFvavorIngresarEdad');
const ListaUsuarios = [0, 1, 2,]
if (EdadPermitida <= EdadDelUsuario) {
    console.log(alert('PerfectoContinue'))
}
else { alert('ParaContactarLlenarDatosConTuturACargo') }
ListaUsuarios[0]
let ContadorDeUsuario = 0
for (let Posicion = 0 ; Posicion < 3; Posicion++) {
    ContadorDeUsuario = ContadorDeUsuario + ListaUsuarios[Posicion];
    console.log(ContadorDeUsuario);
}
// for aun no lo implemente en la pagina como tal no se me ocurruo un ejemplo
switch (EdadDelUsuario) {
    case '19':
        console.log(alert('tenes envio gratis'))
        break;
    case '20':
        console.log(alert(' por tener 20 tenes descueto de10 % y envio gratis'))
        break;
    case '23':
        console.log(alert('por tener 23 tenes descuento de 25% y envio gratis padre'))
        break;
    default:
        console.log(alert('gracias por vicitarnos'))
}






