import React, { useEffect, useState } from 'react';
import { products } from '../ArrayProducts/Products';
import Pagination from '../../Pagination/Pagination';
import { motion } from 'framer-motion';
import CategoryMenu from '../../CategoryMenu/CategoryMenu'; // Importa el menú de categorías

const ProductGrid = ({ searchTerm }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productsPerPage = 16;

  // Filtrado de productos y reseteo de la paginación a la primera página
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setCurrentPage(1); // Reinicia la paginación a la página 1 al hacer una búsqueda
  }, [searchTerm]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <CategoryMenu />
      <div className="container mx-auto px-4 pt-6 pb-6 lg:w-3/4">
        {/* Filtro en dispositivos móviles */}
        <div className="block lg:hidden mb-4">
          {/* Aquí va el filtro que desees agregar */}
        </div>

        {/* Pagina superior */}
        <div className="pb-6">
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg p-4 text-center">
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <button
                className="bg-[#ACC90F] text-white px-4 py-2 rounded hover:bg-[#adc90fbb]"
                onClick={() => handleViewProduct(product)}
              >
                VER PRODUCTO
              </button>
            </div>
          ))}
        </div>

        {/* Paginación en la parte inferior */}
        <div className="pt-6">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
          />
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full">
              <h2 className="text-xl font-bold mb-4 text-center">{selectedProduct.name}</h2>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-80 object-contain mb-4"
              />
              {selectedProduct.description && (
                <p className="text-gray-700 mb-4 text-center">{selectedProduct.description}</p>
              )}
              {/* Enlace al producto */}
              {selectedProduct.link && (
                <a 
                  href={selectedProduct.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#ACC90F] hover:bg-[#adc90fbb] text-white px-4 py-2 rounded w-full block text-center mb-4"
                >
                  Ver más
                </a>
              )}

              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
                onClick={handleCloseModal}
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
