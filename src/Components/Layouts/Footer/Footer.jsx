import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-evenly items-center mb-4">
          {/* Redes Sociales */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/Fercementos"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ACC90F] p-2 rounded-full hover:bg-[#adc90fbd]"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="https://www.instagram.com/fercementos_col/?hl=es-la"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#ACC90F] p-2 rounded-full hover:bg-[#adc90fbd]"
            >
              <FaInstagram className="text-white" />
            </a>
          </div>

          {/* Enlaces de políticas */}
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:underline">
              Términos y condiciones
            </a>
            <a href="#" className="hover:underline">
              Política de cookies
            </a>
            <a href="#" className="hover:underline">
              Política de privacidad
            </a>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="border-white mb-4" />

        {/* Información legal */}
        <div className="text-center text-sm">
          © TODOS LOS DERECHOS RESERVADOS<br />
          Fercementos S.A.S. NIT 900.499.362-8. Carrera 22 # 21-50, Armenia, Colombia
        </div>
      </div>
    </footer>
  );
};

export default Footer;
