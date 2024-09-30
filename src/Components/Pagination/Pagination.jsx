// Pagination.js
import React from 'react';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, handleNextPage, handlePreviousPage }) => {
  return (
    <div className="flex justify-center">
      <button
        className="px-4 py-2 mx-1 border rounded-lg hover:bg-[#ACC90F]"
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        <FaAngleLeft/>
      </button>
      <span className="px-4 py-2 mx-1 border rounded-lg">
        {currentPage}
      </span>
      <button
        className="px-4 py-2 mx-1 border rounded-lg hover:bg-[#ACC90F]"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight/>
      </button>
    </div>
  );
};

export default Pagination;
