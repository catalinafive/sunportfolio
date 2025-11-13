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
    { label: "Processing Speed", value: "200+", unit: "stems/min", change: "+300%", color: "text-blue-400" },
    { label: "Classification Accuracy", value: "97.3%", unit: "accuracy", change: "+29.7%", color: "text-green-400" },
    { label: "Labor Reduction", value: "83%", unit: "workforce", change: "-5 operators", color: "text-purple-400" },
    { label: "ROI Time", value: "7.3", unit: "months", change: "720% 5 years", color: "text-yellow-400" }
  ];

  const techSpecs = [
    {
      category: "Vision System",
      icon: Camera,
      specs: [
        { label: "Cameras", value: "4 × 2048×1536px", highlight: true },
        { label: "AI Processing", value: "NVIDIA Jetson Xavier NX" },
        { label: "Training Dataset", value: "50,000+ flower images" },
        { label: "Detection Speed", value: "Real-time analysis" }
      ]
    },
    {
      category: "Performance",
      icon: Gauge,
      specs: [
        { label: "Processing Rate", value: "200+ stems/minute", highlight: true },
        { label: "Daily Capacity", value: "28,800 stems/8hrs" },
        { label: "Classification Stations", value: "12 pneumatic units" },
        { label: "Accuracy Rate", value: "97.3% ± 2%" }
      ]
    },
    {
      category: "System Configuration",
      icon: Settings,
      specs: [
        { label: "Dimensions", value: "3.2m × 1.8m × 2.1m" },
        { label: "Weight", value: "1,250 kg operational" },
        { label: "Power", value: "220V/380V, 15kW", highlight: true },
        { label: "Air Pressure", value: "6 bar required" }
      ]
    }
  ];

  const pricingTiers = [
    {
      name: "Purchase",
      price: "$89,500",
      period: "one-time payment",
      description: "Full ownership with total warranty",
      features: [
        "Complete system with installation",
        "2-year comprehensive warranty", 
        "Training for 3 operators",
        "6 months of dedicated support",
        "Performance guarantees"
      ],
      cta: "Buy Now",
      popular: false,
      gradient: "from-blue-600/20 to-blue-800/20"
    },
    {
      name: "Leasing",
      price: "$2,850",
      period: "/month",
      description: "Flexible leasing option for 36 months",
      features: [
        "Installation and configuration included",
        "Complete maintenance package",
        "Technology upgrade path",
        "Performance monitoring",
        "24/7 technical support"
      ],
      cta: "Start Leasing",
      popular: true,
      gradient: "from-primary/20 to-secondary/20"
    },
    {
      name: "Pilot Program",
      price: "$8,500",
      period: "/month",
      description: "3-month validation program",
      features: [
        "Complete system installation",
        "Performance validation testing",
        "ROI documentation",
        "Credit applied to purchase",
        "Risk-free evaluation"
      ],
      cta: "Start Pilot",
      popular: false,
      gradient: "from-green-600/20 to-green-800/20"
    }
  ];

  return (
    <>
      <Head>
        <title>Automated Flower Selection System - Advanced Agricultural AI</title>
        <meta name="description" content="Revolutionary AI-powered flower selection system with 97.3% accuracy, processing 200+ stems/minute, and 7.3 month ROI" />
      </Head>

      <Container>
        <div ref={refScrollContainer}>
          
          {/* Hero Section - Immersive Technology Screen */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <div className="space-y-8">
                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-3">
                    {["AI Vision", "Deep Learning", "Industrial IoT"].map((tech, i) => (
                      <div key={tech} className={`pill ${i === 1 ? 'bg-primary/20 text-primary border-primary/30' : ''}`}>
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Main Title */}
                  <div className="space-y-4">
                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                      <span className="text-foreground">Automated</span><br/>
                      <span className="text-gradient clash-grotesk">Flower</span><br/>
                      <span className="text-foreground">Selection</span><br/>
                      <span className="text-gradient clash-grotesk">System</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                      Revolutionary AI-powered vision system that processes <span className="text-primary font-semibold">200+ stems per minute</span> with <span className="text-green-400 font-semibold">97.3% accuracy</span>. Deep learning CNN trained with 50,000+ flower images.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="group bg-primary hover:bg-primary/90">
                      Request Pilot Program
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button size="lg" variant="outline" className="group">
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo Video
                    </Button>
                  </div>

                  {/* Live Metrics */}
                  
                </div>

                {/* Right Content - Interactive 3D Preview */}
                <div className="relative">
                  <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-secondary/5 rounded-3xl border border-white/10 overflow-hidden">
                    {/* Video/3D View Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                          <Play className="h-12 w-12 text-primary" />
                        </div>
                        <p className="text-muted-foreground">Interactive 3D System Preview</p>
                        <Button variant="outline" size="sm">
                          Launch 3D View
                        </Button>
                      </div>
                    </div>
                    
                    {/* Floating Metrics */}
                    <div className="absolute top-4 right-4 p-3 bg-background/80 backdrop-blur rounded-lg border border-white/20">
                      <div className="text-xs text-muted-foreground">Real time</div>
                      <div className="text-lg font-bold text-green-400">97.3%</div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 p-3 bg-background/80 backdrop-blur rounded-lg border border-white/20">
                      <div className="text-xs text-muted-foreground">Processing</div>
                      <div className="text-lg font-bold text-blue-400">247/min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Metrics Panel */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">
                  Performance <span className="text-gradient">Metrics</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Real-world performance data from 18+ months of commercial operations
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

              {/* Metric Detail View */}
              <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-white/10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Analysis of {metricsData[selectedMetric].label}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Manual Processing: 50 stems/minute average</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Automated System: 200+ stems/minute consistent</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Improvement: 4x speed increase with higher accuracy</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-64 bg-white/[0.02] rounded-lg flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                      <p className="text-muted-foreground">Interactive Chart Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Specifications - Advanced Design */}
          <section className="py-20 bg-gradient-to-b from-background to-background/50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Technical Excellence</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  Enterprise Grade <span className="text-gradient">Architecture</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Industrial reliability combined with cutting-edge AI technology
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

              {/* System Integration Diagram */}
              <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-white/10">
                <h3 className="text-2xl font-bold text-center mb-8">System Integration Flow</h3>
                <div className="flex flex-wrap justify-center items-center gap-8">
                  {["Raw Input", "AI Vision", "Classification", "Sorting", "Quality Output"].map((step, index) => (
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

          {/* Pricing - Premium Design */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Investment Options</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  Flexible <span className="text-gradient">Financing</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Choose the investment model that aligns with your business strategy
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <div key={index} className={`relative group ${tier.popular ? 'scale-105' : ''}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
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

              {/* ROI Calculator */}
              <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-green-600/10 to-green-800/10 border border-green-400/20">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">ROI Calculator</h3>
                  <p className="text-muted-foreground">Calculate your return on investment</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">$146,700</div>
                    <div className="text-sm text-muted-foreground">Annual Profit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">7.3</div>
                    <div className="text-sm text-muted-foreground">Months Payback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">720%</div>
                    <div className="text-sm text-muted-foreground">5-Year ROI</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies and Results */}
          <section className="py-20 bg-gradient-to-b from-background/50 to-background">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Proven Success</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  Real <span className="text-gradient">Impact</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Documented results from commercial operations across Colombia
                </p>
              </div>

              {/* Performance Metrics Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { value: "29.7%", label: "Accuracy Improvement", detail: "75% → 97.3%" },
                  { value: "4x", label: "Speed Increase", detail: "50 → 200 stems/min" },
                  { value: "83%", label: "Labor Reduction", detail: "6 → 1 operator" },
                  { value: "$245K", label: "Annual Savings", detail: "Tecondor Case" }
                ].map((metric, index) => (
                  <div key={index} className="text-center p-6 bg-white/[0.02] rounded-xl border border-white/10">
                    <div className="text-3xl font-bold text-gradient mb-2">{metric.value}</div>
                    <div className="text-sm text-foreground mb-1">{metric.label}</div>
                    <div className="text-xs text-muted-foreground">{metric.detail}</div>
                  </div>
                ))}
              </div>

              {/* Featured Case Study */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-white/10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <Award className="h-6 w-6 text-yellow-400" />
                      <span className="text-sm font-semibold text-yellow-400 uppercase tracking-wide">Featured Case Study</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">Tecondor Colombia</h3>
                    <p className="text-muted-foreground mb-6">
                      Premium rose exporter processing 25M stems annually achieved extraordinary results with our automated selection system.
                    </p>

                    <blockquote className="text-lg italic mb-6 border-l-4 border-primary pl-4">
                      "The automated selection system transformed our quality control. We now consistently meet premium export standards while reducing our labor dependency by 80%."
                    </blockquote>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div>
                        <div className="font-semibold text-foreground">Juan Carlos Méndez</div>
                        <div>Production Manager</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Grade A Quality", before: "78%", after: "96%", improvement: "+18%" },
                      { label: "Processing Speed", before: "50/min", after: "200/min", improvement: "4x" },
                      { label: "Export Rejection", before: "8%", after: "1.2%", improvement: "-6.8%" },
                      { label: "Annual Savings", before: "$0", after: "$245K", improvement: "New" }
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

          {/* Pilot Program Request - Interactive Form */}
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Get Started</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  Request <span className="text-gradient">Pilot Program</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Experience system performance in your facility with our 3-month pilot program
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10">
                  <h3 className="text-xl font-bold mb-6">Pilot Program Application</h3>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company Name</label>
                        <input type="text" className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Contact Person</label>
                        <input type="text" className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input type="email" className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input type="tel" className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Annual Flower Volume</label>
                      <select className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors">
                        <option>Select volume range</option>
                        <option>Less than 1M stems</option>
                        <option>1M - 5M stems</option>
                        <option>5M - 20M stems</option>
                        <option>More than 20M stems</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Current Challenges</label>
                      <textarea rows={4} className="w-full p-3 rounded-lg bg-background border border-white/20 focus:border-primary focus:outline-none transition-colors" placeholder="Describe your current quality control challenges..."></textarea>
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Submit Pilot Request
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>

                {/* Pilot Program Benefits */}
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      What the Pilot Includes
                    </h4>
                    <ul className="space-y-3">
                      {[
                        "Complete system installation at your facility",
                        "3-month performance validation period",
                        "Comprehensive ROI documentation",
                        "Training for your operators",
                        "24/7 technical support",
                        "Performance evaluation reports",
                        "Purchase credit if you decide to acquire"
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
                      Risk-Free Guarantee
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      If the system doesn't meet performance objectives during the pilot, we'll remove it at no cost to you.
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Accuracy Target:</span>
                        <span className="font-bold text-green-400">≥95%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Speed Target:</span>
                        <span className="font-bold text-green-400">≥180 stems/min</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>ROI Timeline:</span>
                        <span className="font-bold text-green-400">≤12 months</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-400/20">
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-blue-400" />
                      Implementation Timeline
                    </h4>
                    <div className="space-y-3">
                      {[
                        { week: "Week 1", task: "Site preparation and installation" },
                        { week: "Week 2", task: "System calibration and testing" },
                        { week: "Week 3-4", task: "Operator training and validation" },
                        { week: "Month 2-3", task: "Performance monitoring and optimization" }
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

          {/* Video Gallery and Resources */}
          <section className="py-20 bg-gradient-to-b from-background to-background/50">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Media & Resources</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  See It in <span className="text-gradient">Action</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Watch live demonstrations and download technical documentation
                </p>
              </div>

              {/* Video Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {[
                  {
                    title: "System Overview Demo",
                    duration: "3:45",
                    thumbnail: "system-overview",
                    description: "Complete tour of the automated selection process"
                  },
                  {
                    title: "Installation Process",
                    duration: "2:20",
                    thumbnail: "installation",
                    description: "Step-by-step installation and configuration procedure"
                  },
                  {
                    title: "Live Performance Test",
                    duration: "5:12",
                    thumbnail: "performance",
                    description: "Real-time processing at Tecondor facilities"
                  },
                  {
                    title: "Operator Training",
                    duration: "8:30",
                    thumbnail: "training",
                    description: "Overview of comprehensive training program"
                  },
                  {
                    title: "Maintenance Guide",
                    duration: "4:15",
                    thumbnail: "maintenance",
                    description: "Daily and weekly maintenance procedures"
                  },
                  {
                    title: "ROI Analysis",
                    duration: "6:45",
                    thumbnail: "roi",
                    description: "Detailed cost-benefit analysis and case studies"
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

              {/* Download Resources */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Technical Specifications",
                    format: "PDF",
                    size: "2.4 MB",
                    icon: Monitor,
                    description: "Complete technical documentation"
                  },
                  {
                    title: "Installation Guide",
                    format: "PDF",
                    size: "1.8 MB",
                    icon: Settings,
                    description: "Step-by-step configuration instructions"
                  },
                  {
                    title: "ROI Calculator",
                    format: "XLSX",
                    size: "450 KB",
                    icon: BarChart3,
                    description: "Customizable ROI analysis tool"
                  },
                  {
                    title: "Case Studies",
                    format: "PDF",
                    size: "3.2 MB",
                    icon: Award,
                    description: "Detailed customer success stories"
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

          {/* Contact and Support */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">Expert Support</span>
                <h2 className="text-4xl font-bold mt-4 mb-6">
                  Ready to <span className="text-gradient">Transform</span> Your Operation?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Our technical experts are ready to discuss your specific requirements and design a customized solution
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Options */}
                <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-primary/20">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold">Schedule a Call</h3>
                        <p className="text-sm text-muted-foreground">Speak with our technical experts</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Get personalized consultation on system requirements, ROI projections, and implementation planning.
                    </p>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Consultation
                    </Button>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-green-600/10 to-green-800/10 border border-green-400/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-green-400/20">
                        <Mail className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="font-bold">Technical Inquiry</h3>
                        <p className="text-sm text-muted-foreground">Get detailed specifications</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Send specific technical questions and receive detailed engineering documentation.
                    </p>
                    <Button variant="outline" className="w-full border-green-400/30 hover:bg-green-400/10">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Technical Inquiry
                    </Button>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/10 to-blue-800/10 border border-blue-400/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-blue-400/20">
                        <Eye className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold">Live Demo</h3>
                        <p className="text-sm text-muted-foreground">See the system in action</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Virtual or in-person demonstration of the complete flower selection system.
                    </p>
                    <Button variant="outline" className="w-full border-blue-400/30 hover:bg-blue-400/10">
                      <Play className="mr-2 h-4 w-4" />
                      Request Demo
                    </Button>
                  </div>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/10 to-purple-800/10 border border-purple-400/20">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-purple-400/20">
                        <Users className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="font-bold">Partner Program</h3>
                        <p className="text-sm text-muted-foreground">Volume discounts available</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">
                      Explore partnership opportunities for multiple system implementations.
                    </p>
                    <Button variant="outline" className="w-full border-purple-400/30 hover:bg-purple-400/10">
                      <Users className="mr-2 h-4 w-4" />
                      Become Our Partner
                    </Button>
                  </div>
                </div>

                {/* Quick Statistics */}
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10">
                    <h4 className="font-bold mb-4">Response Times</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Initial Response</span>
                        <span className="text-sm font-medium">&lt; 2 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Technical Review</span>
                        <span className="text-sm font-medium">&lt; 24 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Proposal Delivery</span>
                        <span className="text-sm font-medium">&lt; 48 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10">
                    <h4 className="font-bold mb-4">Success Metrics</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">Customer Satisfaction</span>
                        <span className="text-sm font-medium text-green-400">98.5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">System Uptime</span>
                        <span className="text-sm font-medium text-green-400">99.7%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">ROI Achievement</span>
                        <span className="text-sm font-medium text-green-400">100%</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                    <h4 className="font-bold mb-2">Enterprise Priority Support</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      24/7 technical support with dedicated engineers for enterprise customers.
                    </p>
                    <Button size="sm" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-primary/10">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                Transform Your <span className="text-gradient">Flower Selection</span> Today
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join industry leaders who have already revolutionized their operations with AI-powered automation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
                  Start Pilot Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                  <Download className="mr-2 h-5 w-5" />
                  Download Specifications
                </Button>
              </div>

              <div className="text-sm text-muted-foreground">
                Risk-free pilot • 30-day evaluation • Performance guarantee
              </div>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}