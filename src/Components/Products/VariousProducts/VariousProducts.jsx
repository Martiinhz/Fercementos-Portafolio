import React, { useEffect, useState } from 'react';
import Pagination from '../../Pagination/Pagination';
import BackgroundImage from '../../../assets/fondoCelta.png';
import { motion } from 'framer-motion';
import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import CategoryMenu from '../../CategoryMenu/CategoryMenu';
import products from '../ArrayProducts/Products';

const ProductGrid = ({ searchTerm = "" }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const productsPerPage = 20;

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setCurrentPage(1);
  }, [searchTerm]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setActiveImage(product.image);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setActiveImage(null);
  };

  const handleImageClick = (image) => {
    setActiveImage(image);
  };

  return (
    <>
      <Header />
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center z-5"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-white text-4xl font-bold p-4 rounded-lg z-10 sm: ml-16">
          Catálogo
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row">
        <CategoryMenu />
        <div className="container mx-auto px-4 pt-6 pb-6 lg:w-3/4">
          <div className="pb-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
            />
          </div>

          {/* Grilla de Productos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onView={() => handleViewProduct(product)}
              />
            ))}
          </div>

          {/* Pie de Paginación */}
          <div className="pt-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handleNextPage={handleNextPage}
              handlePreviousPage={handlePreviousPage}
            />
          </div>

          {/* Modal de Producto */}
          {selectedProduct && (
            <ProductModal
              product={selectedProduct}
              activeImage={activeImage}
              onClose={handleCloseModal}
              onImageClick={handleImageClick}
            />
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

const ProductCard = ({ product, onView }) => (
  <div className="bg-white shadow-md rounded-lg p-4 text-center">
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
    <motion.button
      className="bg-[#ACC90F] text-white px-4 py-2 rounded hover:bg-[#adc90fbb]"
      onClick={onView}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      VER PRODUCTO
    </motion.button>
  </div>
);

const ProductModal = ({ product, activeImage, onClose, onImageClick }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg w-full max-w-lg lg:max-w-4xl flex flex-col lg:flex-row">
      {/* Imagen del Producto */}
      <div className="lg:w-1/2 flex justify-center items-center">
        <img
          src={activeImage}
          alt={product.name}
          className="w-[500px] h-[200px] object-contain mb-4 lg:mb-0 sm:h-[400px] lg:h-[400px]"
        />
      </div>

      {/* Detalles del Producto */}
      <div className="lg:w-1/2 lg:pl-6">
        <h2 className="text-xl font-bold mb-4 text-center lg:text-left">
          {product.name}
        </h2>

        {product.description && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Descripción</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>
        )}

        {product.SecondDescription && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Especificaciones</h3>
            <ul className="list-disc text-gray-700 ml-3">
              {product.SecondDescription.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>
        )}


        {product.thirdDescription && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Especificaciones</h3>
            <div className="flex justify-around">
              {product.thirdDescription.map((spec, index) => (
                <div key={index} className="mb-2">
                  <div>
                    <h4 className="font-medium text-gray-800">{spec.title}</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {spec.values.map((value, i) => (
                        <li key={i}>{value}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}



        {product.link && (
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ACC90F] hover:bg-[#adc90fbb] text-white px-4 py-2 rounded w-full block text-center mb-4"
          >
            Ficha Técnica
          </a>
        )}

        {product.colorLink && (
          <a
            href={product.colorLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ACC90F] hover:bg-[#adc90fbb] text-white px-4 py-2 rounded w-full block text-center mb-4"
          >
            Colores
          </a>
        )}

        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full"
          onClick={onClose}
        >
          Cerrar
        </button>

        {product.secondImage && (
           <div className="hidden lg:flex justify-center mt-10">
           <img
               src={product.secondImage}
               alt="Logo decorativo"
               className='w-[120px] h-[120px] object-contain'
            />
          </div>
        )}
      </div>

      {product.secondImage && (
        <div className="absolute top-2 right-2 lg:hidden">
        <img
            src={product.secondImage}
            alt="Logo decorativo"
            className="w-12 h-12 object-contain"
          />
        </div>
      )}
      <div />
    </div>
  </div>
);

export default ProductGrid;
