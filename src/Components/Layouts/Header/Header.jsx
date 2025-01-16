import React, { useState } from 'react';
import Logo from '../../../assets/Logo.png';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleLogoClick = () => {
    setSearchTerm(''); // Reinicia el buscador
    onSearch(''); // Actualiza el filtro en la búsqueda
    scrollToTop();
  };

  return (
    <header className="bg-gray-500 shadow-md w-full h-[80px] flex justify-evenly items-center px-8 sticky top-0 z-50">
      <div className="flex items-center">
        <Link to="/" onClick={handleLogoClick}>
          <img src={Logo} alt="Fercementos Logo" className="w-[150px] h-auto" />
        </Link>
      </div> 
      
    </header>
  );
};

export default Header;
