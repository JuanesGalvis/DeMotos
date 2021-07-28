import './index.sass';
import './styles/AgendarCita.sass';
import './styles/QuienesSomos.sass';
console.log("COMPILADO TAMBIÉN CORRECTAMENTE!");

//'########:::::'###:::::'######::'##:::'##::'######:::'########:::'#######::'##::::'##:'##::: ##:'########:::'######::
// ##.... ##:::'## ##:::'##... ##: ##::'##::'##... ##:: ##.... ##:'##.... ##: ##:::: ##: ###:: ##: ##.... ##:'##... ##:
// ##:::: ##::'##:. ##:: ##:::..:: ##:'##::: ##:::..::: ##:::: ##: ##:::: ##: ##:::: ##: ####: ##: ##:::: ##: ##:::..::
// ########::'##:::. ##: ##::::::: #####:::: ##::'####: ########:: ##:::: ##: ##:::: ##: ## ## ##: ##:::: ##:. ######::
// ##.... ##: #########: ##::::::: ##. ##::: ##::: ##:: ##.. ##::: ##:::: ##: ##:::: ##: ##. ####: ##:::: ##::..... ##:
// ##:::: ##: ##.... ##: ##::: ##: ##:. ##:: ##::: ##:: ##::. ##:: ##:::: ##: ##:::: ##: ##:. ###: ##:::: ##:'##::: ##:
// ########:: ##:::: ##:. ######:: ##::. ##:. ######::: ##:::. ##:. #######::. #######:: ##::. ##: ########::. ######::
//........:::..:::::..:::......:::..::::..:::......::::..:::::..:::.......::::.......:::..::::..::........::::......:::

/** IMÁGENES PARA LAS MARCAS */
import AKT from './assets/Brands/Akt-motos-Color.svg';
import RoyalEnfield from './assets/Brands/Royal-Enfield-Color.svg';
import GrupoUMA from './assets/Brands/Grupo-UMA-Color.png';

/** IMÁGENES PARA LOS TIPOS */
import Motos from './assets/TypesMotorcycles/Motos.svg';
import Cuatrimotos from './assets/TypesMotorcycles/Cuatrimotos.svg';
import ThreeWheels from './assets/TypesMotorcycles/Three-Wheels.svg';

/** IMÁGENES PARA MOBILE */
import VentaDeRepuestos from './assets/Backgrounds/VentaDeRepuestos.png';
import Mantenimiento from './assets/Backgrounds/Mantenimiento.png';
import PuestaPunto from './assets/Backgrounds/PuestaPunto.png';
import Lavadero from './assets/Backgrounds/Lavadero.png';
import Revisiones from './assets/Backgrounds/Revisiones.png';
import Pintura from './assets/Backgrounds/Pintura.png';

/** IMÁGENES PARA TAMAÑO MAYOR */
import VentaDeRepuestosG from './assets/Backgrounds/VentaDeRepuestosG.png';
import MantenimientoG from './assets/Backgrounds/MantenimientoG.png';
import PuestaPuntoG from './assets/Backgrounds/PuestaPuntoG.png';
import LavaderoG from './assets/Backgrounds/LavaderoG.png';
import RevisionesG from './assets/Backgrounds/RevisionesG.png';
import PinturaG from './assets/Backgrounds/PinturaG.png';

//::::::'##::::'###::::'##::::'##::::'###:::::'######:::'######::'########::'####:'########::'########:
//:::::: ##:::'## ##::: ##:::: ##:::'## ##:::'##... ##:'##... ##: ##.... ##:. ##:: ##.... ##:... ##..::
//:::::: ##::'##:. ##:: ##:::: ##::'##:. ##:: ##:::..:: ##:::..:: ##:::: ##:: ##:: ##:::: ##:::: ##::::
//:::::: ##:'##:::. ##: ##:::: ##:'##:::. ##:. ######:: ##::::::: ########::: ##:: ########::::: ##::::
//'##::: ##: #########:. ##:: ##:: #########::..... ##: ##::::::: ##.. ##:::: ##:: ##.....:::::: ##::::
// ##::: ##: ##.... ##::. ## ##::: ##.... ##:'##::: ##: ##::: ##: ##::. ##::: ##:: ##::::::::::: ##::::
//. ######:: ##:::: ##:::. ###:::: ##:::: ##:. ######::. ######:: ##:::. ##:'####: ##::::::::::: ##::::
//:......:::..:::::..:::::...:::::..:::::..:::......::::......:::..:::::..::....::..::::::::::::..:::::

if (document.querySelectorAll('.BtnServicio').length) {
    const Botones = document.querySelectorAll('.BtnServicio')
    Botones.forEach(button => button.addEventListener('click', () => { window.location = `/AgendarCita?servicio=${button.getAttribute('id')}` }))
}
import {Calendly} from './scripts/Calendly';
Calendly()

import {Carrousel} from './scripts/Carrousel';
Carrousel();

import {eventListener} from './scripts/Marcas';
eventListener();

import { animation } from './scripts/Tipos';
animation();