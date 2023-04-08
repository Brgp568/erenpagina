
function cambiarImagen() {
   
    var seleccion = document.getElementById("opcion").value;
    

    var imagenNav = document.getElementById("imagenLateral");
    

    switch (seleccion) {
        case "opcion1":
            imagenNav.src = "img/titandeataque.jpg";
            break;
        case "opcion2":
            imagenNav.src = "img/titanmartillodeguerra.png";
            break;
        case "opcion3":
            imagenNav.src = "img/titancolosal.jpg";
            break;
        case "opcion4":
            imagenNav.src = "img/titanacorazado.png";
            break;
        case "opcion5":
            imagenNav.src = "img/titancarreta.webp";
            break;
        case "opcion6":
            imagenNav.src = "img/titanmandibula.webp";
            break;
        case "opcion7":
            imagenNav.src = "img/titanfundador.webp";
            break;
        case "opcion8":
            imagenNav.src = "img/titanhembra.jpg";
            break;
        case "opcion9":
            imagenNav.src = "img/titanmono.webp";
            break;
        default:
          
            imagenNav.src = "img/imagenfinal";
            break;
    }
}
function mostrarMensajeEmergente(opcion) {
  
    var mensajeEmergente = document.getElementById("mensajeEmergente");

 
    switch (opcion) {
        case 'opcion1':
            mensajeEmergente.innerHTML = "No le sabes a la vida";
            break;
        case 'opcion2':
            mensajeEmergente.innerHTML = "Tienes un sentido del gusto increible";
            break;
        default:
            mensajeEmergente.innerHTML = "";
            break;
    }

 
    mensajeEmergente.style.display = "block";

 
    setTimeout(function() {
        mensajeEmergente.style.display = "none";
    }, 5000);
}