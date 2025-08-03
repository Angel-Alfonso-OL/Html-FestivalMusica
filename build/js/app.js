document.addEventListener("DOMContentLoaded", function(){
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
});

function navegacionFija() {
    const header = document.querySelector(".header");
    const sobreFestival = document.querySelector(".sobre-festival");
    document.addEventListener('scroll', function () {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    })
}

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
    modal.onclick = cerrarModal;

    const cerrarModalBTN = document.createElement("BUTTON");
    cerrarModalBTN.textContent = "X";
    cerrarModalBTN.classList.add("btn-cerrar");
    cerrarModalBTN.onclick = cerrarModal;


    modal.appendChild(img);
    modal.appendChild(cerrarModalBTN);






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

function resaltarEnlace(){
    document.addEventListener("scroll", function(){
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".navegacion-principal a");
        let actual = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(window.scrollY >= (sectionTop - sectionHeight / 3)){
                actual = section.id;
            }
        })

        navLinks.forEach(link => {
            link.classList.remove("active");
            if(link.getAttribute("href") === "#" + actual){
                link.classList.add("active");
            }

        })
    })

}

function scrollNav(){
    const navLinks = document.querySelectorAll(".navegacion-principal a");
    navLinks.forEach(link =>{
        link.addEventListener("click",e => {
            e.preventDefault();
            const sectionScroll = e.target.getAttribute("href");
            const section = document.querySelector(sectionScroll);
            section.scrollIntoView({behavior: "smooth"});
        })
    }) 
}
