import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play, Download, Eye, Settings, BarChart3, Zap, Award, Users, Calendar, Mail, Phone, CheckCircle, ArrowRight, Monitor, Cpu, Camera, Gauge } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Home.module.css";

export default function FlowerSelection() {
  const refScrollContainer = useRef(null);
  const [activeTab, setActiveTab] = useState("resumen");
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState(0);

  useEffect(() => {
    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }
    void getLocomotive();
  }, []);

  const metricsData = [
    { label: "Velocidad de Procesamiento", value: "200+", unit: "tallos/min", change: "+300%", color: "text-blue-400" },
    { label: "Precisión de Clasificación", value: "97.3%", unit: "exactitud", change: "+29.7%", color: "text-green-400" },
    { label: "Reducción de Personal", value: "83%", unit: "mano de obra", change: "-5 operarios", color: "text-purple-400" },
    { label: "Tiempo de ROI", value: "7.3", unit: "meses", change: "720% 5 años", color: "text-yellow-400" }
  ];

  const techSpecs = [
    {
      category: "Sistema de Visión",
      icon: Camera,
      specs: [
        { label: "Cámaras", value: "4 × 2048×1536px", highlight: true },
        { label: "Procesamiento IA", value: "NVIDIA Jetson Xavier NX" },
        { label: "Dataset Entrenamiento", value: "50,000+ imágenes de flores" },
        { label: "Velocidad Detección", value: "Análisis en tiempo real" }
      ]
    },
    {
      category: "Rendimiento",
      icon: Gauge,
      specs: [
        { label: "Tasa de Procesamiento", value: "200+ tallos/minuto", highlight: true },
        { label: "Capacidad Diaria", value: "28,800 tallos/8hrs" },
        { label: "Estaciones de Clasificación", value: "12 unidades neumáticas" },
        { label: "Tasa de Precisión", value: "97.3% ± 2%" }
      ]
    },
    {
      category: "Configuración Sistema",
      icon: Settings,
      specs: [
        { label: "Dimensiones", value: "3.2m × 1.8m × 2.1m" },
        { label: "Peso", value: "1,250 kg operacional" },
        { label: "Energía", value: "220V/380V, 15kW", highlight: true },
        { label: "Presión Aire", value: "6 bar requeridos" }
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Compra",
      price: "$89,500",
      period: "pago único",
      description: "Propiedad completa con garantía total",
      features: [
        "Sistema completo con instalación",
        "Garantía integral de 2 años", 
        "Entrenamiento para 3 operarios",
        "6 meses de soporte dedicado",
        "Garantías de rendimiento"
      ],
      cta: "Comprar Ahora",
      popular: false,
      gradient: "from-blue-600/20 to-blue-800/20"
    },
    {
      name: "Leasing",
      price: "$2,850",
      period: "/mes",
      description: "Opción flexible de leasing a 36 meses",
      features: [
        "Instalación y configuración incluida",
        "Paquete completo de mantenimiento",
        "Ruta de actualización tecnológica",
        "Monitoreo de rendimiento",
        "Soporte técnico 24/7"
      ],
      cta: "Iniciar Leasing",
      popular: true,
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      name: "Programa Piloto",
      price: "$8,500",
      period: "/mes",
      description: "Programa de validación de 3 meses",
      features: [
        "Instalación completa del sistema",
        "Pruebas de validación de rendimiento",
        "Documentación de ROI",
        "Crédito aplicado a compra",
        "Evaluación libre de riesgo"
      ],
      cta: "Iniciar Piloto",
      popular: false,
      gradient: "from-green-600/20 to-green-800/20"
    }
  ];

  return (
    <>
      <Head>
        <title>Sistema de Selección Automatizada de Flores - IA Agrícola Avanzada</title>
        <meta name="description" content="Sistema revolucionario de selección de flores potenciado por IA con 97.3% de precisión, procesamiento de 200+ tallos/minuto, y ROI de 7.3 meses" />
      </Head>

      <Container>
        <div ref={refScrollContainer}>
          
          {/* Sección Hero - Pantalla Tecnológica Inmersiva */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Fondo de Cuadrícula Animada */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Contenido Izquierdo */}
                <div className="space-y-8">
                  {/* Píldoras Tecnológicas */}
                  <div className="flex flex-wrap gap-3">
                    {["Visión IA", "Deep Learning", "IoT Industrial"].map((tech, i) => (
                      <div key={tech} className={`pill ${i === 1 ? 'bg-primary/20 text-primary border-primary/30' : ''}`}>
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Título Principal */}
                  <div className="space-y-4">
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                      <span className="text-foreground">Sistema de</span><br/>
                      <span className="text-gradient clash-grotesk">Selección</span><br/>
                      <span className="text-foreground">Automatizada</span><br/>
                      <span className="text-gradient clash-grotesk">de Flores</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                      Sistema revolucionario de visión potenciado por IA que procesa <span className="text-primary font-semibold">200+ tallos por minuto</span> con <span className="text-green-400 font-semibold">97.3% de precisión</span>. CNN de aprendizaje profundo entrenada con 50,000+ imágenes de flores.
                    </p>
                  </div>

                  {/* Botones de Acción */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group bg-primary hover:bg-primary/90">
                      Solicitar Programa Piloto
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="group">
                      <Play className="mr-2 h-4 w-4" />
                      Ver Video Demo
                    </Button>
                  </div>

                  {/* Métricas en Vivo */}
                  
                </div>

                {/* Contenido Derecho - Vista Previa 3D Interactiva */}
                <div className="relative">
                  <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/5 rounded-3xl border border-white/10 overflow-hidden">
                    {/* Placeholder de Video/Vista 3D */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                          <Play className="h-12 w-12 text-primary" />
                        </div>
                        <p className="text-muted-foreground">Vista Previa 3D Interactiva del Sistema</p>
                        <Button variant="outline" size="sm">
                          Lanzar Vista 3D
                        </Button>
                      </div>
                    </div>
                    
                    {/* Métricas Flotantes */}
                    <div className="absolute top-4 right-4 p-3 bg-background/80 backdrop-blur rounded-lg border border-white/20">
                      <div className="text-xs text-muted-foreground">Tiempo real</div>
                      <div className="text-lg font-bold text-green-400">97.3%</div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 p-3 bg-background/80 backdrop-blur rounded-lg border border-white/20">
                      <div className="text-xs text-muted-foreground">Procesando</div>
                      <div className="text-lg font-bold text-blue-400">247/min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Panel de Métricas Interactivo */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                  Métricas de <span className="text-gradient">Rendimiento</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Datos de rendimiento del mundo real de 18+ meses de operaciones comerciales
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {metricsData.map((metric, index) => (
                  <div 
                    key={index}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      selectedMetric === index 
                        ? 'bg-primary/10 border-primary/30 scale-105' 
                        : 'bg-white/[0.02] border-white/10 hover:bg-white/[0.05]'
                    }`}
                    onClick={() => setSelectedMetric(index)}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className={`text-3xl font-bold ${metric.color}`}>
                          {metric.value}
                        </div>
                        <div className="text-sm text-green-400 font-medium">
                          {metric.change}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.unit}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Vista Detallada de Métrica */}
              <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-white/10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Análisis de {metricsData[selectedMetric].label}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Procesamiento Manual: 50 tallos/minuto promedio</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Sistema Automatizado: 200+ tallos/minuto consistente</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Mejora: 4x aumento de velocidad con mayor precisión</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-64 bg-white/[0.02] rounded-lg flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Visualización de Gráfico Interactivo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Especificaciones Técnicas - Diseño Avanzado */}
          <section className="py-20 bg-gradient-to-b from-background to-background/50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Excelencia Técnica</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  Arquitectura de <span className="text-gradient">Grado Empresarial</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Confiabilidad industrial combinada con tecnología de IA de vanguardia
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {techSpecs.map((category, index) => (
                  <div key={index} className="group">
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-primary/30 transition-all duration-300 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-lg bg-primary/20">
                          <category.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{category.category}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {category.specs.map((spec, specIndex) => (
                          <div key={specIndex} className={`flex justify-between items-center p-3 rounded-lg ${spec.highlight ? 'bg-primary/10 border border-primary/20' : 'bg-white/[0.02]'}`}>
                            <span className="text-sm text-muted-foreground">{spec.label}</span>
                            <span className={`text-sm font-medium ${spec.highlight ? 'text-primary' : 'text-foreground'}`}>
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Diagrama de Integración */}
              <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-white/10">
                <h3 className="text-2xl font-bold text-center mb-8">Flujo de Integración del Sistema</h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {["Entrada Cruda", "Visión IA", "Clasificación", "Clasificación", "Salida de Calidad"].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="p-4 rounded-lg bg-background border border-white/20 text-center min-w-[120px]">
                        <div className="text-sm font-medium">{step}</div>
                      </div>
                      {index < 4 && <ArrowRight className="h-5 w-5 text-primary mx-4" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Precios - Diseño Premium */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Opciones de Inversión</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  <span className="text-gradient">Financiamiento</span> Flexible
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Elige el modelo de inversión que se alinee con tu estrategia de negocio
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`relative group ${tier.popular ? 'scale-105' : ''}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Más Popular
                      </div>
                    )}
                    
                    <div className={`p-8 rounded-2xl border transition-all duration-300 h-full bg-gradient-to-br ${tier.gradient} ${
                      tier.popular 
                        ? 'border-primary/50 shadow-lg shadow-primary/20' 
                        : 'border-white/10 hover:border-white/20'
                    }`}>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-gradient">{tier.price}</span>
                            <span className="text-muted-foreground">{tier.period}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                        </div>

                        <div className="space-y-3">
                          {tier.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3">
                              <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button 
                          className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                          variant={tier.popular ? "default" : "outline"}
                        >
                          {tier.cta}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Calculadora de ROI */}
              <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-green-600/10 to-green-800/10 border border-green-400/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">Calculadora de ROI</h3>
                  <p className="text-muted-foreground">Calcula tu retorno de inversión</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">$146,700</div>
                    <div className="text-sm text-muted-foreground">Beneficio Anual</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">7.3</div>
                    <div className="text-sm text-muted-foreground">Meses de Recuperación</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">720%</div>
                    <div className="text-sm text-muted-foreground">ROI a 5 Años</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Casos de Estudio y Resultados */}
          <section className="py-20 bg-gradient-to-b from-background/50 to-background">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Éxito Comprobado</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  <span className="text-gradient">Impacto</span> Real
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Resultados documentados de operaciones comerciales en toda Colombia
                </p>
              </div>

              {/* Cuadrícula de Métricas de Rendimiento */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { value: "29.7%", label: "Mejora en Precisión", detail: "75% → 97.3%" },
                  { value: "4x", label: "Aumento de Velocidad", detail: "50 → 200 tallos/min" },
                  { value: "83%", label: "Reducción de Personal", detail: "6 → 1 operario" },
                  { value: "$245K", label: "Ahorro Anual", detail: "Caso Tecondor" }
                ].map((metric, index) => (
                  <div key={index} className="text-center p-6 bg-white/[0.02] rounded-xl border border-white/10">
                    <div className="text-3xl font-bold text-gradient mb-2">{metric.value}</div>
                    <div className="text-sm text-foreground mb-1">{metric.label}</div>
                    <div className="text-xs text-muted-foreground">{metric.detail}</div>
                  </div>
                ))}
              </div>

              {/* Caso de Estudio Destacado */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="h-6 w-6 text-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">Caso de Estudio Destacado</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">Tecondor Colombia</h3>
                    <p className="text-muted-foreground mb-6">
                      Exportador premium de rosas que procesa 25M de tallos anualmente logró resultados 
                      extraordinarios con nuestro sistema de selección automatizada.
                    </p>

                    <blockquote className="text-lg italic mb-6 border-l-4 border-primary pl-4">
                      "El sistema de selección automatizada transformó nuestro control de calidad. Ahora 
                      cumplimos consistentemente con los estándares de exportación premium mientras reducimos 
                      nuestra dependencia laboral en un 80%."
                    </blockquote>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div>
                        <div className="font-semibold text-foreground">Juan Carlos Méndez</div>
                        <div>Gerente de Producción</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Grado de Calidad A", before: "78%", after: "96%", improvement: "+18%" },
                      { label: "Velocidad de Procesamiento", before: "50/min", after: "200/min", improvement: "4x" },
                      { label: "Rechazo en Exportación", before: "8%", after: "1.2%", improvement: "-6.8%" },
                      { label: "Ahorro Anual", before: "$0", after: "$245K", improvement: "Nuevo" }
                    ].map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                        <span className="text-sm font-medium">{metric.label}</span>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-muted-foreground">{metric.before}</span>
                          <ArrowRight className="h-4 w-4 text-primary" />
                          <span className="font-bold">{metric.after}</span>
                          <span className="text-green-400 font-medium">{metric.improvement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Solicitud de Programa Piloto - Formulario Interactivo */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Comenzar</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  Solicitar <span className="text-gradient">Programa Piloto</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Experimenta el rendimiento del sistema en tu instalación con nuestro programa piloto de 3 meses
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Formulario */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10">
                  <h3 className="text-xl font-bold mb-6">Aplicación para Programa Piloto</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Nombre de la Empresa</label>
                        <input type="text" className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Persona de Contacto</label>
                        <input type="text" className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
                        <input type="email" className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Teléfono</label>
                        <input type="tel" className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Volumen Anual de Flores</label>
                      <select className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors">
                        <option>Seleccionar rango de volumen</option>
                        <option>Menos de 1M tallos</option>
                        <option>1M - 5M tallos</option>
                        <option>5M - 20M tallos</option>
                        <option>Más de 20M tallos</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Desafíos Actuales</label>
                      <textarea rows={4} className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" placeholder="Describe tus desafíos actuales de control de calidad..."></textarea>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Enviar Solicitud de Piloto
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>

                {/* Beneficios del Programa Piloto */}
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Qué Incluye el Piloto
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Instalación completa del sistema en tu instalación",
                        "Período de validación de rendimiento de 3 meses",
                        "Documentación integral de ROI",
                        "Entrenamiento para tus operarios",
                        "Soporte técnico 24/7",
                        "Reportes de evaluación de rendimiento",
                        "Crédito de compra si decides adquirir"
                      ].map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-400/20">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-green-400" />
                      Garantía Libre de Riesgo
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Si el sistema no cumple con los objetivos de rendimiento durante el piloto, lo retiraremos sin costo alguno para ti.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Objetivo de Precisión:</span>
                        <span className="font-bold text-green-400">≥95%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Objetivo de Velocidad:</span>
                        <span className="font-bold text-green-400">≥180 tallos/min</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Cronograma de ROI:</span>
                        <span className="font-bold text-green-400">≤12 meses</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-400/20">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-400" />
                      Cronograma de Implementación
                    </h4>
                    <div className="space-y-3">
                      {[
                        { week: "Semana 1", task: "Preparación del sitio e instalación" },
                        { week: "Semana 2", task: "Calibración del sistema y pruebas" },
                        { week: "Semana 3-4", task: "Entrenamiento de operarios y validación" },
                        { week: "Mes 2-3", task: "Monitoreo de rendimiento y optimización" }
                      ].map((phase, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-400/20 flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="text-sm font-medium">{phase.week}</div>
                            <div className="text-xs text-muted-foreground">{phase.task}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Galería de Videos y Recursos */}
          <section className="py-20 bg-gradient-to-b from-background to-background/50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Medios y Recursos</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  Míralo en <span className="text-gradient">Acción</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Observa demostraciones en vivo y descarga documentación técnica
                </p>
              </div>

              {/* Cuadrícula de Videos */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: "Demo General del Sistema",
                    duration: "3:45",
                    thumbnail: "resumen-sistema",
                    description: "Recorrido completo del proceso de selección automatizada"
                  },
                  {
                    title: "Proceso de Instalación",
                    duration: "2:20",
                    thumbnail: "instalacion",
                    description: "Procedimiento paso a paso de instalación y configuración"
                  },
                  {
                    title: "Prueba de Rendimiento en Vivo",
                    duration: "5:12",
                    thumbnail: "rendimiento",
                    description: "Procesamiento en tiempo real en las instalaciones de Tecondor"
                  },
                  {
                    title: "Entrenamiento de Operarios",
                    duration: "8:30",
                    thumbnail: "entrenamiento",
                    description: "Descripción general del programa de entrenamiento integral"
                  },
                  {
                    title: "Guía de Mantenimiento",
                    duration: "4:15",
                    thumbnail: "mantenimiento",
                    description: "Procedimientos de mantenimiento diario y semanal"
                  },
                  {
                    title: "Análisis de ROI",
                    duration: "6:45",
                    thumbnail: "roi",
                    description: "Análisis detallado de costo-beneficio y casos de estudio"
                  }
                ].map((video, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/10 rounded-xl overflow-hidden border border-white/10 group-hover:border-primary/30 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                          <Play className="h-6 w-6 text-primary ml-1" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-2 py-1 rounded text-xs">
                        {video.duration}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                        <h4 className="font-semibold mb-1">{video.title}</h4>
                        <p className="text-xs text-muted-foreground">{video.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recursos de Descarga */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Especificaciones Técnicas",
                    format: "PDF",
                    size: "2.4 MB",
                    icon: Monitor,
                    description: "Documentación técnica completa"
                  },
                  {
                    title: "Guía de Instalación",
                    format: "PDF",
                    size: "1.8 MB",
                    icon: Settings,
                    description: "Instrucciones de configuración paso a paso"
                  },
                  {
                    title: "Calculadora de ROI",
                    format: "XLSX",
                    size: "450 KB",
                    icon: BarChart3,
                    description: "Herramienta de análisis de ROI personalizable"
                  },
                  {
                    title: "Casos de Estudio",
                    format: "PDF",
                    size: "3.2 MB",
                    icon: Award,
                    description: "Historias detalladas de éxito de clientes"
                  }
                ].map((resource, index) => (
                  <div key={index} className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-primary/20 transition-all duration-300 group cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <resource.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{resource.title}</h4>
                        <p className="text-xs text-muted-foreground mb-2">{resource.description}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{resource.format}</span>
                          <span>•</span>
                          <span>{resource.size}</span>
                        </div>
                      </div>
                      <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contacto y Soporte */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Soporte Experto</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  ¿Listo para <span className="text-gradient">Transformar</span> tu Operación?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Nuestros expertos técnicos están listos para discutir tus requerimientos específicos y diseñar una solución personalizada
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Opciones de Contacto */}
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-primary/20">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Programar una Llamada</h3>
                        <p className="text-sm text-muted-foreground">Habla con nuestros expertos técnicos</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Obtén consultoría personalizada sobre requerimientos del sistema, proyecciones de ROI y planificación de implementación.
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Calendar className="mr-2 h-4 w-4" />
                      Programar Consulta
                    </Button>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-400/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-green-400/20">
                        <Mail className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-bold">Consulta Técnica</h3>
                        <p className="text-sm text-muted-foreground">Obtén especificaciones detalladas</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Envía preguntas técnicas específicas y recibe documentación de ingeniería detallada.
                    </p>
                    <Button variant="outline" className="w-full border-green-400/30 hover:bg-green-400/10">
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar Consulta Técnica
                    </Button>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-400/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-blue-400/20">
                        <Eye className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold">Demo en Vivo</h3>
                        <p className="text-sm text-muted-foreground">Ve el sistema en acción</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Demostración virtual o presencial del sistema completo de selección de flores.
                    </p>
                    <Button variant="outline" className="w-full border-blue-400/30 hover:bg-blue-400/10">
                      <Play className="mr-2 h-4 w-4" />
                      Solicitar Demo
                    </Button>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-400/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-purple-400/20">
                        <Users className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-bold">Programa de Socios</h3>
                        <p className="text-sm text-muted-foreground">Descuentos por volumen disponibles</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Explora oportunidades de asociación para múltiples implementaciones de sistemas.
                    </p>
                    <Button variant="outline" className="w-full border-purple-400/30 hover:bg-purple-400/10">
                      <Users className="mr-2 h-4 w-4" />
                      Ser Nuestro Socio
                    </Button>
                  </div>
                </div>

                {/* Estadísticas Rápidas */}
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10">
                    <h4 className="font-bold mb-4">Tiempos de Respuesta</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Respuesta Inicial</span>
                        <span className="text-sm font-medium">&lt; 2 horas</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Revisión Técnica</span>
                        <span className="text-sm font-medium">&lt; 24 horas</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Entrega de Propuesta</span>
                        <span className="text-sm font-medium">&lt; 48 horas</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10">
                    <h4 className="font-bold mb-4">Métricas de Éxito</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Satisfacción del Cliente</span>
                        <span className="text-sm font-medium text-green-400">98.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Tiempo de Actividad del Sistema</span>
                        <span className="text-sm font-medium text-green-400">99.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Logro de ROI</span>
                        <span className="text-sm font-medium text-green-400">100%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                    <h4 className="font-bold mb-2">Soporte Prioritario Empresarial</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Soporte técnico 24/7 con ingenieros dedicados para clientes empresariales.
                    </p>
                    <Button size="sm" className="w-full">
                      Conoce Más
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Transforma tu <span className="text-gradient">Selección de Flores</span> Hoy
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Únete a los líderes de la industria que ya han revolucionado sus operaciones con automatización potenciada por IA
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  Iniciar Programa Piloto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar Especificaciones
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                Piloto libre de riesgo • Evaluación de 30 días • Garantía de rendimiento
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}