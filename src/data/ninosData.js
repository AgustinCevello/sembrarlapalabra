// =================================================================
// IMPORTACIÓN DE IMÁGENES
// =================================================================
import TapaEnsenanzaInclusivaImg from "../assets/images/TapasDeLibros/TapaEnseñanzaBiblicaInclusiva.webp";
import TapaTeologiaSistematicaImg from "../assets/images/TapasDeLibros/TapaTeologiaSistematica.webp";
import FotoLas3Img from "../assets/images/Variado/FotoLas3.webp";
import FotoMiaImg from "../assets/images/Variado/FotoMia.webp";
import FotoLasTresImg from "../assets/images/Variado/FotoLasTres.webp";
import FotoNinosVsNinosImg from "../assets/images/Variado/NiñosVsNiños.webp";
import LibroyaniImg from "../assets/images/Variado/libroyani.webp";

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
      titulo: "Taller de Enseñanza Bíblica Inclusiva: Estrategias Prácticas para el Aula",
      descripcion: "Un espacio de capacitación intensiva centrado en transformar la teoría en práctica. Este taller no solo ofrece un marco de referencia sobre las necesidades en el neurodesarrollo y la importancia del acompañamiento familiar, sino que se sumerge en la pedagogía adaptada y las herramientas didácticas concretas para que cada niño pueda participar activamente en la comunidad de fe. Con el marco del libro \"Enseñanza Bíblica Inclusiva\" como referencia, se comparten experiencias prácticas de adaptabilidad.",
      foto: LibroyaniImg,
      tipo: "taller",
      propuestaUrl: "https://drive.google.com/file/d/1VV6N1pVjjX8y1NCxVTyo0saWYrtZUIRA/view?usp=sharing",
      propuestaLabel: "Ver Propuesta"
    },
    {
      id: 2,
      titulo: "Taller Enseñanza Bíblica Inclusiva",
      descripcion: "Un espacio de capacitación diseñado para brindar herramientas prácticas y perspectivas empáticas que permitan integrar plenamente a niños, niñas y familias con necesidades especiales dentro de la comunidad de fe. Este taller busca ampliar la mirada sobre la neurodiversidad, promoviendo un ambiente donde todos puedan aprender y participar plenamente.",
      foto: FotoLasTresImg,
      tipo: "taller",
      propuestaUrl: "https://drive.google.com/file/d/1Quya9lLIUDe6CsP8fx5j4lRz9lopRk4O/view?usp=sharing"
    },
    {
      id: 3,
      titulo: "Prevención, Detección y Abordaje del Abuso Sexual Infantil (ASI)",
      descripcion: "Un espacio de capacitación fundamental diseñado para concientizar, prevenir y brindar herramientas concretas de actuación ante el Abuso Sexual Infantil. Este taller busca transformar nuestras congregaciones en entornos seguros y protectores, capacitando a la comunidad para identificar señales de alerta, actuar conforme a la ley y acompañar el dolor con una perspectiva de justicia, sanidad y reparación integral para los niños, niñas y adolescentes.",
      foto: FotoNinosVsNinosImg,
      tipo: "taller",
      propuestaUrl: "https://drive.google.com/file/d/1q6yLHI1Z4_sG1A6DV8YZwls3Si0tvT_m/view?usp=sharing"
    }
  ],
  capacitaciones: [
    {
      id: 4,
      titulo: "Capacitación para Líderes, Maestros y Padres",
      descripcion: "Te invitamos a una Capacitación para Líderes y Maestros de Enseñanza Bíblica que integra formación pedagógica y profundidad espiritual. Dictada por una Licenciada en Gestión Educativa, con amplia trayectoria docente y experiencia en capacitación, la propuesta busca fortalecer el llamado del maestro, el sentido del servicio y la transmisión fiel del mensaje bíblico, aportando herramientas para enseñar con claridad, convicción y coherencia entre fe, vida y práctica educativa.",
      foto: FotoMiaImg,
      tipo: "capacitacion",
      propuestaUrl: "https://drive.google.com/file/d/1esOi-vsh-X9oQCZJMT3YQjtBOdRN5IDj/view?usp=sharing"
    }
  ]
};