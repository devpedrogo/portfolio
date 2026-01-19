import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                Pedro<span className="text-teal-400"> Gouveia</span>
              </span>
            </div>
            <p className="text-slate-400 mb-6 max-w-md">
              Criando sites bonitos, responsivos e fáceis de usar, com código limpo e eficiente. 
              Transformando ideias em experiências digitais excepcionais.
            </p>
            {/* <div className="flex space-x-4">
              {['github', 'linkedin', 'twitter', 'dribbble'].map((platform) => (
                <a 
                  key={platform}
                  href="#" 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-colors duration-300"
                  aria-label={`Follow me on ${platform}`}
                >
                  <span className="capitalize text-sm">{platform.charAt(0)}</span>
                </a>
              ))}
            </div> */}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Links rápidos</h3>
            <ul className="space-y-3">
              {['Sobre', 'Habilidades', 'Projetos', 'Contato', 'Início'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-teal-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contato</h3>
            <ul className="space-y-3 text-slate-400">
              <li>Aracaju, SE</li>
              <li>pedrogouveia.dev@gmail.com</li>
              <li>+55 (79) 99949-2650</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-center md:text-left">
            &copy; {currentYear} Pedro Gouveia. Todos os direitos reservados.
          </p>
          <p className="text-slate-400 flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="text-red-500 mx-1" /> by Pedro Gouveia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;