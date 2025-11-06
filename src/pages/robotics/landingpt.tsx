// Sunday Robotics Landing Page – full React component
// TailwindCSS + shadcn/ui Button
// Includes hero, trust badges, ready solutions, gaps, no-capex programs, and footer contact.
// NOTE: Replace emoji preview paths with real video/asset paths as needed.

import {
    ArrowRight,
    Play,
    CheckCircle,
    Zap,
    Shield,
    TrendingUp,
    Users,
    Calendar,
    Wrench,
    Cpu,
    Settings,
    Award,
    BarChart3,
    Clock,
    DollarSign,
    Rocket,
    Target,
    AlertCircle,
    Lightbulb,
    Package,
    FlaskConical,
    Building2,
    Mail,
    Phone,
    Star,
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { useState, useEffect } from "react";
  
  export default function SundayRoboticsLanding() {
    // ----------------------------- DATA ----------------------------- //
    const robotVideos = [
      { name: "Sistema de Selección de Flores", preview: "🌻" },
      { name: "Cosechador de Fresas", preview: "🍓" },
      { name: "Empacador de Lechugas", preview: "🥬" },
      { name: "Clasificador de Tomates", preview: "🍅" },
      { name: "Podador de Viñedos", preview: "🍇" },
      { name: "Inspector de Calidad", preview: "🔍" },
    ];
  
    const readySolutions = [
      {
        id: "flower-selector",
        title: "Selección de Flores",
        subtitle: "Clasificación IA 97.3 % precisión",
        trl: "TRL 7 COL",
        origin: "🇨🇴",
        usStatus: "60 % Localized",
        adaptability: "baja",
        roi: "7.3 meses",
        speed: "200 + tallos/min",
        price: "$180 K",
        raas: "$5.2 K/mes",
        icon: "🌻",
        benefits: [
          "Reducción 83 % mano de obra",
          "4× velocidad",
          "NSF certified",
        ],
      },
      {
        id: "strawberry-harvester",
        title: "Cosechador de Fresas",
        subtitle: "Brazo robótico con visión 3D",
        trl: "TRL 7 COL",
        origin: "🇨🇴",
        usStatus: "40 % Localized",
        adaptability: "media",
        roi: "11 meses",
        speed: "120 fresas/min",
        price: "$240 K",
        raas: "$7.8 K/mes",
        icon: "🍓",
        benefits: [
          "24/7 operación",
          "Zero daño fruta",
          "USDA approved",
        ],
      },
      // ...otras 4 soluciones omitidas por brevedad
    ];
  
    const painGaps = [
      {
        id: "pollination-drone",
        title: "Polinización Autónoma",
        sector: "Orchards",
        painSize: "$1.3 B/año",
        trl: "TRL 4",
        timeline: "Q4 2025",
        pledges: 23,
        pledgedAmount: "$2.8 M",
        deadline: "Jun 2025",
        impact: "crítico",
        whyUnsolved: "Coordinación swarm vs abejas naturales",
      },
      // …otros gaps
    ];
  
    const trustBadges = [
      { icon: Award, text: "TRL 7 Ready", subtext: "Field‑tested" },
      { icon: Building2, text: "NSF‑SBIR Partner", subtext: "Grant eligible" },
      { icon: Shield, text: "Made in USA Ops", subtext: "CKD Assembly GA" },
      { icon: Users, text: "50 + Deployments", subtext: "Proven ROI" },
    ];
  
    // -------------------------- STATE & EFFECTS --------------------- //
    const [activeVideo, setActiveVideo] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);
  
    useEffect(() => {
      const id = setInterval(() =>
        setActiveVideo((i) => (i + 1) % robotVideos.length),
        3200,
      );
      return () => clearInterval(id);
    }, []);
  
    // ----------------------------- JSX ------------------------------ //
    return (
      <div className="min-h-screen bg-background text-foreground font-sans">
        {/* ======================= HERO ======================= */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.12),transparent_55%)]" />
          </div>
  
          {/* Emoji video loop mock */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[60vh] opacity-20 select-none">
            <div className="relative h-full flex items-center justify-center">
              <div className="text-[180px] animate-pulse">
                {robotVideos[activeVideo].preview}
              </div>
              <div className="absolute bottom-4 left-4 text-sm text-muted-foreground">
                {robotVideos[activeVideo].name}
              </div>
            </div>
          </div>
  
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-24">
            {/* Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {trustBadges.map((b, i) => (
                <div key={i} className="flex items-center gap-2 px-3 py-1.5 backdrop-blur rounded-full bg-white/10 text-sm">
                  <b.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{b.text}</span>
                  <span className="text-muted-foreground">· {b.subtext}</span>
                </div>
              ))}
            </div>
  
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              Robótica&nbsp;<span className="text-primary">Agrícola</span>
              <br /> Lista para EE. UU.
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl">
              Seis robots TRL‑7 probados en Colombia, <strong>localizándose</strong> para el
              mercado estadounidense. Únete o co‑desarrolla la próxima solución.
            </p>
  
            {/* Segment buttons */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-xl">
              <Button onClick={() => document.getElementById("ready").scrollIntoView({ behavior: "smooth" })} className="flex-col gap-1 py-5">
                <Package className="h-5 w-5" /> Robots listos
              </Button>
              <Button variant="outline" onClick={() => document.getElementById("gaps").scrollIntoView({ behavior: "smooth" })} className="flex-col gap-1 py-5">
                <Lightbulb className="h-5 w-5" /> Dolores abiertos
              </Button>
              <Button variant="outline" onClick={() => document.getElementById("nocapex").scrollIntoView({ behavior: "smooth" })} className="flex-col gap-1 py-5">
                <DollarSign className="h-5 w-5" /> Sin CapEx
              </Button>
            </div>
          </div>
        </section>
  
        {/* ================= READY SOLUTIONS ================ */}
        <section id="ready" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Soluciones listas para instalar</h2>
  
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {readySolutions.map((s) => (
                <div
                  key={s.id}
                  onMouseEnter={() => setHoveredCard(s.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/40 transition group"
                >
                  {/* Badges */}
                  <div className="absolute top-3 right-3 flex gap-1">
                    <div className="px-2 py-0.5 rounded-full bg-green-400/20 text-green-300 text-[11px] font-semibold">Ready‑Now</div>
                    <div className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[11px] font-semibold">{s.trl}</div>
                  </div>
  
                  <div className="text-5xl mb-4 select-none">{s.icon}</div>
                  <h3 className="text-lg font-bold mb-1 flex items-center gap-1">
                    {s.title} <span>{s.origin}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.subtitle}</p>
  
                  <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                    <div>
                      <div className="text-muted-foreground">ROI</div>
                      <div className="font-semibold text-primary">{s.roi}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Velocidad</div>
                      <div className="font-semibold">{s.speed}</div>
                    </div>
                  </div>
  
                  <div className="border-t border-white/10 pt-3 text-sm mb-2">
                    <div className="flex justify-between"><span>CapEx</span><span>{s.price}</span></div>
                    <div className="flex justify-between"><span>RaaS</span><span>{s.raas}</span></div>
                  </div>
  
                  {/* Hover layer */}
                  {hoveredCard === s.id && (
                    <div className="absolute inset-0 bg-background/95 backdrop-blur rounded-2xl p-6 flex flex-col justify-between">
                      <div>
                        <h4 className="font-semibold mb-2">Beneficios clave</h4>
                        <ul className="space-y-2 text-sm">
                          {s.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-1"><CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />{b}</li>
                          ))}
                        </ul>
                      </div>
                      <Button className="w-full mt-6">Ver detalles <ArrowRight className="h-4 w-4 ml-1" /></Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* ================= GAP MAP ================= */}
        <section id="gaps" className="py-20 bg-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Dolores sin robot (co‑desarrollo)</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {painGaps.map((g) => (
                <div key={g.id} className="relative p-6 rounded-2xl border border-white/10 bg-background hover:border-primary/40 transition group">
                  <div className="flex justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold">{g.title}</h3>
                      <span className="text-xs text-muted-foreground">{g.sector}</span>
                    </div>
                    <div className="flex gap-1 text-xs">
                      <div className={`px-2 py-0.5 rounded-full ${g.impact === "crítico" ? "bg-red-500/20 text-red-300" : g.impact === "alto" ? "bg-yellow-400/20 text-yellow-300" : "bg-blue-400/20 text-blue-300"}`}>{g.impact}</div>
                      <div className="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-300">{g.trl}</div>
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-2">{g.painSize}</div>
                  <p className="text-xs text-muted-foreground mb-4">Costo anual del problema</p>
  
                  <div className="text-sm mb-4"><AlertCircle className="inline h-4 w-4 mr-1 text-yellow-400" /> {g.whyUnsolved}</div>
  
                  <div className="flex justify-between text-xs mb-3">
                    <span><Users className="inline h-4 w-4 mr-1" /> {g.pledges} empresas</span>
                    <span className="text-green-400">{g.pledgedAmount}</span>
                  </div>
                  <div className="flex justify-between text-xs mb-4">
                    <span><Clock className="inline h-4 w-4 mr-1" /> {g.timeline}</span>
                    <span className="text-orange-400"><Calendar className="inline h-4 w-4 mr-1" /> {g.deadline}</span>
                  </div>
  
                  <Button className="w-full opacity-0 group-hover:opacity-100 transition">Unirme al pool <ArrowRight className="ml-1 h-4 w-4" /></Button>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* ================= NO CAPEX ================= */}
        <section id="nocapex" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-10">Programas sin CapEx inicial</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* RaaS card */}
              <div className="p-8 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-6"><TrendingUp className="h-6 w-6 text-blue-400" /><h3 className="text-xl font-bold">RaaS</h3></div>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex gap-1"><CheckCircle className="h-4 w-4 text-green-400" />$0 upfront</li>
                  <li className="flex gap-1"><CheckCircle className="h-4 w-4 text-green-400" />Pago por uso</li>
                  <li className="flex gap-1"><CheckCircle className="h-4 w-4 text-green-400" />Mantenimiento incluido</li>
                </ul>
                <div className="text-2xl font-bold mb-6">$2k–15k/mes</div>
                <Button variant="outline" className="w-full">Calcular tarifa</Button>
              </div>
              {/* Grants */}
              <div className="p-8 rounded-2xl bg-green-500/10 border border-green-500/20">
                <div className="flex items-center gap-3 mb-6"><Award className="h-6 w-6 text-green-400" /><h3 className="text-xl font-bold">Grants USA</h3></div>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex gap-1"><CheckCircle className="h-4 w-4 text-green-400" />NSF SBIR Ph‑I/II</li>
                  <li className="flex gap-1"><CheckCircle className="h-4 w-4 text-green-400" />USDA NIFA</li>
                  <li className="flex gap-1"><CheckCircle className="h-4 w-4 text-green-400" />State incentives 25 %</li>
                </ul>
                <div className="text-2xl font-bold mb-6">hasta $2M</div>
                <Button variant="outline" className="w-full">Ver elegibilidad</Button>
              </div>
              {/* Co-dev */}
              <div className="p-8 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-6"><Users className="h-6 w-6 text-purple-400" /><h3 className="text-xl font-bold">Co‑desarrollo</h3></div>
                <ul className="space-y-2 text-sm mb-6">
                  <li className="flex gap-1"><CheckCircle className="h-4 w-4 text-green-400" />Costo compartido</li>
                  <li className="flex gap-1"><CheckCircle className="h-4 w-4 text-green-400" />IP compartida</li>
                  <li className="flex gap-1"><CheckCircle className="h-4 w-4 text-green-400" />Riesgo distribuido</li>
                </ul>
                <div className="text-2xl font-bold mb-6">ahorro 20‑80 %</div>
                <Button variant="outline" className="w-full">Explorar proyectos</Button>
              </div>
            </div>
          </div>
        </section>
  
        {/* ================= FOOTER / CTA ================= */}
        <section className="py-20 bg-background relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">¿Listo para automatizar?</h2>
            <p className="text-lg mb-8">Agenda una llamada o explora nuestro catálogo completo ahora mismo.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg">Ver catálogo <ArrowRight className="h-4 w-4 ml-1" /></Button>
              <Button size="lg" variant="outline">Agendar consulta</Button>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <a href="tel:+1234567890" className="flex items-center gap-1 hover:text-primary"><Phone className="h-4 w-4" />+1 (234) 567‑890</a>
              <a href="mailto:hello@sundayrobotics.com" className="flex items-center gap-1 hover:text-primary"><Mail className="h-4 w-4" />hello@sundayrobotics.com</a>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" />Respuesta &lt; 24 h</span>
            </div>
          </div>
        </section>
  
        {/* Floating FAB */}
        <div className="fixed bottom-8 right-8 z-50">
          <Button size="lg" className="rounded-full shadow shadow-primary/30"><Settings className="h-5 w-5 mr-1" />Configurador</Button>
        </div>
      </div>
    );
  }
  