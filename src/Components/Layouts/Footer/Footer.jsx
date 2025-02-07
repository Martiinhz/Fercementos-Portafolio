import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-evenly items-center mb-4 flex-wrap gap-8">
          {/* Redes Sociales */}
          <div className="flex flex-col items-center text-sm">
            <span className="font-semibold mb-2">Redes Sociales:</span>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Fercementos"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ACC90F] p-2 rounded-full hover:bg-[#adc90fbd]"
              >
                <FaFacebookF className="text-white w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/fercementos_col/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ACC90F] p-2 rounded-full hover:bg-[#adc90fbd]"
              >
                <FaInstagram className="text-white w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Enlaces de teléfonos */}
          <div className="flex flex-col items-center text-sm">
            <span className="font-semibold mb-2">Teléfonos:</span>
            <span>📞 +57 (320) 576-2792</span>
            <span>📞 +57 (311) 304-4380</span>
            <span>📞 +57 (311) 302-6570</span>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="border-white my-4" />

        {/* Información legal */}
        <div className="text-center text-sm">
          © TODOS LOS DERECHOS RESERVADOS<br />
          Inversora Fercementos S.A.S. NIT 901.586.586-7. Carrera 22 # 21-50, Armenia, Colombia
        </div>
      </div>
    </footer>
  );
};

export default Footer;
