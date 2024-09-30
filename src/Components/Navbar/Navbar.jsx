import React from 'react';

export const Navbar = ({ children }) => {
  return (
    <nav className="bg-primary text-white p-4">
      <ul className="flex space-x-4 justify-center">
        {children}
      </ul>
    </nav>
  );
};
