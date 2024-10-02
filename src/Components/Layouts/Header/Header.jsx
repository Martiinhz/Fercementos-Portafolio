import React, { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import Logo from '../../../assets/Logo.png';

const Header = ({ onSearch }) => {
  return (
    <header className="bg-gray-500 shadow-md w-full h-[80px] flex justify-evenly items-center px-8 sticky top-0 z-50">
      <div className="flex items-center">
        <img src={Logo} alt="Fercementos Logo" className="w-[150px] h-auto" />
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
     
    </header>
  );
};

export default Header;
