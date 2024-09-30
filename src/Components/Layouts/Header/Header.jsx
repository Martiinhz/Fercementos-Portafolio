import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';
import { CiSearch } from 'react-icons/ci';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';
import Logo from '../../../assets/Logo.png';

Modal.setAppElement('#root');

const Header = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hideSubcategoriesTimeout, setHideSubcategoriesTimeout] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnterCategory = (index) => {
    if (hideSubcategoriesTimeout) {
      clearTimeout(hideSubcategoriesTimeout);
      setHideSubcategoriesTimeout(null);
    }
    setHoveredCategory(index);
  };

  const handleMouseLeaveCategory = () => {
    const timeout = setTimeout(() => {
      setHoveredCategory(null);
    }, 200);  // Tiempo para que desaparezca la subcategoría después del hover
    setHideSubcategoriesTimeout(timeout);
  };

  useEffect(() => {
    return () => {
      if (hideSubcategoriesTimeout) {
        clearTimeout(hideSubcategoriesTimeout);
      }
    };
  }, [hideSubcategoriesTimeout]);

  const categories = [
    { name: 'Acabados e instalación de pisos', subcategories: ['Boquillas', 'Estucos', 'Pegantes', 'Rellenos'] },
    { name: 'Cementos y agregados', subcategories: ['Cales', 'Cementos'] },
    { name: 'Construcción en seco', subcategories: ['Aislamientos', 'Masillas', 'Perfilería', 'Placas de fibrocemento', 'Placas de yeso'] },
    { name: 'Cubiertas, impermeabilizantes y tanques', subcategories: ['Cubiertas arquitectónicas', 'Cubiertas fibrocemento', 'Cubiertas PVC', 'Impermeabilizantes', 'Tanques'] },
  ];

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 }
  };

  return (
    <header className="bg-gray-500 shadow-md w-full h-[80px] flex justify-evenly items-center px-8 sticky top-0 z-50">

      <div className="flex items-center">
        <img src={Logo} alt="Fercementos Logo" className="w-[150px] h-auto" />
      </div>

      <div className="flex items-center">
        <motion.button
          className="flex items-center text-white text-lg mr-4"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <TiThMenu className='ml-3'/>
          Menú
        </motion.button>
      </div>

      <div className="relative flex items-center w-full max-w-lg">
        <input
          type="text"
          placeholder="Buscar productos"
          className="w-full border rounded-full py-2 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ACC90F]"
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#ACC90F] text-white p-2 rounded-full">
          <CiSearch />
        </button>
      </div>

      {/* Sidebar animado */}
      <motion.div
        className="fixed left-0 top-0 h-full sm: w-5w-3/4 max-w-sm bg-gray-800 text-white shadow-lg p-4 z-50"
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="flex justify-between items-center border-b pb-4">
          <h2 className="text-2xl">PRODUCTOS</h2>
          <button onClick={toggleMenu} className="text-white text-lg">
            <IoMdClose />
          </button>
        </div>

        <ul className="mt-4 space-y-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="p-2 hover:text-[#ACC90F] cursor-pointer relative"
              onMouseEnter={() => handleMouseEnterCategory(index)}
              onMouseLeave={handleMouseLeaveCategory}
            >
              {category.name}
              {hoveredCategory === index && (
                <motion.div
                  className="absolute left-full top-0 ml-4 bg-gray-700 p-4 space-y-2 shadow-lg w-56"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}  // Control de la duración de la animación
                >
                  {category.subcategories.map((subcategory, subIndex) => (
                    <div 
                      key={subIndex} 
                      className="p-2 text-white hover:bg-gray-600 hover:text-[#ACC90F] transition duration-200"
                    >
                      {subcategory}
                    </div>
                  ))}
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
