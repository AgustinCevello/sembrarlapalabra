// =================================================================
// IMPORTACIÓN DE IMÁGENES
// =================================================================
import TapaEnsenanzaInclusivaImg from "../assets/images/TapasDeLibros/TapaEnseñanzaBiblicaInclusiva.png";
import TapaTeologiaSistematicaImg from "../assets/images/TapasDeLibros/TapaTeologiaSistematica.png";
import FotoLas3Img from "../assets/images/Variado/FotoLas3.png";
import FotoMiaImg from "../assets/images/Variado/FotoMia.png";

// =================================================================
// DATOS DE NIÑOS Y ADOLESCENTES
// =================================================================

export const ninosData = {
  libros: [
    {
      id: 1,
      titulo: "Enseñanza Bíblica Inclusiva",
      tapa: TapaEnsenanzaInclusivaImg,
      resena: "Ofrece una pedagogía cristiana inclusiva que integra fe y estrategias didácticas, abordando TEA, TEL y TDAH, para que la clase bíblica promueva participación, comprensión, respeto y aprendizaje significativo para todos.",
      mercadoLibreUrl: "https://www.mercadolibre.com.ar/ensenanza-biblica-inclusiva/up/MLAU3528324544"
    },
    {
      id: 2,
      titulo: "Teología Sistemática para Niños",
      tapa: TapaTeologiaSistematicaImg,
      resena: "Presenta las verdades centrales de la fe cristiana de forma clara y pedagógica, acercando a los niños al regalo de la salvación y al crecimiento espiritual con lenguaje accesible y enfoque formativo.",
      mercadoLibreUrl: "https://www.mercadolibre.com.ar/teologia-sistematica-para-ninos/up/MLAU3672583651?pdp_filters=item_id:MLA1608201933"
    }
  ],
  talleres: [
    {
      id: 1,
      titulo: "Taller Enseñanza Bíblica Inclusiva",
      descripcion: "Este taller de Enseñanza Bíblica Inclusiva invita a capacitarse integralmente para responder a los desafíos actuales. Desde una mirada interdisciplinaria, articula el aporte de una psicopedagoga con amplia trayectoria, la experiencia concreta y didáctica de una docente y la voz de una madre que acompaña a un niño con discapacidad. La propuesta busca sensibilizar, brindar herramientas prácticas y fortalecer una pedagogía bíblica que incluya, acompañe y comunique el Evangelio con verdad, cuidado y esperanza.",
      foto: FotoLas3Img,
      tipo: "taller"
    }
  ],
  capacitaciones: [
    {
      id: 2,
      titulo: "Capacitación para Líderes, Maestros y Padres",
      descripcion: "Te invitamos a una Capacitación para Líderes y Maestros de Enseñanza Bíblica que integra formación pedagógica y profundidad espiritual. Dictada por una Licenciada en Gestión Educativa, con amplia trayectoria docente y experiencia en capacitación, la propuesta busca fortalecer el llamado del maestro, el sentido del servicio y la transmisión fiel del mensaje bíblico, aportando herramientas para enseñar con claridad, convicción y coherencia entre fe, vida y práctica educativa.",
      foto: FotoMiaImg,
      tipo: "capacitacion"
    }
  ]
};