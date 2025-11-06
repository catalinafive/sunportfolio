import React, { useState } from 'react';
import { ChevronRight, DollarSign, Users, Zap, Globe, Target, TrendingUp, CheckCircle, Calculator, FileText, Leaf, Cog } from 'lucide-react';

const SundayAgTechWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const NavigationMenu = () => (
    <nav className="bg-green-900 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-300">Sunday AgTech</h1>
        <div className="flex space-x-6">
          {[
            { id: 'home', label: 'Inicio' },
            { id: 'agribusiness', label: 'Soluciones AgTech' },
            { id: 'innovators', label: 'Red de Innovación' },
            { id: 'success', label: 'Casos de Éxito' },
            { id: 'about', label: 'Nosotros' },
            { id: 'contact', label: 'Contacto' }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`px-3 py-2 rounded ${activeSection === item.id ? 'bg-green-600' : 'hover:bg-green-800'}`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const HeroSection = () => (
    <div className="bg-gradient-to-br from-green-800 to-green-900 text-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Soluciones AgTech Personalizadas, Hechas en América
        </h1>
        <p className="text-xl mb-8 max-w-4xl mx-auto">
          Identificamos brechas críticas de automatización en la agricultura estadounidense y co-desarrollamos soluciones robóticas personalizadas con talento global de innovación. Del concepto a la comercialización, originado globalmente, construido en América.
        </p>
        <div className="flex gap-6 justify-center">
          <button 
            onClick={() => setActiveSection('agribusiness')}
            className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg transition-colors flex items-center"
          >
            <Leaf className="mr-2" size={20} />
            Soluciona tu Desafío Agrícola
          </button>
          <button 
            onClick={() => setActiveSection('innovators')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg transition-colors flex items-center"
          >
            <Users className="mr-2" size={20} />
            Únete Como Innovador
          </button>
        </div>
      </div>
    </div>
  );

  const AgribusinessSection = () => (
    <div className="p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Transforma tus Operaciones con AgTech Personalizada</h2>
        <p className="text-xl text-center mb-8 text-gray-600">
          No vendemos robots estándar. Identificamos tus desafíos específicos y co-desarrollamos soluciones de precisión construidas en América.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: "Escasez de Mano de Obra",
              icon: <Users className="w-8 h-8 text-green-600" />,
              items: ["Brechas de fuerza laboral estacional", "Automatización de tareas repetitivas", "Necesidades de operación 24/7"]
            },
            {
              title: "Agricultura de Precisión", 
              icon: <Target className="w-8 h-8 text-blue-600" />,
              items: ["Aplicaciones de tasa variable", "Precisión en monitoreo de cultivos", "Decisiones basadas en datos"]
            },
            {
              title: "Eficiencia Operacional",
              icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
              items: ["Optimización de cosecha", "Automatización de control de calidad", "Reducción de costo por acre"]
            },
            {
              title: "Requisitos de Sostenibilidad",
              icon: <Leaf className="w-8 h-8 text-green-600" />,
              items: ["Uso reducido de químicos", "Conservación de agua", "Seguimiento de huella de carbono"]
            }
          ].map((area, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {area.icon}
                <h3 className="text-lg font-bold ml-3">{area.title}</h3>
              </div>
              <ul className="space-y-2">
                {area.items.map((item, j) => (
                  <li key={j} className="text-sm flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Proceso de Co-desarrollo</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1. Evaluación de Granja",
                timeline: "Semana 1-2",
                activities: ["Evaluación in-situ", "Análisis ROI", "Definición de solución"]
              },
              {
                step: "2. Diseño Personalizado", 
                timeline: "Semana 3-8",
                activities: ["Especificaciones técnicas", "Emparejamiento de talento global", "Desarrollo de prototipo"]
              },
              {
                step: "3. Pruebas de Campo",
                timeline: "Mes 3-6", 
                activities: ["Validación en mundo real", "Optimización de rendimiento", "Integración de retroalimentación"]
              },
              {
                step: "4. Despliegue Comercial",
                timeline: "Mes 7-12",
                activities: ["Ensamblaje Made in USA", "Entrenamiento y soporte", "Estrategia de escalamiento"]
              }
            ].map((phase, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-bold mb-2 text-green-600">{phase.step}</h4>
                <p className="text-sm font-semibold mb-3 text-gray-600">{phase.timeline}</p>
                <ul className="space-y-1">
                  {phase.activities.map((activity, j) => (
                    <li key={j} className="text-sm flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Modelos de Alianza</h3>
            <div className="space-y-6">
              {[
                {
                  model: "Alianza de Co-desarrollo",
                  investment: "$100K - $500K",
                  timeline: "6-12 meses",
                  share: "60/40 (Granja/Sunday)",
                  benefits: ["Propiedad de solución personalizada", "Derechos exclusivos de tecnología", "Ventaja competitiva"]
                },
                {
                  model: "Aceleración de Innovación", 
                  investment: "$50K - $150K",
                  timeline: "3-6 meses",
                  share: "70/30 (Granja/Sunday)",
                  benefits: ["Prueba de concepto", "Datos de validación de campo", "Evaluación tecnológica"]
                }
              ].map((model, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-blue-200">
                  <h4 className="text-lg font-bold mb-4 text-blue-600">{model.model}</h4>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div><strong>Inversión:</strong> {model.investment}</div>
                    <div><strong>Timeline:</strong> {model.timeline}</div>
                    <div className="col-span-2"><strong>Revenue Share:</strong> {model.share}</div>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Beneficios:</p>
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

          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-purple-600">Herramientas Automatizadas</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <div className="flex items-center mb-4">
                  <Calculator className="w-6 h-6 text-purple-600 mr-3" />
                  <h4 className="text-lg font-bold">Calculadora ROI</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Ahorros en costos laborales</li>
                  <li>• Proyecciones de mejora de rendimiento</li>
                  <li>• Ganancias de eficiencia operacional</li>
                  <li>• Análisis de período de recuperación</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-purple-600 mr-3" />
                  <h4 className="text-lg font-bold">Generador LOI</h4>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Definición de alcance del proyecto</li>
                  <li>• Requerimientos técnicos</li>
                  <li>• Términos de inversión</li>
                  <li>• Métricas de rendimiento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Múltiples Vehículos de Financiamiento</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                vehicle: "Tarifas Co-desarrollo",
                range: "$50K-$500K",
                timeline: "30-60 días",
                source: "Clientes agronegocio"
              },
              {
                vehicle: "Grants USDA/Gobierno",
                range: "$50K-$2M", 
                timeline: "3-6 meses",
                source: "SBIR, NIFA, Rural Development"
              },
              {
                vehicle: "Inversión AgTech VC",
                range: "$500K-$5M",
                timeline: "3-6 meses", 
                source: "AgFunder, S2G Ventures"
              },
              {
                vehicle: "Alianzas Corporativas",
                range: "$250K-$2M",
                timeline: "Variable",
                source: "John Deere, Cargill, Bayer"
              }
            ].map((fund, i) => (
              <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                <h4 className="font-bold text-green-600 mb-2">{fund.vehicle}</h4>
                <div className="space-y-1 text-sm">
                  <p><strong>Rango:</strong> {fund.range}</p>
                  <p><strong>Timeline:</strong> {fund.timeline}</p>
                  <p><strong>Fuente:</strong> {fund.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const InnovatorsSection = () => (
    <div className="p-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Únete al Premier Venture-Builder AgTech de América</h2>
        <p className="text-xl text-center mb-8 text-gray-600">
          Buscamos las mejores innovaciones agrícolas del mundo y las llevamos a mercados estadounidenses. Filtrado por calidad, validado por mercado, construido en América.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              category: "Operaciones de Campo Autónomas",
              icon: <Cog className="w-8 h-8 text-blue-600" />,
              items: ["Sistemas de siembra, cosecha, monitoreo", "Navegación y evasión de obstáculos", "Capacidades de gestión de flota"]
            },
            {
              category: "Tecnología de Aplicación de Precisión", 
              icon: <Target className="w-8 h-8 text-green-600" />,
              items: ["Sistemas de tasa variable", "Soluciones de tratamiento puntual", "Capacidades de ajuste en tiempo real"]
            },
            {
              category: "Plataformas de Datos y Analytics",
              icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
              items: ["Redes de sensores IoT", "Modelado predictivo", "Sistemas de apoyo a decisiones"]
            },
            {
              category: "Automatización Post-Cosecha",
              icon: <Zap className="w-8 h-8 text-orange-600" />,
              items: ["Clasificación y empaque", "Evaluación de calidad", "Optimización de almacenamiento"]
            }
          ].map((tech, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {tech.icon}
                <h3 className="text-lg font-bold ml-3">{tech.category}</h3>
              </div>
              <ul className="space-y-2">
                {tech.items.map((item, j) => (
                  <li key={j} className="text-sm flex items-start">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Pathway de Alianza</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stage: "1. Evaluación de Innovación",
                activities: ["Evaluación tecnológica", "Análisis de ajuste de mercado", "Hoja de ruta de desarrollo"]
              },
              {
                stage: "2. Validación de Mercado USA",
                activities: ["Introducción a clientes", "Coordinación de pruebas de campo", "Orientación regulatoria"]
              },
              {
                stage: "3. Soporte de Comercialización",
                activities: ["Configuración de manufactura", "Desarrollo de canales de venta", "Acceso a capital de crecimiento"]
              }
            ].map((step, i) => (
              <div key={i} className="bg-blue-50 p-6 rounded-lg text-center">
                <h4 className="text-lg font-bold mb-4 text-blue-600">{step.stage}</h4>
                <ul className="space-y-2">
                  {step.activities.map((activity, j) => (
                    <li key={j} className="text-sm">{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-100 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Proceso de Aplicación</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Formulario Simple de 3 Pasos:</h4>
              <ol className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                  Descripción de tecnología
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                  Etapa de desarrollo
                </li>
                <li className="flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                  Antecedentes del equipo
                </li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Criterios de Selección:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Nivel de innovación técnica
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Tamaño de oportunidad de mercado
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Capacidad de ejecución del equipo
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Preparación para mercado USA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SuccessStoriesSection = () => (
    <div className="p-8 bg-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Casos de Éxito</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg border border-green-200">
            <h3 className="text-2xl font-bold mb-4 text-green-600">Caso: "CropBot Pro"</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-700">Desafío:</h4>
                <p className="text-sm">Granja de almendras en California necesitaba timing de cosecha de precisión</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Solución:</h4>
                <p className="text-sm">Sistema de monitoreo de cultivos impulsado por IA con recolección autónoma de datos</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Resultados:</h4>
                <ul className="text-sm space-y-1">
                  <li>• 23% aumento en rendimiento</li>
                  <li>• $400K ingresos adicionales anuales</li>
                  <li>• 8 meses de concepto a despliegue</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Caso: "WeedZap System"</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-700">Desafío:</h4>
                <p className="text-sm">Granja de vegetales orgánicos luchando con deshierbe intensivo en mano de obra</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Solución:</h4>
                <p className="text-sm">Robot de deshierbe selectivo basado en visión computacional</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-700">Resultados:</h4>
                <ul className="text-sm space-y-1">
                  <li>• 85% reducción de mano de obra</li>
                  <li>• 40% ahorros en costos</li>
                  <li>• 6 meses desarrollo, 3 meses validación</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Métricas Objetivo (Año 1)</h3>
          <div className="grid md:grid-cols-5 gap-6 text-center">
            {[
              { metric: "5-10", label: "Proyectos Activos" },
              { metric: "$500K-$1M", label: "Revenue" },
              { metric: "2-3", label: "Soluciones Comercializadas" },
              { metric: "50+", label: "Prospectos Agronegocio" },
              { metric: "20+", label: "Innovaciones Validadas" }
            ].map((item, i) => (
              <div key={i} className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{item.metric}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AboutSection = () => (
    <div className="p-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Sobre Sunday AgTech</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-green-600">Nuestra Misión</h3>
            <p className="text-lg">
              "Acelerar la innovación agrícola conectando talento global con oportunidades de mercado estadounidense, entregando soluciones personalizadas construidas en América."
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">La Ventaja Sunday</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Globe className="w-5 h-5 text-blue-500 mr-2" />
                Acceso a pool de talento mundial
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                Filtración rigurosa de calidad
              </li>
              <li className="flex items-center">
                <Target className="w-5 h-5 text-purple-500 mr-2" />
                Enfoque profundo en mercado agrícola
              </li>
              <li className="flex items-center">
                <Zap className="w-5 h-5 text-orange-500 mr-2" />
                Velocidad al mercado optimizada
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">El Método Sunday™</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1. Identificar", desc: "Brechas de mercado y puntos de dolor del cliente" },
              { step: "2. Buscar", desc: "Talento global de innovación y soluciones" },
              { step: "3. Validar", desc: "Factibilidad técnica y demanda de mercado" },
              { step: "4. Construir", desc: "Desarrollo y pruebas personalizadas" },
              { step: "5. Desplegar", desc: "Comercialización Made in USA" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="bg-green-100 p-4 rounded-lg mb-2">
                  <h4 className="font-bold text-green-600">{item.step}</h4>
                </div>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Ventajas Competitivas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4 text-green-600">Propuesta de Valor Única</h4>
              <ul className="space-y-2 text-sm">
                <li>• Único venture-builder enfocado en AgTech en el mercado</li>
                <li>• Acceso a talento global con experticia de mercado USA</li>
                <li>• Posicionamiento Made in USA aborda preocupaciones del mercado</li>
                <li>• Modelo de co-inversión del cliente asegura compromiso</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-blue-600">Barreras de Entrada</h4>
              <ul className="space-y-2 text-sm">
                <li>• Red de innovación curada toma años construir</li>
                <li>• Experticia de dominio agrícola es conocimiento especializado</li>
                <li>• Relaciones con clientes requieren credibilidad de industria</li>
                <li>• Reputación de calidad se gana a través de proyectos exitosos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactSection = () => (
    <div className="p-8 bg-green-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">¿Listo para Transformar tu Agricultura?</h2>
        <p className="text-xl mb-8 text-gray-600">
          Conecta con nosotros para descubrir cómo podemos co-desarrollar la solución perfecta para tus desafíos agrícolas.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-600">Para Agronegocio</h3>
            <p className="text-sm mb-4">¿Tienes desafíos de automatización en tu operación agrícola?</p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg w-full">
              Programa una Evaluación Gratuita
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-600">Para Innovadores</h3>
            <p className="text-sm mb-4">¿Tienes una tecnología agrícola que quieres llevar al mercado USA?</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full">
              Aplica a Nuestro Programa
            </button>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-600 mb-4">
            📧 contacto@sundayagtech.com | 📞 +1 (404) XXX-XXXX | 📍 Atlanta, Georgia
          </p>
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case 'agribusiness':
        return <AgribusinessSection />;
      case 'innovators':
        return <InnovatorsSection />;
      case 'success':
        return <SuccessStoriesSection />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavigationMenu />
      {renderSection()}
      
      {/* Footer Simple */}
      <footer className="bg-green-900 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-300">Sunday AgTech</h3>
              <p className="text-sm text-gray-300">
                Venture-builder premier de América enfocado en agricultura, conectando talento global con oportunidades de mercado estadounidense.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Soluciones</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Co-desarrollo AgTech</li>
                <li>Validación técnica</li>
                <li>Made in USA manufacturing</li>
                <li>Comercialización</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Innovadores</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Programa de aceleración</li>
                <li>Financiamiento TRL 3-9</li>
                <li>Acceso a mercado USA</li>
                <li>Soporte regulatorio</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>📧 contacto@sundayagtech.com</li>
                <li>📞 +1 (404) XXX-XXXX</li>
                <li>📍 Atlanta, Georgia</li>
                <li>🌐 sundayagtech.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800 pt-6 text-center">
            <p className="text-sm text-gray-400">
              © 2025 Sunday AgTech. Todos los derechos reservados. | Política de Privacidad | Términos de Servicio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SundayAgTechWebsite;