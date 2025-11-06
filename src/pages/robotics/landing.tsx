import React, { useState, useEffect } from 'react';

const SundayRoboticsLanding = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [activePartnership, setActivePartnership] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Métricas realistas del hero
  const heroMetrics = [
    { value: "Pre-Revenue", label: "Development Stage", change: "Series A Ready", color: "text-blue-400" },
    { value: "3+", label: "Core Technologies", change: "TRL 6-8", color: "text-green-400" },
    { value: "6+", label: "University Partners", change: "LATAM + US", color: "text-purple-400" },
    { value: "2024", label: "Founded", change: "Atlanta Based", color: "text-yellow-400" }
  ];

  // Portfolio realista
  const portfolioItems = [
    {
      title: "Agricultural Robotics Platform",
      origin: "Universidad de Antioquia Partnership",
      validation: "University of Georgia Testing",
      performance: "Computer vision + IoT integration",
      status: "Technology Validation Phase",
      impact: "Targeting flower & crop selection automation",
      category: "Agricultural",
      icon: "🌱",
      stage: "Development"
    },
    {
      title: "Industrial Automation Systems", 
      origin: "LATAM University Collaborations",
      validation: "US Academic Validation Pipeline",
      performance: "AI-powered quality control",
      status: "Research & Development",
      impact: "Manufacturing efficiency optimization",
      category: "Industrial",
      icon: "🏭",
      stage: "Research"
    },
    {
      title: "Medical Robotics Innovation",
      origin: "Academic Research Partnerships",
      validation: "Clinical Research Planning",
      performance: "Adaptive therapy algorithms",
      status: "Early Stage Research",
      impact: "Rehabilitation technology advancement",
      category: "Medical",
      icon: "⚕️",
      stage: "Concept"
    }
  ];

  const partnerships = [
    {
      type: "LATAM Universities",
      count: "Active Partnerships",
      institutions: ["Universidad de Antioquia", "Target: UNAM México", "Target: PUC-Rio", "Expanding Network"],
      focus: "Innovation Source",
      icon: "🎓",
      status: "Active"
    },
    {
      type: "US Universities",
      count: "Validation Partners",
      institutions: ["University of Georgia", "Target: MIT Collaboration", "Target: Stanford Partnership", "Academic Network"],
      focus: "Validation Centers",
      icon: "🔬",
      status: "Developing"
    },
    {
      type: "Industry Ecosystem",
      count: "Strategic Targets",
      institutions: ["Technology Partners", "Manufacturing Partners", "Distribution Network", "Investment Partners"],
      focus: "Commercial Pipeline",
      icon: "🏢",
      status: "Planning"
    }
  ];

  const researchMetrics = [
    { category: "Research Phase", value: "Active", detail: "University collaborations", color: "text-green-400" },
    { category: "Patent Pipeline", value: "Development", detail: "IP strategy in progress", color: "text-blue-400" },
    { category: "Grant Applications", value: "Preparing", detail: "NSF, USDA, DOD targets", color: "text-purple-400" },
    { category: "Publications", value: "Planning", detail: "Academic publication strategy", color: "text-yellow-400" }
  ];

  const capabilities = [
    {
      title: "Academic Bridge Excellence",
      description: "Connecting LATAM innovation with US validation and commercialization",
      specs: ["University partnership framework", "Technology transfer protocols", "Academic-commercial bridge"],
      icon: "🌉",
      gradient: "from-blue-600/10 to-blue-800/10"
    },
    {
      title: "Validation Infrastructure",
      description: "Systematic approach to technology validation in US academic environments",
      specs: ["US university partnerships", "Rigorous testing protocols", "Performance documentation"],
      icon: "✅",
      gradient: "from-purple-600/10 to-purple-800/10"
    },
    {
      title: "Commercial Scaling Strategy",
      description: "Pathway from academic research to market-ready products",
      specs: ["Manufacturing partnerships", "Market entry strategies", "Business development"],
      icon: "📈",
      gradient: "from-green-600/10 to-green-800/10"
    }
  ];

  const timeline = [
    {
      year: "2024",
      milestone: "Foundation & Initial Partnerships",
      description: "Company formation, initial university partnerships, technology assessment",
      status: "current"
    },
    {
      year: "2025",
      milestone: "Series A & Technology Validation",
      description: "Funding round, expanded partnerships, first technology validations",
      status: "planned"
    },
    {
      year: "2026-2027",
      milestone: "Commercial Deployment",
      description: "First commercial products, manufacturing partnerships, market entry",
      status: "planned"
    },
    {
      year: "2028-2030",
      milestone: "Market Leadership",
      description: "Category leadership, international expansion, IPO readiness",
      status: "vision"
    }
  ];

  const teamProfiles = [
    {
      role: "Founding Team",
      background: "Technology & Academic Background",
      experience: "Academic-industry bridge expertise",
      previous: "University research & commercial experience",
      achievement: "Proven track record in technology transfer",
      icon: "👥"
    },
    {
      role: "Technical Leadership",
      background: "Engineering & Robotics Expertise",
      experience: "Advanced robotics development",
      previous: "Academic research & industry application",
      achievement: "Deep technical expertise in target areas",
      icon: "🔧"
    },
    {
      role: "Academic Relations",
      background: "University Partnership Development",
      experience: "International academic collaboration",
      previous: "University administration & research",
      achievement: "Strong academic network in LATAM & US",
      icon: "🤝"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg">🚀</span>
              </div>
              <div>
                <span className="text-xl font-bold clash-grotesk">SUNDAY Robotics</span>
                <div className="text-xs text-slate-400">Bridging Innovation Between Continents</div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8 text-sm">
              <a href="#vision" className="text-slate-400 hover:text-blue-400 transition-colors">Vision</a>
              <a href="#approach" className="text-slate-400 hover:text-blue-400 transition-colors">Approach</a>
              <a href="#partnerships" className="text-slate-400 hover:text-blue-400 transition-colors">Partnerships</a>
              <a href="#opportunities" className="text-slate-400 hover:text-blue-400 transition-colors">Opportunities</a>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
                Join Our Mission →
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              {/* Vision Pills */}
              <div className="flex flex-wrap gap-3">
                {["Academic Bridge", "Technology Validation", "Commercial Scaling", "Global Impact"].map((tech, i) => (
                  <div key={tech} className={`border border-slate-700 bg-slate-800 px-3 py-2 rounded-full text-xs hover:bg-blue-500 hover:text-white transition-all duration-300 ${i === 1 ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : ''}`}>
                    {tech}
                  </div>
                ))}
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-slate-100">Bridging</span><br/>
                  <span className="bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent clash-grotesk">Innovation</span><br/>
                  <span className="text-slate-100">Between</span><br/>
                  <span className="bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent clash-grotesk">Continents</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                  Transforming <span className="text-blue-400 font-semibold">cutting-edge LATAM research</span> into 
                  <span className="text-green-400 font-semibold"> validated, scalable solutions</span>. 
                  We're building the bridge between academic brilliance and commercial success, 
                  creating the future of robotics through international collaboration.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors group">
                  🚀 Explore Partnership Opportunities
                  <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </button>
                <button className="border border-slate-600 hover:bg-slate-800 text-slate-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors">
                  📋 Download Vision Document
                </button>
              </div>

              {/* Current Status Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
                {heroMetrics.map((metric, index) => (
                  <div key={index} className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-all duration-300">
                    <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                    <div className="text-xs text-slate-400">{metric.label}</div>
                    <div className="text-xs text-green-400 font-medium">{metric.change}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Innovation Visualization */}
            <div className="relative">
              <div className="relative aspect-square bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-3xl border border-slate-700 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central Innovation Hub */}
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-4xl">🌐</span>
                    </div>
                    
                    {/* Orbiting Elements */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center animate-bounce">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center animate-pulse">
                      <span className="text-lg">🔬</span>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-purple-400/20 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                      <span className="text-xl">🏭</span>
                    </div>
                    <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center animate-pulse" style={{animationDelay: '0.5s'}}>
                      <span className="text-sm">🚀</span>
                    </div>
                  </div>
                </div>
                
                {/* Status Indicators */}
                <div className="absolute top-4 right-4 p-3 bg-slate-900/80 backdrop-blur rounded-lg border border-slate-700">
                  <div className="text-xs text-slate-400">Status</div>
                  <div className="text-sm font-bold text-green-400">Building</div>
                </div>
                
                <div className="absolute bottom-4 left-4 p-3 bg-slate-900/80 backdrop-blur rounded-lg border border-slate-700">
                  <div className="text-xs text-slate-400">Focus</div>
                  <div className="text-sm font-bold text-blue-400">Partnerships</div>
                </div>

                <div className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 bg-slate-900/80 backdrop-blur rounded-lg border border-slate-700">
                  <div className="text-xs text-slate-400">Stage</div>
                  <div className="text-sm font-bold text-purple-400">Series A</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-slate-400 mb-2">Discover Our Vision</span>
          <span className="text-blue-400">⬇</span>
        </div>
      </section>

      {/* Vision & Approach Section */}
      <section id="vision" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-600 bg-slate-800 text-xs mb-4">
              <span className="mr-2">💡</span>
              Our Vision
            </div>
            <h2 className="text-4xl font-bold mb-4">
              The <span className="bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent">Academic-Commercial Bridge</span> That Changes Everything
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              We're not just another robotics company. We're the missing link between extraordinary LATAM university research 
              and global commercial success, creating unprecedented value for academia, industry, and society.
            </p>
          </div>

          {/* The Problem & Opportunity */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-red-500/5 to-orange-500/5 border border-red-500/20">
              <h3 className="text-2xl font-bold mb-6 text-red-400">🚫 The Problem</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Brilliant LATAM university research remains trapped in academic silos</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>No systematic pathway from university lab to global market</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>US companies lack access to LATAM innovation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Massive potential value creation going unrealized</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/5 to-blue-500/5 border border-green-500/20">
              <h3 className="text-2xl font-bold mb-6 text-green-400">✨ Our Solution</h3>
              <div className="space-y-4 text-slate-300">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Systematic identification of high-potential LATAM technologies</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Rigorous validation through US university partnerships</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Professional scaling and commercialization expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">•</span>
                  <span>Global market access through established networks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Our Unique Approach */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-slate-700">
            <h3 className="text-2xl font-bold text-center mb-8">🌉 Academic-to-Commercial Bridge Methodology</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discover",
                  description: "Identify breakthrough technologies in LATAM universities with commercial potential",
                  icon: "🔍"
                },
                {
                  step: "02", 
                  title: "Validate",
                  description: "Rigorous testing and validation through US university partnerships",
                  icon: "✅"
                },
                {
                  step: "03",
                  title: "Scale",
                  description: "Professional development and manufacturing preparation",
                  icon: "📈"
                },
                {
                  step: "04",
                  title: "Deploy",
                  description: "Global market launch with established commercial networks",
                  icon: "🌍"
                }
              ].map((phase, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700">
                  <div className="text-3xl mb-4">{phase.icon}</div>
                  <div className="text-blue-400 font-bold text-sm mb-2">STEP {phase.step}</div>
                  <h4 className="font-bold mb-3">{phase.title}</h4>
                  <p className="text-sm text-slate-400">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Portfolio Section */}
      <section id="approach" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-600 bg-slate-800 text-xs mb-4">
              <span className="mr-2">🚀</span>
              Technology Portfolio
            </div>
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent">Innovation Pipeline</span> in Development
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              We're building a portfolio of breakthrough technologies that represent the future of robotics across multiple industries
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer transition-all duration-300 hover:scale-105 rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{item.icon}</span>
                    <div className="flex flex-col items-end">
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs mb-1">{item.category}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        item.stage === 'Development' ? 'bg-blue-500/20 text-blue-400' :
                        item.stage === 'Research' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>{item.stage}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <div className="space-y-3 text-sm text-slate-400">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-400">🎓</span>
                      <span><strong>Partnership:</strong> {item.origin}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-400">🔬</span>
                      <span><strong>Validation:</strong> {item.validation}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-purple-400">⚙️</span>
                      <span><strong>Technology:</strong> {item.performance}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 border-t border-slate-700 pt-4">
                  <div className="space-y-2">
                    <div className="text-sm font-medium text-yellow-400">Current Status: {item.status}</div>
                    <div className="text-sm text-slate-300">Target Impact: {item.impact}</div>
                  </div>
                  <button className="w-full border border-slate-600 hover:bg-blue-500 hover:border-blue-500 text-slate-100 hover:text-white px-4 py-2 rounded transition-colors">
                    Learn More About This Technology →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Development Pipeline */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 border border-slate-700">
            <h3 className="text-2xl font-bold text-center mb-8">Development & Validation Pipeline</h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {[
                "University Research", 
                "Technology Assessment", 
                "Partnership Development", 
                "US Validation", 
                "Commercial Preparation",
                "Market Launch"
              ].map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`p-4 rounded-lg border text-center min-w-[160px] transition-all hover:scale-105 ${
                    index < 3 ? 'bg-green-500/10 border-green-500/30' : 
                    index < 5 ? 'bg-blue-500/10 border-blue-500/30' : 
                    'bg-purple-500/10 border-purple-500/30'
                  }`}>
                    <div className="text-sm font-medium">{step}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      {index < 3 ? "Active Phase" : 
                       index < 5 ? "Development Phase" : 
                       "Future Phase"}
                    </div>
                  </div>
                  {index < 5 && <span className="text-blue-400 mx-4">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Ecosystem */}
      <section id="partnerships" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-600 bg-slate-800 text-xs mb-4">
              <span className="mr-2">🤝</span>
              Partnership Ecosystem
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Building a <span className="bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent">Global Network</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our success depends on strong partnerships across the academic and commercial ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {partnerships.map((partnership, index) => (
              <div 
                key={index} 
                className={`cursor-pointer transition-all duration-300 hover:scale-105 rounded-lg border border-slate-700 bg-slate-800/50 p-6 ${
                  activePartnership === index ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setActivePartnership(index)}
              >
                <div className="mb-6">
                  <div className="text-4xl mb-4">{partnership.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{partnership.type}</h3>
                  <p className="text-blue-400 font-semibold text-sm mb-1">{partnership.count}</p>
                  <div className={`px-2 py-1 rounded text-xs inline-block ${
                    partnership.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                    partnership.status === 'Developing' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {partnership.status}
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {partnership.institutions.map((inst, i) => (
                    <div key={i} className="text-sm text-slate-400 flex items-center gap-2">
                      <span className="text-blue-400">•</span>
                      <span>{inst}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">{partnership.focus}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership Strategy */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-green-500/10 to-blue-500/5 border border-slate-700">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Partnership Strategy & Value Creation</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Creating win-win relationships with academic institutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Providing researchers with commercial pathways for their innovations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>Offering industry access to breakthrough technologies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span>Building sustainable innovation ecosystems</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">Target</div>
                  <div className="text-sm text-slate-400">Partnership Growth</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">Mutual</div>
                  <div className="text-sm text-slate-400">Value Creation</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">Global</div>
                  <div className="text-sm text-slate-400">Network Effect</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">Sustainable</div>
                  <div className="text-sm text-slate-400">Innovation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-600 bg-slate-800 text-xs mb-4">
              <span className="mr-2">⚡</span>
              Core Capabilities
            </div>
            <h2 className="text-4xl font-bold mb-6">
              What Makes Us <span className="bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent">Uniquely Positioned</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our competitive advantage lies in our unique ability to bridge academic excellence with commercial execution
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {capabilities.map((capability, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300 rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${capability.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{capability.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-slate-400">{capability.description}</p>
                </div>
                <div className="space-y-2">
                  {capability.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Value Proposition Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Academic Expertise", value: "Deep", unit: "University Relationships", icon: "🎓" },
              { label: "Validation Process", value: "Rigorous", unit: "US Standards", icon: "🔬" },
              { label: "Commercial Focus", value: "Market-Driven", unit: "Scalable Solutions", icon: "📈" },
              { label: "Global Perspective", value: "International", unit: "Network Access", icon: "🌍" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:bg-slate-800 transition-all group">
                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform">{stat.icon}</span>
                <div className="text-xl font-bold bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.unit}</div>
                <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity & Growth */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-600 bg-slate-800 text-xs mb-4">
              <span className="mr-2">🚀</span>
              Market Opportunity
            </div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent">Massive Market</span> Waiting to Be Unlocked
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              The intersection of LATAM innovation and global markets represents an untapped opportunity worth billions
            </p>
          </div>

          {/* Market Size Indicators */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                title: "Global Robotics Market", 
                value: "Growing Fast", 
                detail: "Double-digit annual growth across all sectors",
                color: "text-green-400",
                icon: "🤖"
              },
              { 
                title: "LATAM Innovation", 
                value: "Underutilized", 
                detail: "World-class research lacking commercial pathways",
                color: "text-blue-400",
                icon: "💡"
              },
              { 
                title: "Technology Transfer", 
                value: "Inefficient", 
                detail: "Massive gap between research and commercialization",
                color: "text-purple-400",
                icon: "🌉"
              },
              { 
                title: "Our Opportunity", 
                value: "First Mover", 
                detail: "Systematic approach to bridge this gap",
                color: "text-yellow-400",
                icon: "🎯"
              }
            ].map((market, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:bg-slate-800 transition-all">
                <span className="text-3xl block mb-4">{market.icon}</span>
                <div className={`text-xl font-bold ${market.color} mb-2`}>
                  {market.value}
                </div>
                <div className="text-sm font-medium mb-2">{market.title}</div>
                <div className="text-xs text-slate-400">{market.detail}</div>
              </div>
            ))}
          </div>

          {/* Growth Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`p-6 rounded-xl border border-slate-700 ${
                      item.status === 'current' ? 'bg-blue-500/10 border-blue-500/30' :
                      item.status === 'planned' ? 'bg-slate-800/50' : 'bg-purple-500/5'
                    }`}>
                      <div className="text-xl font-bold text-blue-400 mb-2">{item.year}</div>
                      <div className="text-lg font-semibold mb-2">{item.milestone}</div>
                      <div className="text-sm text-slate-400">{item.description}</div>
                      {item.status === 'current' && (
                        <div className="mt-3 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs inline-block">
                          Current Focus
                        </div>
                      )}
                      {item.status === 'vision' && (
                        <div className="mt-3 px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs inline-block">
                          Long-term Vision
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team & Leadership */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-600 bg-slate-800 text-xs mb-4">
              <span className="mr-2">👥</span>
              Leadership Team
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Building the <span className="bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent">Dream Team</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our success depends on assembling world-class talent with deep expertise in both academic and commercial worlds
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {teamProfiles.map((member, index) => (
              <div key={index} className="hover:scale-105 transition-all duration-300 rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{member.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold">{member.role}</h3>
                </div>
                <div className="space-y-2 text-sm text-slate-400">
                  <div><strong className="text-slate-300">Background:</strong> {member.background}</div>
                  <div><strong className="text-slate-300">Expertise:</strong> {member.experience}</div>
                  <div><strong className="text-slate-300">Experience:</strong> {member.previous}</div>
                  <div className="text-blue-400 font-medium">{member.achievement}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Building Strategy */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "Building", label: "Core Team", detail: "Assembling key leadership" },
              { value: "Recruiting", label: "Technical Talent", detail: "Engineering & research expertise" },
              { value: "Developing", label: "Advisory Board", detail: "Industry & academic advisors" },
              { value: "Expanding", label: "Global Network", detail: "International partnerships" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="text-xl font-bold bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium">{stat.label}</div>
                <div className="text-xs text-slate-400">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment & Opportunities */}
      <section id="opportunities" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-600 bg-slate-800 text-xs mb-4">
              <span className="mr-2">💰</span>
              Investment Opportunity
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Join the <span className="bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent">Innovation Revolution</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Multiple ways to participate in building the bridge between LATAM innovation and global success
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Universities",
                description: "Academic partnership opportunities",
                features: ["Research collaboration", "Technology transfer", "Student exchanges", "Joint publications"],
                cta: "Explore Academic Partnership",
                icon: "🎓",
                gradient: "from-blue-600/10 to-cyan-800/10"
              },
              {
                title: "Industry Partners",
                description: "Commercial collaboration opportunities",
                features: ["Technology access", "Market validation", "Distribution partnerships", "Co-development"],
                cta: "Become Industry Partner",
                icon: "🏢",
                gradient: "from-purple-600/10 to-violet-800/10"
              },
              {
                title: "Investors",
                description: "Series A funding opportunity",
                features: ["High growth potential", "First-mover advantage", "Proven team", "Market validation"],
                cta: "Investment Discussion",
                icon: "📈",
                gradient: "from-green-600/10 to-emerald-800/10"
              },
              {
                title: "Advisors",
                description: "Strategic advisory opportunities",
                features: ["Industry expertise", "Network access", "Strategic guidance", "Equity participation"],
                cta: "Join Advisory Board",
                icon: "🧠",
                gradient: "from-orange-600/10 to-red-800/10"
              }
            ].map((opportunity, index) => (
              <div key={index} className="group hover:scale-105 transition-all duration-300 rounded-lg border border-slate-700 bg-slate-800/50 p-6">
                <div className="mb-6">
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${opportunity.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl">{opportunity.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-sm text-slate-400">{opportunity.description}</p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    {opportunity.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-green-400">✓</span>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full border border-slate-600 hover:bg-blue-500 hover:border-blue-500 text-slate-100 hover:text-white px-4 py-2 rounded transition-colors">
                    {opportunity.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Investment Details */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-green-600/10 to-emerald-800/10 border border-green-400/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Series A Investment Opportunity</h3>
              <p className="text-slate-400">Building the foundation for sustainable growth and market leadership</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">Seeking</div>
                <div className="text-lg text-slate-300">Series A Investment</div>
                <div className="text-sm text-slate-400">Growth capital for expansion</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">Focus</div>
                <div className="text-lg text-slate-300">Team & Partnerships</div>
                <div className="text-sm text-slate-400">Building core capabilities</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">Goal</div>
                <div className="text-lg text-slate-300">Market Leadership</div>
                <div className="text-sm text-slate-400">Category-defining position</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Next Steps */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ready to Build the Future Together?</h2>
                <p className="text-lg text-slate-400">
                  Whether you're a university with breakthrough research, an investor looking for the next big opportunity, 
                  or an industry leader seeking innovation, we want to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span>🏢</span>
                    Headquarters
                  </h3>
                  <div className="space-y-2 text-sm text-slate-400">
                    <div>SUNDAY Robotics, Inc.</div>
                    <div>Atlanta, Georgia, USA</div>
                    <div>Building the future of academic-commercial collaboration</div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <span>🌎</span>
                    Global Reach
                  </h3>
                  <div className="space-y-2 text-sm text-slate-400">
                    <div>LATAM Academic Partnerships</div>
                    <div>US Validation Network</div>
                    <div>International Commercial Focus</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/5 border border-slate-700">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <span>📧</span>
                    Schedule a Discussion
                  </button>
                  <button className="w-full border border-slate-600 hover:bg-slate-800 text-slate-100 p-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <span>📋</span>
                    Request Information Package
                  </button>
                  <button className="w-full border border-slate-600 hover:bg-slate-800 text-slate-100 p-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <span>🤝</span>
                    Explore Partnership Options
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-green-600/10 to-emerald-800/10 border border-green-400/20">
                <h4 className="font-bold mb-3">Why Act Now?</h4>
                <div className="space-y-2 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">•</span>
                    <span>First-mover advantage in untapped market</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">•</span>
                    <span>Ground-floor opportunity with proven team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">•</span>
                    <span>Limited partnership slots available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">•</span>
                    <span>Building momentum with early adopters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-blue-500/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            The Future of <span className="bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent clash-grotesk">Innovation</span> Starts Here
          </h2>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            Join us in building the bridge between extraordinary research and extraordinary success. 
            Together, we're not just creating products—we're creating the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-4 rounded-lg font-medium transition-colors group">
              🚀 Join Our Mission
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
            <button className="border border-slate-600 hover:bg-slate-800 text-slate-100 text-lg px-8 py-4 rounded-lg font-medium transition-colors">
              📋 Download Executive Summary
            </button>
          </div>

          <div className="text-sm text-slate-400 space-y-2">
            <div><em>"Transforming tomorrow's technology today, one partnership at a time."</em></div>
            <div><strong>SUNDAY Robotics - Where Innovation Meets Implementation</strong></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SundayRoboticsLanding;