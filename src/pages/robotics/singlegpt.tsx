<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Robot Limpiador de Paneles Solares – Sunday Robotics</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.4/dist/tailwind.min.css" rel="stylesheet" />
  <style>
    /* utilidades simples */
    .tab-active { @apply border-primary text-primary; }
    .timeline-dot { @apply w-3 h-3 rounded-full bg-primary; }
  </style>
</head>
<body class="bg-gray-50 text-gray-900 scroll-smooth">
  <script>
    // Datos centrales (podrías cargarlos desde Firestore / API)
    const solutionData = {
      id: "solar-cleaner",
      name: "Robot Limpiador de Paneles Solares",
      icon: "☀️",
      tagline: "Adaptación del limpiador de techos plásticos (70 % reutilizado)",
      origin: "🇨🇴 TRL‑7",
      usStatus: "60 % localized · UL 508A pend.",
      adaptability: "media",
      performance: { lossRecovery: "6 % energía/año", speed: "350 m²/h", autonomy: "8 h" },
      pricing: {
        coDev: { customerShare: 80000, total: 160000, yourIncome: 92000, duration: "6 meses" },
        sale: { capex: 600000, margin: "35 %", warranty: "18 meses", maint: 60000 },
        raas: { base: 5000, variable: 0.0015, contract: "4 años" }
      },
      roi: { sale: "2.1 años", raas: "2.0×", coDev: "1.7×" },
      compliance: [
        { name: "Sprint L1 – UL 508A tablero", duration: "6 sem", status: "done" },
        { name: "Sprint L2 – ANSI R15.06 safety", duration: "4 sem", status: "active" },
        { name: "Field Eval NRTL", duration: "2 sem", status: "pending" }
      ]
    };
  </script>

  <!-- HERO -->
  <header class="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white px-6 py-20 overflow-hidden">
    <div class="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.3),transparent_55%)]"></div>
    <div class="relative max-w-5xl mx-auto flex flex-col lg:flex-row items-start gap-10">
      <div class="text-6xl select-none" id="hero-icon"></div>
      <div>
        <h1 class="text-4xl font-bold mb-4" id="hero-title"></h1>
        <p class="text-lg mb-6" id="hero-tag"></p>
        <div class="flex flex-wrap gap-2 text-sm" id="badges"></div>
      </div>
    </div>
  </header>

  <!-- NAV TABS -->
  <nav class="sticky top-0 z-20 bg-white shadow">
    <ul class="flex max-w-5xl mx-auto px-6">
      <li class="flex-1 text-center"><a href="#overview" class="block py-3 border-b-2">Visión General</a></li>
      <li class="flex-1 text-center"><a href="#acquisition" class="block py-3 border-b-2">Modelos de Adquisición</a></li>
      <li class="flex-1 text-center"><a href="#roi" class="block py-3 border-b-2">Calculadora ROI</a></li>
      <li class="flex-1 text-center"><a href="#compliance" class="block py-3 border-b-2">Compliance USA</a></li>
    </ul>
  </nav>

  <!-- OVERVIEW -->
  <section id="overview" class="py-16 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">1. Visión General</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="font-semibold mb-2">Problema</h3>
          <p>
            La suciedad reduce hasta un <strong>6 % de producción anual</strong> en parques solares utility‑scale.
            Los métodos manuales son lentos, riesgosos y consumen agua.
          </p>
          <h3 class="font-semibold mt-6 mb-2">Arquitectura propuesta</h3>
          <ul class="list-disc list-inside space-y-1 text-sm">
            <li>Chasis sobre riel reutilizado (del robot de techos).</li>
            <li>Cepillos rotativos microfibra + spray agua desionizada.</li>
            <li>Mapeo soiling AI + navegación RTK‑GPS.</li>
            <li>Panel de control IoT (dashboard KPI / alertas).</li>
          </ul>
          <h3 class="font-semibold mt-6 mb-2">Reutilización vs Nuevos módulos</h3>
          <ul class="list-disc list-inside text-sm">
            <li><span class="text-green-600">70 % reutilizado:</span> chasis, tren motriz, controladores.</li>
            <li><span class="text-orange-500">30 % nuevo:</span> algoritmo soiling‑map, kits UL, sellado IP66.</li>
          </ul>
        </div>
        <div class="bg-gray-50 p-6 rounded-xl">
          <h3 class="font-semibold mb-4">Indicadores clave</h3>
          <div class="grid grid-cols-2 gap-4 text-sm">
            <div><span class="text-muted">Energía recuperada</span><br /><span class="font-bold">+6 %/año</span></div>
            <div><span class="text-muted">Velocidad</span><br /><span class="font-bold" id="perf-speed"></span></div>
            <div><span class="text-muted">Autonomía</span><br /><span class="font-bold" id="perf-auto"></span></div>
            <div><span class="text-muted">Adaptabilidad</span><br /><span class="font-bold capitalize" id="adapt"></span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ACQUISITION -->
  <section id="acquisition" class="py-16 px-6 bg-gray-100">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-8">2. Modelos de Adquisición</h2>
      <div class="overflow-auto">
        <table class="min-w-full text-sm border">
          <thead class="bg-gray-200">
            <tr>
              <th class="p-3 text-left">KPI</th>
              <th class="p-3 text-left">Co‑development</th>
              <th class="p-3 text-left">Venta directa</th>
              <th class="p-3 text-left">RaaS</th>
            </tr>
          </thead>
          <tbody id="acq-table" class="divide-y"></tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- ROI CALCULATOR -->
  <section id="roi" class="py-16 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">3. Calculadora de ROI</h2>
      <p class="mb-4 text-sm text-gray-600">Introduce tus cifras para estimar el retorno comparando los tres modelos.</p>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <label class="block text-sm">Energía perdida por suciedad (kWh/año)
            <input type="number" id="input-kwh" class="mt-1 w-full border rounded p-2" value="200000" />
          </label>
          <label class="block text-sm">Precio de venta de energía (USD/kWh)
            <input type="number" id="input-price" class="mt-1 w-full border rounded p-2" value="0.05" step="0.01" />
          </label>
          <label class="block text-sm">Horas de limpieza manual actuales (h/año)
            <input type="number" id="input-hours" class="mt-1 w-full border rounded p-2" value="1500" />
          </label>
          <label class="block text-sm">Costo hora mano de obra (USD)
            <input type="number" id="input-labor" class="mt-1 w-full border rounded p-2" value="18" />
          </label>
          <button class="bg-primary text-white px-4 py-2 rounded" onclick="calcROI()">Calcular</button>
        </div>
        <div id="roi-output" class="bg-gray-50 p-6 rounded-xl text-sm"></div>
      </div>
    </div>
  </section>

  <!-- COMPLIANCE TIMELINE -->
  <section id="compliance" class="py-16 px-6 bg-gray-100">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-6">4. Roadmap de Compliance USA</h2>
      <ol class="relative border-l border-primary/30" id="timeline"></ol>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-20 bg-primary text-white text-center">
    <h2 class="text-3xl font-bold mb-4">¿Listo para avanzar?</h2>
    <p class="mb-6">Solicita tu propuesta detallada o únete al programa de co‑desarrollo.</p>
    <a href="#" class="inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow">Solicitar Propuesta</a>
  </section>

  <script>
    // Render hero info
    document.getElementById("hero-icon").textContent = solutionData.icon;
    document.getElementById("hero-title").textContent = solutionData.name;
    document.getElementById("hero-tag").textContent = solutionData.tagline;
    const badgesEl = document.getElementById("badges");
    [solutionData.origin, solutionData.usStatus].forEach((txt) => {
      const span = document.createElement("span");
      span.className = "px-2 py-0.5 bg-white/20 rounded-full";
      span.textContent = txt;
      badgesEl.appendChild(span);
    });
    document.getElementById("perf-speed").textContent = solutionData.performance.speed;
    document.getElementById("perf-auto").textContent = solutionData.performance.autonomy;
    document.getElementById("adapt").textContent = solutionData.adaptability;

    // Acquisition table
    const acqBody = document.getElementById("acq-table");
    const rows = [
      ["CapEx inicial", `US$ ${solutionData.pricing.coDev.customerShare.toLocaleString()}", `US$ ${solutionData.pricing.sale.capex.toLocaleString()}", "Cero"],
      ["Propiedad", "IP 50/50", "100 % cliente", "Licencia de uso"],
      ["Costo mensual", "N/A", `Mntto US$ ${solutionData.pricing.sale.maint.toLocaleString()}`, `Base US$ ${solutionData.pricing.raas.base.toLocaleString()} + var`],
      ["ROI estimado", solutionData.roi.coDev, solutionData.roi.sale, solutionData.roi.raas],
      ["Duración contrato", solutionData.pricing.coDev.duration, "Venta única", solutionData.pricing.raas.contract],
    ];
    rows.forEach(r => {
      const tr = document.createElement("tr");
      r.forEach((c,i)=>{
        const td=document.createElement("td");
        td.className="p-3";
        td.textContent=c;
        tr.appendChild(td);
      });
      acqBody.appendChild(tr);
    });

    // Compliance timeline
    const tl = document.getElementById("timeline");
    solutionData.compliance.forEach(c => {
      const li = document.createElement("li");
      li.className="mb-6 ml-4";
      li.innerHTML = `<span class="timeline-dot absolute -left-1.5"></span><h4 class="font-semibold">${c.name}</h4><p class="text-xs text-gray-600">${c.duration}</p>`;
      if(c.status==="done") li.querySelector(".timeline-dot").classList.add("bg-green-500");
      if(c.status==="active") li.querySelector(".timeline-dot").classList.add("animate-pulse");
      tl.appendChild(li);
    });

    // ROI calc
    function calcROI(){
      const kwh=parseFloat(document.getElementById("input-kwh").value)||0;
      const price=parseFloat(document.getElementById("input-price").value)||0;
      const hours=parseFloat(document.getElementById("input-hours").value)||0;
      const labor=parseFloat(document.getElementById("input-labor").value)||0;
      const energyLoss=kwh*price;
      const laborCost=hours*labor;
      const valueRecovered=energyLoss+laborCost;
      const coDevPayback=(solutionData.pricing.coDev.customerShare)/(valueRecovered*0.6);
      const salePayback=(solutionData.pricing.sale.capex)/(valueRecovered);
      const raasAnnual費=(solutionData.pricing.raas.base*12)+(valueRecovered*solutionData.pricing.raas.variable);
      const out=document.getElementById("roi-output");
      out.innerHTML=`<p>Ahorro anual estimado: <strong>US$ ${valueRecovered.toLocaleString()}</strong></p>
      <ul class="mt-4 space-y-1">
        <li>🛠️ Co-dev: Payback ≈ <strong>${coDevPayback.toFixed(1)} años</strong></li>
        <li>💰 Venta: Payback ≈ <strong>${salePayback.toFixed(1)} años</strong></li>
        <li>📈 RaaS: Fee anual ≈ <strong>US$ ${raasAnnual費.toLocaleString()}</strong></li>
      </ul>`;
    }
  </script>
</body>
</html>
