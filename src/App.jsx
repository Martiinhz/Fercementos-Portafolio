// App.js
import React, { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import Header from './Components/Layouts/Header/Header';
import { SectionOne } from './Components/Sections/SectionOne/SectionOne';
import ProductGrid from './Components/Products/VariousProducts/VariousProducts';
import Footer from './Components/Layouts/Footer/Footer';
import BotonFlotante from './Components/FloatingButton/FloatingButton'
import  CementsAggre  from './Components/Pages/CementsAggregates/CementsAggre';
import Cementos from './Components/Pages/CementsAggregates/Cements';
import Arenas from './Components/Pages/CementsAggregates/Arenas'
import Granos from './Components/Pages/CementsAggregates/Granos';
import Gravilla from './Components/Pages/CementsAggregates/Gravilla';
import Cales from './Components/Pages/CementsAggregates/Cales';

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
import Brochas from './Components/Pages/PinturaAcabados/Brocha';
import Cubiertas from './Components/Pages/Cubiertas/Cubierta';
import Teja from './Components/Pages/Cubiertas/Teja';
import Claraboya from './Components/Pages/Cubiertas/Claraboya';
import Cinta from './Components/Pages/Cubiertas/Cinta';
import Bloquelon from './Components/Pages/Cubiertas/Bloquelon';
import Colonial from './Components/Pages/Cubiertas/TejaColonial';
import Tanques from './Components/Pages/Cubiertas/Tanques';
import Construccion from './Components/Pages/Construccion/Construccion';
import PlacaYeso from './Components/Pages/Construccion/PlacaYeso';
import Perfileria from './Components/Pages/Construccion/Perfileria';
import PlacaSuper from './Components/Pages/Construccion/PlacaSuper';
import Masillas from './Components/Pages/Construccion/Masillas';
import Esquinaros from './Components/Pages/Construccion/Esquinero';
import Tornilleria from './Components/Pages/Construccion/Tornilleria';
import Tuberia from './Components/Pages/Tuberia/Tuberia';
import Ventilacion from './Components/Pages/Tuberia/Ventilacion';
import Sanitaria from './Components/Pages/Tuberia/Sanitaria';
import TuberiaCpvc from './Components/Pages/Tuberia/TuberiaCpvc';
import Presion from './Components/Pages/Tuberia/Presion';
import Conduit from './Components/Pages/Tuberia/Conduit';
import Soldadura from './Components/Pages/Tuberia/Soldadura';
import Duraconduit from './Components/Pages/Tuberia/DuraConduit';
import Durafort from './Components/Pages/Tuberia/DuraFort';
import Ferreteria from './Components/Pages/Ferreteria/Ferreteria';
import Minerales from './Components/Pages/Ferreteria/Minerales';
import Guantes from './Components/Pages/Ferreteria/Guantes';
import Herramientas from './Components/Pages/Ferreteria/Herramientas';
import Discos from './Components/Pages/Ferreteria/Discos';
import TejaPvc from './Components/Pages/Cubiertas/TejaPVC';
import CeltaConstruccion from './Components/Pages/Tuberia/Construccion'
import Complementarios from './Components/Pages/Tuberia/Complementarios';
import Carretillas from './Components/Pages/Ferreteria/Carretillas';

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
    {path: "/pintura-acabados/boquillas", element: <Boquillas/>},
    {path: "/pintura-acabados/brochas-rodillos-espatulas", element: <Brochas/>},
    {path: "/cubiertas-placas", element: <Cubiertas/>},
    {path: "/cubiertas-placas/teja-fibrocemento", element: <Teja/>},
    {path: "/cubiertas-placas/claraboyas", element: <Claraboya/>},
    {path: "/cubiertas-placas/cinta-asfaltica", element: <Cinta/>},
    {path: "/cubiertas-placas/bloquelon", element: <Bloquelon/>},
    {path: "/cubiertas-placas/teja-colonial", element: <Colonial/>},
    {path: "/cubiertas-placas/teja-pvc", element: <TejaPvc/>},
    {path: "/cubiertas-placas/tanques", element: <Tanques/>},
    {path: "/construccion-seco", element: <Construccion/>},
    {path: "/construccion-seco/placa-yeso", element: <PlacaYeso/>},
    {path: "/construccion-seco/perfileria-drywall", element: <Perfileria/>},
    {path: "/construccion-seco/placa-superboard", element: <PlacaSuper/>},
    {path: "/construccion-seco/masillas", element: <Masillas/>},
    {path: "/construccion-seco/esquineros", element: <Esquinaros/>},
    {path: "/construccion-seco/tornilleria", element: <Tornilleria/>},
    {path: "/tuberia-accesorios", element: <Tuberia/>},
    {path: "/tuberia-accesorios/ventilacion", element: <Ventilacion/>},
    {path: "/tuberia-accesorios/sanitaria", element: <Sanitaria/>},
    {path: "/tuberia-accesorios/cpvc", element: <TuberiaCpvc/>},
    {path: "/tuberia-accesorios/presion", element: <Presion/>},
    {path: "/tuberia-accesorios/conduit", element: <Conduit/>},
    {path: "/tuberia-accesorios/soldaduras", element: <Soldadura/>},
    {path: "/tuberia-accesorios/duraconduit", element: <Duraconduit/>},
    {path: "/tuberia-accesorios/durafort", element: <Durafort/>},
    {path: "/tuberia-accesorios/construccion", element: <CeltaConstruccion/>},
    {path: "/tuberia-accesorios/complementarios", element: <Complementarios/>},
    {path: "/ferreteria", element: <Ferreteria/>,},
    {path: "/ferreteria/minerales", element: <Minerales/>},
    {path: "/ferreteria/guantes", element: <Guantes/>},
    {path: "/ferreteria/herramientas", element: <Herramientas/>},
    {path: "/ferreteria/discos", element: <Discos/>},
    {path: "/ferreteria/carretillas", element: <Carretillas/>}
    
    
  ]);
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-[#EEEEEE] min-h-screen">
      {/* Las rutas se manejarán dentro de AppRoutes */}
      <AppRoutes searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BotonFlotante pdfUrl="https://media.proteja.com.co/pd55131/original/-1744642624/ft_perfil10_proteja_febrero2024_v1.pdf" />
    </div>
  );
}

export default App;
