import Head from "next/head";
import { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Play, 
  Download, 
  Calendar, 
  Mail, 
  Phone, 
  CheckCircle,
  TrendingUp,
  Target,
  Shield,
  Award,
  Users,
  Zap
} from "lucide-react";

export default function UGAPartnership() {
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.metric-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const metrics = [
    { value: "$23.4M", label: "Grant Pipeline Value", color: "text-gradient" },
    { value: "67%", label: "Success Rate Increase", color: "text-green-400" },
    { value: "12+", label: "LATAM Universities", color: "text-yellow-400" },
    { value: "$2.1B", label: "Market Access Value", color: "text-blue-400" }
  ];

  const grants = [
    {
      title: "NSF International Collaboration",
      value: "$3.2M",
      ugaShare: "$2.24M (70%)",
      probability: "78%",
      deadline: "August 15",
      partner: "Universidad de Antioquia (Colombia)",
      focus: "AgTech robotics validation",
      priority: "Priority 1",
      type: "success"
    },
    {
      title: "USDA Global Food Security", 
      value: "$2.8M",
      ugaShare: "$1.96M (70%)",
      probability: "65%",
      deadline: "Sept 30",
      partner: "Tecnológico de Monterrey",
      focus: "Precision agriculture systems",
      priority: "Priority 2",
      type: "primary"
    },
    {
      title: "DOE Rural Innovation",
      value: "$1.9M", 
      ugaShare: "$1.33M (70%)",
      probability: "58%",
      deadline: "Oct 15",
      partner: "Universidad de Chile",
      focus: "Sustainable energy systems",
      priority: "Priority 3",
      type: "warning"
    }
  ];

  return (
    <>
      <Head>
        <title>Strategic Partnership Proposal - SUNDAY Tech × UGA</title>
        <meta name="description" content="Strategic partnership proposal to accelerate grant success and access $47.8B AgTech market through proven Latin American technologies" />
      </Head>

      <div className="min-h-screen bg-background text-foreground">
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="text-center space-y-8">
              {/* Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {["Partnership Proposal", "Grant Acceleration", "Market Access", "Revenue Multiplier"].map((text, i) => (
                  <div key={text} className="pill transition border border-input bg-background flex items-center text-xs px-2.5 py-1.5 rounded-full hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground duration-300">
                    {text}
                  </div>
                ))}
              </div>
              
              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-black leading-tight">
                  <span className="text-foreground">Strategic Partnership</span><br/>
                  <span className="text-gradient bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">UGA × SUNDAY Tech</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                  <span className="text-green-400 font-bold">3x your grant success rate</span> while accessing 
                  <span className="text-blue-400 font-bold"> $47.8B AgTech market</span> through proven 
                  Latin American technologies and strategic commercialization partnerships.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                  Schedule Strategic Session
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-white/20 hover:bg-white/5 hover:border-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 group">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Executive Briefing
                </button>
              </div>
              
              {/* Live Metrics */}
              <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
                {metrics.map((metric, index) => (
                  <div key={index} className="metric-card bg-white/[0.02] border border-white/10 rounded-xl p-6 backdrop-filter backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary/30">
                    <div className={`text-3xl font-bold ${metric.color === 'text-gradient' ? 'text-gradient bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent' : metric.color}`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition Matrix */}
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Competitive Advantage</span>
              <h2 className="text-5xl font-bold mt-4 mb-6">
                Why UGA <span className="text-gradient bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">Wins</span> with SUNDAY Tech
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Measurable, immediate benefits that compound over time
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Left: Benefits Grid */}
              <div className="space-y-8">
                <div className="metric-card bg-gradient-to-br from-green-600/10 to-green-800/10 border-green-400/20 rounded-xl p-8 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-green-400/20">
                      <TrendingUp className="h-6 w-6 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold">3x Grant Success Rate</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    From 23% to 67% success rate with international partnerships that reviewers prioritize
                  </p>
                  <div className="text-2xl font-bold text-green-400">+$4.8M annually</div>
                </div>

                <div className="metric-card bg-gradient-to-br from-blue-600/10 to-blue-800/10 border-blue-400/20 rounded-xl p-8 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-blue-400/20">
                      <Shield className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold">Zero Administrative Burden</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    SUNDAY Tech handles 100% of international coordination, documentation, and compliance
                  </p>
                  <div className="text-2xl font-bold text-blue-400">840 hours saved</div>
                </div>

                <div className="metric-card bg-gradient-to-br from-yellow-600/10 to-yellow-800/10 border-yellow-400/20 rounded-xl p-8 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-yellow-400/20">
                      <Target className="h-6 w-6 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold">Commercial Revenue Stream</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    2-4% royalties from commercial success of validated technologies
                  </p>
                  <div className="text-2xl font-bold text-yellow-400">$180K+ annually</div>
                </div>
              </div>

              {/* Right: Comparison Chart */}
              <div className="metric-card bg-white/[0.02] border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-8 text-center">Grant Success Comparison</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">UGA Solo Applications</span>
                      <span className="font-bold">23%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-3">
                      <div className="bg-red-400 h-3 rounded-full" style={{width: '23%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">UGA + SUNDAY Tech</span>
                      <span className="font-bold text-green-400">67%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-3">
                      <div className="bg-green-400 h-3 rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Industry Average</span>
                      <span className="font-bold">18%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-3">
                      <div className="bg-gray-400 h-3 rounded-full" style={{width: '18%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-green-400/10 rounded-lg">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">+194%</div>
                    <div className="text-sm text-muted-foreground">Improvement over solo applications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Grant Pipeline Analysis */}
        <section className="py-24 bg-gradient-to-b from-background to-background/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">Immediate Opportunities</span>
              <h2 className="text-5xl font-bold mt-4 mb-6">
                Ready-to-Apply <span className="text-gradient bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">Grant Pipeline</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                $23.4M in identified grant opportunities with pre-qualified LATAM partners
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {grants.map((grant, index) => (
                <div key={index} className={`metric-card rounded-xl p-8 transition-all duration-300 hover:scale-105 ${
                  grant.type === 'success' ? 'bg-gradient-to-br from-green-600/10 to-green-800/10 border-green-400/20' :
                  grant.type === 'primary' ? 'bg-gradient-to-br from-blue-600/10 to-blue-800/10 border-blue-400/20' :
                  'bg-gradient-to-br from-yellow-600/10 to-yellow-800/10 border-yellow-400/20'
                }`}>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">{grant.title}</h3>
                    <div className={`pill ${
                      grant.type === 'success' ? 'bg-green-400/20 text-green-400 border-green-400/30' :
                      grant.type === 'primary' ? 'bg-blue-400/20 text-blue-400 border-blue-400/30' :
                      'bg-yellow-400/20 text-yellow-400 border-yellow-400/30'
                    }`}>
                      {grant.priority}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Grant Value:</span>
                      <span className={`font-bold ${
                        grant.type === 'success' ? 'text-green-400' :
                        grant.type === 'primary' ? 'text-blue-400' : 'text-yellow-400'
                      }`}>{grant.value}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">UGA Share:</span>
                      <span className="font-bold">{grant.ugaShare}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Success Probability:</span>
                      <span className={`font-bold ${
                        grant.type === 'success' ? 'text-green-400' :
                        grant.type === 'primary' ? 'text-blue-400' : 'text-yellow-400'
                      }`}>{grant.probability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Deadline:</span>
                      <span className="font-bold text-yellow-400">{grant.deadline}</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-background/50 rounded-lg">
                    <div className="text-sm text-muted-foreground">
                      <strong>Partner:</strong> {grant.partner}<br/>
                      <strong>Focus:</strong> {grant.focus}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pipeline Summary */}
            <div className="metric-card bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 rounded-xl p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-gradient bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">$23.4M</div>
                  <div className="text-muted-foreground">Total Pipeline Value</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-green-400">$16.4M</div>
                  <div className="text-muted-foreground">Expected UGA Revenue</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400">67%</div>
                  <div className="text-muted-foreground">Weighted Success Rate</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-yellow-400">147</div>
                  <div className="text-muted-foreground">Days to First Award</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-7xl font-bold leading-tight">
                Ready to <span className="text-gradient bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">Transform</span><br/>
                UGA's Research Impact?
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                This partnership opportunity expires when competitors discover the LATAM advantage. 
                <span className="text-yellow-400 font-bold"> First-mover advantage has a deadline.</span>
              </p>

              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="metric-card bg-white/[0.02] border border-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold text-green-400 mb-2">$47.3M</div>
                  <div className="text-sm text-muted-foreground">5-year financial impact</div>
                </div>
                <div className="metric-card bg-white/[0.02] border border-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold text-blue-400 mb-2">67%</div>
                  <div className="text-sm text-muted-foreground">Grant success rate</div>
                </div>
                <div className="metric-card bg-white/[0.02] border border-white/10 rounded-xl p-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">90 Days</div>
                  <div className="text-sm text-muted-foreground">To first results</div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group">
                    Schedule Executive Briefing
                    <Calendar className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="border border-white/20 hover:bg-white/5 hover:border-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:-translate-y-1 group">
                    <Download className="mr-2 h-5 w-5" />
                    Download Full Proposal
                  </button>
                </div>

                <div className="text-sm text-muted-foreground space-y-2">
                  <div><strong>Next Steps:</strong></div>
                  <div>1. 30-minute strategic session with UGA leadership</div>
                  <div>2. Review 3 specific LATAM partnership opportunities</div>
                  <div>3. 48-hour decision timeline for Q3 2025 launch</div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-xl border border-red-400/20">
                <div className="text-lg font-bold text-yellow-400 mb-2">⏰ Time-Sensitive Opportunity</div>
                <div className="text-muted-foreground">
                  August 15 NSF deadline approaching. Partnership must be established by July 20 
                  to maximize Q3 2025 grant applications.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Contact */}
        <section className="py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span><strong>CEO SUNDAY Tech</strong></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>partnerships@sundaytech.co</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>calendly.com/sundaytech-executive</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Partnership Team</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="font-semibold">Strategic Partnerships</div>
                    <div className="text-sm text-muted-foreground">University relationship management</div>
                  </div>
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="font-semibold">Grant Operations</div>
                    <div className="text-sm text-muted-foreground">Federal funding expertise</div>
                  </div>
                  <div className="p-4 bg-white/[0.02] rounded-lg">
                    <div className="font-semibold">Technical Integration</div>
                    <div className="text-sm text-muted-foreground">LATAM technology validation</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center text-sm text-muted-foreground">
              <div className="mb-4">
                <span className="text-gradient bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent font-bold">SUNDAY Tech</span> - Bridging LATAM Innovation with USA Markets
              </div>
              <div>
                Confidential Partnership Proposal | © 2025 SUNDAY Tech | All Rights Reserved
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}