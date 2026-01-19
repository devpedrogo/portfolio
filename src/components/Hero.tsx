import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const typewriterRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const roles = ["Desenvolvedor Frontend", "Entusiasta em UI/UX", "Desenvolvedor JavaScript", "Estudante de Backend"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentRole.substring(0, currentCharIndex - 1);
          currentCharIndex--;
        }
        typingSpeed = 50;
      } else {
        if (typewriterRef.current) {
          typewriterRef.current.textContent = currentRole.substring(0, currentCharIndex + 1);
          currentCharIndex++;
        }
        typingSpeed = 100;
      }
      
      if (!isDeleting && currentCharIndex === currentRole.length) {
        // Pause at the end of typing
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        // Pause before typing the next word
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const timer = setTimeout(type, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="início" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex flex-col items-start space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-1 w-12 bg-teal-500"></div>
              <span className="text-slate-600 dark:text-slate-400 font-medium">Desenvolvedor Web</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Olá, eu sou <span className="text-teal-500 dark:text-teal-400">Pedro Gouveia</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 flex flex-wrap items-center">
              <span>Eu sou um </span>
              <span ref={typewriterRef} className="ml-2 font-medium text-teal-600 dark:text-teal-400 min-w-40 inline-block"></span>
              <span className="animate-blink ml-1">|</span>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg">
              Criando sites bonitos, responsivos e fáceis de usar, com código limpo e eficiente. 
              Transformando ideias em experiências digitais excepcionais.
            </p>
            
            <div className="flex space-x-4 mt-2">
              <a target='_blank' href="https://github.com/devpedrogo" className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a target='_blank' href="https://www.linkedin.com/in/pedroogouveia" className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:pedrogouveia.dev@gmail.com?subject=Contato%20via%20site&body=Olá,%20gostaria%20de%20falar%20com%20você" className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:text-teal-500 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
              <button 
                onClick={() => scrollToSection('projetos')}
                className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
              >
                Ver Projetos
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300 flex items-center justify-center"
              >
                Entre em contato comigo
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 shadow-xl overflow-hidden">
              <div className="absolute inset-2 bg-white dark:bg-slate-800 rounded-full overflow-hidden">
                <img 
                  src="https://github.com/devpedrogo.png?size=500" 
                  alt="Pedro Gouveia" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} className="text-teal-500 dark:text-teal-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;