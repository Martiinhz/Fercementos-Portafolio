import React, { useState } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'; // Importa el ícono
import { Link } from 'react-router-dom';

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
      <h1 className="hidden lg:flex text-2xl font-bold pb-3 justify-center items-center">
        Categorías
      </h1>

      {/* Menú de categorías, visible siempre en pantallas grandes, y controlado por el botón en pantallas pequeñas y medianas */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        {/* Cementos y agregados */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F]">
            <Link to="/cementos-agregados">Cementos y agregados</Link>
          </h3>
          <ul className="mr-[7rem]">
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cementos-agregados/cementos">Cementos</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cementos-agregados/cales">Cales</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cementos-agregados/triturado">Triturado</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cementos-agregados/arena">Arena</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cementos-agregados/granos">Granos</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cementos-agregados/gravilla">Gravilla</a></li>
          </ul>
        </div>

        {/* Hierro */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[8.5rem]">
            <a href="/hierro">Hierro</a>
          </h3>
          <ul className="mr-[4rem]">
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/hierro/varilla-corrugada">Varilla corrugada</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/hierro/chipa">Chipa</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/hierro/alambres">Alambres</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/hierro/mallas">Mallas</a></li>
          </ul>
        </div>

        {/* Ladrillo */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[8rem]">
            <a href="/ladrillo">Ladrillo</a>
          </h3>
        </div>

        {/* Pintura y acabados */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[2rem]">
            <a href="/pintura-acabados">Pintura y acabados</a>
          </h3>
          <ul className="ml-[14px]">
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/pintura-acabados/interior">Pintura para interior</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/pintura-acabados/exterior">Pintura para exterior</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/pintura-acabados/esmalte">Esmalte</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/pintura-acabados/estucos">Estucos</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/pintura-acabados/rellenos">Rellenos</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/pintura-acabados/pegantes">Pegantes</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/pintura-acabados/boquillas">Boquillas</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/pintura-acabados/brochas-rodillos-espatulas">Brochas, rodillos y espátulas</a></li>
          </ul>
        </div>

        {/* Cubiertas, placas, impermeabilizantes y tanques */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F]">
            <a href="/cubiertas-placas">Cubiertas, placas, impermeabilizantes y tanques</a>
          </h3>
          <ul className="ml-[1.5rem]">
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cubiertas-placas/teja-fibrocemento">Teja proteja fibrocemento</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cubiertas-placas/claraboyas">Claraboyas</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cubiertas-placas/teja-colonial">Teja colonial</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cubiertas-placas/teja-pvc">Tejas PVC</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cubiertas-placas/cinta-asfaltica">Cinta asfáltica</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cubiertas-placas/tanques">Tanques</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cubiertas-placas/bloquelon">Bloquelón – Perfil entrepiso</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/cubiertas-placas/bloquelon">Perfilería entrepiso y cubiertas</a></li>
          </ul>
        </div>

        {/* Construcción en seco */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[1rem]">
            <a href="/construccion-seco">Construcción en seco</a>
          </h3>
          <ul className="ml-[2rem]">
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/construccion-seco/placa-yeso">Placa yeso drywall</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/construccion-seco/perfileria-drywall">Perfilería Drywall</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/construccion-seco/placa-superboard">Placa superboard fibrocemento</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/construccion-seco/masillas">Masillas</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/construccion-seco/esquineros">Esquineros perforados</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/construccion-seco/tornilleria">Tornillería Drywall</a></li>
          </ul>
        </div>

        {/* Tubería y accesorios */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[1.5rem]">
            <a href="/tuberia-accesorios">Tubería y accesorios</a>
          </h3>
          <ul className="mr-[1rem]">
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/tuberia-accesorios/sanitaria">Tubería Sanitaria</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/tuberia-accesorios/cpvc">Tubería CPVC</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/tuberia-accesorios/presion">Tubería Presión</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/tuberia-accesorios/conduit">Tubería Conduit</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/tuberia-accesorios/soldaduras">Soldaduras PVC y CPVC</a></li>
          </ul>
        </div>

        {/* Ferretería */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[6.5rem]">
            <a href="/ferreteria">Ferretería</a>
          </h3>
          <ul className="mr-[5.5rem]">
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/ferreteria/discos">Discos</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/ferreteria/herramientas">Herramientas</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/ferreteria/guantes">Guantes</a></li>
            <li className='pb-1 hover:text-[#ACC90F]'><a href="/ferreteria/minerales">Minerales</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CategoryMenu;
