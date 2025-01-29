import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri'; // Importa el ícono de WhatsApp de react-icons

const FloatingWhatsAppButton = ({ phoneNumber, message }) => {
  // Formatea la URL de WhatsApp con el número y el mensaje predeterminado
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-24 bg-gradient-to-br from-green-500 to-green-700 text-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-110 transform transition duration-300 flex flex-col items-center justify-center w-16 h-16 p-2"
      title="Contactar por WhatsApp"
    >
      {/* Ícono de WhatsApp */}
      <RiWhatsappLine className="text-white w-8 h-8 mb-1" />
      {/* Texto */}
      <span className="text-xs font-semibold">WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsAppButton;
