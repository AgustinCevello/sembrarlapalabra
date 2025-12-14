// =================================================================
// IMPORTACIÓN DE IMÁGENES
// =================================================================

// Libros Destacados
import TapaBibliaImg from "../assets/images/TapasDeLibros/TapaBiblia.png";
import TapaEnsenanzaInclusivaImg from "../assets/images/TapasDeLibros/TapaEnseñanzaBiblicaInclusiva.png";
import TapaTeologiaSistematicaImg from "../assets/images/TapasDeLibros/TapaTeologiaSistematica.png";
import TapaCatequesisInclusivaImg from "../assets/images/TapasDeLibros/TapaCatequesisInclusiva.png";

// Otros Libros
import TapaNoDejesTuCerebroImg from "../assets/images/TapasDeLibros/TapaNoDejesTuCerebroEnLaPpuerta.png";
import TapaComoDesarrollarElTemperamentoImg from "../assets/images/TapasDeLibros/TapaComoDesarrollarElTemperamentoDeSuHijo.png";
import TapaComoCriarVaronesImg from "../assets/images/TapasDeLibros/TapaComoCriarALosVarones.png";
import TapaComoCriarHijasImg from "../assets/images/TapasDeLibros/TapaComoCriarALasHijas.png";
import TapaCuentosQueNoSonCuentosImg from "../assets/images/TapasDeLibros/TapaCuentosQueNoSonCuentos.png";
import TapaLos5LenguajesDelAmorImg from "../assets/images/TapasDeLibros/TapaLos5lenguajesDelAmorDeLosNiños.png";
import TapaLaVerdadDesnudaImg from "../assets/images/TapasDeLibros/TapaLaVerdadDesnuda.png";
import TapaLiderazgoGeneracionalImg from "../assets/images/TapasDeLibros/TapaLiderazgoGeneracional.png";
import TapaDistraidosYBrillantesImg from "../assets/images/TapasDeLibros/TapaDistraidosYBrillantes.png";

// Iconos
import EnlaceIcon from "../assets/icons/Enlace.png";

// =================================================================
// CONSTANTES DE LIBROS
// =================================================================

export const librosDestacados = [
  {
    id: 1,
    titulo: "La Biblia",
    tapa: TapaBibliaImg,
    descripcion: "La Palabra de Dios, fundamento de toda enseñanza bíblica.",
    enlaceExterno: {
      url: "https://www.biblegateway.com/versions/Nueva-Version-Internacional-Biblia-NVI/",
      texto: "Ver aquí",
      icono: EnlaceIcon
    }
  },
  {
    id: 2,
    titulo: "Enseñanza Bíblica Inclusiva",
    tapa: TapaEnsenanzaInclusivaImg,
    descripcion: "Ofrece una pedagogía cristiana inclusiva que integra fe y estrategias didácticas, abordando TEA, TEL y TDAH, para que la clase bíblica promueva participación, comprensión, respeto y aprendizaje significativo para todos.",
    mercadoLibreUrl: "https://www.mercadolibre.com.ar/ensenanza-biblica-inclusiva/up/MLAU3528324544"
  },
  {
    id: 3,
    titulo: "Teología Sistemática para Niños",
    tapa: TapaTeologiaSistematicaImg,
    descripcion: "Presenta las verdades centrales de la fe cristiana de forma clara y pedagógica, acercando a los niños al regalo de la salvación y al crecimiento espiritual con lenguaje accesible y enfoque formativo.",
    mercadoLibreUrl: "https://www.mercadolibre.com.ar/teologia-sistematica-para-ninos/up/MLAU3672583651?pdp_filters=item_id:MLA1608201933"
  },
  {
    id: 4,
    titulo: "Catequesis Inclusiva",
    tapa: TapaCatequesisInclusivaImg,
    descripcion: "Guía práctica para una catequesis accesible y significativa para todos.",
    mercadoLibreUrl: "https://www.mercadolibre.com.ar/catequesis-inclusiva/up/MLAU3539052223"
  }
];

export const otrosLibros = [
  {
    id: 5,
    titulo: "No dejes tu cerebro en la puerta",
    autor: "Josh McDowell & Bob Hostetler",
    tapa: TapaNoDejesTuCerebroImg
  },
  {
    id: 6,
    titulo: "Cómo desarrollar el temperamento de su hijo",
    autor: "Beverly LaHaye",
    tapa: TapaComoDesarrollarElTemperamentoImg
  },
  {
    id: 7,
    titulo: "Cómo criar a los varones",
    autor: "James Dobson",
    tapa: TapaComoCriarVaronesImg
  },
  {
    id: 8,
    titulo: "Cómo criar a las hijas",
    autor: "James Dobson",
    tapa: TapaComoCriarHijasImg
  },
  {
    id: 9,
    titulo: "Cuentos que no son cuentos",
    autor: "José Luis y Silvia Cinalli",
    tapa: TapaCuentosQueNoSonCuentosImg
  },
  {
    id: 10,
    titulo: "Los 5 lenguajes del amor de los niños",
    autor: "Gary Chapman & Ross Campbell",
    tapa: TapaLos5LenguajesDelAmorImg
  },
  {
    id: 11,
    titulo: "La verdad desnuda",
    autor: "Josh McDowell",
    tapa: TapaLaVerdadDesnudaImg
  },
  {
    id: 12,
    titulo: "Liderazgo generacional",
    autor: "Lucas Leys",
    tapa: TapaLiderazgoGeneracionalImg
  },
  {
    id: 13,
    titulo: "Distraídos y Brillantes",
    autor: "Mirelys Bonilla",
    tapa: TapaDistraidosYBrillantesImg
  }
];