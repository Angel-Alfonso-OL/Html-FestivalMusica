document.addEventListener("DOMContentLoaded", crearGaleria);

function crearGaleria() {

    const galeria = document.querySelector(".galeria-imagenes");
    const CANTIDAD_IMAGENES = 16;
    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const img = document.createElement("IMG");
        img.src = '/src/gallery/full/' + i + '.jpg';
        img.alt = "Imagen Musica";
        galeria.appendChild(img);

        img.onclick = function () {
            mostrarImagen(i);
        }

    }
}

function mostrarImagen(i) {

    const img = document.createElement("IMG");
    img.src = '/src/gallery/full/' + i + '.jpg';
    img.alt = "Imagen Musica";


    const modal = document.createElement("DIV");
    modal.classList.add("modal");

    modal.appendChild(img);

    modal.onclick = cerrarModal;

    const body = document.querySelector("body");
    body.classList.add("overflow-hidden");
    body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector(".modal");
    modal.classList.add("fade-out");
    setTimeout(() => {
        modal?.remove();
    }, 500);

     const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");

}
