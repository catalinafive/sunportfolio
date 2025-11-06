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
  Database
} from 'lucide-react';

const SundayAgTechSolutions = () => {
  const [selectedPainPoint, setSelectedPainPoint] = useState(0);
  const [selectedModel, setSelectedModel] = useState(0);
  const [roiInputs, setRoiInputs] = useState({
    laborCost: 50000,
    acres: 1000,
    currentYield: 80,
    laborHours: 2000
  });
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const painPoints = [
    {
      title: "Crisis de Mano de Obra",
      subtitle: "El 73% de granjas reportan escasez crítica",
      icon: <Users className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      urgency: "CRÍTICO",
      stats: {
        costIncrease: "+127%",
        availability: "-45%",
        seasonalGap: "8 meses"
      },
      pain: "Pagas 2x más por trabajadores estacionales que cada vez son menos disponibles",
      solution: "Automatización 24/7 que nunca falta, nunca se enferma, nunca pide aumento",
      roi: "Recuperación en 8-14 meses"
    },
    {
      title: "Pérdidas por Timing Incorrecto",
      subtitle: "Cosechas $40K-$200K perdidos por año",
      icon: <Clock className="w-8 h-8" />,
      color: "from-orange-500 to-red-500", 
      urgency: "ALTA",
      stats: {
        lossPercent: "15-25%",
        timing: "±3 días",
        revenue: "$40K-$200K"
      },
      pain: "Timing perfecto es imposible de predecir manualmente en miles de acres",
      solution: "IA que monitorea 24/7 y predice el momento exacto óptimo para cada sección",
      roi: "Recuperación en 4-8 meses"
    },
    {
      title: "Sobre-aplicación de Químicos",
      subtitle: "30-50% desperdicio + multas regulatorias",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      urgency: "REGULATORIO",
      stats: {
        waste: "30-50%",
        fines: "$25K-$100K",
        compliance: "99.9%"
      },
      pain: "Aplicaciones uniformes desperdician químicos y arriesgan multas millonarias",
      solution: "Aplicación de precisión variable que reduce químicos 40% y garantiza compliance",
      roi: "Recuperación en 6-12 meses"
    },
    {
      title: "Falta de Datos Accionables",
      subtitle: "Decisiones de $M basadas en intuición",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-purple-500",
      urgency: "ESTRATÉGICO",
      stats: {
        decisions: "80% intuición",
        dataValue: "$500K+",
        accuracy: "+35%"
      },
      pain: "Tomas decisiones de cientos de miles sin datos precisos en tiempo real",
      solution: "Dashboard predictivo con IA que convierte datos en decisiones rentables",
      roi: "Recuperación en 3-6 meses"
    }
  ];

  const partnershipModels = [
    {
      name: "Todo Incluido",
      subtitle: "Nosotros nos encargamos de TODO",
      investment: "$0 inicial",
      structure: "Revenue Share",
      timeline: "30 días para empezar",
      perfect: "Granjas que quieren resultados sin complicaciones",
      highlights: [
        "Zero inversión inicial",
        "Sunday financia todo el desarrollo",
        "Garantía de resultados o no pagas",
        "Instalación y training incluido",
        "Soporte 24/7 por 2 años"
      ],
      share: "Compartes 35% de ahorros generados por 3 años",
      risk: "CERO RIESGO PARA TI",
      best: "MÁS POPULAR"
    },
    {
      name: "Co-Inversión",
      subtitle: "Compartimos costos y ownership",
      investment: "$100K-$300K",
      structure: "Equity Partnership",
      timeline: "45 días desarrollo",
      perfect: "Granjas que quieren ownership de la tecnología",
      highlights: [
        "50% descuento en desarrollo",
        "Ownership compartido de IP",
        "Derechos de licenciar a otros",
        "Priority access a nuevas tecnologías",
        "Board seat en decisiones técnicas"
      ],
      share: "Compartes 20% de revenue por licenciamiento",
      risk: "RIESGO COMPARTIDO",
      best: "MEJOR VALOR"
    },
    {
      name: "Compra Directa",
      subtitle: "Full ownership desde día 1",
      investment: "$300K-$800K",
      structure: "Purchase + License",
      timeline: "60 días customización",
      perfect: "Operaciones grandes que quieren control total",
      highlights: [
        "Ownership 100% de la solución",
        "Customización ilimitada",
        "No revenue sharing",
        "Transferible a otros sitios",
        "Priority development queue"
      ],
      share: "Solo pagas maintenance fee anual del 8%",
      risk: "CONTROL TOTAL",
      best: "OWNERSHIP"
    }
  ];

  const successStories = [
    {
      farm: "Almond Valley Farms",
      location: "California Central Valley",
      acres: "2,400 acres",
      challenge: "Timing de cosecha de almendras - pérdidas de $180K anuales",
      solution: "CropBot Pro - IA + drones autónomos para monitoreo de maduración",
      results: {
        revenue: "+$420K anual",
        efficiency: "+31% yield improvement", 
        time: "6 meses implementación",
        roi: "234% ROI primer año"
      },
      quote: "En 6 meses Sunday transformó nuestra operación. Nunca más perdemos cosecha por timing."
    },
    {
      farm: "Green Valley Organics",
      location: "Oregon Willamette Valley", 
      acres: "800 acres",
      challenge: "Deshierbe manual costaba $85K anuales + compliance orgánico",
      solution: "WeedZap Pro - Robots con visión computacional para deshierbe selectivo",
      results: {
        savings: "-$68K costos laborales",
        compliance: "100% organic certified",
        efficiency: "-78% tiempo deshierbe",
        roi: "189% ROI primer año"
      },
      quote: "Sunday hizo posible lo imposible: deshierbe orgánico a escala industrial."
    },
    {
      farm: "Midwest Corn Co-op",
      location: "Iowa Agricultural Belt",
      acres: "5,200 acres",
      challenge: "Aplicación de fertilizantes - 40% over-application + multas EPA",
      solution: "PrecisionSpray AI - Aplicación variable basada en datos satelitales",
      results: {
        savings: "-$125K químicos anuales",
        compliance: "Zero EPA violations",
        yield: "+18% yield improvement",
        roi: "156% ROI primer año"
      },
      quote: "Sunday nos salvó de multas millonarias y nos hizo más rentables que nunca."
    }
  ];

  const processSteps = [
    {
      week: "Semana 1",
      title: "Diagnóstico Gratuito",
      description: "Nuestro equipo experto evalúa tu operación completa",
      deliverables: [
        "Análisis de costos actuales",
        "Identificación de pain points críticos", 
        "ROI projection personalizado",
        "Roadmap de implementación"
      ],
      duration: "3-5 días en campo",
      cost: "GRATIS (valor $15K)"
    },
    {
      week: "Semana 2-3", 
      title: "Diseño de Solución",
      description: "Creamos la solución perfecta para TUS desafíos específicos",
      deliverables: [
        "Especificaciones técnicas detalladas",
        "Mock-ups y prototipos",
        "Plan de integración con sistemas existentes",
        "Training plan personalizado"
      ],
      duration: "10-14 días desarrollo",
      cost: "INCLUIDO en partnership"
    },
    {
      week: "Semana 4-8",
      title: "Desarrollo & Testing",
      description: "Construimos y probamos en condiciones reales de tu granja",
      deliverables: [
        "Prototipo funcional",
        "Testing en campo real",
        "Ajustes basados en feedback",
        "Certificaciones necesarias"
      ],
      duration: "4-6 semanas iteración",
      cost: "Sunday absorbe costos"
    },
    {
      week: "Semana 9-12",
      title: "Implementación & Scale",
      description: "Instalación completa y entrenamiento de tu equipo",
      deliverables: [
        "Instalación profesional",
        "Training completo del equipo",
        "Documentation y manuales",
        "Soporte 24/7 activado"
      ],
      duration: "2-4 semanas deployment",
      cost: "Incluido + garantía"
    }
  ];

  const calculateROI = () => {
    const laborSavings = roiInputs.laborCost * 0.6; // 60% labor reduction
    const yieldIncrease = roiInputs.acres * (roiInputs.currentYield * 0.25); // 25% yield increase
    const chemicalSavings = roiInputs.acres * 45; // $45/acre chemical savings
    const totalBenefits = laborSavings + yieldIncrease + chemicalSavings;
    const roi = ((totalBenefits / 250000) * 100).toFixed(0); // Assuming $250K average investment
    return {
      laborSavings,
      yieldIncrease, 
      chemicalSavings,
      totalBenefits,
      roi,
      payback: (250000 / totalBenefits * 12).toFixed(0)
    };
  };

  const testimonials = [
    {
      quote: "Sunday no solo cumplió, superó todas nuestras expectativas. ROI del 240% en el primer año.",
      author: "Mike Rodriguez",
      title: "CEO, Valley Fresh Farms",
      savings: "$340K saved"
    },
    {
      quote: "Por primera vez en 20 años, no tuvimos que contratar trabajadores estacionales.",
      author: "Sarah Chen", 
      title: "Operations Director, Green Acres",
      savings: "$180K saved"
    },
    {
      quote: "Sunday transformó nuestra granja familiar en una operación high-tech competitiva.",
      author: "Roberto Martínez",
      title: "Owner, Martínez Organics",
      savings: "$95K saved"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Animated Background */}
      <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 text-white overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white opacity-10 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-600/30 px-4 py-2 rounded-full mb-6">
              <Zap className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="text-green-100">Resultados Garantizados o No Pagas</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent">
                Transforma Tu Granja
              </span>
              <br />
              <span className="text-white">Sin Riesgo Alguno</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-8">
              Sunday absorbe TODO el riesgo. Desarrollamos, instalamos y garantizamos soluciones AgTech personalizadas que incrementan tu revenue 20-40% en el primer año, o no pagas nada.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
              <button 
                onClick={() => setShowROICalculator(true)}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform flex items-center"
              >
                <Calculator className="mr-2" size={24} />
                Calcula Tu ROI en 60 Segundos
              </button>
              <button className="border-2 border-green-300 text-green-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-300 hover:text-green-900 transition-colors flex items-center">
                <Phone className="mr-2" size={20} />
                Diagnóstico Gratuito
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { number: "$12.5M+", label: "Ahorros Generados", icon: "💰" },
                { number: "147", label: "Granjas Transformadas", icon: "🚜" },
                { number: "234%", label: "ROI Promedio", icon: "📈" },
                { number: "0%", label: "Proyectos Fallidos", icon: "✅" }
              ].map((stat, i) => (
                <div key={i} className="bg-green-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-600/30">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-yellow-300">{stat.number}</div>
                  <div className="text-green-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pain Points Section with Interactive Cards */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Cuál es tu <span className="text-red-500">Dolor #1</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada granja tiene desafíos únicos. Identificamos tu pain point específico y creamos la solución exacta que necesitas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {painPoints.map((point, i) => (
              <div
                key={i}
                onClick={() => setSelectedPainPoint(i)}
                className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedPainPoint === i 
                    ? 'border-green-500 bg-green-50 shadow-2xl' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${point.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                  {point.icon}
                </div>
                
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                  point.urgency === 'CRÍTICO' ? 'bg-red-100 text-red-600' :
                  point.urgency === 'ALTA' ? 'bg-orange-100 text-orange-600' :
                  point.urgency === 'REGULATORIO' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {point.urgency}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{point.subtitle}</p>
                
                <div className="space-y-2 text-sm">
                  {Object.entries(point.stats).map(([key, value], j) => (
                    <div key={j} className="flex justify-between">
                      <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-bold text-red-500">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Selected Pain Point Details */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-green-50 p-8 rounded-2xl border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
                  <AlertTriangle className="mr-3" size={28} />
                  El Problema Real
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  {painPoints[selectedPainPoint].pain}
                </p>
                <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-red-700 font-medium">
                    Costo de no actuar: <span className="font-bold">$50K-$300K pérdidas anuales</span>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
                  <Lightbulb className="mr-3" size={28} />
                  La Solución Sunday
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  {painPoints[selectedPainPoint].solution}
                </p>
                <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                  <p className="text-green-700 font-medium">
                    ROI Garantizado: <span className="font-bold">{painPoints[selectedPainPoint].roi}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROI Calculator Modal */}
      {showROICalculator && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-3xl font-bold">Calculadora ROI Personalizada</h3>
                <button 
                  onClick={() => setShowROICalculator(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-6">Información de tu Operación</h4>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold mb-2">Costos Laborales Anuales</label>
                      <input
                        type="number"
                        value={roiInputs.laborCost}
                        onChange={(e) => setRoiInputs({...roiInputs, laborCost: parseInt(e.target.value)})}
                        className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                        placeholder="$50,000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2">Acres Totales</label>
                      <input
                        type="number"
                        value={roiInputs.acres}
                        onChange={(e) => setRoiInputs({...roiInputs, acres: parseInt(e.target.value)})}
                        className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                        placeholder="1,000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold mb-2">Yield Actual (% potencial)</label>
                      <input
                        type="number"
                        value={roiInputs.currentYield}
                        onChange={(e) => setRoiInputs({...roiInputs, currentYield: parseInt(e.target.value)})}
                        className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                        placeholder="80%"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-6">Tu ROI Proyectado</h4>
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl">
                    {(() => {
                      const results = calculateROI();
                      return (
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span>Ahorros Laborales:</span>
                            <span className="font-bold text-green-600">${results.laborSavings.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Incremento Yield:</span>
                            <span className="font-bold text-green-600">${results.yieldIncrease.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Ahorro Químicos:</span>
                            <span className="font-bold text-green-600">${results.chemicalSavings.toLocaleString()}</span>
                          </div>
                          <div className="border-t pt-4">
                            <div className="flex justify-between text-xl font-bold">
                              <span>Beneficio Total Anual:</span>
                              <span className="text-green-600">${results.totalBenefits.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-lg">
                              <span>ROI Primer Año:</span>
                              <span className="text-blue-600">{results.roi}%</span>
                            </div>
                            <div className="flex justify-between text-lg">
                              <span>Periodo Recuperación:</span>
                              <span className="text-purple-600">{results.payback} meses</span>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                  
                  <button className="w-full mt-6 bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                    Agenda Tu Diagnóstico Gratuito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Partnership Models Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Elige Tu <span className="text-green-600">Camino al Éxito</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hay una sola manera de trabajar. Elegimos el modelo que mejor funcione para tu situación específica.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partnershipModels.map((model, i) => (
              <div
                key={i}
                onClick={() => setSelectedModel(i)}
                className={`relative p-8 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedModel === i 
                    ? 'border-green-500 bg-white shadow-2xl' 
                    : 'border-gray-200 bg-white hover:border-gray-300'
                } ${model.best && 'ring-4 ring-green-200'}`}
              >
                {model.best && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {model.best}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                  <p className="text-gray-600 mb-4">{model.subtitle}</p>
                  <div className="text-3xl font-bold text-green-600 mb-2">{model.investment}</div>
                  <div className="text-sm text-gray-500">{model.structure}</div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {model.highlights.map((highlight, j) => (
                    <div key={j} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-6">
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="text-sm text-gray-600 mb-1">Revenue Structure:</div>
                    <div className="font-bold">{model.share}</div>
                  </div>
                  
                  <div className={`text-center py-2 rounded-lg font-bold ${
                    model.risk === 'CERO RIESGO PARA TI' ? 'bg-green-100 text-green-700' :
                    model.risk === 'RIESGO COMPARTIDO' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {model.risk}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Selected Model Details */}
          <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-green-600 mb-2">
                {partnershipModels[selectedModel].name} - Perfecto Para:
              </h3>
              <p className="text-lg text-gray-600">
                {partnershipModels[selectedModel].perfect}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-green-50 p-6 rounded-xl">
                <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Timeline</h4>
                <p className="text-green-600 font-bold">{partnershipModels[selectedModel].timeline}</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Inversión Inicial</h4>
                <p className="text-blue-600 font-bold">{partnershipModels[selectedModel].investment}</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold mb-2">Estructura</h4>
                <p className="text-purple-600 font-bold">{partnershipModels[selectedModel].structure}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process Timeline Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              De <span className="text-red-500">Problema</span> a <span className="text-green-600">Solución</span> en 90 Días
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestro proceso probado elimina toda la fricción. Tú te enfocas en tu granja, nosotros nos encargamos de la tecnología.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <div key={i} className={`flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                          {i + 1}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-green-600">{step.week}</div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6">{step.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-bold mb-2">Entregables:</h4>
                          <ul className="space-y-1">
                            {step.deliverables.map((item, j) => (
                              <li key={j} className="text-sm flex items-center">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <div className="bg-white p-4 rounded-lg border border-gray-200">
                            <div className="text-sm text-gray-500 mb-1">Duración:</div>
                            <div className="font-bold text-blue-600">{step.duration}</div>
                            <div className="text-sm text-gray-500 mb-1 mt-2">Costo para ti:</div>
                            <div className="font-bold text-green-600">{step.cost}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="hidden md:block relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl border border-green-200">
              <h3 className="text-2xl font-bold mb-4">🎯 Garantía Sunday</h3>
              <p className="text-lg text-gray-700 mb-4">
                Si no obtienes mínimo 150% ROI en el primer año, trabajamos GRATIS hasta lograrlo.
              </p>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                Activa Tu Garantía Ahora
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories Carousel */}
      <div className="py-20 bg-gradient-to-br from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Resultados <span className="text-yellow-300">Reales</span> de Granjas <span className="text-yellow-300">Reales</span>
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              No prometemos milagros. Entregamos resultados medibles y documentados.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mr-4">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{story.farm}</h3>
                    <p className="text-green-200">{story.location}</p>
                    <p className="text-green-300 font-bold">{story.acres}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-bold text-red-300 mb-2">El Desafío:</h4>
                  <p className="text-sm text-gray-200 mb-4">{story.challenge}</p>
                  
                  <h4 className="font-bold text-blue-300 mb-2">La Solución Sunday:</h4>
                  <p className="text-sm text-gray-200">{story.solution}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {Object.entries(story.results).map(([key, value], j) => (
                    <div key={j} className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-300">{value}</div>
                      <div className="text-xs text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-800/50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p className="text-sm italic text-green-100">"{story.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Lo Que Dicen Nuestros Clientes</h2>
          </div>
          
          <div className="relative bg-gradient-to-br from-green-50 to-blue-50 p-12 rounded-2xl border border-gray-200">
            <div className="text-center">
              <div className="text-6xl text-green-500 mb-4">"</div>
              <p className="text-2xl text-gray-700 mb-8 italic">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <p className="font-bold text-lg">{testimonials[currentTestimonial].author}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].title}</p>
                  <p className="text-green-600 font-bold text-xl">{testimonials[currentTestimonial].savings}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i === currentTestimonial ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tu Granja Necesita Esto <span className="text-yellow-300">HOY</span>
          </h2>
          <p className="text-xl mb-8">
            Cada día que esperas es dinero que pierdes. Empezamos en 30 días o menos.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnóstico Gratuito</h3>
              <p className="text-green-100 mb-4">Evaluación completa de tu operación sin costo</p>
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors w-full">
                Agenda Ahora
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Phone className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Llamada Estratégica</h3>
              <p className="text-green-100 mb-4">45 minutos para diseñar tu roadmap personalizado</p>
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-400 transition-colors w-full">
                Reservar Slot
              </button>
            </div>
          </div>
          
          <div className="bg-yellow-400 text-black p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">⚡ Oferta Limitada</h3>
            <p className="text-lg">
              Los primeros 5 clientes que se registren este mes reciben <strong>$25K en valor adicional GRATIS</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-green-900 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 (404) 555-FARM</span>
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
            <span className="text-green-300">Disponible 24/7</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SundayAgTechSolutions;