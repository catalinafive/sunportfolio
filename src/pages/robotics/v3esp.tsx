import React, { useState, useEffect } from "react";
import { ChevronRight, Globe, Zap, Target, Users, Award, TrendingUp, Play, Pause, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const SundayRoboticsLanding = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      quote: "Sunday Robotics transformó nuestro prototipo agrícola en una realidad comercial en 8 meses",
      author: "Dra. María González",
      role: "Universidad Nacional de Colombia",
      country: "🇨🇴 Colombia"
    },
    {
      quote: "El proceso de validación técnica superó nuestras expectativas: riguroso y enfocado al mercado",
      author: "Prof. Carlos Mendoza",
      role: "Georgia Tech",
      country: "🇺🇸 USA"
    },
    {
      quote: "ROI conseguido en 18 meses con su enfoque de manufactura Made in USA",
      author: "Alex Chen",
      role: "Inversionista Tech",
      country: "🇺🇸 Atlanta, GA"
    }
  ];

  const technologies = [
    { name: "Drones Agrícolas", market: "$4.2B", status: "Escalando", flag: "🇲🇽" },
    { name: "Robots de Almacén", market: "$8.1B", status: "Validando", flag: "🇧🇷" },
    { name: "Asistentes Médicos", market: "$12.8B", status: "Desarrollo", flag: "🇦🇷" },
    { name: "Sensores Inteligentes", market: "$2.1B", status: "Listo", flag: "🇨🇴" }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white font-sans overflow-hidden">
      
      {/* Elementos de Fondo Animados */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Navegación */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sunday Robotics
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#proceso" className="hover:text-blue-400 transition-colors">Proceso</a>
            <a href="#colaboracion" className="hover:text-blue-400 transition-colors">Colaboración</a>
            <a href="#financiamiento" className="hover:text-blue-400 transition-colors">Financiamiento</a>
            <a href="#alianzas" className="hover:text-blue-400 transition-colors">Alianzas</a>
            <a href="#portafolio" className="hover:text-blue-400 transition-colors">Portafolio</a>
            <a href="#contacto" className="hover:text-blue-400 transition-colors">Contacto</a>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full hover:scale-105 transition-transform">
            Comenzar
          </button>
        </div>
      </nav>

      {/* Sección Hero */}
      <section className="relative pt-32 pb-20 px-6 text-center max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-full"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Sunday Robotics
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transformamos la <span className="text-blue-400 font-semibold">brillantez académica de LATAM</span> en éxito comercial robótico en el mercado estadounidense. Del prototipo al profit.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25">
              Inicia Tu Viaje <ChevronRight className="inline ml-2" size={20} />
            </button>
            <div className="flex items-center space-x-4 text-slate-400">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-slate-900"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-slate-900"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full border-2 border-slate-900"></div>
              </div>
              <span>50+ tecnologías validadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de Estadísticas */}
      <section className="bg-slate-900/50 backdrop-blur-sm py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "100+", label: "Universidades LATAM", icon: "🎓" },
            { number: "$50M+", label: "Valor de Mercado Creado", icon: "💰" },
            { number: "15", label: "Socios Manufactureros US", icon: "🏭" },
            { number: "8", label: "Tecnologías Escaladas", icon: "🚀" }
          ].map((stat, i) => (
            <div key={i} className="group hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Declaración de Misión */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Construimos el Puente entre la 
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Ciencia </span>
            y el 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Mercado</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Sunday Robotics es una venture builder basada en Atlanta que crea el ecosistema que las universidades de LATAM no tienen para llegar al mercado estadounidense. Detectamos talento, validamos científicamente con socios como UGA, adaptamos a estándares regulatorios, manufacturamos bajo el sello Made in USA y comercializamos agresivamente.
          </p>
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Nuestra Visión 2030</h3>
            <p className="text-lg text-slate-300">
              <span className="text-yellow-400 font-bold">100 tecnologías robóticas de LATAM</span> comercializadas globalmente, creando un ecosistema de $1B+ de innovación entre América Latina y Estados Unidos.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso de Transformación */}
      <section id="proceso" className="bg-slate-900/30 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestro Proceso de Transformación Tecnológica</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "01",
                title: "Detectar & Financiar",
                subtitle: "Descubrimiento de Innovación LATAM",
                description: "Identificamos soluciones revolucionarias (TRL 4-6) y co-financiamos desarrollo de prototipos en universidades públicas de América Latina.",
                icon: "🔍",
                color: "from-green-500 to-emerald-600"
              },
              {
                phase: "02", 
                title: "Validar & Probar",
                subtitle: "Validación Científica USA/LATAM",
                description: "Aceleramos validaciones en campo y laboratorio hasta TRL 6-8 con protocolos científicos, datos del mundo real y alianzas con instituciones de EE.UU.",
                icon: "🔬",
                color: "from-blue-500 to-cyan-600"
              },
              {
                phase: "03",
                title: "Cumplir & Adaptar",
                subtitle: "Regulatorio & Market Fit",
                description: "Generamos documentación, homologación técnica y pilotos reales para mercados estadounidenses. Aseguramos total cumplimiento regulatorio.",
                icon: "📜",
                color: "from-purple-500 to-violet-600"
              },
              {
                phase: "04",
                title: "Escalar & Vender",
                subtitle: "Made in USA + Comercialización",
                description: "Integramos componentes, ensamblamos, certificamos y etiquetamos como producción estadounidense. Creamos canales de venta, branding y ejecutamos estrategias de crecimiento.",
                icon: "🚀",
                color: "from-orange-500 to-red-600"
              }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <div className="text-sm text-slate-400 mb-2">{step.phase}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <h4 className="text-blue-400 font-semibold mb-4">{step.subtitle}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-slate-600" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colaboración por Nivel TRL */}
      <section id="colaboracion" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">¿Cómo Colaborar con Sunday Robotics?</h2>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-4xl mx-auto">
            Independientemente del nivel de madurez de tu tecnología robótica, tenemos un pathway personalizado para llevarte al mercado estadounidense
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                trl: "TRL 1-3",
                title: "Idea / Investigación",
                profile: "Estudiantes, laboratorios, makers, tesis",
                icon: "💡",
                color: "from-yellow-500 to-orange-500",
                services: [
                  "Preincubación técnica hacia prototipo validable",
                  "Matchmaking académico-industrial", 
                  "Apoyo en grants NSF/USAID/BID",
                  "Acuerdo futuro de IP compartida"
                ]
              },
              {
                trl: "TRL 4-6", 
                title: "Prototipo Laboratorio",
                profile: "Investigadores, startups nacientes, tech-transfer",
                icon: "🔬",
                color: "from-blue-500 to-cyan-500",
                services: [
                  "Testeo en campo real (UGA, fincas LATAM)",
                  "Optimización para escalabilidad",
                  "Estrategia protección IP y compliance",
                  "Financiación combinada grants + inversión"
                ]
              },
              {
                trl: "TRL 7-8",
                title: "Piloto Funcional", 
                profile: "Startups con MVP, patentes registradas",
                icon: "🚀",
                color: "from-green-500 to-emerald-500",
                services: [
                  "Diseño piloto comercial USA-ready",
                  "Certificaciones FDA/OSHA/USDA",
                  "Posicionamiento de marca y storytelling",
                  "Validación go-to-market sectorial"
                ]
              },
              {
                trl: "TRL 9",
                title: "Producto en Mercado",
                profile: "Empresas vendiendo localmente",
                icon: "📈", 
                color: "from-purple-500 to-pink-500",
                services: [
                  "Relanzamiento Made in USA",
                  "Rediseño para homologación normativa",
                  "Marketplace robótico y representación",
                  "Equity compartido comercialización USA"
                ]
              }
            ].map((level, i) => (
              <div key={i} className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {level.icon}
                </div>
                <div className="text-sm text-slate-400 mb-1">{level.trl}</div>
                <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{level.profile}</p>
                <div className="space-y-2">
                  {level.services.map((service, j) => (
                    <div key={j} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <p className="text-xs text-slate-300">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estrategias de Financiamiento */}
      <section id="financiamiento" className="py-24 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Estrategias de Financiamiento</h2>
          <p className="text-xl text-slate-300 text-center mb-16 max-w-4xl mx-auto">
            Múltiples fuentes de capital para escalar soluciones robóticas desde la investigación hasta la comercialización
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Grants Públicos",
                icon: "🏛️",
                color: "from-blue-600 to-cyan-600",
                sources: [
                  "NSF PFI, STTR/SBIR Phase I-II",
                  "USDA (robótica agroindustrial)", 
                  "DOD/DARPA (dual use, logística)",
                  "USAID (pilotos LATAM impacto social)",
                  "DOE (eficiencia energética)"
                ],
                note: "Sunday aplica como lead o subawardee con universidades aliadas"
              },
              {
                category: "Universidades",
                icon: "🎓", 
                color: "from-green-600 to-emerald-600",
                sources: [
                  "Joint grant applications",
                  "Fondos transferencia tecnológica",
                  "Propiedad intelectual compartida",
                  "Programas internacionalización",
                  "Cooperación académica bilateral"
                ],
                note: "Alianzas estratégicas USA-LATAM para co-investigación"
              },
              {
                category: "Inversionistas Privados",
                icon: "💼",
                color: "from-purple-600 to-pink-600", 
                sources: [
                  "SAFE o equity en soluciones validadas",
                  "Revenue share en modelo RaaS",
                  "SPV por cada robot exitoso",
                  "Venture studio (cofundación)",
                  "Aceleradoras especializadas"
                ],
                note: "Modelos flexibles según madurez tecnológica"
              },
              {
                category: "Clientes Ancla",
                icon: "🏢",
                color: "from-orange-600 to-red-600",
                sources: [
                  "Cofinanciación de pilotos",
                  "Descuentos por implementación temprana", 
                  "Exclusividad temporal de uso",
                  "Participación en desarrollo",
                  "Contratos de compra garantizada"
                ],
                note: "Empresas que necesitan la tecnología y reducen riesgo"
              },
              {
                category: "Gobiernos Locales USA",
                icon: "🇺🇸",
                color: "from-indigo-600 to-blue-600",
                sources: [
                  "Georgia Center of Innovation",
                  "SelectUSA programs", 
                  "InvestAtlanta incentives",
                  "Manufactura avanzada local",
                  "Creación de empleos high-tech"
                ],
                note: "Incentivos para ensamblaje y manufactura local"
              },
              {
                category: "Organismos Multilaterales",
                icon: "🌎",
                color: "from-teal-600 to-cyan-600",
                sources: [
                  "BID Labs (innovación LATAM)",
                  "CAF (desarrollo tecnológico)",
                  "World Bank innovation funds",
                  "USAID development grants", 
                  "Fondos climáticos/sostenibilidad"
                ],
                note: "Especialmente para tecnologías con impacto social"
              }
            ].map((funding, i) => (
              <div key={i} className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-all group">
                <div className={`w-12 h-12 bg-gradient-to-r ${funding.color} rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                  {funding.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{funding.category}</h3>
                <div className="space-y-2 mb-4">
                  {funding.sources.map((source, j) => (
                    <div key={j} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <p className="text-sm text-slate-300">{source}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg">
                  <p className="text-xs text-slate-400 italic">{funding.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelos de Alianza Estratégica */}
      <section id="alianzas" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Modelos de Alianza Estratégica</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Universidades LATAM */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 p-8 rounded-2xl border border-green-700/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                  🎓
                </div>
                <h3 className="text-2xl font-bold">Universidades LATAM</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Scouting Tecnológico:</strong> Identificamos investigación robótica prometedora en etapa TRL 4-6</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Financiamiento Co-desarrollo:</strong> $50K-$200K para avance de prototipos</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Alianza de PI:</strong> Propiedad conjunta con derechos de comercialización</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Intercambio Estudiantil:</strong> Pasantías de investigación en laboratorio de Atlanta</p>
                </div>
              </div>
              <div className="bg-green-900/30 p-4 rounded-xl">
                <h4 className="font-semibold text-green-400 mb-2">Métricas de Éxito</h4>
                <p className="text-sm text-slate-300">25% equity en tecnologías comercializadas + regalías continuas + continuidad de financiamiento investigativo</p>
              </div>
            </div>

            {/* Universidades US */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-800/20 p-8 rounded-2xl border border-blue-700/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                  🔬
                </div>
                <h3 className="text-2xl font-bold">Universidades US</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Infraestructura de Validación:</strong> Acceso a instalaciones de prueba avanzadas</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Experticia Regulatoria:</strong> Soporte de cumplimiento FDA, OSHA e industria</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Co-aplicación de Grants:</strong> Oportunidades de financiamiento NSF, NIH y DoD</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Inteligencia de Mercado:</strong> Conexiones industriales y validación de clientes</p>
                </div>
              </div>
              <div className="bg-blue-900/30 p-4 rounded-xl">
                <h4 className="font-semibold text-blue-400 mb-2">Beneficios de Alianza</h4>
                <p className="text-sm text-slate-300">Publicaciones de investigación + fees de licenciamiento comercial + oportunidades de colaboración internacional</p>
              </div>
            </div>

            {/* AQUÍ TERMINA LA PARTE 1 - Inversionistas empieza en la Parte 2 */}

            {/* Inversionistas */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-800/20 p-8 rounded-2xl border border-purple-700/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  💼
                </div>
                <h3 className="text-2xl font-bold">Inversionistas</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Portafolio Diversificado:</strong> Acceso a 20+ tecnologías robóticas validadas</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Inversiones Desriesgo:</strong> Tecnologías en TRL 7-8 con validación de mercado</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Co-inversión Estratégica:</strong> Rondas de $500K-$5M con caminos claros de salida</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Arbitraje de Mercado:</strong> Innovación LATAM a valuaciones de mercado US</p>
                </div>
              </div>
              <div className="bg-purple-900/30 p-4 rounded-xl">
                <h4 className="font-semibold text-purple-400 mb-2">Retornos de Inversión</h4>
                <p className="text-sm text-slate-300">Meta de retornos 5x-10x en 3-5 años a través de salidas estratégicas y acuerdos de licenciamiento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio de Tecnologías */}
      <section id="portafolio" className="bg-slate-900/30 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Portafolio Activo de Tecnologías</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-2xl">{tech.flag}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tech.status === 'Listo' ? 'bg-green-900/50 text-green-400' :
                    tech.status === 'Escalando' ? 'bg-blue-900/50 text-blue-400' :
                    tech.status === 'Validando' ? 'bg-yellow-900/50 text-yellow-400' :
                    'bg-purple-900/50 text-purple-400'
                  }`}>
                    {tech.status}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                <p className="text-slate-400 text-sm mb-3">Tamaño de Mercado: {tech.market}</p>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className={`h-2 rounded-full ${
                    tech.status === 'Listo' ? 'bg-green-500 w-full' :
                    tech.status === 'Escalando' ? 'bg-blue-500 w-3/4' :
                    tech.status === 'Validando' ? 'bg-yellow-500 w-1/2' :
                    'bg-purple-500 w-1/4'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrusel de Testimonios */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Lo que Dicen Nuestros Socios</h2>
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm p-12 rounded-2xl border border-slate-700">
              <div className="mb-8">
                <div className="text-4xl text-blue-400 mb-4">"</div>
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div>
                    <p className="font-semibold text-white">{testimonials[currentTestimonial].author}</p>
                    <p className="text-slate-400 text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                  <div className="text-2xl">{testimonials[currentTestimonial].country}</div>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i === currentTestimonial ? 'bg-blue-400' : 'bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visión de Futuro */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">El Futuro que Estamos Construyendo</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏗️",
                title: "Hub de Innovación Atlanta",
                description: "Instalación de 50,000 pies cuadrados para prototipado rápido, pruebas y co-creación entre ingenieros LATAM y fabricantes estadounidenses"
              },
              {
                icon: "🌐",
                title: "Red Global de Validación",
                description: "Red internacional de granjas piloto, fábricas y ciudades inteligentes para validación tecnológica en el mundo real"
              },
              {
                icon: "💻",
                title: "Plataforma SaaS DeepTech",
                description: "Procesos estandarizados para validación técnica, gestión de IP, cumplimiento y evaluación de escalabilidad"
              },
              {
                icon: "🤖",
                title: "Catálogo 50+ Soluciones",
                description: "Portafolio integral de soluciones robóticas validadas para agricultura, manufactura, logística y ciudades inteligentes"
              },
              {
                icon: "💰",
                title: "Modelo de Inversión Continua",
                description: "Financiamiento mixto que combina grants, fondos universitarios, ángeles estratégicos y capital de riesgo corporativo"
              },
              {
                icon: "🚀",
                title: "Ecosistema de Mil Millones",
                description: "Pipeline de innovación autosostenible generando $1B+ en valor económico para 2030"
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Listo para Transformar Tu Innovación?</h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Únete a la revolución que conecta la innovación LATAM con las oportunidades del mercado estadounidense. Ya seas una universidad, inversionista o desarrollador de tecnología, tenemos un modelo de alianza para ti.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25">
              Agendar Consulta <ChevronRight className="inline ml-2" size={20} />
            </button>
            <button className="border-2 border-slate-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all duration-300">
              Descargar Guía de Alianzas
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Ponte en Contacto</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Sede Principal</p>
                    <p className="text-slate-400">Atlanta, Georgia, USA</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-400">alianzas@sundayrobotics.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Teléfono</p>
                    <p className="text-slate-400">+1 (404) XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8">Conexión Rápida</h3>
              <div className="grid grid-cols-1 gap-4">
                <button className="bg-green-600/20 border border-green-600/30 p-4 rounded-xl text-left hover:bg-green-600/30 transition-colors">
                  <h4 className="font-semibold text-green-400 mb-2">🎓 Universidades LATAM</h4>
                  <p className="text-sm text-slate-300">Scouting tecnológico y oportunidades de co-desarrollo</p>
                </button>
                <button className="bg-blue-600/20 border border-blue-600/30 p-4 rounded-xl text-left hover:bg-blue-600/30 transition-colors">
                  <h4 className="font-semibold text-blue-400 mb-2">🔬 Instituciones de Investigación US</h4>
                  <p className="text-sm text-slate-300">Alianzas de validación y colaboraciones de grants</p>
                </button>
                <button className="bg-purple-600/20 border border-purple-600/30 p-4 rounded-xl text-left hover:bg-purple-600/30 transition-colors">
                  <h4 className="font-semibold text-purple-400 mb-2">💼 Inversionistas & VCs</h4>
                  <p className="text-sm text-slate-300">Oportunidades de inversión en tecnologías robóticas validadas</p>
                </button>
                <button className="bg-orange-600/20 border border-orange-600/30 p-4 rounded-xl text-left hover:bg-orange-600/30 transition-colors">
                  <h4 className="font-semibold text-orange-400 mb-2">🏭 Socios Manufactureros</h4>
                  <p className="text-sm text-slate-300">Oportunidades de producción Made in USA y escalamiento</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Sunday Robotics
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Transformando la brillantez académica de LATAM en éxito comercial robótico en el mercado estadounidense.
              </p>
              <div className="flex space-x-4 mt-6">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Globe size={20} className="text-slate-400" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Mail size={20} className="text-slate-400" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Soluciones</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Scouting Tecnológico</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Validación Técnica</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cumplimiento Regulatorio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Escalamiento de Manufactura</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Entrada al Mercado</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Alianzas</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Universidades LATAM</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Instituciones de Investigación US</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Inversionistas Estratégicos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Socios Manufactureros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Desarrolladores de Tecnología</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Guía de Alianzas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portafolio Tecnológico</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Insights de Mercado</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deck de Inversión</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2025 Sunday Robotics. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Política de Privacidad</a>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Términos de Servicio</a>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Política de Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Botón de Acción Flotante */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full shadow-2xl shadow-blue-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <Mail className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
};

export default SundayRoboticsLanding;