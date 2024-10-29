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
import Hierro from './Components/Pages/Hierros/Hierro';
import VarillaCorrugada from './Components/Pages/Hierros/VarillaCorrugada';
import Alambres from './Components/Pages/Hierros/Alambres';
import Chipa from './Components/Pages/Hierros/Chipa';
import Malla from './Components/Pages/Hierros/Malla';
import Ladrillos from './Components/Pages/Ladrillos/Ladrillo';
import PinturaAcabados from './Components/Pages/PinturaAcabados/PinturaAcabados';
import Exterior from './Components/Pages/PinturaAcabados/Exterior';
import Interior from './Components/Pages/PinturaAcabados/Interior';
import Esmalte from './Components/Pages/PinturaAcabados/Esmalte';
import Relleno from './Components/Pages/PinturaAcabados/Relleno';
import Estuco from './Components/Pages/PinturaAcabados/Estuco';
import Pegantes from './Components/Pages/PinturaAcabados/Pegante';
import Boquillas from './Components/Pages/PinturaAcabados/Boquilla';





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
    {path: "/cementos-agregados/triturado", element: <Triturado/>},
    {path: "/hierro", element: <Hierro/>},
    {path: "/hierro/varilla-corrugada", element: <VarillaCorrugada/>},
    {path: "/hierro/chipa", element: <Chipa/>},
    {path: "/hierro/alambres", element: <Alambres/>},
    {path: "/hierro/mallas", element: <Malla/>},
    {path: "/ladrillo", element: <Ladrillos/>},
    {path: "/pintura-acabados", element: <PinturaAcabados/>},
    {path: "/pintura-acabados/interior", element: <Interior/>},
    {path: "/pintura-acabados/exterior", element: <Exterior/>},
    {path: "/pintura-acabados/esmalte", element: <Esmalte/>},
    {path: "/pintura-acabados/estucos", element: <Estuco/>},
    {path: "/pintura-acabados/rellenos", element: <Relleno/>},
    {path: "/pintura-acabados/pegantes", element: <Pegantes/>},
    {path: "/pintura-acabados/boquillas", element: <Boquillas/>}
    
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
