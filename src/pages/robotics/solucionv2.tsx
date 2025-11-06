import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, Download, Eye, Settings, BarChart3, Zap, Award, Users, Calendar, Mail, Phone, CheckCircle, Monitor, Cpu, Camera, Gauge, Star, TrendingUp, Shield, Wrench } from "lucide-react";
import { useState } from "react";

export default function SolutionPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedAdaptability, setSelectedAdaptability] = useState("media");
  const [selectedFinancing, setSelectedFinancing] = useState("venta");

  // Datos de ejemplo para la solución
  const solutionData = {
    title: "Sistema de Selección Automatizada de Flores",
    subtitle: "Clasificación inteligente con IA para optimizar calidad y eficiencia",
    description: "Solución completa de visión artificial que automatiza la clasificación de flores con 97.3% de precisión, procesando 200+ tallos por minuto.",
    trl: "TRL 7",
    status: "Comercialmente Disponible",
    applications: ["Floricultura", "Control de Calidad", "Exportación"],
    keyMetrics: {
      precision: "97.3%",
      speed: "200+ tallos/min",
      roi: "7.3 meses",
      efficiency: "4x mejora"
    }
  };

  const adaptabilityLevels = [
    {
      id: "cero",
      name: "Desde Cero",
      description: "Desarrollo completo personalizado",
      timeframe: "12-18 meses",
      complexity: "Alta",
      icon: Wrench,
      features: [
        "Diseño completamente personalizado",
        "Investigación y desarrollo dedicado",
        "Propiedad intelectual exclusiva",
        "Soporte técnico especializado"
      ],
      suitable: "Necesidades muy específicas que requieren desarrollo único"
    },
    {
      id: "baja",
      name: "Adaptabilidad Baja",
      description: "Solución estándar con configuración básica",
      timeframe: "2-4 semanas",
      complexity: "Baja",
      icon: Settings,
      features: [
        "Configuración de parámetros básicos",
        "Calibración para su ambiente",
        "Entrenamiento estándar",
        "Soporte de instalación"
      ],
      suitable: "Operaciones estándar con requerimientos típicos"
    },
    {
      id: "media",
      name: "Adaptabilidad Media",
      description: "Personalización moderada del sistema",
      timeframe: "6-12 semanas",
      complexity: "Media",
      icon: Cpu,
      features: [
        "Modificaciones de software específicas",
        "Integración con sistemas existentes",
        "Entrenamiento personalizado de IA",
        "Optimización de procesos"
      ],
      suitable: "Necesidades específicas con algunos requerimientos únicos"
    },
    {
      id: "alta",
      name: "Adaptabilidad Alta",
      description: "Solución altamente personalizada",
      timeframe: "3-6 meses",
      complexity: "Alta",
      icon: Zap,
      features: [
        "Desarrollo de módulos específicos",
        "Integración compleja multi-sistema",
        "IA entrenada con sus datos",
        "Interfaz personalizada"
      ],
      suitable: "Operaciones complejas con requerimientos únicos múltiples"
    }
  ];

  const financingOptions = [
    {
      id: "co-desarrollo",
      name: "Co-desarrollo",
      description: "Desarrollo conjunto con grants y alianzas estratégicas",
      icon: Users,
      benefits: [
        "Financiamiento compartido hasta 80%",
        "Acceso a grants MINCIENCIAS",
        "Alianzas con universidades",
        "Propiedad intelectual compartida",
        "Riesgo técnico compartido"
      ],
      bestFor: "Proyectos innovadores TRL 3-6 con potencial de escalamiento",
      investmentRange: "Variable según grants",
      timeframe: "12-36 meses"
    },
    {
      id: "venta",
      name: "Compra Directa",
      description: "Adquisición completa del sistema con financiamiento flexible",
      icon: Shield,
      benefits: [
        "Propiedad total del sistema",
        "Control completo de operación",
        "Sin dependencias futuras",
        "Garantía integral 2-5 años",
        "Soporte técnico incluido"
      ],
      bestFor: "Empresas establecidas con flujo de caja positivo",
      investmentRange: "$50K - $500K USD",
      timeframe: "2-12 semanas"
    },
    {
      id: "raas",
      name: "RaaS (Robot as a Service)",
      description: "Modelo de suscripción con pago por performance",
      icon: TrendingUp,
      benefits: [
        "Sin inversión inicial",
        "Pago basado en resultados medibles",
        "Mantenimiento 24/7 incluido",
        "Actualizaciones automáticas",
        "Escalabilidad flexible"
      ],
      bestFor: "Startups y empresas en crecimiento con operaciones variables",
      investmentRange: "$2K - $15K USD/mes",
      timeframe: "1-4 semanas"
    }
  ];

  const currentAdaptability = adaptabilityLevels.find(level => level.id === selectedAdaptability);
  const currentFinancing = financingOptions.find(option => option.id === selectedFinancing);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Breadcrumb */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="hover:text-primary cursor-pointer">Soluciones</span>
            <span>/</span>
            <span className="hover:text-primary cursor-pointer">Agricultura</span>
            <span>/</span>
            <span className="text-foreground">Selección de Flores</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Status Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-400/20 text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {solutionData.status}
                </div>
                <div className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
                  {solutionData.trl}
                </div>
                {solutionData.applications.map((app, index) => (
                  <div key={index} className="px-3 py-1.5 rounded-full bg-white/10 text-muted-foreground text-sm">
                    {app}
                  </div>
                ))}
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="text-foreground">{solutionData.title.split(' ').slice(0, 2).join(' ')}</span><br/>
                  <span className="text-gradient clash-grotesk">{solutionData.title.split(' ').slice(2).join(' ')}</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {solutionData.description}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group bg-primary hover:bg-primary/90">
                  Solicitar Evaluación
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <Play className="mr-2 h-4 w-4" />
                  Ver Demo
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6">
              {Object.entries(solutionData.keyMetrics).map(([key, value], index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-colors">
                  <div className="text-3xl font-bold text-gradient mb-2">{value}</div>
                  <div className="text-sm text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-8 overflow-x-auto">
            {[
              { id: "overview", label: "Descripción" },
              { id: "adaptability", label: "Adaptabilidad" },
              { id: "financing", label: "Financiación" },
              { id: "specs", label: "Especificaciones" },
              { id: "contact", label: "Contacto" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'border-primary text-primary' 
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* Overview Section */}
        {activeTab === "overview" && (
          <div className="space-y-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-8">¿Qué hace esta solución?</h2>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Nuestro sistema de selección automatizada utiliza visión artificial avanzada y algoritmos de aprendizaje profundo para clasificar flores con precisión superior al 97%. 
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    El sistema procesa más de 200 tallos por minuto, identificando automáticamente defectos, clasificando por calidad y optimizando el flujo de trabajo en tiempo real.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Beneficios Clave:</h4>
                  <ul className="space-y-3">
                    {[
                      "Reducción del 83% en mano de obra",
                      "Mejora del 300% en velocidad de procesamiento",
                      "97.3% de precisión en clasificación",
                      "ROI en menos de 8 meses"
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Video/Demo Section */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/5 border border-white/10">
              <div className="aspect-video flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Ver Sistema en Acción</h4>
                    <p className="text-muted-foreground">Demostración completa del proceso de selección</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Adaptability Section */}
        {activeTab === "adaptability" && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Nivel de Adaptabilidad</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Selecciona el nivel de personalización que mejor se adapte a tus necesidades específicas
              </p>
            </div>

            {/* Adaptability Selector */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {adaptabilityLevels.map((level) => {
                const Icon = level.icon;
                return (
                  <div
                    key={level.id}
                    onClick={() => setSelectedAdaptability(level.id)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      selectedAdaptability === level.id
                        ? 'bg-primary/10 border-primary/30 scale-105'
                        : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Icon className={`h-8 w-8 ${selectedAdaptability === level.id ? 'text-primary' : 'text-muted-foreground'}`} />
                        <div className={`text-sm px-2 py-1 rounded ${
                          level.complexity === 'Baja' ? 'bg-green-400/20 text-green-400' :
                          level.complexity === 'Media' ? 'bg-yellow-400/20 text-yellow-400' :
                          'bg-red-400/20 text-red-400'
                        }`}>
                          {level.complexity}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{level.name}</h4>
                        <p className="text-sm text-muted-foreground">{level.description}</p>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Tiempo: {level.timeframe}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Adaptability Details */}
            {currentAdaptability && (
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/10">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{currentAdaptability.name}</h3>
                    <p className="text-muted-foreground mb-6">{currentAdaptability.suitable}</p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Incluye:</h4>
                      <ul className="space-y-2">
                        {currentAdaptability.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">{currentAdaptability.timeframe}</div>
                        <div className="text-sm text-muted-foreground">Tiempo de Implementación</div>
                      </div>
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">{currentAdaptability.complexity}</div>
                        <div className="text-sm text-muted-foreground">Complejidad</div>
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      Solicitar Cotización para {currentAdaptability.name}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Financing Section */}
        {activeTab === "financing" && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Opciones de Financiación</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Elige el modelo de inversión que mejor se alinee con tu estrategia de negocio
              </p>
            </div>

            {/* Financing Options Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {financingOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div
                    key={option.id}
                    onClick={() => setSelectedFinancing(option.id)}
                    className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      selectedFinancing === option.id
                        ? 'bg-primary/10 border-primary/30 scale-105 shadow-lg shadow-primary/20'
                        : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05] hover:border-white/20'
                    }`}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg ${selectedFinancing === option.id ? 'bg-primary/20' : 'bg-white/10'}`}>
                          <Icon className={`h-6 w-6 ${selectedFinancing === option.id ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{option.name}</h3>
                          <p className="text-sm text-muted-foreground">{option.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {option.benefits.slice(0, 3).map((benefit, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                        {option.benefits.length > 3 && (
                          <div className="text-sm text-muted-foreground">
                            +{option.benefits.length - 3} beneficios más
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Inversión:</span>
                          <span className="font-medium">{option.investmentRange}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Tiempo:</span>
                          <span className="font-medium">{option.timeframe}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selected Financing Details */}
            {currentFinancing && (
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/10">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{currentFinancing.name}</h3>
                    <p className="text-muted-foreground mb-6">
                      <strong>Ideal para:</strong> {currentFinancing.bestFor}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">Todos los beneficios incluidos:</h4>
                      <ul className="space-y-2">
                        {currentFinancing.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="text-center p-6 bg-background/50 rounded-lg">
                        <div className="text-3xl font-bold text-gradient mb-2">{currentFinancing.investmentRange}</div>
                        <div className="text-sm text-muted-foreground">Rango de Inversión</div>
                      </div>
                      <div className="text-center p-4 bg-background/50 rounded-lg">
                        <div className="text-xl font-bold text-secondary">{currentFinancing.timeframe}</div>
                        <div className="text-sm text-muted-foreground">Tiempo de Implementación</div>
                      </div>
                    </div>
                    
                    <Button className="w-full">
                      Solicitar {currentFinancing.name}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Specifications Section */}
        {activeTab === "specs" && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Especificaciones Técnicas</h2>
              <p className="text-xl text-muted-foreground">
                Detalles técnicos completos del sistema
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Camera className="h-5 w-5 text-primary" />
                    Sistema de Visión
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: "Cámaras", value: "4 × 2048×1536px" },
                      { label: "Procesamiento IA", value: "NVIDIA Jetson Xavier NX" },
                      { label: "Dataset", value: "50,000+ imágenes" },
                      { label: "Precisión", value: "97.3% ± 2%" }
                    ].map((spec, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Gauge className="h-5 w-5 text-primary" />
                    Rendimiento
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: "Velocidad", value: "200+ tallos/minuto" },
                      { label: "Capacidad diaria", value: "28,800 tallos/8hrs" },
                      { label: "Estaciones", value: "12 unidades" },
                      { label: "Uptime", value: "99.7%" }
                    ].map((spec, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Configuración
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: "Dimensiones", value: "3.2m × 1.8m × 2.1m" },
                      { label: "Peso", value: "1,250 kg" },
                      { label: "Energía", value: "220V/380V, 15kW" },
                      { label: "Presión aire", value: "6 bar" },
                      { label: "Temperatura op.", value: "10-35°C" },
                      { label: "Humedad", value: "20-80% RH" }
                    ].map((spec, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <Monitor className="h-5 w-5 text-primary" />
                    Software y Control
                  </h4>
                  <div className="space-y-3">
                    {[
                      { label: "Interface", value: "Web App Responsive" },
                      { label: "Dashboard", value: "Tiempo Real" },
                      { label: "Reportes", value: "Automáticos PDF/Excel" },
                      { label: "Integración", value: "API REST / OPC-UA" },
                      { label: "Base de datos", value: "PostgreSQL" },
                      { label: "Backup", value: "Automático diario" }
                    ].map((spec, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Technical Features */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Características Adicionales</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Star,
                    title: "Multi-Variedad",
                    description: "Capacidad de procesar 30+ variedades de flores sin reconfiguración"
                  },
                  {
                    icon: Shield,
                    title: "Seguridad Industrial",
                    description: "Certificación CE, paradas de emergencia, sensores de seguridad"
                  },
                  {
                    icon: BarChart3,
                    title: "Análisis Predictivo",
                    description: "Predicción de calidad y detección temprana de defectos"
                  },
                  {
                    icon: Wrench,
                    title: "Mantenimiento Fácil",
                    description: "Acceso modular, diagnóstico remoto, piezas estándar"
                  },
                  {
                    icon: Zap,
                    title: "Eficiencia Energética",
                    description: "Sistema optimizado con recuperación de energía"
                  },
                  {
                    icon: Users,
                    title: "Capacitación Incluida",
                    description: "Entrenamiento completo para operadores y técnicos"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === "contact" && (
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">¿Listo para Transformar tu Operación?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nuestro equipo de expertos está listo para ayudarte a implementar la solución perfecta para tu negocio
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                  <h3 className="text-2xl font-bold mb-6">Solicitar Información</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nombre</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Apellido</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                          placeholder="Tu apellido"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Corporativo</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                        placeholder="correo@empresa.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Empresa</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">¿Cuál es tu interés principal?</label>
                      <select className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors">
                        <option value="">Selecciona una opción</option>
                        <option value="demo">Ver una demostración</option>
                        <option value="quote">Solicitar cotización</option>
                        <option value="pilot">Proyecto piloto</option>
                        <option value="info">Información general</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensaje (Opcional)</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Cuéntanos más sobre tu proyecto..."
                      />
                    </div>
                    
                    <Button className="w-full" size="lg">
                      Enviar Solicitud
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Direct Contact */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/5 border border-white/10">
                  <h3 className="text-2xl font-bold mb-6">Contacto Directo</h3>
                  <div className="space-y-4">
                    <a href="tel:+573001234567" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Ventas</div>
                        <div className="text-sm text-muted-foreground">+57 300 123 4567</div>
                      </div>
                    </a>
                    
                    <a href="mailto:soluciones@robotica.co" className="flex items-center gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-sm text-muted-foreground">soluciones@robotica.co</div>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">Horario de Atención</div>
                        <div className="text-sm text-muted-foreground">Lun - Vie: 8:00 AM - 6:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Acciones Rápidas</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                      <Download className="h-5 w-5" />
                      <span>Descargar Brochure</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                      <Calendar className="h-5 w-5" />
                      <span>Agendar Demo</span>
                    </Button>
                  </div>
                </div>

                {/* FAQ */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Preguntas Frecuentes</h4>
                  <div className="space-y-3">
                    {[
                      {
                        q: "¿Cuánto tiempo toma la implementación?",
                        a: "Depende del nivel de adaptabilidad. Desde 2 semanas para configuración básica hasta 6 meses para soluciones altamente personalizadas."
                      },
                      {
                        q: "¿Ofrecen servicio post-venta?",
                        a: "Sí, incluimos soporte técnico 24/7, mantenimiento preventivo y actualizaciones de software durante toda la vida útil del sistema."
                      },
                      {
                        q: "¿Puedo ver el sistema funcionando antes de comprar?",
                        a: "Por supuesto. Ofrecemos demostraciones virtuales y presenciales, además de visitas a instalaciones de clientes de referencia."
                      }
                    ].map((faq, index) => (
                      <div key={index} className="p-4 rounded-lg bg-white/[0.02] border border-white/10">
                        <div className="font-medium mb-2">{faq.q}</div>
                        <div className="text-sm text-muted-foreground">{faq.a}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Transforma tu Operación de Flores Hoy
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a más de 50 empresas florícolas que ya están optimizando su producción con nuestra tecnología
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Comenzar Ahora
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="mr-2 h-4 w-4" />
              Hablar con un Experto
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}