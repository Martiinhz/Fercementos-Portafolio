import React, { useState } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'; // Importa el ícono

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full lg:w-1/4 p-4 flex flex-col items-center">
      
      {/* Botón de Categorías para pantallas pequeñas y medianas */}
      <h2 className="text-xl font-bold mb-4 pt-[20px] lg:hidden">
        <button onClick={toggleMenu} className="flex items-center">
          Categorías
          <span className="ml-2">
            {isOpen ? <FaAngleDown /> : <FaAngleRight />}
          </span>
        </button>
      </h2>

      {/* Título "Categorías" que solo aparece en pantallas grandes */}
      <h1 className='hidden lg:flex text-2xl font-bold pb-3 justify-center items-center'>
        Categorías
      </h1>

      {/* Menú de categorías, visible siempre en pantallas grandes, y controlado por el botón en pantallas pequeñas y medianas */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        {/* Acabados e instalación de pisos */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F]">
            <a href="/acabados-pisos">Acabados e instalación de pisos</a>
          </h3>
          <ul className="ml-4">
            <li className="mb-1 flex items-center hover:underline">
              <FaAngleRight />
              <a href="/acabados-pisos/boquillas" className="hover:text-[#ACC90F]">Boquillas</a>
            </li>
            <li className="mb-1 flex items-center hover:underline">
              <FaAngleRight />
              <a href="/acabados-pisos/estucos" className="hover:text-[#ACC90F]">Estucos</a>
            </li>
            <li className="mb-1 flex items-center hover:underline">
              <FaAngleRight />
              <a href="/acabados-pisos/pegantes" className="hover:text-[#ACC90F]">Pegantes</a>
            </li>
            <li className="mb-1 flex items-center hover:underline">
              <FaAngleRight />
              <a href="/acabados-pisos/rellenos" className="hover:text-[#ACC90F]">Rellenos</a>
            </li>
          </ul>
        </div>

        {/* Cementos y agregados */}
        <div className="mb-6 pr-[80px]">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F]">
            <a href="/cementos-agregados">Cementos y agregados</a>
          </h3>
          <ul className="ml-4">
            <li className="mb-1 flex items-center hover:underline">
              <FaAngleRight />
              <a href="/cementos-agregados/cales" className="hover:text-[#ACC90F]">Cales</a>
            </li>
            <li className="mb-1 flex items-center hover:underline">
              <FaAngleRight />
              <a href="/cementos-agregados/cementos" className="hover:text-[#ACC90F]">Cementos</a>
            </li>
          </ul>
        </div>

        {/* Construcción en seco */}
        <div className="mb-6 pr-[80px]">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F]">
            <a href="/construccion-seco">Construcción en seco</a>
          </h3>
          <ul className="ml-4">
            <li className="mb-1 flex items-center hover:underline">
              <FaAngleRight />
              <a href="/construccion-seco/aislamientos" className="hover:text-[#ACC90F]">Aislamientos</a>
            </li>
            <li className="mb-1 flex items-center hover:underline">
              <FaAngleRight />
              <a href="/construccion-seco/masillas" className="hover:text-[#ACC90F]">Masillas</a>
            </li>
            <li className="mb-1 flex items-center hover:underline">
              <FaAngleRight />
              <a href="/construccion-seco/perfileria" className="hover:text-[#ACC90F]">Perfilería</a>
            </li>
            <li className="mb-1 flex items-center hover:underline">
              <FaAngleRight />
              <a href="/construccion-seco/placas-fibrocemento" className="hover:text-[#ACC90F]">Placas de fibrocemento</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
