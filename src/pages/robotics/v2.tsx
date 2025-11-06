// SundayRoboticsLandingV3.jsx
// Versión ultra completa con toda la visión de futuro, detalles de impacto, más contenido estratégico

import React from "react";

const SundayRoboticsLandingV3 = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero */}
      <section className="px-8 pt-32 pb-20 text-center max-w-6xl mx-auto">
        <h1 className="text-7xl md:text-8xl font-extrabold mb-6 leading-tight">
          Sunday Robotics
        </h1>
        <p className="text-2xl text-slate-300 max-w-4xl mx-auto">
          Convertimos innovación académica de LATAM en soluciones robóticas listas para escalar en EE. UU. Aceleramos el paso del laboratorio al campo, del paper a la venta.
        </p>
      </section>

      {/* Visión amplia */}
      <section className="bg-slate-900 py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Una nueva infraestructura para comercializar ciencia</h2>
          <p className="text-lg text-slate-400 mb-4">
            Somos una venture-builder especializada en robótica con sede en Atlanta. Creamos una infraestructura completa para detectar, validar, financiar, ensamblar y escalar soluciones robóticas nacidas en el mundo académico. Nuestra visión es clara: Latinoamérica innova, nosotros la hacemos rentable.
          </p>
          <p className="text-lg text-slate-400">
            El resultado: soluciones listas para el mercado estadounidense, ensambladas en EE. UU., certificadas y con el respaldo de alianzas estratégicas e inversores inteligentes.
          </p>
        </div>
      </section>

      {/* Flujo Completo */}
      <section className="bg-slate-800 py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Cómo lo hacemos</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-6 text-center">
          {[
            ["🔍 Búsqueda y scouting", "Identificamos tecnologías con TRL 4–6 o ideas que necesitan financiación para convertirse en prototipos."],
            ["🔬 Validación técnica", "Diseñamos protocolos de prueba en campo o laboratorio con aliados en EE. UU. y LATAM."],
            ["📊 Regulación & data", "Reunimos la evidencia técnica y regulatoria necesaria para acceder a estándares del mercado americano."],
            ["🏗️ Ensamblaje y certificación", "Desarrollamos componentes y ensamblamos en Georgia con socios locales y sello Made in USA."],
            ["🚀 Comercialización y escalamiento", "Creamos la narrativa de venta, canales, alianzas, marca, y modelo RaaS o de venta directa."]
          ].map(([title, desc], i) => (
            <div key={i} className="bg-slate-700 p-6 rounded-xl shadow-xl">
              <h3 className="text-lg font-semibold text-blue-300 mb-2">{title}</h3>
              <p className="text-slate-200 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Robots actuales */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Portafolio de robots en curso</h2>
        <p className="text-center text-slate-400 mb-10">
          Tecnologías nacidas en universidades públicas que ahora están listas para conquistar mercados agroindustriales y manufactureros.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            ["BerryBot™", "🍓", "Robot autónomo para cosecha de berries con IA y visión computarizada.", "Universidad de Antioquia"],
            ["MobiMilker™", "🐄", "Unidad móvil para ordeño automatizado en fincas medianas.", "U. Nacional de Colombia"],
            ["DryCrop™", "🌾", "Secador robótico solar con sensores para clima y humedad.", "UdeA"],
            ["QualiSight™", "🔍", "Sistema de inspección de calidad con IA en línea de producción.", "UGA + UdeA"],
            ["SeedPilot™", "🌱", "Contador y clasificador de semillas con visión rápida.", "UdeA"],
            ["SpaceSorter™", "📦", "Robot para selección y empaque de productos agrícolas.", "UdeA (RaaS Ready)"]
          ].map(([name, icon, desc, origin], i) => (
            <div key={i} className="p-6 bg-slate-800 rounded-xl border border-slate-700">
              <div className="flex justify-between mb-2">
                <span className="text-3xl">{icon}</span>
                <span className="text-xs text-slate-400">{origin}</span>
              </div>
              <h3 className="text-lg font-bold mb-1">{name}</h3>
              <p className="text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Alianzas Estratégicas */}
      <section className="bg-slate-900 py-20 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Alianzas activas</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            ["UGA (Georgia, USA)", "Validación técnica, protocolos de prueba, regulación"],
            ["Universidad de Antioquia", "Origen de 6 soluciones TRL 7+"],
            ["Tecondor (Colombia)", "Campo de pruebas para agro robótica"],
            ["Fábricas locales en EE. UU.", "Ensamblaje y etiquetado Made in USA"]
          ].map(([name, role], i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-xl">
              <h3 className="font-bold text-blue-300 mb-2">{name}</h3>
              <p className="text-sm text-slate-300">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modelos de Partnership */}
      <section className="py-24 px-6 bg-slate-950">
        <h2 className="text-3xl font-bold mb-12 text-center">Modelos de colaboración</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ["Universidades LATAM", "Reciben visibilidad, fondos, propiedad intelectual compartida y presencia internacional."],
            ["Universidades USA", "Acceso a soluciones disruptivas, validación técnica, equity futuro, y proyectos de grant conjunto."],
            ["Inversionistas", "SAFE o equity. Participación en ensamblaje, RaaS, licencias o revenue share por solución validada."],
          ].map(([title, desc], i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-green-400 transition-all">
              <h3 className="font-bold text-green-300 mb-2">{title}</h3>
              <p className="text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-green-400">Un puente nuevo entre ciencia, capital e industria</h2>
        <p className="text-lg text-slate-400 mb-10">
          Sunday Robotics lidera una nueva era de transferencia tecnológica efectiva. Si representas una universidad, empresa, agencia o fondo, conversemos.
        </p>
        <a
          href="mailto:cata@sundayrobotics.com"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium"
        >
          📩 Escríbenos hoy
        </a>
      </section>

      <footer className="py-6 text-center text-xs text-slate-500 border-t border-slate-700">
        © {new Date().getFullYear()} Sunday Robotics, Inc. · Atlanta, GA
      </footer>
    </div>
  );
};

export default SundayRoboticsLandingV3;
