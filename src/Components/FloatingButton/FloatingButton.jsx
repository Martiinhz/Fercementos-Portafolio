import React from 'react';

const FloatingButton = ({ pdfUrl }) => {
  return (
    <a
      href={pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center w-12 h-12"
      title="Ver PDF"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25h-3a2.25 2.25 0 00-2.25 2.25V9M9 15.75V18m0 0v2.25A2.25 2.25 0 0011.25 21h1.5A2.25 2.25 0 0015 18.75V18m-6 0H7.5M15 18h1.5m-8.25 0v-6m0 6v-1.5m9 0V15m0 3v-1.5M12 3v3m0 0h.01M9 3v3m3 0h-.01M9 15h6"
        />
      </svg>
    </a>
  );
};

export default FloatingButton;
