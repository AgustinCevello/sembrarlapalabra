// =================================================================
// IMPORTACIÓN DE IMÁGENES
// =================================================================
import InstagramIcon from "../assets/icons/InstagramLogo.png";
import GmailIcon from "../assets/icons/GmailLogo.png";

// =================================================================
// DATOS DE CONTACTO
// =================================================================

export const contactData = {
  email: "sembrarlapalabra@gmail.com",
  instagram: {
    handle: "@sembrarlapalabra",
    url: "https://www.instagram.com/sembrarlapalabra",
    icon: InstagramIcon
  },
  gmail: {
    icon: GmailIcon
  },
  talleres: {
    titulo: "Solicitar Talleres Gratuitos",
    descripcion: "Escribinos para consultar disponibilidad de Talleres Gratuitos de Formación. Usá nuestros canales de contacto.",
    tipos: [
      "Taller Enseñanza Bíblica Inclusiva",
      "Capacitación para líderes",
      "Capacitación para maestros",
      "Capacitación para padres"
    ]
  }
};