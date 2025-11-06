import React, { useState } from 'react';
import { ChevronRight, DollarSign, Users, Zap, Globe, Target, TrendingUp, CheckCircle } from 'lucide-react';

const SundayRoboticsWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const NavigationMenu = () => (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">Sunday Robotics</h1>
        <div className="flex space-x-6">
          {[
            { id: 'home', label: 'Home' },
            { id: 'enterprises', label: 'U.S. Enterprises' },
            { id: 'innovators', label: 'LATAM Innovators' },
            { id: 'universities', label: 'Universities' },
            { id: 'investors', label: 'Investors' },
            { id: 'about', label: 'About' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-3 py-2 rounded ${activeSection === item.id ? 'bg-blue-600' : 'hover:bg-slate-700'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Bridging Innovation: Where Latin American Robotics Meets U.S. Market Demands
        </h1>
        <p className="text-xl mb-8 max-w-4xl mx-auto">
          We identify critical automation gaps in U.S. enterprises and co-create solutions with Latin American talent, universities, and manufacturers. From concept to commercialization, we accelerate robotics innovation across borders.
        </p>
        <div className="grid md:grid-cols-4 gap-4">
          <button 
            onClick={() => setActiveSection('enterprises')}
            className="bg-blue-600 hover:bg-blue-700 p-4 rounded-lg transition-colors"
          >
            For U.S. Enterprises
          </button>
          <button 
            onClick={() => setActiveSection('innovators')}
            className="bg-green-600 hover:bg-green-700 p-4 rounded-lg transition-colors"
          >
            For LATAM Innovators
          </button>
          <button 
            onClick={() => setActiveSection('investors')}
            className="bg-purple-600 hover:bg-purple-700 p-4 rounded-lg transition-colors"
          >
            For Investors
          </button>
          <button 
            onClick={() => setActiveSection('universities')}
            className="bg-orange-600 hover:bg-orange-700 p-4 rounded-lg transition-colors"
          >
            For Universities
          </button>
        </div>
      </div>
    </div>
  );

  const EnterprisesSection = () => (
    <div className="p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Transform Your Operations with Custom Robotics Solutions</h2>
        <p className="text-xl text-center mb-8 text-gray-600">
          We don't just sell robots. We identify your specific pain points and co-create tailored solutions with world-class talent.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: "Manufacturing Inefficiencies",
              items: ["Labor shortages", "Quality control bottlenecks", "Dangerous work environments"]
            },
            {
              title: "Logistics & Warehousing", 
              items: ["Inventory management", "Last-mile delivery", "Peak season scalability"]
            },
            {
              title: "Healthcare & Life Sciences",
              items: ["Sterile environments", "Precision handling", "Regulatory compliance"]
            },
            {
              title: "Agriculture & Food Processing",
              items: ["Seasonal labor", "Food safety standards", "Harvest optimization"]
            }
          ].map((area, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-4 text-blue-600">{area.title}</h3>
              <ul className="space-y-2">
                {area.items.map((item, j) => (
                  <li key={j} className="text-sm flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-slate-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Partnership Models</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                model: "Co-Development Partnership",
                investment: "$50K - $500K",
                timeline: "6-12 months",
                share: "60/40 (Enterprise/Sunday)",
                benefits: ["Custom solution ownership", "Exclusive licensing rights", "First-mover advantage"]
              },
              {
                model: "Innovation Acceleration", 
                investment: "$25K - $100K",
                timeline: "3-6 months",
                share: "70/30 (Enterprise/Sunday)",
                benefits: ["Proof of concept", "Market validation data", "Technology assessment"]
              },
              {
                model: "Technology Licensing",
                investment: "$10K - $50K", 
                timeline: "1-3 months",
                share: "80/20 (Enterprise/Sunday)",
                benefits: ["Access to validated solutions", "Implementation support", "Ongoing updates"]
              }
            ].map((model, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold mb-4 text-blue-600">{model.model}</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>Investment:</strong> {model.investment}</p>
                  <p><strong>Timeline:</strong> {model.timeline}</p>
                  <p><strong>Revenue Share:</strong> {model.share}</p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold mb-2">Benefits:</p>
                  <ul className="space-y-1">
                    {model.benefits.map((benefit, j) => (
                      <li key={j} className="text-sm flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const InnovatorsSection = () => (
    <div className="p-8 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Scale Your Robotics Innovation to the U.S. Market</h2>
        <p className="text-xl text-center mb-8 text-gray-600">
          From brilliant idea to American success story. We provide the bridge, funding, and expertise to transform your robotics innovation into a scalable U.S. business.
        </p>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            {
              stage: "Stage 1: Innovation Assessment (TRL 3-5)",
              support: "$5K-$25K development grants",
              duration: "2-4 months",
              activities: ["Technology readiness assessment", "Market potential analysis", "Technical mentorship"]
            },
            {
              stage: "Stage 2: Validation & Development (TRL 6-7)",
              support: "$25K-$100K funding", 
              duration: "6-12 months",
              activities: ["Laboratory validation", "Performance benchmarking", "U.S. testing facility access"]
            },
            {
              stage: "Stage 3: Market Validation (TRL 7-8)",
              support: "$100K-$500K investment",
              duration: "6-18 months", 
              activities: ["Pilot program deployment", "Customer feedback integration", "Business model refinement"]
            },
            {
              stage: "Stage 4: Commercialization (TRL 8-9)",
              support: "$500K-$2M investment",
              duration: "12-24 months",
              activities: ["Made in USA manufacturing", "Distribution network setup", "Marketing campaign launch"]
            }
          ].map((stage, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-bold mb-4 text-green-600">{stage.stage}</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Support:</strong> {stage.support}</p>
                <p><strong>Duration:</strong> {stage.duration}</p>
              </div>
              <div className="mt-4">
                <p className="font-semibold mb-2">Key Activities:</p>
                <ul className="space-y-1">
                  {stage.activities.map((activity, j) => (
                    <li key={j} className="text-sm flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Funding Sources We Coordinate</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Government Grants: SBIR, NSF, DOE programs",
              "Private Investment: Angel investors, VC funds", 
              "Corporate Partnerships: Strategic alliances",
              "International Funding: Development banks, export agencies"
            ].map((source, i) => (
              <div key={i} className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm font-medium">{source}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const UniversitiesSection = () => (
    <div className="p-8 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Universities & Research Partnerships</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">U.S. Universities Hub</h3>
            <p className="text-lg mb-6">"Accelerate Research Commercialization Through International Collaboration"</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Research Partnership Opportunities</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Cross-border collaboration funding</li>
                  <li>• Shared laboratory resources</li>
                  <li>• Student/faculty exchange programs</li>
                  <li>• IP commercialization support</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Available Programs</h4>
                <ul className="space-y-1 text-sm">
                  <li>• International Research Consortium</li>
                  <li>• Student Innovation Challenge</li>
                  <li>• Faculty Fellowship Program</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-green-600">LATAM Universities Hub</h3>
            <p className="text-lg mb-6">"Connect Your Research to Global Markets"</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Partnership Benefits</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Research Funding: Up to $250K per project</li>
                  <li>• Infrastructure Access: U.S. testing facilities</li>
                  <li>• Student Opportunities: Internships and jobs</li>
                  <li>• IP Support: Patent filing and protection</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-2">Success Metrics</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Joint research papers</li>
                  <li>• IP generation and protection</li>
                  <li>• Student placement in robotics industry</li>
                  <li>• Spin-off company creation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const InvestorsSection = () => (
    <div className="p-8 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Investment Opportunities</h2>
        <p className="text-xl text-center mb-8 text-gray-600">
          "Invest in the Future of Cross-Border Robotics Innovation"
        </p>
        
        <div className="bg-white p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6">Investment Thesis</h3>
          <p className="text-lg mb-4">"The next decade of robotics will be defined by three trends:"</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Distributed Innovation</h4>
              <p className="text-sm">Best ideas come from unexpected places</p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Market-Solution Fit</h4>
              <p className="text-sm">U.S. problems + LATAM solutions = exponential returns</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Regulatory Arbitrage</h4>
              <p className="text-sm">Faster development cycles in emerging markets</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              fund: "Sunday Robotics Fund I",
              size: "$50M",
              focus: "Early-stage robotics companies (Series A/B)",
              returns: "25% IRR over 7 years",
              portfolio: "15-20 companies",
              minimum: "$500K"
            },
            {
              fund: "Innovation Bridge Fund",
              size: "$20M", 
              focus: "Technology validation and market entry",
              returns: "30% IRR over 5 years",
              portfolio: "25-30 projects",
              minimum: "$100K"
            },
            {
              fund: "Strategic Partnership Fund",
              size: "$30M",
              focus: "Corporate co-development projects", 
              returns: "20% IRR + strategic value",
              portfolio: "Fortune 500 partners",
              minimum: "$250K"
            }
          ].map((fund, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-bold mb-4 text-purple-600">{fund.fund}</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Size:</strong> {fund.size}</p>
                <p><strong>Focus:</strong> {fund.focus}</p>
                <p><strong>Target Returns:</strong> {fund.returns}</p>
                <p><strong>Portfolio:</strong> {fund.portfolio}</p>
                <p><strong>Minimum Investment:</strong> {fund.minimum}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutSection = () => (
    <div className="p-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">About Sunday Robotics</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Mission</h3>
            <p className="text-lg">
              "To accelerate robotics innovation by creating bridges between Latin American ingenuity and U.S. market opportunities, fostering a new era of collaborative technological advancement."
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-600">Our Vision</h3>
            <p className="text-lg">
              "A world where the best robotics solutions emerge from global collaboration, regardless of geographic boundaries."
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6">The Sunday Bridge™ Methodology</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1. Discovery", desc: "Identify market gaps and innovation opportunities" },
              { step: "2. Connection", desc: "Match problems with solutions across borders" },
              { step: "3. Collaboration", desc: "Facilitate co-creation partnerships" },
              { step: "4. Commercialization", desc: "Scale validated solutions to market" },
              { step: "5. Continuation", desc: "Support long-term growth and expansion" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-2">
                  <h4 className="font-bold text-blue-600">{item.step}</h4>
                </div>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6">Technology Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Industrial Automation",
              "Healthcare Robotics", 
              "Agricultural Technology",
              "Logistics & Warehousing",
              "Defense & Security",
              "Environmental Monitoring"
            ].map((area, i) => (
              <div key={i} className="bg-slate-100 p-4 rounded-lg text-center">
                <p className="font-medium">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'enterprises':
        return <EnterprisesSection />;
      case 'innovators':
        return <InnovatorsSection />;
      case 'universities':
        return <UniversitiesSection />;
      case 'investors':
        return <InvestorsSection />;
      case 'about':
        return <AboutSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationMenu />
      {renderSection()}
      
      {/* Footer Simple */}
      <footer className="bg-slate-900 text-white p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Sunday Robotics</h3>
          <p className="mb-4">Bridging Innovation Between LATAM and U.S. Markets</p>
          <p className="text-sm text-gray-400">© 2025 Sunday Robotics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SundayRoboticsWebsite;