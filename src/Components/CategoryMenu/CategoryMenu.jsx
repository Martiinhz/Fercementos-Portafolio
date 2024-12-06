import React, { useState } from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'; // Importa el ícono
import { Link } from 'react-router-dom';

const CategoryMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <Link to="/cementos-agregados" onClick={scrollToTop}>Cementos y agregados</Link>
          </h3>
          <ul className="mr-[7rem]">
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cementos-agregados/cementos"onClick={scrollToTop}>Cementos</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cementos-agregados/cales"onClick={scrollToTop}>Cales</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cementos-agregados/arena"onClick={scrollToTop}>Arena</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cementos-agregados/granos"onClick={scrollToTop}>Granos</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cementos-agregados/gravilla"onClick={scrollToTop}>Gravilla</Link></li>
          </ul>
        </div>

        {/* Hierro */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[8.5rem]">
            <Link to="/hierro"onClick={scrollToTop}>Hierro</Link>
          </h3>
          <ul className="mr-[4rem]">
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/hierro/varilla-corrugada"onClick={scrollToTop}>Varilla corrugada</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/hierro/chipa"onClick={scrollToTop}>Chipa</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/hierro/alambres"onClick={scrollToTop}>Alambres</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/hierro/mallas"onClick={scrollToTop}>Mallas</Link></li>
          </ul>
        </div>

        {/* Ladrillo */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[8rem]">
            <Link to="/ladrillo"onClick={scrollToTop}>Ladrillo</Link>
          </h3>
        </div>

        {/* Pintura y acabados */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[2rem]">
            <Link to="/pintura-acabados" onClick={scrollToTop}>Pintura y acabados</Link>
          </h3>
          <ul className="ml-[14px]">
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/pintura-acabados/interior"onClick={scrollToTop}>Pintura para interior</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/pintura-acabados/exterior"onClick={scrollToTop}>Pintura para exterior</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/pintura-acabados/esmalte"onClick={scrollToTop}>Esmalte</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/pintura-acabados/estucos"onClick={scrollToTop}>Estucos</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/pintura-acabados/rellenos"onClick={scrollToTop}>Rellenos</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/pintura-acabados/pegantes"onClick={scrollToTop}>Pegantes</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/pintura-acabados/boquillas"onClick={scrollToTop}>Boquillas</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/pintura-acabados/especializada"onClick={scrollToTop}>Pintura Especializada</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/pintura-acabados/brochas-rodillos-espatulas"onClick={scrollToTop}>Brochas, rodillos y espátulas</Link></li>
          </ul>
        </div>

        {/* Cubiertas, placas, impermeabilizantes y tanques */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F]">
            <Link to="/cubiertas-placas"onClick={scrollToTop}>Cubiertas, placas, impermeabilizantes y tanques</Link>
          </h3>
          <ul className="ml-[1.5rem]">
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cubiertas-placas/teja-fibrocemento"onClick={scrollToTop}>Teja proteja fibrocemento</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cubiertas-placas/claraboyas"onClick={scrollToTop}>Claraboyas</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cubiertas-placas/teja-colonial"onClick={scrollToTop}>Teja colonial</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cubiertas-placas/teja-pvc"onClick={scrollToTop}>Tejas PVC</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cubiertas-placas/cinta-asfaltica"onClick={scrollToTop}>Cinta asfáltica</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cubiertas-placas/tanques"onClick={scrollToTop}>Tanques</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/cubiertas-placas/bloquelon"onClick={scrollToTop}>Bloquelón – Perfil entrepiso</Link></li>

          </ul>
        </div>

        {/* Construcción en seco */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[1rem]">
            <Link to="/construccion-seco" onClick={scrollToTop}>Construcción en seco</Link>
          </h3>
          <ul className="ml-[2rem]">
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/construccion-seco/placa-yeso"onClick={scrollToTop}>Placa yeso drywall</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/construccion-seco/perfileria-drywall"onClick={scrollToTop}>Perfilería Drywall</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/construccion-seco/placa-superboard"onClick={scrollToTop}>Placa superboard fibrocemento</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/construccion-seco/masillas"onClick={scrollToTop}>Masillas</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/construccion-seco/esquineros"onClick={scrollToTop}>Esquineros perforados</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/construccion-seco/tornilleria"onClick={scrollToTop}>Tornillería Drywall</Link></li>
          </ul>
        </div>

        {/* Tubería y accesorios */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[1.5rem]">
            <Link to="/tuberia-accesorios"onClick={scrollToTop}>Tubería y accesorios</Link>
          </h3>
          <ul className="mr-[1rem]">
          <li className='pb-1 hover:text-[#ACC90F]'><Link to="/tuberia-accesorios/ventilacion"onClick={scrollToTop}>Tubería Ventilacion</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/tuberia-accesorios/sanitaria"onClick={scrollToTop}>Tubería Sanitaria</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/tuberia-accesorios/cpvc"onClick={scrollToTop}>Tubería CPVC</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/tuberia-accesorios/presion"onClick={scrollToTop}>Tubería Presión</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/tuberia-accesorios/conduit"onClick={scrollToTop}>Tubería Conduit</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/tuberia-accesorios/duraconduit"onClick={scrollToTop}>Tubería Duraconduit</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/tuberia-accesorios/durafort"onClick={scrollToTop}>Tubería Durafort</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/tuberia-accesorios/soldaduras"onClick={scrollToTop}>Soldaduras PVC y CPVC</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/tuberia-accesorios/construccion"onClick={scrollToTop}>Canales y Bajantes</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/tuberia-accesorios/complementarios"onClick={scrollToTop}>Complementarios</Link></li>
          </ul>
        </div>

        {/* Ferretería */}
        <div className="mb-6 flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-black mb-2 hover:text-[#ACC90F] mr-[6.5rem]">
            <Link to="/ferreteria"onClick={scrollToTop}>Ferretería</Link>
          </h3>
          <ul className="mr-[5.5rem]">
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/ferreteria/discos"onClick={scrollToTop}>Discos</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/ferreteria/herramientas"onClick={scrollToTop}>Herramientas</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/ferreteria/guantes"onClick={scrollToTop}>Guantes</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/ferreteria/minerales"onClick={scrollToTop}>Minerales</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/ferreteria/carretillas"onClick={scrollToTop}>Carretillas</Link></li>
            <li className='pb-1 hover:text-[#ACC90F]'><Link to="/ferreteria/otros"onClick={scrollToTop}>Otros</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CategoryMenu;
