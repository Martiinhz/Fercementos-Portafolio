import React, { useEffect, useState } from 'react';
import BackgroundImage from '../../../assets/Fondo.jpg';
import Header from '../../Layouts/Header/Header';
import Pagination from '../../Pagination/Pagination';
import { motion } from 'framer-motion';
import CategoryMenu from '../../CategoryMenu/CategoryMenu';
import PituraAcabados from '../../Sections/Category/PinturaAcabados/Rellenos'
import Footer from '../../Layouts/Footer/Footer';


const CementsAggre = ({ searchTerm= ""}) => {
    const [filteredProducts, setFilteredProducts] = useState(PituraAcabados);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeImage, setActiveImage] = useState(null);
    const productsPerPage = 20;

    
    useEffect(() => {
        setFilteredProducts(
            PituraAcabados.filter((product) =>
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
                className="relative w-full h-[350px] bg-cover bg-center flex items-center justify-center z-5"
                style={{ backgroundImage: `url(${BackgroundImage})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="relative text-white text-4xl font-bold p-4 rounded-lg z-10">
                Rellenos
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
                                <motion.button
                                    className="bg-[#ACC90F] text-white px-4 py-2 rounded hover:bg-[#adc90fbb]"
                                    onClick={() => handleViewProduct(product)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    VER PRODUCTO
                                </motion.button>
                            </div>
                        ))}
                    </div>

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
                            <div className="bg-white p-6 rounded-lg w-full max-w-lg lg:max-w-2xl xl:max-w-4xl">
                                <h2 className="text-xl font-bold mb-4 text-center">{selectedProduct.name}</h2>

                                <div className="flex flex-col lg:flex-row items-center">
                                    <img
                                        src={activeImage}
                                        alt={selectedProduct.name}
                                        className="w-full h-[300px] object-contain mb-4 mx-auto sm:h-[100px] lg:h-[400px]"
                                    />

                                    {selectedProduct.secondImage && (
                                        <div className="flex lg:flex-col lg:ml-4 mt-4 lg:mt-0">
                                            <img
                                                src={selectedProduct.image}
                                                alt={selectedProduct.name}
                                                onClick={() => handleImageClick(selectedProduct.image)}
                                                className={`w-20 h-20 object-contain cursor-pointer mb-2 ${activeImage === selectedProduct.image ? 'border-2 border-blue-500' : ''}`}
                                            />
                                            <img
                                                src={selectedProduct.secondImage}
                                                alt={`Second view of ${selectedProduct.name}`}
                                                onClick={() => handleImageClick(selectedProduct.secondImage)}
                                                className={`w-20 h-20 object-contain cursor-pointer ${activeImage === selectedProduct.secondImage ? 'border-2 border-blue-500' : ''}`}
                                            />
                                        </div>
                                    )}
                                </div>

                                {selectedProduct.description && (
                                    <p className="text-gray-700 mb-4 text-center">{selectedProduct.description}</p>
                                )}

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
            <Footer/>
        </>
    );
};

export default CementsAggre;
