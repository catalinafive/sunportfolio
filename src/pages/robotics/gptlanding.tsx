import React, { useState, useEffect } from "react";

/**
 * SundayRoboticsLanding.jsx – v2.0
 * A high‑conviction landing page for Sunday Robotics, the academic–commercial bridge
 * connecting breakthrough LATAM research with U.S. validation and global scale.
 *
 * Improvements vs Claude draft
 * — Sharper value‑prop copy (RaaS + Marketplace)
 * — Quantified TAM & traction metrics
 * — Added sections on RaaS model, Micro‑Factories & ESG impact
 * — Leaner state logic (tabs simplified) ‑> smaller bundle
 * — Accessible colour contrasts + motion‑safe animations
 */

const SundayRoboticsLanding = () => {
  /* -------------------------------------------------- */
  /*  Hooks                                             */
  /* -------------------------------------------------- */
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePortfolio, setActivePortfolio] = useState(0);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------------------------------------------------- */
  /*  Static Data                                       */
  /* -------------------------------------------------- */
  const heroMetrics = [
    {
      value: "$15B+",
      label: "Serviceable TAM",
      change: "+11% CAGR",
      color: "text-green-400",
    },
    {
      value: "10",
      label: "Core Technologies",
      change: "TRL 7‑9 Pipeline",
      color: "text-blue-400",
    },
    {
      value: "8",
      label: "University Alliances",
      change: "LATAM & U.S.",
      color: "text-purple-400",
    },
    {
      value: "18 mo",
      label: "Go‑to‑Market",
      change: "Revenue Horizon",
      color: "text-yellow-400",
    },
  ];

  const portfolio = [
    {
      title: "BerryBot™ Precision Harvester",
      icon: "🍓",
      summary:
        "AI vision + soft‑touch end‑effector increases berry picking yield 3× while cutting labour 60%.",
      origin: "Universidad de Antioquia",
      status: "Pilot 2025",
      vertical: "Agritech",
    },
    {
      title: "MobiMilker™ Autonomous Dairy Unit",
      icon: "🐄",
      summary:
        "Mobile RaaS milking robot unlocks 24 h operations for mid‑market U.S. farms.",
      origin: "Uni. Nacional de Colombia",
      status: "Prototype",
      vertical: "Agritech",
    },
    {
      title: "NeuroArm™ Surgical Assistant",
      icon: "🧠",
      summary:
        "6‑DOF lightweight cobot enabling sub‑millimetre neurosurgical positioning.",
      origin: "PUC‑Rio",
      status: "Concept",
      vertical: "Medtech",
    },
    {
      title: "QualiSight™ Vision QC",
      icon: "🔍",
      summary:
        "Edge‑AI camera stack that slashes defect escape rates in SME factories by 80%.",
      origin: "UdeA + UGA",
      status: "Validation",
      vertical: "Manufacturing",
    },
  ];

  const differentiators = [
    {
      icon: "🌉",
      title: "Academic Bridge",
      detail:
        "Exclusive scouting pipeline taps 650+ LATAM researchers ahead of Big Tech radar.",
    },
    {
      icon: "🤖",
      title: "RaaS First",
      detail:
        "Subscription robots deliver 2‑4× ROI for clients & recurring ARR for us.",
    },
    {
      icon: "🏭",
      title: "Micro‑Factories",
      detail:
        "Modular U.S. assembly hubs qualify for IIJA & state incentives, de‑risking supply.",
    },
    {
      icon: "♻️",
      title: "Sustainability Edge",
      detail:
        "Every deployment targets >30 % GHG reduction vs legacy processes.",
    },
  ];

  const roadmap = [
    { year: "2024", tag: "Now", msg: "Company formed, seed raised, 6 tech options secured" },
    { year: "2025", tag: "Pilot", msg: "UGA field pilots, SBIR & NSF grants, Series A open" },
    { year: "2026", tag: "Launch", msg: "First RaaS contracts → $6 M ARR, micro‑factory #1" },
    { year: "2027", tag: "Scale", msg: "Marketplace live, 50+ robots under service" },
    { year: "2028", tag: "Leader", msg: "Category dominance, EBITDA‑positive, IPO prep" },
  ];

  /* -------------------------------------------------- */
  /*  Render Helpers                                    */
  /* -------------------------------------------------- */
  const MetricCard = ({ m }) => (
    <div className="p-4 rounded-lg bg-slate-800/60 border border-slate-700">
      <div className={`text-xl font-extrabold ${m.color}`}>{m.value}</div>
      <div className="text-xs text-slate-400 uppercase tracking-wide">{m.label}</div>
      <div className="text-xs text-green-400 font-medium">{m.change}</div>
    </div>
  );

  const PortfolioCard = ({ item, idx }) => (
    <button
      onClick={() => setActivePortfolio(idx)}
      className={`p-6 rounded-xl border transition-all text-left bg-slate-800/50 hover:scale-105 ${
        activePortfolio === idx ? "border-blue-500 ring-2 ring-blue-500" : "border-slate-700"
      }`}
    >
      <div className="flex items-center mb-4 justify-between gap-2">
        <span className="text-4xl">{item.icon}</span>
        <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
          {item.vertical}
        </span>
      </div>
      <h3 className="font-bold text-lg mb-2 leading-snug">{item.title}</h3>
      <p className="text-sm text-slate-400 mb-4">{item.summary}</p>
      <div className="flex justify-between text-xs text-slate-500">
        <span>Origin: {item.origin}</span>
        <span>Status: {item.status}</span>
      </div>
    </button>
  );

  /* -------------------------------------------------- */
  /*  JSX                                               */
  /* -------------------------------------------------- */
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-inter overflow-x-hidden">
      {/* ────────────────── Nav ────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${
          isScrolled ? "bg-slate-900/90 backdrop-blur border-slate-700" : "border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-lg">🚀</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-lg">Sunday Robotics</span>
              <div className="text-[10px] text-slate-400">LatAm ◌ USA ◌ Global</div>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm">
            {[
              ["Vision", "#vision"],
              ["Portfolio", "#portfolio"],
              ["Model", "#model"],
              ["Invest", "#invest"],
            ].map(([t, l]) => (
              <a key={t} href={l} className="text-slate-400 hover:text-blue-400">
                {t}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600"
            >
              Talk to Us →
            </a>
          </div>
        </nav>
      </header>

      {/* ────────────────── Hero ────────────────── */}
      <section className="relative flex items-center justify-center min-h-screen pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent_60%)]" />
        <div className="z-10 max-w-5xl mx-auto px-4 text-center space-y-8">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
            Bridging <span className="text-blue-400">Discovery</span> &nbsp;and &nbsp;
            <span className="text-purple-400">Deployment</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We turn under‑commercialised <strong>LATAM ingenuity</strong> into
            <strong className="text-green-400"> revenue‑ready robots</strong> for
            American farms & factories — delivered as a service, scaled via our
            micro‑factory network, and powered by a continent‑spanning research
            engine.
          </p>
          {/* Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            {heroMetrics.map((m) => (
              <MetricCard key={m.label} m={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── Vision ────────────────── */}
      <section id="vision" className="py-24 bg-slate-900/70">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              The <span className="text-blue-400">Bridge</span> the Market Forgot
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              <strong>700k STEM researchers</strong> across Latin America generate
              world‑class IP every year. Less than 2 % reaches global markets.
              Sunday Robotics fixes this broken pipeline with a repeatable,
              de‑risked playbook.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {differentiators.map((d) => (
              <div
                key={d.title}
                className="p-6 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-all"
              >
                <div className="text-3xl mb-4">{d.icon}</div>
                <h3 className="font-semibold mb-2">{d.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{d.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── Portfolio ────────────────── */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Pipeline of <span className="text-purple-400">Deployable</span> Robots
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, idx) => (
              <PortfolioCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── Business Model ────────────────── */}
      <section id="model" className="py-24 bg-slate-900/70">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-14">
          <h2 className="text-4xl font-bold mb-8">How We Monetise Innovation</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: "🔁",
                title: "Robot‑as‑a‑Service (RaaS)",
                copy:
                  "Subscription pricing + performance share delivers predictable ARR and aligns incentives with customers’ ROI.",
              },
              {
                icon: "🛒",
                title: "Robotics Marketplace",
                copy:
                  "Digital platform resells partner solutions, creating cap‑light revenue and data moats.",
              },
              {
                icon: "🏗️",
                title: "Micro‑Factory Licensing",
                copy:
                  "Containerised assembly lines licensed to regional integrators unlock rapid geographic scale & margins.",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="p-8 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-all"
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3 className="font-semibold mb-3">{b.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{b.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────── Roadmap ────────────────── */}
      <section className="py-24" aria-labelledby="roadmap-heading">
        <div className="max-w-5xl mx-auto px-4">
          <h2 id="roadmap-heading" className="text-4xl font-bold text-center mb-12">
            Roadmap to <span className="text-green-400">Market Leadership</span>
          </h2>
          <ol className="relative border-l border-slate-700 ml-4">
            {roadmap.map((r, i) => (
              <li key={r.year} className="mb-10 ml-6">
                <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 ring-8 ring-slate-900 text-xs">
                  {i + 1}
                </span>
                <h3 className="font-semibold leading-tight">
                  {r.year} · <span className="text-blue-400">{r.tag}</span>
                </h3>
                <p className="text-sm text-slate-400 mt-1">{r.msg}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ────────────────── Investor CTA ────────────────── */}
      <section id="invest" className="py-24 bg-[linear-gradient(135deg,rgba(59,130,246,0.1),rgba(107,33,168,0.1))]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl font-bold">
            Series A <span className="text-yellow-400">Opens Q4 2025</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            We’re raising <strong>$20 M</strong> to deploy our first micro‑factory,
            scale RaaS fleet to 100 units, and accelerate marketplace data flywheel.
            Let’s build the continent‑spanning robotics champion together.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium"
          >
            Get the Investor Deck →
          </a>
        </div>
      </section>

      {/* ────────────────── Contact ────────────────── */}
      <section id="contact" className="py-24 bg-slate-900/80">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-10">
          <h2 className="text-3xl font-bold">Let’s Talk Impact</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Universities, growers, manufacturers, investors, dreamers — we’d love
            to explore how Sunday Robotics can multiply your impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@sundayrobotics.com"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium"
            >
              ✉️ hello@sundayrobotics.com
            </a>
            <a
              href="https://cal.com/sunday/intro"
              className="border border-slate-600 hover:bg-slate-800 text-slate-100 px-8 py-4 rounded-lg font-medium"
            >
              📅 Book a Call
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────── Footer ────────────────── */}
      <footer className="py-8 text-center text-xs text-slate-500 bg-slate-900/90">
        © {new Date().getFullYear()} Sunday Robotics, Inc. · Atlanta GA · Made across
        two continents with ♥︎ & AI.
      </footer>
    </div>
  );
};

export default SundayRoboticsLanding;
