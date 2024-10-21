// App.js
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Header from './Components/Layouts/Header/Header';
import { SectionOne } from './Components/Sections/SectionOne/SectionOne';
import ProductGrid from './Components/Products/VariousProducts/VariousProducts';
import Footer from './Components/Layouts/Footer/Footer';
import  CementsAggre  from './Components/Pages/CementsAggregates/CementsAggre';
import Cementos from './Components/Pages/CementsAggregates/Cements';
import Arenas from './Components/Pages/CementsAggregates/Arenas'
import Granos from './Components/Pages/CementsAggregates/Granos';
import Gravilla from './Components/Pages/CementsAggregates/Gravilla';
import Cales from './Components/Pages/CementsAggregates/Cales';
import Triturado from './Components/Pages/CementsAggregates/Triturado';




const MainLayout = ({ searchTerm, setSearchTerm }) => (
  <>
    <Header onSearch={setSearchTerm} />
    <SectionOne />
    <ProductGrid searchTerm={searchTerm} />
    <Footer />
  </>
);

const AppRoutes = ({ searchTerm, setSearchTerm }) => {
  return useRoutes([
    {path: "/",element: <MainLayout searchTerm={searchTerm} setSearchTerm={setSearchTerm} />},
  
    {path: "/cementos-agregados", element: <CementsAggre searchTerm={searchTerm} /> },
    {path: "/cementos-agregados/cementos",element: <Cementos /> },
    {path: "/cementos-agregados/arena",element: <Arenas /> },
    {path: "/cementos-agregados/granos",element: <Granos /> },
    {path: "/cementos-agregados/gravilla", element: <Gravilla/>},
    {path: "/cementos-agregados/cales", element: <Cales/>},
    {path: "/cementos-agregados/triturado", element: <Triturado/>}
    
  ]);
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-[#EEEEEE] min-h-screen">
      {/* Las rutas se manejarán dentro de AppRoutes */}
      <AppRoutes searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
  );
}

export default App;
