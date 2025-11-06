import {
  ArrowRight,
  CheckCircle,
  Heart,
  Sprout,
  Zap,
  Shield,
  Users,
  Calendar,
  DollarSign,
  Clock,
  Mail,
  Phone,
  Award,
  TrendingUp,
  Target,
  Lightbulb,
  Package,
  Building2,
  Leaf,
  Sun,
  Droplets,
  Tractor,
  MessageCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SundayRoboticsLanding() {
  const [activeTab, setActiveTab] = useState("ready");
  
  const trustBadges = [
    { icon: Sprout, text: "Validado en campo", subtext: "2,800+ horas operativas" },
    { icon: Shield, text: "Riesgo compartido", subtext: "Reembolsable si no funciona" },
    { icon: Clock, text: "6-9 meses", subtext: "Evaluación a despliegue" },
    { icon: Users, text: "Co-propiedad IP", subtext: "Tú controlas tu solución" }
  ];

  const readySolutions = [
    {
      id: 1,
      name: "Robot Selector de Flores",
      icon: "🌻",
      status: "Desplegado en Colombia",
      description: "Clasificación automática con visión artificial. Precisión 97.3% en tallos de rosa, clavel y crisantemo.",
      specs: {
        throughput: "200+ tallos/min",
        accuracy: "97.3%",
        labor: "Reduce 83% mano de obra",
        roi: "7.3 meses"
      },
      usAdaptation: "60% localizado para mercado USA",
      pilot: "$50K (evaluación + 90 días)",
      raas: "$5,200/mes",
      purchase: "$180K"
    },
    {
      id: 2,
      name: "Cosechador de Fresas",
      icon: "🍓",
      status: "Operando 24/7",
      description: "Brazo robótico con visión 3D para cosecha delicada. Zero daño a fruta madura.",
      specs: {
        throughput: "120 fresas/min",
        damage: "<2% daño",
        uptime: "98.7% disponibilidad",
        roi: "11 meses"
      },
      usAdaptation: "40% localizado - certificaciones en proceso",
      pilot: "$50K (evaluación + 90 días)",
      raas: "$7,800/mes",
      purchase: "$240K"
    },
    {
      id: 3,
      name: "Sistema de Riego Inteligente",
      icon: "💧",
      status: "Invernaderos activos",
      description: "Control autónomo de riego con sensores de humedad de suelo y clima. Ahorra 40% agua.",
      specs: {
        savings: "40% reducción agua",
        coverage: "Hasta 5 hectáreas",
        sensors: "Red IoT incluida",
        roi: "5.2 meses"
      },
      usAdaptation: "85% localizado - listo para instalación",
      pilot: "$50K (evaluación + 90 días)",
      raas: "$3,500/mes",
      purchase: "$85K"
    }
  ];

  const coDevProjects = [
    {
      id: 1,
      title: "Polinización Autónoma",
      problem: "Crisis de abejas afecta cultivos de almendras, manzanas y berries",
      marketSize: "$1.3B/año pérdidas",
      stage: "Búsqueda de co-desarrolladores",
      investment: "$150K por participante",
      timeline: "18 meses a TRL 8",
      partners: "3 operaciones ya comprometidas",
      grant: "Elegible para NSF SBIR Fase II ($2M)"
    },
    {
      id: 2,
      title: "Clasificador de Calidad Cannabis",
      problem: "Inspección manual inconsistente, alto costo laboral",
      marketSize: "$850M/año costos inspección",
      stage: "Prototipo TRL 5",
      investment: "$100K por participante",
      timeline: "12 meses a TRL 7",
      partners: "2 cultivos listos para pilotar",
      grant: "Elegible para USDA NIFA"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-white opacity-60" />
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 text-8xl opacity-10 animate-pulse">🌱</div>
          <div className="absolute bottom-20 left-10 text-8xl opacity-10 animate-pulse delay-700">🍓</div>
          <div className="absolute top-40 left-1/3 text-6xl opacity-10 animate-pulse delay-1000">🌻</div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            {trustBadges.map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-sm border border-green-200/50">
                <badge.icon className="h-4 w-4 text-green-600" />
                <span className="font-semibold text-sm text-gray-800">{badge.text}</span>
                <span className="text-xs text-gray-600">· {badge.subtext}</span>
              </div>
            ))}
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-gray-900">
            La automatización agrícola<br />
            no debería costar<br />
            <span className="text-green-600">fortunas ni años.</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl leading-relaxed">
            Creemos que cada operación—desde invernaderos familiares hasta granjas regionales—merece acceso a robótica de clase mundial. Por eso construimos Sunday: para hacer la automatización <strong>alcanzable, no aspiracional.</strong>
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">
            Sistemas probados en campo. Desplegados en meses, no años. Riesgo compartido contigo. Porque construir confianza importa más que cerrar ventas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6">
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablemos con honestidad
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => document.getElementById('solutions').scrollIntoView({behavior: 'smooth'})}>
              Ver soluciones validadas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-1">60%</div>
              <div className="text-sm text-gray-600">Más accesible que sistemas legacy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-1">6-9</div>
              <div className="text-sm text-gray-600">Meses de evaluación a despliegue</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-1">$0</div>
              <div className="text-sm text-gray-600">Tu riesgo hasta que se pruebe</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== QUÉ HACEMOS ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Lo que hacemos (y lo que no)</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seremos honestos sobre qué podemos resolver y qué no. Porque tu tiempo vale más que nuestras comisiones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Lo que SÍ hacemos */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Soluciones validadas listas para instalar</h3>
                  <p className="text-gray-600">Sistemas que ya operan en campo real. Los adaptamos a tu operación específica en 6-9 meses.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Co-desarrollo de soluciones únicas</h3>
                  <p className="text-gray-600">Si tu desafío es único, lo ingeniamos juntos. Costos compartidos. IP compartida. Riesgo compartido.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 p-2 rounded-lg mt-1">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">Ayuda con financiamiento</h3>
                  <p className="text-gray-600">Co-aplicamos a grants federales (USDA, NSF) y estatales. Tu inversión puede ser 50-80% menor.</p>
                </div>
              </div>
            </div>

            {/* Lo que NO hacemos */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-lg mt-1">
                  <span className="text-2xl">✗</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-700">Automatización commodity</h3>
                  <p className="text-gray-600">Si tu necesidad la resuelve un proveedor estándar, te diremos quién y no cobraremos por eso.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-lg mt-1">
                  <span className="text-2xl">✗</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-700">Ventas sin validación</h3>
                  <p className="text-gray-600">No vendemos sistemas sin antes probar que funcionan en TU instalación. Evaluación primero, compromiso después.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-gray-100 p-2 rounded-lg mt-1">
                  <span className="text-2xl">✗</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-gray-700">Vendor lock-in</h3>
                  <p className="text-gray-600">No sistemas propietarios cerrados. Co-desarrollamos IP, tú tienes derechos de despliegue en tu sector.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CÓMO FUNCIONA ==================== */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Dos caminos. Misma garantía.</h2>
            <p className="text-xl text-gray-600">Elige según tu situación</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Path 1: Ready Solutions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-500">
              <div className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Más Común
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Soluciones Validadas</h3>
              <p className="text-gray-600 mb-6">Sistemas que ya funcionan, adaptados a tu operación</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded">
                    <span className="font-bold text-green-700">1</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Evaluación</div>
                    <div className="text-sm text-gray-600">$15K · 2 semanas</div>
                    <div className="text-sm text-gray-500 mt-1">Analizamos si nuestra solución se ajusta a tus necesidades específicas</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded">
                    <span className="font-bold text-green-700">2</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Piloto 90 días</div>
                    <div className="text-sm text-gray-600">$35K · Reembolsable</div>
                    <div className="text-sm text-gray-500 mt-1">Sistema completo en tu campo. Si no alcanza los objetivos acordados, te devolvemos esto.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded">
                    <span className="font-bold text-green-700">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Decisión</div>
                    <div className="text-sm text-gray-600">Fin del piloto</div>
                    <div className="text-sm text-gray-500 mt-1">Si funciona: RaaS o compra. Si no: reembolso de $35K.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded">
                    <span className="font-bold text-green-700">4</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Despliegue</div>
                    <div className="text-sm text-gray-600">RaaS desde $3.5K/mes o compra $85K-$240K</div>
                    <div className="text-sm text-gray-500 mt-1">Tú eliges el modelo que mejor se ajuste a tu flujo de caja</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <div className="font-semibold text-green-800 mb-2">Tu inversión total de riesgo</div>
                <div className="text-3xl font-bold text-green-700">$15K</div>
                <div className="text-sm text-gray-600 mt-1">Solo la evaluación es no-reembolsable</div>
              </div>
            </div>

            {/* Path 2: Co-Development */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-300">
              <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Desarrollo Custom
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Co-Desarrollo</h3>
              <p className="text-gray-600 mb-6">Construimos soluciones únicas para desafíos específicos</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded">
                    <span className="font-bold text-blue-700">1</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Descubrimiento & Diseño</div>
                    <div className="text-sm text-gray-600">$25K · 3 semanas</div>
                    <div className="text-sm text-gray-500 mt-1">Evaluación en sitio, diseño conceptual, modelo de ROI</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded">
                    <span className="font-bold text-blue-700">2</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Ingeniería & Prototipo</div>
                    <div className="text-sm text-gray-600">$75K · 12-16 semanas</div>
                    <div className="text-sm text-gray-500 mt-1">Prototipo funcional validado en laboratorio</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded">
                    <span className="font-bold text-blue-700">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Validación Campo</div>
                    <div className="text-sm text-gray-600">$50K · 90 días</div>
                    <div className="text-sm text-gray-500 mt-1">Testing en tu instalación. Ajustes hasta cumplir métricas</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded">
                    <span className="font-bold text-blue-700">4</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">Co-Aplicación Grants</div>
                    <div className="text-sm text-gray-600">$200K-$400K potencial</div>
                    <div className="text-sm text-gray-500 mt-1">Aplicamos juntos a fondos federales y estatales</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="font-semibold text-blue-800 mb-2">Inversión total</div>
                <div className="text-3xl font-bold text-blue-700">$150K</div>
                <div className="text-sm text-gray-600 mt-1">En etapas · Con salidas en cada fase · IP co-propiedad</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SOLUCIONES LISTAS ==================== */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Soluciones Validadas en Campo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistemas con miles de horas operativas. No son prototipos ni demos. Son robots trabajando en operaciones reales.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {readySolutions.map((solution) => (
              <div key={solution.id} className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-6xl">{solution.icon}</div>
                  <div className="text-xs bg-green-500 text-white px-3 py-1 rounded-full font-semibold">
                    En operación
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900">{solution.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{solution.description}</p>

                <div className="bg-white rounded-lg p-4 mb-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Capacidad</span>
                    <span className="font-semibold text-gray-900">{solution.specs.throughput}</span>
                  </div>
                  {solution.specs.accuracy && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Precisión</span>
                      <span className="font-semibold text-gray-900">{solution.specs.accuracy}</span>
                    </div>
                  )}
                  {solution.specs.damage && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Daño</span>
                      <span className="font-semibold text-green-600">{solution.specs.damage}</span>
                    </div>
                  )}
                  {solution.specs.savings && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Ahorro</span>
                      <span className="font-semibold text-green-600">{solution.specs.savings}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">ROI</span>
                    <span className="font-semibold text-green-600">{solution.specs.roi}</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <div className="text-xs text-blue-700 font-semibold mb-1">Adaptación USA</div>
                  <div className="text-sm text-gray-700">{solution.usAdaptation}</div>
                </div>

                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Piloto 90 días</span>
                    <span className="font-semibold">{solution.pilot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">RaaS</span>
                    <span className="font-semibold text-green-600">{solution.raas}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Compra</span>
                    <span className="font-semibold">{solution.purchase}</span>
                  </div>
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Ver detalles completos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CO-DESARROLLO ==================== */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Proyectos de Co-Desarrollo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desafíos agrícolas que aún no tienen solución robótica. Construyámosla juntos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coDevProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl p-8 border-2 border-blue-300 hover:border-blue-500 transition-all hover:shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  <div className="text-xs bg-orange-500 text-white px-3 py-1 rounded-full font-semibold whitespace-nowrap">
                    {project.stage}
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="text-sm text-red-700 font-semibold mb-1">El Problema</div>
                  <p className="text-gray-700">{project.problem}</p>
                  <div className="text-2xl font-bold text-red-600 mt-2">{project.marketSize}</div>
                  <div className="text-xs text-gray-600">Costo anual del problema</div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    <span className="text-sm"><strong>Inversión:</strong> {project.investment}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-sm"><strong>Timeline:</strong> {project.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-purple-600" />
                    <span className="text-sm">{project.partners}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-600" />
                    <span className="text-sm text-green-700"><strong>{project.grant}</strong></span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Unirme al proyecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINANCIAMIENTO ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Opciones de Financiamiento</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Múltiples caminos para que el costo no sea barrera
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-300">
              <TrendingUp className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">RaaS</h3>
              <p className="text-gray-600 mb-6">Robot como Servicio. Pago mensual, mantenimiento incluido.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">$0 inversión inicial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Pago solo por uso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Soporte 24/7 incluido</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-sm">Opción a compra</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-green-200 mb-6">
                <div className="text-sm text-gray-600 mb-1">Desde</div>
                <div className="text-3xl font-bold text-green-600">$3.5K</div>
                <div className="text-sm text-gray-600">por mes</div>
              </div>

              <Button variant="outline" className="w-full border-green-500 text-green-700 hover:bg-green-50">
                Calcular tu tarifa
              </Button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-300">
              <Award className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Grants USA</h3>
              <p className="text-gray-600 mb-6">Fondos federales y estatales para automatización agrícola.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">USDA NIFA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">NSF SBIR Fase I/II</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Incentivos estatales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">Co-aplicación incluida</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200 mb-6">
                <div className="text-sm text-gray-600 mb-1">Potencial</div>
                <div className="text-3xl font-bold text-blue-600">$200K-$2M</div>
                <div className="text-sm text-gray-600">en fondos</div>
              </div>

              <Button variant="outline" className="w-full border-blue-500 text-blue-700 hover:bg-blue-50">
                Ver elegibilidad
              </Button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border-2 border-purple-300">
              <Users className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Co-Desarrollo</h3>
              <p className="text-gray-600 mb-6">Compartimos costo, riesgo e IP de desarrollos custom.</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">Inversión compartida</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">Co-propiedad IP</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">Riesgo distribuido</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span className="text-sm">Grant leverage</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-purple-200 mb-6">
                <div className="text-sm text-gray-600 mb-1">Ahorro</div>
                <div className="text-3xl font-bold text-purple-600">20-80%</div>
                <div className="text-sm text-gray-600">vs. desarrollo solo</div>
              </div>

              <Button variant="outline" className="w-full border-purple-500 text-purple-700 hover:bg-purple-50">
                Ver proyectos activos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== POR QUÉ SUNDAY ==================== */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Por qué trabajar con Sunday</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No somos perfectos en todo. Pero construimos con valores diferentes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Honestidad primero</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Te diremos si no somos el ajuste correcto. Te referiremos a otros si tienen mejor solución. Porque construir confianza vale más que cerrar ventas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Riesgo compartido</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Solo ganamos si tú ganas. Pilotos reembolsables. Pagos escalonados. Salidas claras en cada fase. Tu éxito es nuestra única métrica.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-purple-600" />
                <h3 className="text-2xl font-bold text-gray-900">Accesibilidad real</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                60% más accesible que integradores legacy. No por recortar calidad, sino por optimización global y estructura lean. La automatización no debería ser lujo.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
                <h3 className="text-2xl font-bold text-gray-900">Velocidad sin sacrificios</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                6-9 meses vs. 18-24 de competencia. Porque usamos sistemas validados y red global de ingeniería. Rápido no significa descuidado.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 border-2 border-green-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Nuestra promesa</h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Si después de hablar contigo creemos que no podemos ayudarte genuinamente, te lo diremos—incluso si significa que no hagamos negocio. Tu operación merece la solución correcta, no solo nuestra solución.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIOS / PROOF ==================== */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Horas operativas. No horas de marketing.</h2>
            <p className="text-xl text-gray-600">Números reales de sistemas en campo</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">2,800+</div>
              <div className="text-gray-600">Horas operativas registradas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-600">Sistemas validados y listos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">98.7%</div>
              <div className="text-gray-600">Uptime en operaciones</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">$0</div>
              <div className="text-gray-600">Pérdidas por fallas críticas</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
            <div className="flex items-start gap-4">
              <div className="text-4xl">🌱</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-4">
                  "No confiábamos en que la automatización pudiera manejar nuestras flores sin dañarlas. Sunday instaló su sistema selector por 90 días. Los resultados hablaron solos: 97% de precisión, cero daño. Lo compramos al mes 4."
                </p>
                <div className="text-sm text-gray-600">
                  <strong>María González</strong> · Gerente de Operaciones · Cultivo de 15 hectáreas, Ecuador
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Preguntas frecuentes</h2>
            <p className="text-xl text-gray-600">Respuestas honestas a preguntas comunes</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-3 text-gray-900">¿Qué significa "reembolsable si no funciona"?</h3>
              <p className="text-gray-700 leading-relaxed">
                En el piloto de soluciones validadas, pagas $15K por evaluación (no reembolsable) y $35K por despliegue de 90 días. Si el sistema no alcanza las métricas de rendimiento acordadas previamente, te devolvemos los $35K. La evaluación cubre nuestro trabajo de análisis y se retiene.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-3 text-gray-900">¿Cómo están "validados" si no se han desplegado en USA?</h3>
              <p className="text-gray-700 leading-relaxed">
                Nuestros sistemas tienen 2,800+ horas operativas en instalaciones agrícolas reales con condiciones similares a operaciones estadounidenses. Validamos rendimiento técnico, confiabilidad y ROI antes de ofrecer sistemas a clientes USA. Tu piloto confirma el ajuste a TU operación específica.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-3 text-gray-900">¿Qué incluye el costo del piloto?</h3>
              <p className="text-gray-700 leading-relaxed">
                Todo: envío, aduana, instalación en sitio, entrenamiento de operadores, monitoreo remoto 90 días, soporte técnico, optimización de rendimiento. Sin costos ocultos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-3 text-gray-900">¿Podemos hacer co-desarrollo Y aplicar a grants?</h3>
              <p className="text-gray-700 leading-relaxed">
                Sí, ese es el modelo ideal. Tu inversión de $150K en co-desarrollo puede reducirse con $200K-$400K en fondos federales o estatales. Co-aplicamos contigo como socio tecnológico y manejamos el proceso de solicitud.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-3 text-gray-900">¿Quién es dueño del IP en co-desarrollo?</h3>
              <p className="text-gray-700 leading-relaxed">
                Co-propiedad: Tú obtienes derechos exclusivos de despliegue en tu vertical de industria. Nosotros podemos licenciar a sectores no competidores. Ambas partes se benefician de mejoras futuras. Tú controlas completamente tu despliegue operacional.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-3 text-gray-900">¿Qué pasa si no estamos seguros de qué camino tomar?</h3>
              <p className="text-gray-700 leading-relaxed">
                Empezamos con una llamada de descubrimiento. Evaluamos tu situación y recomendamos el mejor enfoque—ya sea solución validada, co-desarrollo custom, o solo servicios de asesoría. Sin obligación de proceder. Si no somos el ajuste correcto, te lo diremos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold mb-3 text-gray-900">¿Qué tamaño de operación tiene sentido?</h3>
              <p className="text-gray-700 leading-relaxed">
                La mayoría de clientes: ingresos anuales $1M+, cuellos de botella operacionales que cuestan $100K+/año. Si eres más pequeño pero tienes necesidad crítica de automatización, aún podemos ayudar mediante servicios de asesoría o caminos financiados con grants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-9xl">🌾</div>
          <div className="absolute bottom-10 left-10 text-9xl">🚜</div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Exploremos tu desafío juntos
          </h2>
          <p className="text-xl mb-12 opacity-95">
            Sin presión. Sin discurso de ventas. Solo una conversación honesta sobre si la automatización tiene sentido para tu operación—y si Sunday es el socio correcto para ayudar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100 text-lg px-8 py-6">
              <Mail className="mr-2 h-5 w-5" />
              hello@sundayrobotics.com
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Agendar llamada
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm opacity-90">
            <div className="flex items-center gap-2 justify-center">
              <Clock className="h-4 w-4" />
              <span>Respuesta en 24 horas</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Calendar className="h-4 w-4" />
              <span>Llamadas agendadas en 48 horas</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Heart className="h-4 w-4" />
              <span>Seremos honestos si no somos el ajuste</span>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm opacity-75">
              Capacidad limitada: 8 nuevos proyectos por trimestre
            </p>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">SUNDAY ROBOTICS</h3>
              <p className="text-sm leading-relaxed">
                Automatización agrícola. Construida con propósito.<br />
                Haciendo la robótica alcanzable, no aspiracional.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:hello@sundayrobotics.com" className="hover:text-green-400">
                    hello@sundayrobotics.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span>Wilmington, Delaware</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Operaciones</h4>
              <div className="space-y-2 text-sm">
                <p>Ingeniería: Red global</p>
                <p>Validación: Campo real</p>
                <p>Soporte: 24/7 remoto</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2025 Sunday Robotics LLC. Todos los derechos reservados.</p>
            <p className="mt-2 text-xs">
              Construido con honestidad · Alimentado por propósito
            </p>
          </div>
        </div>
      </footer>

      {/* FAB flotante */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button size="lg" className="rounded-full shadow-xl bg-green-600 hover:bg-green-700 px-6 py-6">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}