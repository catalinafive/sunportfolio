import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  DollarSign, 
  Users, 
  Zap, 
  Globe, 
  Target, 
  TrendingUp, 
  CheckCircle, 
  Calculator, 
  FileText, 
  Leaf, 
  Clock, 
  Shield,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Star,
  AlertTriangle,
  Lightbulb,
  BarChart3,
  Truck,
  Factory,
  Smartphone,
  Monitor,
  Settings,
  Camera,
  Wifi,
  Battery,
  Cpu,
  Database,
  Search,
  Filter,
  Eye,
  Wrench,
  Package,
  Thermometer,
  RefreshCw,
  Timer,
  Play,
  Pause,
  ChevronDown,
  MousePointer,
  TrendingDown,
  Scissors,
  Droplets,
  Gauge,
  Activity,
  PieChart,
  RotateCcw
} from 'lucide-react';

const SundayClientHomepage = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [roiCalculatorOpen, setRoiCalculatorOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(0);

  // Crisis agrícola data con urgencia
  const crisisPoints = [
    {
      title: "Crisis de Mano de Obra",
      severity: "CRÍTICA",
      trend: "Empeorando",
      stats: {
        shortage: "73% granjas reportan escasez",
        cost: "+127% aumento costos",
        availability: "-45% trabajadores disponibles"
      },
      impact: "$300K-$800K sobrecostos anuales",
      urgency: "Actúa ahora o cierra operaciones",
      icon: <Users className="w-8 h-8" />,
      color: "from-red-600 to-red-800"
    },
    {
      title: "Pérdidas de Timing",
      severity: "ALTA", 
      trend: "Creciendo",
      stats: {
        loss: "15-25% pérdidas por timing",
        window: "±3 días margen error",
        revenue: "$200K-$600K perdidos"
      },
      impact: "Una mala cosecha = año perdido",
      urgency: "Cada temporada que esperas pierdes más",
      icon: <Clock className="w-8 h-8" />,
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Sobre-aplicación Química",
      severity: "REGULATORIA",
      trend: "Multas crecientes", 
      stats: {
        waste: "30-50% desperdicio",
        fines: "$25K-$100K multas EPA",
        compliance: "99.9% requerido"
      },
      impact: "Una multa puede quebrar la operación",
      urgency: "Regulaciones se endurecen cada año",
      icon: <Droplets className="w-8 h-8" />,
      color: "from-yellow-600 to-orange-600"
    },
    {
      title: "Decisiones a Ciegas", 
      severity: "ESTRATÉGICA",
      trend: "Competidores avanzan",
      stats: {
        intuition: "80% decisiones sin datos",
        cost: "$500K+ decisiones erróneas",
        advantage: "35% mejora con datos"
      },
      impact: "Competidores data-driven te superan",
      urgency: "El futuro es de quien tenga mejores datos",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-600 to-purple-600"
    }
  ];

  // Video testimonials/demos
  const videoShowcase = [
    {
      title: "Almond Valley Farms: $420K Incremento Anual",
      subtitle: "De pérdidas masivas a récord de ganancias en 6 meses",
      description: "Timing perfecto de cosecha con IA redujo pérdidas 92%",
      results: ["92% menos pérdidas", "$420K revenue adicional", "6 meses implementación"],
      thumbnail: "🌰",
      customer: "Mike Rodriguez, CEO"
    },
    {
      title: "Green Valley Organics: $68K Ahorros Laborales",
      subtitle: "Deshierbe robótico en operación orgánica",
      description: "Robot selectivo reemplazó 60 trabajadores estacionales",
      results: ["78% reducción tiempo", "$68K ahorros anuales", "100% organic certified"],
      thumbnail: "🌱", 
      customer: "Sarah Chen, Operations Director"
    },
    {
      title: "Midwest Corn: Zero Multas EPA",
      subtitle: "De $50K multas a compliance perfecto",
      description: "Aplicación variable eliminó over-spray y multas",
      results: ["Zero EPA violations", "$125K ahorros químicos", "18% yield increase"],
      thumbnail: "🌽",
      customer: "Roberto Martinez, Owner"
    }
  ];

  // Sunday advantages
  const sundayAdvantages = [
    {
      title: "Zero Riesgo Para Ti",
      subtitle: "Nosotros asumimos TODO el riesgo financiero",
      description: "Desarrollamos, instalamos y garantizamos resultados. Si no obtienes mínimo 150% ROI en año 1, trabajamos gratis hasta lograrlo.",
      icon: <Shield className="w-12 h-12" />,
      color: "from-green-500 to-emerald-600",
      features: [
        "Inversión inicial $0 en muchos casos",
        "Garantía 150% ROI o trabajo gratis",
        "Instalación y training incluido",
        "Soporte 24/7 por 2 años"
      ]
    },
    {
      title: "Soluciones en Semanas, No Años",
      subtitle: "Adaptamos tecnologías probadas a tu situación",
      description: "No reinventamos la rueda. Tenemos 50+ soluciones base que adaptamos específicamente para tu operación en 2-12 semanas.",
      icon: <Zap className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-600",
      features: [
        "2-12 semanas vs 12-24 meses tradicional",
        "Basado en tecnología probada",
        "Adaptación específica para ti", 
        "Resultados desde semana 1"
      ]
    },
    {
      title: "Made in USA, Sourced Globally",
      subtitle: "Lo mejor del mundo, construido en América",
      description: "Encontramos las mejores innovaciones mundiales y las manufacturamos con estándares americanos para compliance total.",
      icon: <Globe className="w-12 h-12" />,
      color: "from-purple-500 to-pink-600",
      features: [
        "Compliance regulatorio garantizado",
        "Calidad Made in USA",
        "Innovación global filtrada",
        "Soporte local completo"
      ]
    },
    {
      title: "Results or Nothing",
      subtitle: "Pagás solo si obtienes resultados reales",
      description: "Revenue sharing significa que ganamos solo cuando tú ganas. Nuestro éxito está 100% alineado con el tuyo.",
      icon: <TrendingUp className="w-12 h-12" />,
      color: "from-orange-500 to-red-600",
      features: [
        "Revenue sharing en muchos casos",
        "Success fees solo con resultados",
        "KPIs medibles y verificables",
        "Tu éxito = nuestro éxito"
      ]
    }
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Diagnóstico Gratuito",
      subtitle: "Identificamos tu mayor pain point",
      duration: "1 semana",
      description: "Nuestro equipo experto evalúa tu operación completa y identifica las oportunidades de mayor impacto económico.",
      deliverables: [
        "Análisis completo de costos actuales",
        "Identificación de 3-5 pain points críticos",
        "ROI projection específico para cada solución",
        "Roadmap priorizado de implementación"
      ],
      value: "$15K de consultoría GRATIS"
    },
    {
      number: "02", 
      title: "Diseño de Solución",
      subtitle: "Adaptamos tecnología probada",
      duration: "1-3 semanas",
      description: "Seleccionamos de nuestro portfolio la tecnología base más adecuada y la adaptamos a tus necesidades específicas.",
      deliverables: [
        "Especificaciones técnicas detalladas",
        "Mockups y simulaciones 3D",
        "Plan de integración con sistemas existentes",
        "Training plan personalizado para tu equipo"
      ],
      value: "Diseño incluido en partnership"
    },
    {
      number: "03",
      title: "Desarrollo Rápido", 
      subtitle: "De prototipo a producción",
      duration: "2-10 semanas",
      description: "Adaptamos nuestra tecnología base o desarrollamos componentes nuevos, siempre con testing en condiciones reales.",
      deliverables: [
        "Prototipo funcional adaptado",
        "Testing intensivo en tu operación real",
        "Ajustes basados en feedback inmediato",
        "Certificaciones y compliance necesarios"
      ],
      value: "Sunday absorbe costos de desarrollo"
    },
    {
      number: "04",
      title: "Implementación Total",
      subtitle: "De instalación a resultados",
      duration: "1-3 semanas", 
      description: "Instalación profesional, training completo de tu equipo y activación de soporte 24/7 hasta asegurar resultados.",
      deliverables: [
        "Instalación profesional completa",
        "Training intensivo de todo el equipo",
        "Documentation y manuales completos", 
        "Soporte 24/7 activado inmediatamente"
      ],
      value: "Todo incluido + garantía extendida"
    }
  ];

  // ROI Calculator simplified
  const calculateROI = (laborCost, acres, yieldPercent) => {
    const laborSaving = laborCost * 0.6; // 60% labor reduction average
    const yieldIncrease = acres * yieldPercent * 0.25 * 150; // 25% yield increase, $150/acre average
    const operationalSaving = acres * 75; // $75/acre operational improvements
    const totalBenefit = laborSaving + yieldIncrease + operationalSaving;
    const averageInvestment = 200000; // $200K average
    const roi = ((totalBenefit / averageInvestment) * 100).toFixed(0);
    const payback = (averageInvestment / totalBenefit * 12).toFixed(0);
    
    return {
      laborSaving: Math.round(laborSaving),
      yieldIncrease: Math.round(yieldIncrease),
      operationalSaving: Math.round(operationalSaving),
      totalBenefit: Math.round(totalBenefit),
      roi,
      payback
    };
  };

  // Testimonials
  const testimonials = [
    {
      quote: "Sunday no solo cumplió sus promesas, las superó. ROI del 240% en el primer año y operación completamente transformada.",
      author: "Mike Rodriguez",
      title: "CEO, Almond Valley Farms",
      location: "California Central Valley",
      result: "$420K additional revenue",
      photo: "👨‍🌾"
    },
    {
      quote: "Por primera vez en 20 años no tuve que contratar trabajadores estacionales. El robot trabaja 24/7 sin quejas.",
      author: "Sarah Chen",
      title: "Operations Director, Green Valley Organics", 
      location: "Oregon Willamette Valley",
      result: "$68K labor savings",
      photo: "👩‍🌾"
    },
    {
      quote: "Sunday nos salvó de multas millonarias de EPA y nos hizo más rentables que nunca. Mejor inversión de mi vida.",
      author: "Roberto Martinez",
      title: "Owner, Midwest Corn Co-op",
      location: "Iowa Agricultural Belt", 
      result: "$125K chemical savings + Zero fines",
      photo: "👨‍🌾"
    }
  ];

  // FAQ
  const faqs = [
    {
      question: "¿Qué pasa si la solución no funciona como prometen?",
      answer: "Garantizamos mínimo 150% ROI en el primer año o trabajamos GRATIS hasta lograrlo. Además, en muchos casos ofrecemos modelos de $0 inversión inicial con revenue sharing, eliminando completamente tu riesgo financiero."
    },
    {
      question: "¿Cuánto tiempo realmente toma implementar una solución?",
      answer: "Depende del tipo: (1) Adaptaciones de nuestro portfolio: 2-12 semanas, (2) Desarrollos semi-custom: 3-6 meses, (3) Innovación completamente nueva: 6-18 meses. El 70% de nuestros clientes eligen adaptaciones rápidas."
    },
    {
      question: "¿Cómo sé que Sunday puede resolver MI problema específico?",
      answer: "Ofrecemos evaluación gratuita de 1 semana (valor $15K) donde analizamos tu operación específica y te mostramos exactamente cómo resolveríamos tus pain points. Solo después decides si continúas."
    },
    {
      question: "¿Qué diferencia a Sunday de otros proveedores de tecnología agrícola?",
      answer: "3 diferencias clave: (1) Asumimos el riesgo - tú no pagas si no hay resultados, (2) Velocidad - semanas vs años porque adaptamos vs inventar desde cero, (3) Soporte total - no solo vendemos, nos hacemos responsables de tu éxito."
    },
    {
      question: "¿Realmente pueden garantizar compliance regulatorio?",
      answer: "Sí. Todas nuestras soluciones se manufacturan con estándares Made in USA y incluyen toda la documentación necesaria para FDA, EPA, OSHA, etc. Tenemos 100% track record de compliance en 147 implementaciones."
    },
    {
      question: "¿Qué pasa con el soporte después de la implementación?",
      answer: "Soporte 24/7 por mínimo 2 años incluido. Además, actualizaciones de software, mantenimiento preventivo y training adicional sin costo extra. Tu éxito es nuestro éxito a largo plazo."
    }
  ];

  // Effects
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videoShowcase.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Ultimate Problem/Solution */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white opacity-5 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Problem/Urgency */}
            <div>
              <div className="inline-flex items-center bg-red-600/30 px-6 py-3 rounded-full mb-8 border border-red-400/30">
                <AlertTriangle className="w-6 h-6 mr-3 text-red-300" />
                <span className="text-red-100 font-bold">CRISIS AGRÍCOLA EN CURSO</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
                <span className="text-red-300">Tu Granja</span>
                <br />
                <span className="text-white">Está en</span>
                <br />
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Peligro</span>
              </h1>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <TrendingDown className="w-8 h-8 text-red-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-red-300 mb-2">Mano de Obra Desapareciendo</h3>
                    <p className="text-green-100 text-lg">73% granjas reportan escasez crítica. Costos +127%, disponibilidad -45%</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-8 h-8 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-orange-300 mb-2">Timing = Dinero Perdido</h3>
                    <p className="text-green-100 text-lg">15-25% pérdidas por timing incorrecto. $200K-$600K perdidos anualmente</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Droplets className="w-8 h-8 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-yellow-300 mb-2">Multas Regulatorias Crecientes</h3>
                    <p className="text-green-100 text-lg">EPA aumenta enforcement. Una multa puede quebrar tu operación</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-900/30 backdrop-blur-sm p-6 rounded-xl border border-red-500/30 mb-8">
                <h3 className="text-xl font-bold text-red-300 mb-3">⚠️ Costo Total de Inacción:</h3>
                <div className="text-3xl font-bold text-white">$500K - $1.5M</div>
                <div className="text-red-200">pérdidas anuales por no automatizar</div>
              </div>
            </div>
            
            {/* Right Column - Solution/Hope */}
            <div>
              <div className="bg-green-800/30 backdrop-blur-sm p-8 rounded-2xl border border-green-500/30">
                <div className="inline-flex items-center bg-green-600/30 px-4 py-2 rounded-full mb-6">
                  <Zap className="w-5 h-5 mr-2 text-yellow-300" />
                  <span className="text-green-100 font-bold">SOLUCIÓN SUNDAY</span>
                </div>
                
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent">
                    Transformación Garantizada
                  </span>
                  <br />
                  <span className="text-white">en 90 Días o Menos</span>
                </h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-lg">Soluciones en semanas, no años</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-lg">Zero riesgo - garantía 150% ROI</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-lg">Made in USA, compliance total</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span className="text-lg">147 granjas transformadas, 0 fallas</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center bg-green-700/30 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-300">$12.5M+</div>
                    <div className="text-green-200 text-sm">Ahorros Generados</div>
                  </div>
                  <div className="text-center bg-blue-700/30 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-300">234%</div>
                    <div className="text-blue-200 text-sm">ROI Promedio</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    className="w-full bg-gradient-to-r from-green-500 to-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
                  >
                    Ver Catálogo de Soluciones
                    <ArrowRight className="inline ml-2 w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setRoiCalculatorOpen(true)}
                    className="w-full border-2 border-green-400 text-green-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-400 hover:text-green-900 transition-colors"
                  >
                    Calcular Mi ROI en 60 Segundos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crisis Points Interactive Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Cuál es tu <span className="text-red-600">Crisis #1</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada día que esperas, pierdes más dinero. Identifica tu mayor pain point y descubre cómo Sunday lo resuelve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {crisisPoints.map((crisis, i) => (
              <div
                key={i}
                onClick={() => setSelectedProblem(i)}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedProblem === i ? 'scale-105 shadow-2xl' : ''
                }`}
              >
                <div className={`bg-gradient-to-br ${crisis.color} p-6 rounded-2xl text-white relative overflow-hidden`}>
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      crisis.severity === 'CRÍTICA' ? 'bg-red-500' :
                      crisis.severity === 'ALTA' ? 'bg-orange-500' :
                      crisis.severity === 'REGULATORIA' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}>
                      {crisis.severity}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    {crisis.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{crisis.title}</h3>
                  <p className="text-sm opacity-90 mb-4">{crisis.trend}</p>
                  
                  <div className="space-y-2 text-sm">
                    {Object.entries(crisis.stats).map(([key, value], j) => (
                      <div key={j} className="flex justify-between">
                        <span className="opacity-80">{key}:</span>
                        <span className="font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-lg font-bold">{crisis.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Selected Crisis Detail */}
          <div className="bg-gradient-to-r from-red-50 to-green-50 p-8 rounded-2xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
                  <AlertTriangle className="mr-3 w-8 h-8" />
                  Crisis Actual
                </h3>
                <h4 className="text-xl font-bold mb-3">{crisisPoints[selectedProblem].title}</h4>
                <p className="text-lg text-red-700 font-medium mb-4">
                  {crisisPoints[selectedProblem].urgency}
                </p>
                <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-red-800 font-bold">
                    💰 {crisisPoints[selectedProblem].impact}
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
                  <Lightbulb className="mr-3 w-8 h-8" />
                  Solución Sunday
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Tenemos múltiples soluciones específicas para este problema, desde adaptaciones rápidas hasta desarrollos custom.
                </p>
                <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded mb-4">
                  <p className="text-green-800 font-bold">
                    ✅ Resultados en 2-12 semanas
                  </p>
                </div>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform">
                  Ver Soluciones Específicas
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Showcase Section */}
      <div className="py-20 bg-gradient-to-br from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Resultados <span className="text-yellow-300">Reales</span> en <span className="text-yellow-300">Video</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Ve exactamente cómo transformamos operaciones reales de granjas reales con resultados verificables.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video */}
            <div className="lg:col-span-2">
              <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="relative bg-gradient-to-br from-green-800 to-blue-800 rounded-xl p-12 mb-6 text-center">
                  <div className="text-6xl mb-4">{videoShowcase[currentVideo].thumbnail}</div>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                  </button>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{videoShowcase[currentVideo].title}</h3>
                <p className="text-green-200 text-lg mb-4">{videoShowcase[currentVideo].subtitle}</p>
                <p className="text-gray-300 mb-6">{videoShowcase[currentVideo].description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {videoShowcase[currentVideo].results.map((result, i) => (
                    <div key={i} className="bg-green-800/50 p-3 rounded-lg text-center">
                      <div className="text-yellow-300 font-bold text-sm">{result}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-green-300">
                    <div className="font-bold">{videoShowcase[currentVideo].customer}</div>
                  </div>
                  <div className="flex space-x-2">
                    {videoShowcase.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentVideo(i)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          i === currentVideo ? 'bg-yellow-400' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Video Playlist */}
            <div className="space-y-4">
              {videoShowcase.map((video, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentVideo(i)}
                  className={`cursor-pointer p-4 rounded-xl transition-all ${
                    i === currentVideo 
                      ? 'bg-yellow-500/20 border-2 border-yellow-400' 
                      : 'bg-white/10 border border-white/20 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <div className="text-2xl mr-3">{video.thumbnail}</div>
                    <div className="text-lg font-bold">{video.title.split(':')[0]}</div>
                  </div>
                  <p className="text-sm text-gray-300">{video.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sunday Advantages Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Por Qué <span className="text-green-600">Sunday</span> vs Competencia?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No somos otro proveedor de tecnología. Somos tu socio de transformación con skin in the game.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {sundayAdvantages.map((advantage, i) => (
              <div key={i} className="group hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-2xl transition-shadow h-full">
                  <div className={`bg-gradient-to-r ${advantage.color} p-4 rounded-xl inline-block mb-6`}>
                    <div className="text-white">
                      {advantage.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                  <p className="text-lg text-green-600 font-semibold mb-4">{advantage.subtitle}</p>
                  <p className="text-gray-700 mb-6">{advantage.description}</p>
                  
                  <ul className="space-y-3">
                    {advantage.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              De <span className="text-red-500">Crisis</span> a <span className="text-green-600">Éxito</span> en 4 Pasos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro proceso probado elimina toda la fricción y riesgo. Tú te enfocas en tu granja, nosotros en la transformación.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500"></div>
            
            <div className="space-y-16">
              {processSteps.map((step, i) => (
                <div key={i} className={`flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-6">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mr-6">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                          <p className="text-green-600 font-semibold">{step.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-6">{step.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold mb-3">Entregables:</h4>
                          <ul className="space-y-2">
                            {step.deliverables.map((item, j) => (
                              <li key={j} className="text-sm flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <div className="text-sm text-gray-600 mb-1">Duración:</div>
                            <div className="font-bold text-green-600 text-lg">{step.duration}</div>
                            <div className="text-sm text-gray-600 mb-1 mt-3">Valor:</div>
                            <div className="font-bold text-blue-600">{step.value}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden md:block relative z-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl border border-green-200 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">🚀 Comenzamos en 72 Horas</h3>
              <p className="text-lg text-gray-700 mb-6">
                La evaluación gratuita la programamos esta semana. Resultados garantizados o no pagas.
              </p>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform mr-4">
                Empezar Evaluación Gratuita
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors">
                Ver Catálogo Completo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-xl text-gray-300">Resultados verificables de granjas reales</p>
          </div>
          
          <div className="relative bg-gradient-to-br from-green-800/30 to-blue-800/30 backdrop-blur-sm p-12 rounded-2xl border border-white/20">
            <div className="text-center">
              <div className="text-8xl text-green-400 mb-6">"</div>
              <p className="text-2xl md:text-3xl text-gray-100 mb-8 italic leading-relaxed">
                {testimonials[currentTestimonial].quote}
              </p>
              
              <div className="flex items-center justify-center space-x-6">
                <div className="text-6xl">{testimonials[currentTestimonial].photo}</div>
                <div className="text-left">
                  <p className="text-xl font-bold text-white">{testimonials[currentTestimonial].author}</p>
                  <p className="text-green-300">{testimonials[currentTestimonial].title}</p>
                  <p className="text-gray-400">{testimonials[currentTestimonial].location}</p>
                  <p className="text-yellow-400 font-bold text-lg mt-2">{testimonials[currentTestimonial].result}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    i === currentTestimonial ? 'bg-green-400' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">Las dudas más comunes de granjas como la tuya</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedFAQ === i ? 'rotate-180' : ''}`} />
                </button>
                {expandedFAQ === i && (
                  <div className="px-6 py-4 bg-white">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Calculator Modal */}
      {roiCalculatorOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold">Calculadora ROI Personalizada</h3>
                <button 
                  onClick={() => setRoiCalculatorOpen(false)}
                  className="text-gray-400 hover:text-gray-600 text-3xl"
                >
                  ×
                </button>
              </div>
              
              <div className="text-center mb-8">
                <p className="text-lg text-gray-600">
                  Descubre cuánto puedes ahorrar y ganar con Sunday AgTech
                </p>
              </div>
              
              {/* Simple ROI Preview */}
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-green-600">$300K+</div>
                  <div className="text-gray-600">Ahorros Promedio Anuales</div>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600">234%</div>
                  <div className="text-gray-600">ROI Promedio Año 1</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600">8 meses</div>
                  <div className="text-gray-600">Payback Promedio</div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                  Calcular Mi ROI Específico
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Final CTA - Catalog Link */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tu Solución Te Está <span className="text-yellow-300">Esperando</span>
          </h2>
          <p className="text-xl mb-8">
            Tenemos la solución exacta para tu problema específico. Encuéntrala en nuestro catálogo completo.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">🎯 En el Catálogo Encontrarás:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                <span>50+ soluciones específicas por problema</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                <span>Timelines realistas (2 semanas a 18 meses)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                <span>ROI específico para cada solución</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-300 mr-3" />
                <span>Detalles técnicos completos</span>
              </div>
            </div>
          </div>
          
          <button className="bg-yellow-500 text-black px-12 py-6 rounded-xl font-bold text-2xl hover:scale-105 transition-transform shadow-2xl mb-4">
            EXPLORAR CATÁLOGO COMPLETO
            <ArrowRight className="inline ml-3 w-8 h-8" />
          </button>
          
          <p className="text-green-200">
            💡 O agenda evaluación gratuita si prefieres hablar directamente
          </p>
        </div>
      </div>

      {/* Contact Footer */}
      <div className="bg-green-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 (404) 555-SUNDAY</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>solutions@sundayagtech.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Atlanta, Georgia</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-green-300">Respuesta garantizada en 2 horas</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SundayClientHomepage;