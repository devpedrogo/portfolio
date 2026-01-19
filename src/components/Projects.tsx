import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
  category: string;
}

const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: 'Loading...',
    description: '',
    image: 'https://as1.ftcdn.net/jpg/00/89/29/08/1000_F_89290814_TSIevLOXjAUtXGpO0EOhTp1cH9gQWlhq.jpg',
    tags: [],
    demoLink: '#',
    githubLink: '#',
    category: 'website'
  },
  {
    id: 2,
    title: 'Aplicativo de gerenciamento de tarefas',
    description: 'Um aplicativo de gerenciamento de tarefas com armazenamento local.',
    image: 'https://images.pexels.com/photos/8850809/pexels-photo-8850809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Javascript', 'API'],
    demoLink: 'https://devpedrogo.github.io/to_do_list/',
    githubLink: 'https://github.com/devpedrogo/to_do_list.git',
    category: 'aplicação'
  },
  {
    id: 3,
    title: 'Loading...',
    description: '',
    image: 'https://as1.ftcdn.net/jpg/00/89/29/08/1000_F_89290814_TSIevLOXjAUtXGpO0EOhTp1cH9gQWlhq.jpg',
    tags: [],
    demoLink: '#',
    githubLink: '#',
    category: 'website'
  },
  {
    id: 4,
    title: 'Loading...',
    description: '',
    image: 'https://as1.ftcdn.net/jpg/00/89/29/08/1000_F_89290814_TSIevLOXjAUtXGpO0EOhTp1cH9gQWlhq.jpg',
    tags: [],
    demoLink: '#',
    githubLink: '#',
    category: 'aplicação'
  },
  {
    id: 5,
    title: 'Website para Conserto de Celulares',
    description: 'Landing page desenvolvida para serviços de manutenção de dispositivos móveis, com foco em conversão e contato rápido.',
    image: 'https://media.istockphoto.com/id/1094500402/pt/foto/mobile-phone-repair-hands-closeup.jpg?b=1&s=612x612&w=0&k=20&c=3P_7ca1T2xI7iaRxJKDX7N27BybeRC_LH1N73zCLJDI=',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://devpedrogo.github.io/Info-Cell/',
    githubLink: 'https://github.com/devpedrogo/Info-Cell.git',
    category: 'website'
  },
  {
    id: 6,
    title: 'Landing Page – The Walking Dead',
    description: 'Landing page desenvolvida como projeto pessoal para treinar layout, responsividade e apresentação das temporadas de The Walking Dead.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFB-gJi8jCniObb-VcnpRsWXs01DgL2itTg&s',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://devpedrogo.github.io/twd_project',
    githubLink: 'https://github.com/devpedrogo/twd_project.git',
    category: 'website'
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('todos');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = filter === 'todos' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projetos" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Meus <span className="text-teal-500 dark:text-teal-400">Projetos</span>
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Aqui estão alguns dos meus projetos recentes que demonstram minhas habilidades em HTML, CSS e JavaScript.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
            {['todos', 'website', 'aplicação'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  filter === category
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-800"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out transform hover:scale-110"
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="p-6 w-full">
                    <div className="flex space-x-3 mb-3">
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-300"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700 text-white rounded-full hover:bg-slate-800 transition-colors duration-300"
                        aria-label="View GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="text-xs px-2 py-1 bg-white/20 rounded-full text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white rounded-lg transition-colors duration-300"
          >
            Ver todos os projetos
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;