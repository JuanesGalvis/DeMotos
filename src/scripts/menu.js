export function menuEvent(){
        const logo = document.querySelector(".home__link");
        const menu_container = document.querySelector(".menu__container");
        const menu_button = document.querySelector(".menu__button");
        const menu = document.querySelector(".menu");
        const modal = document.querySelector(".modal");
        const bodyDocument = document.querySelector("body");
        const x = window.matchMedia("(max-width: 1023px)");

        if (x.matches) {
            
            const activateMenu = ()=>{
                //Una vez se active el menú se añade el evento para cerrarlo
                logo.classList.toggle("over");
                menu_button.classList.toggle("close-button");
                menu_container.classList.toggle("is-active");
                modal.classList.toggle("modal-active");
                //Este condicional es para saber si el menú fue abierto o cerrado a través del botón hamburguesa
                if(menu_container.classList.contains("is-active")){
                    menu_container.addEventListener("click", closeMenuOutside);
                    modal.addEventListener("click", closeMenuOutside);
                    bodyDocument.style.overflowY = "hidden"
                }else{
                    bodyDocument.style.overflowY = "scroll"
                    menu_container.removeEventListener("click", closeMenuOutside);
                }    
                if(menu_container.style.transitionDuration === ""){
                    menu_container.style.transitionDuration = "1s";
                }
            }
            
            const closeMenuOutside = (e)=>{
                //Se comprueba que el target sea diferente al botón y a la barra para que no se aplique el toggle 2 veces al mismo tiempo
                if(e.target != menu_button && e.target != menu_button.firstElementChild && e.target != menu){
                    logo.classList.toggle("over");
                    menu_button.classList.remove("close-button");
                    menu_container.classList.remove("is-active");
                    modal.classList.remove("modal-active");
                    if(menu_container.classList.contains("is-active")){
                        bodyDocument.style.overflowY = "hidden";
                    }else{
                        bodyDocument.style.overflowY = "scroll";
                    }
                    menu_container.removeEventListener("click", closeMenuOutside);
                }
            }
    
            menu_button.addEventListener("click", activateMenu);
        }else{
            const BotonesMenu = document.querySelectorAll('.menu__link');

            const Paginas = {
                '': () => BotonesMenu[0].classList.add('active'),
                'index.html': () => BotonesMenu[0].classList.add('active'),
                'QuienesSomos.html': () => BotonesMenu[1].classList.add('active'),
                'index.html#maps': () => BotonesMenu[0].classList.add('active')
            }
            

            const PaginaActual = window.location.href.split("/")[window.location.href.split("/").length-1];
            Paginas[PaginaActual]();
        }
}