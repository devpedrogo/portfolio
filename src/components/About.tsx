import React from 'react';
import { Code, Palette, Layout } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Sobre <span className="text-teal-500 dark:text-teal-400">Mim</span>
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
              Eu sou Pedro, um apaixonado pelo Desenvolvimento Web.
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Sou estudante de Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento web e 
              base sólida em HTML, CSS e JavaScript, desenvolvendo projetos com foco em organização, responsividade e boas práticas.
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Atualmente, estou expandindo meus estudos para o back-end, buscando evoluir como desenvolvedor web completo, 
              entendendo tanto a interface quanto a lógica das aplicações, sempre com aprendizado contínuo e foco em evolução.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-teal-500 dark:text-teal-400 mb-3">
                  <Code size={24} />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Desenvolvimento</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Código limpo e de fácil manutenção, que segue as melhores práticas.
                </p>
              </div>
              
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-teal-500 dark:text-teal-400 mb-3">
                  <Palette size={24} />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Projeto</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Interfaces de usuário intuitivas com atenção à estética e à usabilidade.
                </p>
              </div>
              
              <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-teal-500 dark:text-teal-400 mb-3">
                  <Layout size={24} />
                </div>
                <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Responsividade</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Sites que funcionam perfeitamente em todos os dispositivos.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="w-full max-w-md">
              <div className="w-full aspect-square relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Pedro Gouveia at work" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-white text-sm">Anos de Experiência</p>
                      <p className="text-white text-2xl font-bold">1+</p>
                    </div>
                    <div>
                      <p className="text-white text-sm">Projetos Concluidos</p>
                      <p className="text-white text-2xl font-bold">10+</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-teal-500 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-sm md:text-base">Disponível para trabalhos freelance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;