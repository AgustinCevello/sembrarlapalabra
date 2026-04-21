// =================================================================
// IMPORTACIÓN DE IMÁGENES
// =================================================================
import InstagramIcon from "../assets/icons/InstagramLogo.webp";
import GmailIcon from "../assets/icons/GmailLogo.webp";

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
    titulo: "Solicitar Talleres",
    descripcion: "Escribinos para consultar disponibilidad de Talleres de Formación. Usá nuestros canales de contacto.",
    tipos: [
      "Taller Enseñanza Bíblica Inclusiva",
      "Capacitación para líderes",
      "Capacitación para maestros",
      "Capacitación para padres"
    ]
  }
};