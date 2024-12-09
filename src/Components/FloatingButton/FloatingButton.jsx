import React from 'react';
import { RiBookOpenLine } from 'react-icons/ri'; // Importa el ícono de react-icons

const FloatingButton = ({ pdfUrl }) => {
  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-110 transform transition duration-300 flex flex-col items-center justify-center w-16 h-16 p-2"
      title="Ver Catálogo"
    >
      {/* Ícono de NPM */}
      <RiBookOpenLine className="text-white w-8 h-8 mb-1" />
      {/* Texto */}
      <span className="text-xs font-semibold">Catálogo</span>
    </a>
  );
};

export default FloatingButton;
