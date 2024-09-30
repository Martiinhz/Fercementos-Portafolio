import React from 'react';
import BackgroundImage from '../../../assets/Fondo.jpg'; 

export const SectionOne = () => {
  return (
    <div className="relative w-full h-[350px] bg-cover bg-center flex items-center justify-center z-5" 
         style={{ backgroundImage: `url(${BackgroundImage})` }}>
      {/* Capa de superposición para la opacidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Contenido, por encima de la capa de opacidad */}
      <h1 className="relative text-white text-4xl font-bold p-4 rounded-lg z-10">
        Catálogo
      </h1>
    </div>
  );
};
