function mostrarPopup(id) {
    const titulo = document.getElementById('tituloPopup');
    const imagen = document.getElementById('imagenPopup');
    const sinopsis = document.getElementById('sinopsisPopup');

    if (id === 1) {
        titulo.textContent = "Película 1";
        imagen.src = "pelicula.png";
        sinopsis.textContent = "Sinopsis de la Película 1.";
    } else if (id === 2) {
        titulo.textContent = "Película 2";
        imagen.src = "pelicula.png";
        sinopsis.textContent = "Sinopsis de la Película 2.";
    } else if (id === 3) {
        titulo.textContent = "Película 3";
        imagen.src = "pelicula.png";
        sinopsis.textContent = "Sinopsis de la Película 3.";
    }

    // Puedo añadir mas "else" si quiero añadir más peliculas 

    document.getElementById('popup').style.display = 'block';
    
}

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
    window.removeEventListener('click', cerrarPopupOutside);
}