import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Pegamos o ID da variável de ambiente
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    const endpoint = `https://formspree.io/f/${formspreeId}`;


    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitError(true);
      }
    } catch (error) {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };


  return (
    <section id="contato" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Entre em contato <span className="text-teal-500 dark:text-teal-400">comigo</span>
          </h2>
          <div className="h-1 w-20 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos trabalhar juntos para dar vida às suas ideias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Entre em contato
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Estou sempre aberto a discutir novos projetos, oportunidades ou parcerias. 
              Sinta-se à vontade para entrar em contato usando o formulário de contato ou as informações abaixo.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-500 dark:text-teal-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-800 dark:text-white mb-1">Email</h4>
                  <p className="text-slate-600 dark:text-slate-400">pedrogouveia.dev@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-500 dark:text-teal-400 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-800 dark:text-white mb-1">Telefone</h4>
                  <p className="text-slate-600 dark:text-slate-400">+55 (79) 99949-2650</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-500 dark:text-teal-400 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-800 dark:text-white mb-1">Localização</h4>
                  <p className="text-slate-600 dark:text-slate-400">Aracaju, SE</p>
                </div>
              </div>
            </div>
            
            {/* <div className="mt-10">
              <h4 className="text-lg font-medium text-slate-800 dark:text-white mb-4">Me siga</h4>
              <div className="flex space-x-4">
                {['github', 'linkedin', 'instagram'].map((platform) => (
                  <a 
                    key={platform}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-colors duration-300"
                    aria-label={`Follow me on ${platform}`}
                  >
                    <span className="capitalize text-sm">{platform.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div> */}
          </div>
          
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
              Envie uma mensagem
            </h3>
            
            {submitSuccess ? (
              <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-700 dark:text-green-400">
                Sua mensagem foi enviada com sucesso. Te retorno em breve!
              </div>
            ) : submitError ? (
              <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-700 dark:text-red-400">
                Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Nome
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                      placeholder="Seu nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                      placeholder="Seu email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Assunto
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-slate-800 dark:text-white"
                    placeholder="Seu assunto"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Mensagem
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-slate-800 dark:text-white resize-none"
                    placeholder="Sua mensagem"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 ${
                    isSubmitting 
                      ? 'bg-slate-400 dark:bg-slate-600 cursor-not-allowed' 
                      : 'bg-teal-500 hover:bg-teal-600'
                  } text-white rounded-lg transition-colors duration-300 flex items-center justify-center`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;