import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', service: 'web' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Equipo de Trabajo / Integrantes
  const team = [
    {
      name: 'María Paz Del Pilar Nadal',
      role: 'Full Stack & Software Developer',
      bio: 'Estudiante de la Tecnicatura Universitaria en Programación (UTN FRT). Especializada en desarrollo web, soluciones a medida e integración de software.',
      tags: ['React', 'Node.js', 'JavaScript', 'SQL', 'Git'],
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
    },
    {
      name: 'Compañera de Equipo',
      role: 'Frontend & UI/UX Specialist',
      bio: 'Programadora apasionada por el diseño de interfaces modernas, arquitectura CSS y maquetado dinámico para optimizar la experiencia de usuario.',
      tags: ['React', 'Tailwind CSS', 'UI/UX', 'TypeScript', 'Figma'],
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400'
    }
  ];

  // Servicios que ofrecen como independientes
  const services = [
    {
      id: 'web',
      icon: (
        <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Desarrollo Web a Medida',
      description: 'Sitios institucionales, portfolios y páginas de aterrizaje (Landing Pages) modernas, rápidas y adaptables a cualquier dispositivo.'
    },
    {
      id: 'apps',
      icon: (
        <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
        </svg>
      ),
      title: 'Sistemas & Aplicaciones Web',
      description: 'Plataformas de gestión, sistemas de turnos, paneles de administración y e-commerce completos ajustados a las necesidades de tu negocio.'
    },
    {
      id: 'api',
      icon: (
        <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: 'Integraciones & APIs',
      description: 'Conexión con pasarelas de pago (Mercado Pago), bases de datos relacionales, servicios de correo y herramientas externas.'
    }
  ];

  // Proyectos del Portfolio
  const projects = [
    {
      id: 1,
      title: 'Peluquería Canina Web',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800',
      description: 'Sistema web completo para reserva de turnos, gestión de clientes y catálogo de servicios para estéticas caninas.',
      tags: ['React', 'Node.js', 'Tailwind', 'Jira']
    },
    {
      id: 2,
      title: 'Ferretería Digital - Gestión',
      category: 'apps',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800',
      description: 'Plataforma interactiva para control de stock, gestión de inventario y facturación ágil de productos comerciales.',
      tags: ['React', 'JavaScript', 'Database', 'Git']
    },
    {
      id: 3,
      title: 'Diseño de Iluminación - Atelier',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800',
      description: 'Landing page y catálogo interactivo de diseño de interiores e iluminación arquitectónica.',
      tags: ['React', 'Tailwind CSS', 'UI/UX']
    }
  ];

  const filteredProjects = activeCategory === 'todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '', service: 'web' });
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-900">
      
      {/* BARRA DE NAVEGACIÓN */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="p-2 bg-gradient-to-tr from-purple-600 to-cyan-500 rounded-lg text-white font-bold">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-purple-400 via-cyan-400 to-white bg-clip-text text-transparent">
                DEV.DUO
              </span>
            </div>

            {/* Menú Desktop */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a>
              <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
              <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
              <a href="#equipo" className="hover:text-cyan-400 transition-colors">Nosotras</a>
              <a href="#contacto" className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 transition-opacity font-semibold">
                Contactar
              </a>
            </div>

            {/* Botón Menú Mobile */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>

        {/* Menú desplegable Mobile */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-200 hover:text-cyan-400">Inicio</a>
            <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-200 hover:text-cyan-400">Servicios</a>
            <a href="#proyectos" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-200 hover:text-cyan-400">Proyectos</a>
            <a href="#equipo" onClick={() => setIsMenuOpen(false)} className="block py-2 text-slate-200 hover:text-cyan-400">Nosotras</a>
            <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="block text-center py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold">
              Contactar
            </a>
          </div>
        )}
      </nav>

      {/* SECCIÓN HERO / INICIO */}
      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full -z-10 pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs text-cyan-400 mb-6 font-mono">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> Desarrollo de Software Independiente
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight mb-6">
          Transformamos ideas en <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-300 bg-clip-text text-transparent">soluciones digitales</span> a medida
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mb-8 leading-relaxed">
          Somos dos desarrolladoras apasionadas por la tecnología. Diseñamos e implementamos aplicaciones web modernas, rápidas y adaptadas a los objetivos de tu emprendimiento o empresa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#contacto" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all">
            Iniciar un Proyecto 
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
          <a href="#proyectos" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 font-semibold hover:bg-slate-800 transition-colors">
            Ver Portafolio
          </a>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">¿Qué podemos hacer por vos?</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Ofrecemos un servicio integral desde la maquetación inicial hasta la publicación en la nube.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 transition-all hover:-translate-y-1">
              <div className="p-3 bg-slate-800/50 rounded-xl w-fit mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN PROYECTOS / PORTFOLIO */}
      <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Nuestros Trabajos</h2>
            <p className="text-slate-400">Proyectos destacados desarrollados de forma colaborativa.</p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2">
            {['todos', 'web', 'apps'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${
                  activeCategory === cat 
                    ? 'bg-cyan-500 text-slate-950 font-bold' 
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grilla de Proyectos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-purple-500/50 transition-all flex flex-col">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    Ver Detalles 
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN EQUIPO / NOSOTRAS */}
      <section id="equipo" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">El Equipo Detrás del Código</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Combinamos lógica, diseño e innovación en cada desarrollo.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col items-center text-center">
              <img 
                src={member.avatar} 
                alt={member.name} 
                className="w-24 h-24 rounded-full object-cover mb-6 ring-4 ring-purple-500/20"
              />
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-cyan-400 text-sm font-medium mb-4">{member.role}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{member.bio}</p>

              <div className="flex flex-wrap justify-center gap-2">
                {member.tags.map((t, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded bg-slate-800 text-purple-300 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-900">
        <div className="max-w-3xl mx-auto bg-slate-900/80 border border-slate-800 p-8 sm:p-12 rounded-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">¿Tenés una idea en mente?</h2>
            <p className="text-slate-400">Escribinos y coordinemos una reunión para presupuestar tu proyecto.</p>
          </div>

          {isSubmitted ? (
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center text-emerald-400 flex flex-col items-center gap-3">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <p className="font-semibold text-lg">¡Mensaje enviado con éxito!</p>
              <p className="text-xs text-slate-300">Te responderemos a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Nombre</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Tu nombre o empresa" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="correo@ejemplo.com" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Servicio de interés</label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="web">Página Web / Landing Page</option>
                  <option value="apps">Sistema / Aplicación Web</option>
                  <option value="api">Integración o Consultoría</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Mensaje</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Contanos sobre las necesidades de tu proyecto..." 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Enviar Consulta 
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-slate-500 border-t border-slate-900">
        <p>© {new Date().getFullYear()} DEV.DUO - Desarrollo Independiente. Todos los derechos reservados.</p>
      </footer>

      {/* MODAL DE PROYECTO SELECCIONADO */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <img 
              src={selectedProject.image} 
              alt={selectedProject.title} 
              className="w-full aspect-video object-cover rounded-2xl mb-6"
            />

            <h3 className="text-2xl font-bold mb-3">{selectedProject.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">{selectedProject.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-cyan-300 font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => setSelectedProject(null)}
                className="flex-1 py-3 rounded-xl bg-slate-800 font-semibold hover:bg-slate-700 transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}