document.addEventListener("DOMContentLoaded", crearGaleria);

function crearGaleria(){
    
    const galeria = document.querySelector(".galeria-imagenes");
    const CANTIDAD_IMAGENES = 16;
    for(let i = 1; i <= CANTIDAD_IMAGENES; i++){
        const img = document.createElement("IMG");
        img.src = '/src/gallery/full/'+i+'.jpg';
        img.alt = "Imagen Musica";
        galeria.appendChild(img);

    }
}
