// App.js
import React, { useState } from 'react';
import Header from './Components/Layouts/Header/Header';
import { SectionOne } from './Components/Sections/SectionOne/SectionOne';
import ProductGrid from './Components/Products/VariousProducts/VariousProducts';
import Footer from './Components/Layouts/Footer/Footer';

function App() {
  // Estado para manejar el término de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-[#EEEEEE] min-h-screen">
      {/* Pasar la función para actualizar el término de búsqueda */}
      <Header onSearch={setSearchTerm} />
      <SectionOne />
      {/* Pasar el término de búsqueda al ProductGrid */}
      <ProductGrid searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
