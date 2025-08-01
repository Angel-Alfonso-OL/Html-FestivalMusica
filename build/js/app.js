document.addEventListener("DOMContentLoaded", crearGaleria);

function crearGaleria(){
    const galeria = document.querySelector(".galeria-imagenes");
    for(let i = 1; i <= 16; i++){
        const img = document.createElement("IMG");
        img.src = '/src/gallery/full/'+i+'.jpg';
        img.alt = "Imagen Musica";
        galeria.appendChild(img);

    }
}
