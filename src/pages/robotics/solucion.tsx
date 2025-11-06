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
      description: "Desarrollo conjunto con grants y alianzas",
      icon: Users,
      benefits: [
        "Financiamiento compartido",
        "Acceso a grants gubernamentales",
        "Alianzas estratégicas",
        "Propiedad intelectual compartida",
        "Riesgo reducido"
      ],
      bestFor: "Proyectos innovadores con potencial de escalamiento",
      investmentRange: "Variable según grants",
      timeframe: "12-24 meses"
    },
    {
      id: "venta",
      name: "Compra Directa",
      description: "Propiedad completa del sistema",
      icon: Shield,
      benefits: [
        "Propiedad total del sistema",
        "Control completo de operación",
        "Sin dependencias futuras",
        "Garantía integral",
        "Soporte técnico incluido"
      ],
      bestFor: "Empresas establecidas con capital disponible",
      investmentRange: "$50K - $200K",
      timeframe: "2-8 semanas"
    },
    {
      id: "raas",
      name: "RaaS (Robot as a Service)",
      description: "Pago por uso y resultados",
      icon: TrendingUp,
      benefits: [
        "Sin inversión inicial grande",
        "Pago basado en resultados",
        "Mantenimiento incluido",
        "Actualizaciones automáticas",
        "Escalabilidad flexible"
      ],
      bestFor: "Startups y empresas en crecimiento",
      investmentRange: "$2K - $8K/mes",
      timeframe: "1-2 semanas"
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
          <div className="space-y-12">
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
                      { label: "Presión aire", value: "6 bar" }
                    ].map((spec, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold mb-4">Recursos Disponibles</h4>
                  <div className="space-y-3">
                    {[
                      { name: "Manual Técnico", format: "PDF", size: "2.4 MB" },
                      { name: "Guía de Instalación", format: "PDF", size: "1.8 MB" },
                      { name: "Calculadora ROI", format: "XLSX", size: "450 KB" }
                    ].map((resource, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div>
                          <div className="font-medium text-sm">{resource.name}</div>
                          <div className="text-xs text-muted-foreground">{resource.format} • {resource.size}</div>
                        </div>
                        <Download className="h-4 w-4 text-primary cursor-pointer hover:text-primary/80" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeTab === "contact" && (
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
              <p className="text-xl text-muted-foreground">
                Nuestros expertos están listos para ayudarte a implementar esta solución
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-xl font-bold mb-6">Solicitar Información</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre</label>
                      <input 
                        type="text" 
                        className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Empresa</label>
                      <input 
                        type="text" 
                        className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" 
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono</label>
                      <input 
                        type="tel" 
                        className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Tipo de Consulta</label>
                    <select className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors">
                      <option>Información General</option>
                      <option>Cotización Personalizada</option>
                      <option>Demostración Técnica</option>
                      <option>Programa Piloto</option>
                      <option>Soporte Técnico</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Mensaje</label>
                    <textarea 
                      rows={4} 
                      className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" 
                      placeholder="Cuéntanos sobre tu proyecto y requerimientos específicos..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Enviar Consulta
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Contact Options */}
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold">Consulta Directa</h4>
                      <p className="text-sm text-muted-foreground">Habla con nuestros expertos</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Obtén asesoría personalizada sobre implementación, ROI y configuración técnica.
                  </p>
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Agendar Llamada
                  </Button>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-400/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-green-400/20">
                      <Eye className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold">Demo en Vivo</h4>
                      <p className="text-sm text-muted-foreground">Ve el sistema en acción</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Demostración virtual o presencial del sistema completo.
                  </p>
                  <Button variant="outline" className="w-full border-green-400/30 hover:bg-green-400/10">
                    <Play className="mr-2 h-4 w-4" />
                    Solicitar Demo
                  </Button>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-400/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-400/20">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold">Soporte Técnico</h4>
                      <p className="text-sm text-muted-foreground">Documentación y recursos</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Accede a manuales técnicos, guías de instalación y FAQ.
                  </p>
                  <Button variant="outline" className="w-full border-blue-400/30 hover:bg-blue-400/10">
                    <Download className="mr-2 h-4 w-4" />
                    Ver Recursos
                  </Button>
                </div>

                {/* Quick Stats */}
                <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10">
                  <h4 className="font-bold mb-4">Nuestro Compromiso</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Respuesta inicial</span>
                      <span className="font-medium text-green-400">&lt; 2 horas</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Propuesta técnica</span>
                      <span className="font-medium text-green-400">&lt; 48 horas</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Satisfacción cliente</span>
                      <span className="font-medium text-green-400">98.5%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related Solutions */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Soluciones Relacionadas</h2>
            <p className="text-muted-foreground">Otras tecnologías que podrían interesarte</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Clasificación de Frutas",
                description: "Sistema de visión para clasificación automática de frutas por calidad",
                category: "Agricultura",
                trl: "TRL 6",
                image: "🍎"
              },
              {
                title: "Control de Calidad Industrial",
                description: "Inspección automatizada para líneas de producción industrial",
                category: "Manufactura",
                trl: "TRL 8",
                image: "🔧"
              },
              {
                title: "Monitoreo de Cultivos",
                description: "Drones autónomos para monitoreo y análisis de cultivos",
                category: "Agricultura",
                trl: "TRL 5",
                image: "🚁"
              }
            ].map((solution, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300 cursor-pointer">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-3xl">{solution.image}</div>
                    <div className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                      {solution.trl}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">{solution.category}</div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-muted-foreground">Ver detalles</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para <span className="text-gradient">Transformar</span> tu Operación?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya han optimizado sus procesos con esta solución
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Solicitar Evaluación Gratuita
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-5 w-5" />
              Descargar Brochure
            </Button>
          </div>

          <div className="mt-6 text-sm text-muted-foreground">
            Evaluación gratuita • Sin compromiso • Respuesta en 24h
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full shadow-lg bg-primary hover:bg-primary/90">
          <Phone className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}