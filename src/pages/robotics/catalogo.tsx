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
  Timer
} from 'lucide-react';

const SundayAgTechSolutions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTimeline, setSelectedTimeline] = useState('all');

  // Catálogo completo de soluciones
  const solutionCatalog = [
    // TIER 1: Soluciones Platform (Adaptaciones Rápidas)
    {
      id: 'quality-inspector-pro',
      name: 'Quality Inspector Pro',
      category: 'quality',
      tier: 'platform',
      basedOn: 'Carro de Inspección de Flores + Selector Air-Sort',
      tagline: 'Zero defectos en tu empaque',
      problem: 'Defectos en productos finales causan devoluciones y pérdida de clientes premium',
      pain: '15-25% productos con defectos pasan inspección manual',
      cost: '$50K-$200K pérdidas anuales por devoluciones',
      solution: 'IA detecta 99.5% de defectos antes del empaque',
      adaptableFor: ['Frutas', 'Vegetales', 'Flores', 'Nueces', 'Productos procesados'],
      timeline: '3-6 semanas',
      investment: '$75K-$150K',
      roi: '180-250%',
      payback: '6-9 meses',
      features: [
        'Detección RGB + UV + NIR',
        'IA entrenada para tu producto específico',
        'Clasificación automática A/B/C',
        'Trazabilidad completa QR',
        'Integración con sistemas ERP'
      ],
      results: {
        defectReduction: '92%',
        throughput: '+40%',
        laborSaving: '60%'
      },
      urgency: 'ALTA',
      complexity: 'Adaptación Directa',
      icon: <Eye className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'smart-counter-360',
      name: 'Smart Counter 360',
      category: 'inventory',
      tier: 'platform',
      basedOn: 'Contador de Plántulas Boom-Cam',
      tagline: 'Inventarios perfectos en minutos',
      problem: 'Inventarios manuales toman días y tienen 10-15% error',
      pain: 'Pérdidas por stock fantasma y sobre/sub-stock',
      cost: '$30K-$100K pérdidas anuales por mal inventario',
      solution: 'Conteo automático 99.5% precisión en tiempo real',
      adaptableFor: ['Plántulas', 'Cultivos', 'Ganado', 'Árboles', 'Productos almacenados'],
      timeline: '2-4 semanas',
      investment: '$45K-$90K',
      roi: '200-300%',
      payback: '4-6 meses',
      features: [
        'Visión RGB + ToF ultra-precisa',
        'IA conteo específica por producto',
        'Brazo móvil ultraligero',
        'App móvil en tiempo real',
        'Reportes automáticos'
      ],
      results: {
        accuracy: '99.5%',
        speed: '10x más rápido',
        laborSaving: '85%'
      },
      urgency: 'MEDIA',
      complexity: 'Reentrenamiento IA',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'auto-clean-systems',
      name: 'Auto-Clean Systems',
      category: 'maintenance',
      tier: 'platform',
      basedOn: 'Limpiador de Techos Plásticos',
      tagline: 'Limpieza autónoma 24/7',
      problem: 'Limpieza manual es peligrosa, lenta y costosa',
      pain: 'Suciedad reduce eficiencia 8-15% y riesgo de accidentes',
      cost: '$40K-$80K anuales en mano de obra + riesgos',
      solution: 'Robot autónomo limpia sin parar, sin riesgos',
      adaptableFor: ['Paneles solares', 'Invernaderos', 'Estructuras metálicas', 'Equipos exteriores'],
      timeline: '6-10 semanas',
      investment: '$120K-$200K',
      roi: '150-200%',
      payback: '8-12 meses',
      features: [
        'Navegación autónoma SLAM + LiDAR',
        'Sistema limpieza adaptable',
        'Ultraligero <4kg/m²',
        'Control remoto Wi-Fi/LoRa',
        'Mantenimiento predictivo'
      ],
      results: {
        efficiency: '+12% por limpieza',
        safety: '100% sin riesgos',
        laborSaving: '90%'
      },
      urgency: 'MEDIA',
      complexity: 'Adaptación Mecánica',
      icon: <RefreshCw className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'precision-dryer-ai',
      name: 'Precision Dryer AI',
      category: 'processing',
      tier: 'platform',
      basedOn: 'Secador Ambiental Modular',
      tagline: 'Cero pérdidas post-cosecha',
      problem: 'Secado inadecuado causa 15-30% pérdidas por moho/aflatoxinas',
      pain: 'Procesos manuales inconsistentes y energía desperdiciada',
      cost: '$100K-$300K pérdidas + multas regulatorias',
      solution: 'IA controla condiciones perfectas para cada producto',
      adaptableFor: ['Granos', 'Frutas deshidratadas', 'Hierbas', 'Café', 'Tabaco'],
      timeline: '4-8 semanas',
      investment: '$150K-$250K',
      roi: '160-220%',
      payback: '8-14 meses',
      features: [
        'Control ambiental AI',
        'Sensores multi-punto',
        'Eficiencia energética COP>3.5',
        'Monitoreo remoto MQTT',
        'Compliance automático'
      ],
      results: {
        lossReduction: '85%',
        energySaving: '40%',
        qualityImprovement: '+25%'
      },
      urgency: 'ALTA',
      complexity: 'Calibración Parámetros',
      icon: <Thermometer className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'data-fusion-dashboard',
      name: 'Data Fusion Dashboard',
      category: 'analytics',
      tier: 'platform',
      basedOn: 'Integración de todas las soluciones existentes',
      tagline: 'Decisiones de $M basadas en datos reales',
      problem: 'Decisiones críticas tomadas con intuición vs datos',
      pain: '70% decisiones basadas en "experiencia" vs datos',
      cost: '$200K-$500K en decisiones sub-óptimas anuales',
      solution: 'IA unifica todos los datos en insights accionables',
      adaptableFor: ['Cualquier operación agrícola con múltiples procesos'],
      timeline: '8-12 semanas',
      investment: '$100K-$180K',
      roi: '220-400%',
      payback: '4-8 meses',
      features: [
        'Integración multi-sensor',
        'IA predictiva personalizada',
        'Dashboard tiempo real',
        'Alertas proactivas',
        'ROI tracking automático'
      ],
      results: {
        decisionAccuracy: '+45%',
        profitIncrease: '+30%',
        riskReduction: '70%'
      },
      urgency: 'ESTRATÉGICA',
      complexity: 'Integración Avanzada',
      icon: <Database className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500'
    },

    // TIER 2: Desarrollo Custom (Soluciones Nuevas)
    {
      id: 'field-robot-autonomous',
      name: 'Field Robot Autonomous',
      category: 'automation',
      tier: 'custom',
      basedOn: 'Desarrollo desde cero',
      tagline: 'Tu fuerza laboral que nunca falta',
      problem: 'Escasez crítica de mano de obra estacional',
      pain: 'Costos laborales +127%, disponibilidad -45%',
      cost: '$300K-$800K sobrecostos laborales anuales',
      solution: 'Robot autónomo opera 24/7 sin descansos ni aumentos',
      adaptableFor: ['Cosecha', 'Siembra', 'Deshierbe', 'Poda', 'Aplicaciones'],
      timeline: '12-18 meses',
      investment: '$200K-$500K co-desarrollo',
      roi: '200-350%',
      payback: '18-24 meses',
      features: [
        'Navegación campo abierto GPS RTK',
        'Manipulación adaptativa',
        'IA reconocimiento cultivos',
        'Operación autónoma completa',
        'Fleet management'
      ],
      results: {
        laborReplacement: '70%',
        availability: '24/7/365',
        consistency: '100%'
      },
      urgency: 'CRÍTICA',
      complexity: 'Innovación Completa',
      icon: <Users className="w-8 h-8" />,
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'precision-spray-ai',
      name: 'Precision Spray AI',
      category: 'application',
      tier: 'custom',
      basedOn: 'Desarrollo desde cero',
      tagline: 'Precisión molecular, compliance perfecto',
      problem: 'Sobre-aplicación 30-50% + riesgo multas regulatorias',
      pain: 'Desperdicio químicos + multas EPA hasta $100K',
      cost: '$150K-$400K pérdidas + multas anuales',
      solution: 'Aplicación variable ultra-precisa con garantía compliance',
      adaptableFor: ['Pesticidas', 'Fertilizantes', 'Herbicidas', 'Bioestimulantes'],
      timeline: '8-15 meses',
      investment: '$150K-$350K co-desarrollo',
      roi: '180-280%',
      payback: '12-18 meses',
      features: [
        'Mapeo variable ultra-preciso',
        'Sensores tiempo real',
        'IA optimización aplicación',
        'Compliance automático',
        'Documentación regulatoria'
      ],
      results: {
        chemicalReduction: '40%',
        compliance: '100%',
        costSaving: '$200K+'
      },
      urgency: 'REGULATORIA',
      complexity: 'Desarrollo Avanzado',
      icon: <Target className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'harvest-predictor-ai',
      name: 'Harvest Predictor AI',
      category: 'prediction',
      tier: 'custom',
      basedOn: 'Desarrollo desde cero',
      tagline: 'Timing perfecto = profit perfecto',
      problem: 'Timing incorrecto causa 15-25% pérdidas de valor',
      pain: 'Imposible predecir momento óptimo en miles de acres',
      cost: '$200K-$600K pérdidas por timing sub-óptimo',
      solution: 'IA predice timing perfecto acre por acre',
      adaptableFor: ['Cualquier cultivo con ventana crítica de cosecha'],
      timeline: '6-12 meses',
      investment: '$100K-$250K co-desarrollo',
      roi: '250-400%',
      payback: '6-12 meses',
      features: [
        'Sensores multi-espectral',
        'IA predictiva avanzada',
        'Alertas micro-zona',
        'Integración clima',
        'Optimización logística'
      ],
      results: {
        timingAccuracy: '95%',
        lossReduction: '80%',
        valueIncrease: '+30%'
      },
      urgency: 'ALTA',
      complexity: 'IA Avanzada',
      icon: <Timer className="w-8 h-8" />,
      color: 'from-green-500 to-blue-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todas las Soluciones', icon: <Globe className="w-5 h-5" />, count: solutionCatalog.length },
    { id: 'quality', name: 'Control de Calidad', icon: <Eye className="w-5 h-5" />, count: solutionCatalog.filter(s => s.category === 'quality').length },
    { id: 'inventory', name: 'Inventario & Conteo', icon: <BarChart3 className="w-5 h-5" />, count: solutionCatalog.filter(s => s.category === 'inventory').length },
    { id: 'maintenance', name: 'Mantenimiento', icon: <Wrench className="w-5 h-5" />, count: solutionCatalog.filter(s => s.category === 'maintenance').length },
    { id: 'processing', name: 'Post-Cosecha', icon: <Package className="w-5 h-5" />, count: solutionCatalog.filter(s => s.category === 'processing').length },
    { id: 'analytics', name: 'Datos & Analytics', icon: <Database className="w-5 h-5" />, count: solutionCatalog.filter(s => s.category === 'analytics').length },
    { id: 'automation', name: 'Automatización', icon: <Users className="w-5 h-5" />, count: solutionCatalog.filter(s => s.category === 'automation').length },
    { id: 'application', name: 'Aplicación Precisión', icon: <Target className="w-5 h-5" />, count: solutionCatalog.filter(s => s.category === 'application').length },
    { id: 'prediction', name: 'Predicción IA', icon: <Timer className="w-5 h-5" />, count: solutionCatalog.filter(s => s.category === 'prediction').length }
  ];

  const timelineFilters = [
    { id: 'all', name: 'Todos los Tiempos', color: 'gray' },
    { id: 'fast', name: 'Rápido (2-10 sem)', color: 'green' },
    { id: 'medium', name: 'Medio (3-6 meses)', color: 'yellow' },
    { id: 'long', name: 'Largo (6-18 meses)', color: 'red' }
  ];

  const getTimelineCategory = (timeline) => {
    if (timeline.includes('semanas') || timeline.includes('weeks')) return 'fast';
    if (timeline.includes('6-12') || timeline.includes('8-15')) return 'medium';
    return 'long';
  };

  const filteredSolutions = solutionCatalog.filter(solution => {
    const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTimeline = selectedTimeline === 'all' || getTimelineCategory(solution.timeline) === selectedTimeline;
    
    return matchesCategory && matchesSearch && matchesTimeline;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-green-300 to-yellow-300 bg-clip-text text-transparent">
                Catálogo de Soluciones
              </span>
              <br />
              <span className="text-white">Tu Problema, Nuestra Solución</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mb-8">
              Encuentra la solución exacta para tu desafío específico. Desde adaptaciones rápidas hasta desarrollos revolutionarios.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                <input
                  type="text"
                  placeholder="Busca tu problema: 'control calidad', 'inventario', 'mano de obra'..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-lg border-0 focus:ring-4 focus:ring-green-300 text-gray-900"
                />
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-green-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-600/30">
                <div className="text-3xl font-bold text-yellow-300">{solutionCatalog.filter(s => s.tier === 'platform').length}</div>
                <div className="text-green-200">Soluciones Rápidas</div>
                <div className="text-sm text-green-300">2-12 semanas</div>
              </div>
              <div className="bg-blue-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-600/30">
                <div className="text-3xl font-bold text-yellow-300">{solutionCatalog.filter(s => s.tier === 'custom').length}</div>
                <div className="text-blue-200">Desarrollos Custom</div>
                <div className="text-sm text-blue-300">6-18 meses</div>
              </div>
              <div className="bg-purple-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-600/30">
                <div className="text-3xl font-bold text-yellow-300">100%</div>
                <div className="text-purple-200">Éxito Garantizado</div>
                <div className="text-sm text-purple-300">O no pagas</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Categorías de Soluciones
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2 font-medium">{category.name}</span>
                  <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                    selectedCategory === category.id ? 'bg-green-700' : 'bg-gray-300'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Timeline Filters */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Por Timeline de Implementación
            </h3>
            <div className="flex flex-wrap gap-3">
              {timelineFilters.map(filter => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedTimeline(filter.id)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedTimeline === filter.id
                      ? `bg-${filter.color}-600 text-white shadow-lg`
                      : `bg-${filter.color}-100 text-${filter.color}-700 hover:bg-${filter.color}-200`
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {filteredSolutions.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No encontramos soluciones</h3>
              <p className="text-gray-500">Intenta con otros términos de búsqueda o filtros</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map(solution => (
                <div
                  key={solution.id}
                  onClick={() => setSelectedSolution(solution)}
                  className="bg-white rounded-2xl border border-gray-200 hover:border-green-300 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${solution.color} p-6 rounded-t-2xl text-white relative overflow-hidden`}>
                    <div className="absolute top-2 right-2 flex items-center space-x-2">
                      {solution.tier === 'platform' && (
                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">RÁPIDA</span>
                      )}
                      {solution.tier === 'custom' && (
                        <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">CUSTOM</span>
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        solution.urgency === 'CRÍTICA' ? 'bg-red-500' :
                        solution.urgency === 'ALTA' ? 'bg-orange-500' :
                        solution.urgency === 'REGULATORIA' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}>
                        {solution.urgency}
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="bg-white/20 p-3 rounded-xl mr-4">
                        {solution.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{solution.name}</h3>
                        <p className="text-sm opacity-90">{solution.tagline}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    {/* Problem */}
                    <div className="mb-6">
                      <h4 className="font-bold text-red-600 mb-2 flex items-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        El Problema
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">{solution.problem}</p>
                      <p className="text-xs text-red-600 font-medium">💰 Costo: {solution.cost}</p>
                    </div>
                    
                    {/* Solution Preview */}
                    <div className="mb-6">
                      <h4 className="font-bold text-green-600 mb-2 flex items-center">
                        <Lightbulb className="w-4 h-4 mr-2" />
                        Nuestra Solución
                      </h4>
                      <p className="text-sm text-gray-700">{solution.solution}</p>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      <div className="text-center bg-green-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{solution.timeline}</div>
                        <div className="text-xs text-gray-600">Timeline</div>
                      </div>
                      <div className="text-center bg-blue-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{solution.roi}</div>
                        <div className="text-xs text-gray-600">ROI</div>
                      </div>
                      <div className="text-center bg-purple-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{solution.payback}</div>
                        <div className="text-xs text-gray-600">Payback</div>
                      </div>
                    </div>
                    
                    {/* Adaptable For */}
                    <div className="mb-4">
                      <h5 className="font-bold text-sm mb-2">Adaptable para:</h5>
                      <div className="flex flex-wrap gap-1">
                        {solution.adaptableFor.slice(0, 3).map((item, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {item}
                          </span>
                        ))}
                        {solution.adaptableFor.length > 3 && (
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                            +{solution.adaptableFor.length - 3} más
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-bold hover:scale-105 transition-transform flex items-center justify-center">
                      Ver Detalles Completos
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Solution Detail Modal */}
      {selectedSolution && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center">
                  <div className={`bg-gradient-to-r ${selectedSolution.color} p-4 rounded-xl text-white mr-6`}>
                    {selectedSolution.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedSolution.name}</h2>
                    <p className="text-xl text-gray-600">{selectedSolution.tagline}</p>
                    <div className="flex items-center space-x-4 mt-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        selectedSolution.tier === 'platform' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {selectedSolution.tier === 'platform' ? 'Solución Rápida' : 'Desarrollo Custom'}
                      </span>
                      <span className="text-sm text-gray-500">Basada en: {selectedSolution.basedOn}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedSolution(null)}
                  className="text-gray-400 hover:text-gray-600 text-3xl"
                >
                  ×
                </button>
              </div>
              
              {/* Content Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Problem & Solution */}
                <div className="space-y-8">
                  {/* Problem Analysis */}
                  <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                    <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
                      <AlertTriangle className="w-6 h-6 mr-2" />
                      Análisis del Problema
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold mb-2">Situación Actual:</h4>
                        <p className="text-gray-700">{selectedSolution.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Pain Point Específico:</h4>
                        <p className="text-gray-700">{selectedSolution.pain}</p>
                      </div>
                      <div className="bg-red-100 p-4 rounded-lg">
                        <h4 className="font-bold text-red-700 mb-2">Costo de No Actuar:</h4>
                        <p className="text-red-700 font-bold text-lg">{selectedSolution.cost}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Solution Details */}
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
                      <Lightbulb className="w-6 h-6 mr-2" />
                      Solución Sunday
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold mb-2">Cómo Funciona:</h4>
                        <p className="text-gray-700">{selectedSolution.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Características Técnicas:</h4>
                        <ul className="space-y-2">
                          {selectedSolution.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Adaptability */}
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">Adaptabilidad</h3>
                    <div>
                      <h4 className="font-bold mb-2">Perfecta para:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedSolution.adaptableFor.map((item, i) => (
                          <div key={i} className="bg-white p-3 rounded-lg border border-blue-200 text-center">
                            <span className="text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Metrics & ROI */}
                <div className="space-y-8">
                  {/* Key Metrics */}
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <h3 className="text-xl font-bold text-purple-600 mb-4">Métricas Clave</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">{selectedSolution.timeline}</div>
                        <div className="text-sm text-gray-600">Timeline</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">{selectedSolution.investment}</div>
                        <div className="text-sm text-gray-600">Inversión</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">{selectedSolution.roi}</div>
                        <div className="text-sm text-gray-600">ROI Año 1</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-orange-600">{selectedSolution.payback}</div>
                        <div className="text-sm text-gray-600">Payback</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expected Results */}
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <h3 className="text-xl font-bold text-yellow-600 mb-4">Resultados Esperados</h3>
                    <div className="space-y-4">
                      {Object.entries(selectedSolution.results).map(([key, value], i) => (
                        <div key={i} className="flex justify-between items-center bg-white p-3 rounded-lg">
                          <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="text-xl font-bold text-green-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Implementation Complexity */}
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-bold mb-4">Complejidad de Implementación</h3>
                    <div className="flex items-center justify-between bg-white p-4 rounded-lg">
                      <span className="font-medium">Nivel de Desarrollo:</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                        selectedSolution.complexity.includes('Directa') ? 'bg-green-100 text-green-700' :
                        selectedSolution.complexity.includes('Reentrenamiento') ? 'bg-blue-100 text-blue-700' :
                        selectedSolution.complexity.includes('Mecánica') || selectedSolution.complexity.includes('Parámetros') ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {selectedSolution.complexity}
                      </span>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                      Solicitar Evaluación Gratuita
                    </button>
                    <button className="w-full border-2 border-green-600 text-green-600 py-4 rounded-xl font-bold hover:bg-green-50 transition-colors">
                      Descargar Spec Sheet Técnico
                    </button>
                    <button className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold hover:bg-yellow-400 transition-colors">
                      Calcular ROI Personalizado
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Bottom Section - Process Timeline */}
              <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-center">Proceso de Implementación</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: '1', title: 'Evaluación', desc: 'Análisis gratuito de tu operación', time: '1 semana' },
                    { step: '2', title: 'Diseño', desc: 'Adaptación específica a tus necesidades', time: selectedSolution.tier === 'platform' ? '1-2 semanas' : '4-8 semanas' },
                    { step: '3', title: 'Desarrollo', desc: selectedSolution.tier === 'platform' ? 'Configuración y pruebas' : 'Desarrollo y validación', time: selectedSolution.tier === 'platform' ? '2-6 semanas' : '8-40 semanas' },
                    { step: '4', title: 'Deploy', desc: 'Instalación y entrenamiento', time: '1-2 semanas' }
                  ].map((phase, i) => (
                    <div key={i} className="text-center">
                      <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                        {phase.step}
                      </div>
                      <h4 className="font-bold mb-2">{phase.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{phase.desc}</p>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{phase.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿No encuentras tu solución específica?
          </h2>
          <p className="text-xl mb-8">
            Nuestro equipo puede adaptar cualquier tecnología o desarrollar algo completamente nuevo para ti.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <button className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
              Consulta Gratuita Personalizada
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-colors">
              Ver Más Casos de Éxito
            </button>
          </div>
        </div>
      </div>

      {/* Contact Footer */}
      <div className="bg-green-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <span>+1 (404) 555-AGTECH</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>solutions@sundayagtech.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-green-300">Respuesta en 2 horas</span>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SundayAgTechSolutions;