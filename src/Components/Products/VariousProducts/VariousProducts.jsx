import React, { useEffect, useState } from 'react';
import { products } from '../ArrayProducts/Products';
import Pagination from '../../Pagination/Pagination';
import { motion } from 'framer-motion';

const ProductGrid = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(products); // Estado para los productos filtrados
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado
  const productsPerPage = 16; // Cantidad de productos por página (4 filas de 4 productos)

  // Filtrar productos basados en el término de búsqueda
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  // Obtener los productos de la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Función para avanzar a la página siguiente
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para retroceder a la página anterior
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Función para abrir el modal con el producto seleccionado
  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (

    <div className="container mx-auto px-4 pt-6 pb-6">
      <div className='pb-6 '>
        <Pagination className="pb-10"
          currentPage={currentPage}
          totalPages={totalPages}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center">
            {/* Aca */}
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"

              // Animación al montar el componente
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }} // Duración de la animación (0.5 segundos)
          
              // Puedes agregar animaciones al hacer hover
              whileHover={{ scale: 1.1}} // Aumenta el tamaño al pasar el mouse
              whileTap={{ scale: 0.95 }} // Se reduce un poco al hacer clic
            />
            {/* Aca */}
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <button
              className="bg-[#ACC90F] text-white px-4 py-2 rounded hover:bg-[#adc90fbb]"
              onClick={() => handleViewProduct(product)} // Al hacer clic, abrir modal con producto seleccionado
            >
              VER PRODUCTO
            </button>
          </div>
        ))}
      </div>
      <div className='pt-6'>
        {/* Componente de Paginación */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
        />
      </div>


      {/* Modal para mostrar la imagen ampliada */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4 text-center">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-80 object-contain mb-4"
            />
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
              onClick={handleCloseModal} // Cerrar modal
            >
              CERRAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;