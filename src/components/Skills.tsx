import React from 'react';

interface SkillProps {
  name: string;
  level: number;
  icon: string;
}

const skillsData: SkillProps[] = [
  { name: 'HTML5', level: 95, icon: 'html5' },
  { name: 'CSS3', level: 90, icon: 'css3' },
  { name: 'JavaScript', level: 92, icon: 'javascript' },
  { name: 'React', level: 88, icon: 'react' },
  { name: 'TypeScript', level: 85, icon: 'typescript' },
  { name: 'Tailwind CSS', level: 90, icon: 'tailwind' },
  { name: 'Node.js', level: 80, icon: 'nodejs' },
  { name: 'Git', level: 85, icon: 'git' },
];

const SkillBar: React.FC<SkillProps> = ({ name, level, icon }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="text-lg font-medium text-slate-800 dark:text-white">{name}</span>
        </div>
        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{level}%</span>
      </div>
      <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%`, transform: 'translateX(-100%)', animation: 'slideRight 1.5s forwards' }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Minhas <span className="text-teal-500 dark:text-teal-400">Habilidades</span>
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Aprimorei minha expertise nessas tecnologias para criar experiências web excepcionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {skillsData.map((skill) => (
            <SkillBar key={skill.name} {...skill} />
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white text-center mb-10">
            Meu processo de desenvolvimento
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                number: '01', 
                title: 'Pesquisar', 
                description: 'Compreender os requisitos do projeto e pesquisar as melhores soluções.' 
              },
              { 
                number: '02', 
                title: 'Projeto', 
                description: 'Criar wireframes e traduzi-los em designs modernos e fáceis de usar.' 
              },
              { 
                number: '03', 
                title: 'Desenvolver', 
                description: 'Escrever código limpo e eficiente, com foco em desempenho e facilidade de manutenção.' 
              },
              { 
                number: '04', 
                title: 'Implantar', 
                description: 'Realizar testes completos e implementar com práticas de integração contínua.' 
              }
            ].map((step, index) => (
              <div 
                key={step.number} 
                className="relative p-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="absolute -top-6 left-6 h-12 w-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 right-0 h-0.5 w-full md:w-10 bg-teal-500 transform translate-x-full"></div>
                )}
                <h4 className="mt-6 text-xl font-semibold text-slate-800 dark:text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;