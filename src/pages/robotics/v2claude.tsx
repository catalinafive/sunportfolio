import React, { useState, useEffect } from "react";
import { ChevronRight, Globe, Zap, Target, Users, Award, TrendingUp, Play, Pause, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const SundayRoboticsLanding = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const testimonials = [
    {
      quote: "Sunday Robotics transformed our agricultural prototype into a commercial reality in 8 months",
      author: "Dr. María González",
      role: "Universidad Nacional de Colombia",
      country: "🇨🇴 Colombia"
    },
    {
      quote: "The technical validation process exceeded our expectations - rigorous and market-focused",
      author: "Prof. Carlos Mendoza",
      role: "Georgia Tech",
      country: "🇺🇸 USA"
    },
    {
      quote: "ROI achieved in 18 months with their Made in USA manufacturing approach",
      author: "Alex Chen",
      role: "Tech Investor",
      country: "🇺🇸 Atlanta, GA"
    }
  ];

  const technologies = [
    { name: "Agricultural Drones", market: "$4.2B", status: "Scaling", flag: "🇲🇽" },
    { name: "Warehouse Robots", market: "$8.1B", status: "Testing", flag: "🇧🇷" },
    { name: "Medical Assistants", market: "$12.8B", status: "Development", flag: "🇦🇷" },
    { name: "Smart Sensors", market: "$2.1B", status: "Ready", flag: "🇨🇴" }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white font-sans overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Sunday Robotics
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#process" className="hover:text-blue-400 transition-colors">Process</a>
            <a href="#partnerships" className="hover:text-blue-400 transition-colors">Partnerships</a>
            <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-full hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 text-center max-w-7xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl rounded-full"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Sunday Robotics
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            We transform LATAM's academic brilliance into <span className="text-blue-400 font-semibold">commercial robotics success</span> in the US market. From prototype to profit.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25">
              Start Your Journey <ChevronRight className="inline ml-2" size={20} />
            </button>
            <div className="flex items-center space-x-4 text-slate-400">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-slate-900"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-slate-900"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full border-2 border-slate-900"></div>
              </div>
              <span>50+ technologies validated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900/50 backdrop-blur-sm py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "100+", label: "LATAM Universities", icon: "🎓" },
            { number: "$50M+", label: "Market Value Created", icon: "💰" },
            { number: "15", label: "US Manufacturing Partners", icon: "🏭" },
            { number: "8", label: "Technologies Scaled", icon: "🚀" }
          ].map((stat, i) => (
            <div key={i} className="group hover:scale-105 transition-transform">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-400">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Building the Bridge Between 
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Science </span>
            and 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Market</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Sunday Robotics is an Atlanta-based venture builder creating the ecosystem that LATAM universities lack to reach the US market. We scout talent, validate scientifically with partners like UGA, adapt to regulatory standards, manufacture under Made in USA seal, and commercialize aggressively.
          </p>
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Our 2030 Vision</h3>
            <p className="text-lg text-slate-300">
              <span className="text-yellow-400 font-bold">100 LATAM robotic technologies</span> commercialized globally, creating a $1B+ ecosystem of innovation between Latin America and the United States.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section id="process" className="bg-slate-900/30 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Technology Transformation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                phase: "01",
                title: "Scout & Finance",
                subtitle: "LATAM Innovation Discovery",
                description: "We identify breakthrough solutions (TRL 4-6) and co-finance prototype development in public universities across Latin America.",
                icon: "🔍",
                color: "from-green-500 to-emerald-600"
              },
              {
                phase: "02", 
                title: "Validate & Test",
                subtitle: "Scientific Validation USA/LATAM",
                description: "Accelerate field and lab validations to TRL 6-8 with scientific protocols, real-world data, and partnership with US institutions.",
                icon: "🔬",
                color: "from-blue-500 to-cyan-600"
              },
              {
                phase: "03",
                title: "Comply & Adapt",
                subtitle: "Regulatory & Market Fit",
                description: "Generate documentation, technical homologation, and real pilots for US markets. Ensure full regulatory compliance.",
                icon: "📜",
                color: "from-purple-500 to-violet-600"
              },
              {
                phase: "04",
                title: "Scale & Sell",
                subtitle: "Made in USA + Commercialization",
                description: "Integrate components, assemble, certify, and label as US production. Create sales channels, branding, and execute growth strategies.",
                icon: "🚀",
                color: "from-orange-500 to-red-600"
              }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all duration-300 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <div className="text-sm text-slate-400 mb-2">{step.phase}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <h4 className="text-blue-400 font-semibold mb-4">{step.subtitle}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{step.description}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-slate-600" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section id="partnerships" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Partnership Models</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* LATAM Universities */}
            <div className="bg-gradient-to-br from-green-900/20 to-emerald-800/20 p-8 rounded-2xl border border-green-700/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4">
                  🎓
                </div>
                <h3 className="text-2xl font-bold">LATAM Universities</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Technology Scouting:</strong> We identify promising robotics research at TRL 4-6 stage</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Co-Development Funding:</strong> $50K-$200K for prototype advancement</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>IP Partnership:</strong> Joint ownership with commercialization rights</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Student Exchange:</strong> Research internships in Atlanta lab</p>
                </div>
              </div>
              <div className="bg-green-900/30 p-4 rounded-xl">
                <h4 className="font-semibold text-green-400 mb-2">Success Metrics</h4>
                <p className="text-sm text-slate-300">25% equity in commercialized technologies + ongoing royalties + research funding continuity</p>
              </div>
            </div>

            {/* US Universities */}
            <div className="bg-gradient-to-br from-blue-900/20 to-cyan-800/20 p-8 rounded-2xl border border-blue-700/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                  🔬
                </div>
                <h3 className="text-2xl font-bold">US Universities</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Validation Infrastructure:</strong> Access to advanced testing facilities</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Regulatory Expertise:</strong> FDA, OSHA, and industry compliance support</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Grant Co-application:</strong> NSF, NIH, and DoD funding opportunities</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Market Intelligence:</strong> Industry connections and customer validation</p>
                </div>
              </div>
              <div className="bg-blue-900/30 p-4 rounded-xl">
                <h4 className="font-semibold text-blue-400 mb-2">Partnership Benefits</h4>
                <p className="text-sm text-slate-300">Research publications + commercial licensing fees + international collaboration opportunities</p>
              </div>
            </div>

            {/* Investors */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-800/20 p-8 rounded-2xl border border-purple-700/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  💼
                </div>
                <h3 className="text-2xl font-bold">Investors</h3>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Diversified Portfolio:</strong> Access to 20+ validated robotics technologies</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>De-risked Investments:</strong> Technologies at TRL 7-8 with market validation</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Strategic Co-investment:</strong> $500K-$5M rounds with clear exit paths</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-300"><strong>Market Arbitrage:</strong> LATAM innovation at US market valuations</p>
                </div>
              </div>
              <div className="bg-purple-900/30 p-4 rounded-xl">
                <h4 className="font-semibold text-purple-400 mb-2">Investment Returns</h4>
                <p className="text-sm text-slate-300">Target 5x-10x returns in 3-5 years through strategic exits and licensing deals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Portfolio */}
      <section id="portfolio" className="bg-slate-900/30 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Active Technology Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-2xl">{tech.flag}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tech.status === 'Ready' ? 'bg-green-900/50 text-green-400' :
                    tech.status === 'Scaling' ? 'bg-blue-900/50 text-blue-400' :
                    tech.status === 'Testing' ? 'bg-yellow-900/50 text-yellow-400' :
                    'bg-purple-900/50 text-purple-400'
                  }`}>
                    {tech.status}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                <p className="text-slate-400 text-sm mb-3">Market Size: {tech.market}</p>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div className={`h-2 rounded-full ${
                    tech.status === 'Ready' ? 'bg-green-500 w-full' :
                    tech.status === 'Scaling' ? 'bg-blue-500 w-3/4' :
                    tech.status === 'Testing' ? 'bg-yellow-500 w-1/2' :
                    'bg-purple-500 w-1/4'
                  }`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">What Our Partners Say</h2>
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm p-12 rounded-2xl border border-slate-700">
              <div className="mb-8">
                <div className="text-4xl text-blue-400 mb-4">"</div>
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div>
                    <p className="font-semibold text-white">{testimonials[currentTestimonial].author}</p>
                    <p className="text-slate-400 text-sm">{testimonials[currentTestimonial].role}</p>
                  </div>
                  <div className="text-2xl">{testimonials[currentTestimonial].country}</div>
                </div>
              </div>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentTestimonial(i)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        i === currentTestimonial ? 'bg-blue-400' : 'bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">The Future We're Building</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏗️",
                title: "Atlanta Innovation Hub",
                description: "50,000 sq ft facility for rapid prototyping, testing, and co-creation between LATAM engineers and US manufacturers"
              },
              {
                icon: "🌐",
                title: "Global Validation Network",
                description: "International network of pilot farms, factories, and smart cities for real-world technology validation"
              },
              {
                icon: "💻",
                title: "DeepTech SaaS Platform",
                description: "Standardized processes for technical validation, IP management, compliance, and scalability assessment"
              },
              {
                icon: "🤖",
                title: "50+ Solution Catalog",
                description: "Comprehensive portfolio of validated robotics solutions for agriculture, manufacturing, logistics, and smart cities"
              },
              {
                icon: "💰",
                title: "Continuous Investment Model",
                description: "Blended financing combining grants, university funds, strategic angels, and corporate venture capital"
              },
              {
                icon: "🚀",
                title: "Billion-Dollar Ecosystem",
                description: "Self-sustaining innovation pipeline generating $1B+ in economic value by 2030"
              }
            ].map((item, i) => (
              <div key={i} className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-all group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-blue-400">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Innovation?</h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Join the revolution bridging LATAM innovation with US market opportunities. Whether you're a university, investor, or technology developer, we have a partnership model for you.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-blue-500/25">
              Schedule Consultation <ChevronRight className="inline ml-2" size={20} />
            </button>
            <button className="border-2 border-slate-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all duration-300">
              Download Partnership Guide
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Headquarters</p>
                    <p className="text-slate-400">Atlanta, Georgia, USA</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-400">partnerships@sundayrobotics.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-slate-400">+1 (404) XXX-XXXX</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-8">Quick Connect</h3>
              <div className="grid grid-cols-1 gap-4">
                <button className="bg-green-600/20 border border-green-600/30 p-4 rounded-xl text-left hover:bg-green-600/30 transition-colors">
                  <h4 className="font-semibold text-green-400 mb-2">🎓 LATAM Universities</h4>
                  <p className="text-sm text-slate-300">Technology scouting and co-development opportunities</p>
                </button>
                <button className="bg-blue-600/20 border border-blue-600/30 p-4 rounded-xl text-left hover:bg-blue-600/30 transition-colors">
                  <h4 className="font-semibold text-blue-400 mb-2">🔬 US Research Institutions</h4>
                  <p className="text-sm text-slate-300">Validation partnerships and grant collaborations</p>
                </button>
                <button className="bg-purple-600/20 border border-purple-600/30 p-4 rounded-xl text-left hover:bg-purple-600/30 transition-colors">
                  <h4 className="font-semibold text-purple-400 mb-2">💼 Investors & VCs</h4>
                  <p className="text-sm text-slate-300">Investment opportunities in validated robotics technologies</p>
                </button>
                <button className="bg-orange-600/20 border border-orange-600/30 p-4 rounded-xl text-left hover:bg-orange-600/30 transition-colors">
                  <h4 className="font-semibold text-orange-400 mb-2">🏭 Manufacturing Partners</h4>
                  <p className="text-sm text-slate-300">Made in USA production and scaling opportunities</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Sunday Robotics
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Transforming LATAM academic brilliance into commercial robotics success in the US market.
              </p>
              <div className="flex space-x-4 mt-6">
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Globe size={20} className="text-slate-400" />
                </div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                  <Mail size={20} className="text-slate-400" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Technology Scouting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technical Validation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Regulatory Compliance</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manufacturing Scale</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Entry</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Partnerships</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">LATAM Universities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">US Research Institutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Strategic Investors</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Manufacturing Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology Developers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Partnership Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology Portfolio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Insights</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Investment Deck</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2025 Sunday Robotics. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-slate-400 text-sm hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full shadow-2xl shadow-blue-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <Mail className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
};

export default SundayRoboticsLanding;