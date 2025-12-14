// Este código debe estar en el archivo que contiene las constantes (ej: data.js o similar)

// =================================================================
// 1. IMPORTACIÓN DE IMÁGENES
// =================================================================

// Libros Destacados
import TapaBibliaImg from "../assets/images/TapasDeLibros/TapaBiblia.png"
import TapaEnsenanzaInclusivaImg from "../assets/images/TapasDeLibros/TapaEnseñanzaBiblicaInclusiva.png"
import TapaTeologiaSistematicaImg from "../assets/images/TapasDeLibros/TapaTeologiaSistematica.png"
import TapaCatequesisInclusivaImg from "../assets/images/TapasDeLibros/TapaCatequesisInclusiva.png"

// Otros Libros
import TapaNoDejesTuCerebroImg from "../assets/images/TapasDeLibros/TapaNoDejesTuCerebroEnLaPpuerta.png"
import TapaComoDesarrollarElTemperamentoImg from "../assets/images/TapasDeLibros/TapaComoDesarrollarElTemperamentoDeSuHijo.png"
import TapaComoCriarVaronesImg from "../assets/images/TapasDeLibros/TapaComoCriarALosVarones.png"
import TapaComoCriarHijasImg from "../assets/images/TapasDeLibros/TapaComoCriarALasHijas.png"
import TapaCuentosQueNoSonCuentosImg from "../assets/images/TapasDeLibros/TapaCuentosQueNoSonCuentos.png"
import TapaLos5LenguajesDelAmorImg from "../assets/images/TapasDeLibros/TapaLos5lenguajesDelAmorDeLosNiños.png"
import TapaLaVerdadDesnudaImg from "../assets/images/TapasDeLibros/TapaLaVerdadDesnuda.png"
import TapaLiderazgoGeneracionalImg from "../assets/images/TapasDeLibros/TapaLiderazgoGeneracional.png"
import TapaDistraidosYBrillantesImg from "../assets/images/TapasDeLibros/TapaDistraidosYBrillantes.png"


// =================================================================
// 2. EXPORTACIÓN DE CONSTANTES CON REFERENCIA A LAS VARIABLES (NO AL TEXTO)
// =================================================================

export const librosDestacados = [
  {
    id: 1,
    titulo: "La Biblia",
    // Corregido: Referencia a la variable importada
    tapa: TapaBibliaImg, 
    descripcion: "La Palabra de Dios, fundamento de toda enseñanza bíblica."
  },
  {
    id: 2,
    titulo: "Enseñanza Bíblica Inclusiva",
    // Corregido: Referencia a la variable importada
    tapa: TapaEnsenanzaInclusivaImg, 
    descripcion: "Recursos y estrategias para una enseñanza bíblica que incluye a todos.",
    mercadoLibreUrl: "https://www.mercadolibre.com.ar/ensenanza-biblica-inclusiva/up/MLAU3528324544"
  },
  {
    id: 3,
    titulo: "Teología Sistemática para Niños",
    // Corregido: Referencia a la variable importada
    tapa: TapaTeologiaSistematicaImg, 
    descripcion: "Introducción a los conceptos teológicos adaptados para los más pequeños."
  },
  {
    id: 4,
    titulo: "Catequesis Inclusiva",
    // Corregido: Referencia a la variable importada
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
    // Corregido: Referencia a la variable importada
    tapa: TapaNoDejesTuCerebroImg 
  },
  {
    id: 6,
    titulo: "Cómo desarrollar el temperamento de su hijo",
    autor: "Beverly LaHaye",
    // Corregido: Referencia a la variable importada
    tapa: TapaComoDesarrollarElTemperamentoImg
  },
  {
    id: 7,
    titulo: "Cómo criar a los varones",
    autor: "James Dobson",
    // Corregido: Referencia a la variable importada
    tapa: TapaComoCriarVaronesImg
  },
  {
    id: 8,
    titulo: "Cómo criar a las hijas",
    autor: "James Dobson",
    // Corregido: Referencia a la variable importada
    tapa: TapaComoCriarHijasImg
  },
  {
    id: 9,
    titulo: "Cuentos que no son cuentos",
    autor: "José Luis y Silvia Cinalli",
    // Corregido: Referencia a la variable importada
    tapa: TapaCuentosQueNoSonCuentosImg
  },
  {
    id: 10,
    titulo: "Los 5 lenguajes del amor de los niños",
    autor: "Gary Chapman & Ross Campbell",
    // Corregido: Referencia a la variable importada
    tapa: TapaLos5LenguajesDelAmorImg
  },
  {
    id: 11,
    titulo: "La verdad desnuda",
    autor: "Josh McDowell",
    // Corregido: Referencia a la variable importada
    tapa: TapaLaVerdadDesnudaImg
  },
  {
    id: 12,
    titulo: "Liderazgo generacional",
    autor: "Lucas Leys",
    // Corregido: Referencia a la variable importada
    tapa: TapaLiderazgoGeneracionalImg
  },
  {
    id: 13,
    titulo: "Distraídos y Brillantes",
    autor: "Mirelys Bonilla",
    // Corregido: Referencia a la variable importada
    tapa: TapaDistraidosYBrillantesImg
  }
];
