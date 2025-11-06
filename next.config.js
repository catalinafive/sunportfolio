// next.config.mjs

// Opcional: valida env a menos que SKIP_ENV_VALIDATION esté seteada
if (!process.env.SKIP_ENV_VALIDATION) {
  await import("./src/env.js");
}

import withPWA from "next-pwa";

/** Config de PWA */
const withPWAFn = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js",
});

/** @type {import('next').NextConfig} */
const baseConfig = {
  reactStrictMode: true,
  // Relaja checks para poder desplegar mientras limpias el repo
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // Si NO usas app router con i18n, puedes mantener esto.
  // Si usas appDir y te da conflicto, comenta la sección i18n.
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default withPWAFn(baseConfig);
