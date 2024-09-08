import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex justify-center items-center gap-4 my-4">
      <button
        disabled={currentPage === 1}
        className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-[#5A83FF] uppercase transition-all rounded-lg select-none hover:bg-gray-200 active:bg-gray-300 disabled:pointer-events-none disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        type="button"
      >
        <FaChevronLeft className="w-4 h-4" />
        Previous
      </button>

      <div className="flex items-center gap-2">
        {pages.map(page => (
          <button
            key={page}
            className={`relative h-8 w-8 rounded-lg text-center font-sans text-xs font-medium uppercase transition-all ${
              page === currentPage
                ? 'bg-[#1E48C7] text-white shadow-md shadow-[#1E48C7]hover:shadow-lg hover:shadow-[#1E48C7]'
                : 'bg-white text-gray-900 hover:bg-gray-100 active:bg-gray-200'
            }`}
            onClick={() => onPageChange(page)}
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              {page}
            </span>
          </button>
        ))}
      </div>

      <button
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-[#1E48C7] uppercase transition-all rounded-lg select-none hover:bg-gray-200 active:bg-gray-300 disabled:pointer-events-none disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        type="button"
      >
        Next
        <FaChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
