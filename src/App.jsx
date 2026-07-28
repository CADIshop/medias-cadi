import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

// Si tienes estos componentes en tu proyecto, puedes descomentarlos:
// import ScrollToTopButton from "./components/ScrollToTopButton";

const I = ({ type, className = "h-5 w-5" }) => {
  const base = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const p = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
    shirt: (
      <path d="M20.4 7.5 16 4l-2 2h-4L8 4 3.6 7.5 6 11v9h12v-9l2.4-3.5Z" />
    ),
    spark: (
      <>
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
        <path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" />
      </>
    ),
    factory: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V9l5 3V9l5 3V6h4v15" />
        <path d="M9 17h1" />
        <path d="M14 17h1" />
      </>
    ),
    box: (
      <>
        <path d="M21 8v10a2 2 0 0 1-1 1.7l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 18V8" />
        <path d="M12 12 3.3 7" />
        <path d="m12 12 8.7-5" />
        <path d="M12 12v10" />
      </>
    ),
    chat: (
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    ),
    check: <path d="M20 6 9 17l-5-5" />,
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    phone: (
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />
    ),
    mail: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="m22 6-10 7L2 6" />
      </>
    ),
    pin: (
      <>
        <path d="M12 22s7-5 7-12a7 7 0 0 0-14 0c0 7 7 12 7 12Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    star: (
      <path d="m12 2 3 6 6 .9-4.5 4.4 1.1 6.2L12 16.5 6.4 19.5l1.1-6.2L3 8.9 9 8l3-6Z" />
    ),
    layers: (
      <>
        <path d="m12 2 10 5-10 5L2 7l10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </>
    ),
    refresh: (
      <>
        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
        <path d="M16 16h5v5" />
      </>
    ),
  };

  return <svg {...base}>{p[type]}</svg>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const models = [
  {
    name: "Taloneras",
    tag: "Uso casual",
    text: "Formato discreto, fresco y de alta rotación para líneas urbanas y venta diaria.",
    images: [
      "/taloneras-1.jpg",
      "/taloneras-2.jpg",
      "/taloneras-3.jpg",
      "/taloneras-4.jpg",
    ],
  },
  {
    name: "Tobilleras",
    tag: "Mayorista",
    text: "Versátiles para empresas, colegios, promociones y negocios de distribución.",
    images: [
      "/tobilleras-1.jpg",
      "/tobilleras-2.jpg",
      "/tobilleras-3.jpg",
      "/tobilleras-4.jpg",
    ],
  },
  {
    name: "3/4",
    tag: "Institucional",
    text: "Mayor cobertura para uniformes, campañas corporativas y pedidos especiales.",
    images: [
      "/medias-3-4-1.jpg",
      "/medias-3-4-2.jpg",
      "/medias-3-4-3.jpg",
      "/medias-3-4-4.jpg",
    ],
  },
  {
    name: "Futsal",
    tag: "Deportivo",
    text: "Pensadas para movimiento intenso, equipos, academias y entrenamientos.",
    images: [
      "/futsal-1.jpg",
      "/futsal-2.jpg",
      "/futsal-3.jpg",
      "/futsal-4.jpg",
    ],
  },
];

const services = [
  {
    image: "/servicios/diseno-y-desarrollo.jpg",
    title: "Diseño y desarrollo",
    text: "Convertimos tu idea en una propuesta clara: modelo, colores, tallas, estilo, diseño y presentación del producto. Te asesoramos digitalmente para crear una línea lista para vender.",
  },
  {
    image: "/servicios/produccion-mayorista.jpg",
    title: "Producción mayorista",
    text: "Fabricamos por volumen con procesos ordenados, control de tiempos y consistencia entre lotes para marcas, empresas e instituciones.",
  },
  {
    image: "/servicios/marca-y-presentacion.jpg",
    title: "Marca e identidad",
    text: "Ayudamos a desarrollar medias con identidad propia mediante logo, diseño Jacquard y opciones de personalización para fortalecer tu marca.",
  },
];

const products = [
  "Medias y calcetines para empresas, colegios, clubes, academias e instituciones públicas o privadas.",
  "Producción por volumen desde 100 pares para cualquier tipo de negocio o institución.",
  "Marca blanca para negocios que desean vender medias con su propia identidad comercial.",
  "Personalización con marca, logo, diseño Jacquard y etiqueta según el objetivo del pedido.",
  "Líneas para clientes corporativos, distribuidores, emprendedores y negocios textiles.",
  "Mangas industriales en algodón, nylon, poliéster y dralón para distintas aplicaciones.",
];

const advantages = [
  {
    icon: "shield",
    title: "Composición confiable",
    text: "Fibra seleccionada de alta densidad con spandex y elástico para suavidad, ajuste y resistencia.",
  },
  {
    icon: "factory",
    title: "Producción flexible",
    text: "Adaptamos modelo, presentación y volumen según tu canal de venta o institución.",
  },
  {
    icon: "chat",
    title: "Atención directa",
    text: "Cotización por WhatsApp, coordinación rápida y seguimiento de tu pedido mayorista.",
  },
  {
    icon: "star",
    title: "Enfoque de marca",
    text: "Tu producto no solo se fabrica: se presenta para competir mejor en el mercado.",
  },
];

const process = [
  {
    icon: "chat",
    title: "1. Requerimiento",
    text: "Nos comentas el modelo, cantidad, tallas, colores y objetivo del pedido.",
  },
  {
    icon: "spark",
    title: "2. Propuesta",
    text: "Definimos una solución visual, técnica y comercial adecuada para tu negocio.",
  },
  {
    icon: "factory",
    title: "3. Fabricación",
    text: "Producimos el lote con control de calidad y seguimiento del avance.",
  },
  {
    icon: "box",
    title: "4. Entrega",
    text: "Despachamos el pedido organizado para venta, distribución o uso institucional.",
  },
];

export default function LandingMediasMayoristas() {
  const [cantidad, setCantidad] = useState("500");
  const [unidadCantidad, setUnidadCantidad] = useState("pares");
  const [modelo, setModelo] = useState("Tobilleras");
  const [nombre, setNombre] = useState("");
  const [tipoCliente, setTipoCliente] = useState("Emprendedor");
  const [objetivo, setObjetivo] = useState("Venta al por mayor");
  const [personalizacion, setPersonalizacion] = useState("Solo medias");
  const [mensaje, setMensaje] = useState("");
  const [activeSlide, setActiveSlide] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % models.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fb] text-slate-950">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-slate-300/40 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/80 bg-white/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center md:h-12 md:w-12">
              <img
                src="/logo-cadi.png"
                alt="Cadi Textil Logo"
                className="h-11 w-11 rounded-xl object-contain md:h-12 md:w-12"
              />
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">Cadi Textil</p>
              <p className="text-xs font-medium text-slate-500">
                Fabricación textil al por mayor
              </p>
            </div>
          </div>

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white lg:hidden"
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#servicios" className="hover:text-cyan-700">
              Servicios
            </a>
            <a href="#fabricamos" className="hover:text-cyan-700">
              Qué fabricamos
            </a>
            <a href="#modelos" className="hover:text-cyan-700">
              Modelos
            </a>
            <a href="#proceso" className="hover:text-cyan-700">
              Proceso
            </a>
            <a href="#cotizacion" className="hover:text-cyan-700">
              Cotización
            </a>
          </nav>
        </div>

        {openMenu && (
          <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg lg:hidden">
            <div className="grid gap-3 text-sm font-black text-slate-700">
              <a href="#servicios" onClick={() => setOpenMenu(false)}>
                Servicios
              </a>
              <a href="#fabricamos" onClick={() => setOpenMenu(false)}>
                Qué fabricamos
              </a>
              <a href="#modelos" onClick={() => setOpenMenu(false)}>
                Modelos
              </a>
              <a href="#proceso" onClick={() => setOpenMenu(false)}>
                Proceso
              </a>
              <a href="#cotizacion" onClick={() => setOpenMenu(false)}>
                Cotización
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* HERO 2.0 */}
        <section className="relative overflow-hidden bg-slate-950 text-slate-100 pt-12 pb-16 lg:pt-20 lg:pb-28">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
                <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs font-bold uppercase tracking-wider text-cyan-400 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  DESDE 100 PARES • DISEÑO PERSONALIZADO
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                  Crea tu propia marca de medias con un proveedor que te acompaña en cada paso.
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                  Fabricamos medias personalizadas para emprendedores, empresas, clubes deportivos y distribuidores desde 100 pares. Desarrollamos tu diseño junto a ti y solo iniciamos la producción cuando apruebas el resultado.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <a
                    href="#cotizacion"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-base transition-all duration-200 shadow-lg shadow-cyan-500/20 active:scale-[0.98]"
                  >
                    Solicitar cotización
                    <I type="arrow" className="w-5 h-5" />
                  </a>

                  <a
                    href="#modelos"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-black text-base transition-all duration-200 active:scale-[0.98]"
                  >
                    Ver modelos
                  </a>
                </div>

                <div className="pt-3 grid grid-cols-2 gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 font-medium">
                  <div className="flex items-center gap-2">
                    <I type="check" className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Desde 100 pares</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <I type="check" className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Diseño personalizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <I type="check" className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Producción bajo aprobación</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <I type="check" className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Atención personalizada</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 flex flex-col justify-between overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-cyan-500/5 blur-xl pointer-events-none" />

                  <div className="flex justify-between items-center z-10">
                    <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                      CADI TEXTIL • LAB
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-800 text-cyan-300 border border-slate-700">
                      TU LOGO AQUÍ
                    </span>
                  </div>

                  <div className="my-auto text-center space-y-4 z-10 py-6">
                    <div className="w-28 h-28 mx-auto rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <I type="layers" className="w-12 h-12 text-cyan-400 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-base font-bold text-slate-100">Personalización Integral</p>
                      <p className="text-xs text-slate-400">Tejido Jacquard • Etiqueta de Marca • Packaging</p>
                    </div>
                  </div>

                  <div className="z-10 bg-slate-900/90 backdrop-blur-md border border-slate-800 p-4 sm:p-5 rounded-2xl space-y-3 shadow-2xl">
                    <p className="text-xs sm:text-sm font-black text-slate-100 flex items-center gap-2">
                      <I type="shield" className="w-4 h-4 text-cyan-400" />
                      ¿Por qué elegir Cadi Textil?
                    </p>
                    <ul className="text-xs text-slate-300 space-y-2 font-medium">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>Comienzas desde solo 100 pares.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>Revisas y apruebas el diseño antes de producir.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>Fabricamos para tu marca, no para la nuestra.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                  <I type="spark" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Volumen flexible</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-200">Desde 100 pares</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                  <I type="layers" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Identidad</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-200">Diseños exclusivos</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                  <I type="shield" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Garantía</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-200">Producción personalizada</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
                  <I type="refresh" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-mono tracking-wider">Soporte</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-200">Atención en todo el proceso</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-8 max-w-3xl md:mb-12"
            >
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
                Nuestros servicios
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-6xl">
                Te ayudamos a crear un producto textil con identidad y salida comercial.
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-5 md:grid-cols-3"
            >
              {services.map((service) => (
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  key={service.title}
                  className="group overflow-hidden rounded-[2.25rem] border border-slate-100 bg-slate-50 shadow-sm transition"
                >
                  <div className="h-64 w-full overflow-hidden bg-slate-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-black text-slate-950">
                      {service.title}
                    </h3>
                    <p className="mt-4 leading-8 text-slate-600">
                      {service.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* QUÉ FABRICAMOS */}
        <section
          id="fabricamos"
          className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-24"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-8 grid gap-5 md:mb-12 md:grid-cols-[0.9fr_1.1fr] md:items-end"
          >
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
                ¿Qué fabricamos?
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-6xl">
                Soluciones para empresas, instituciones y marcas.
              </h2>
            </div>
            <p className="text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              No solo entregamos medias: desarrollamos productos textiles pensados para campañas, uniformes, venta mayorista y líneas de marca propia.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-3 md:grid-cols-2 md:gap-4"
          >
            {products.map((item) => (
              <motion.div
                variants={fadeUp}
                key={item}
                className="flex items-start gap-3 rounded-[1.5rem] border border-white bg-white/85 p-4 text-sm shadow-sm backdrop-blur md:gap-4 md:rounded-[1.75rem] md:p-5 md:text-base"
              >
                <div className="mt-1 rounded-full bg-cyan-100 p-2 text-cyan-700">
                  <I type="check" className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <p className="leading-7 text-slate-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* MODELOS */}
        <section
          id="modelos"
          className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-24"
        >
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-8 max-w-2xl md:mb-12"
          >
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
              Modelos disponibles
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-6xl">
              Elige el formato ideal para tu mercado.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0"
          >
            {models.map((item) => (
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                key={item.name}
                className="min-w-[78%] rounded-[2rem] border border-white bg-white p-5 shadow-lg shadow-slate-100 md:min-w-0 md:rounded-[2.25rem] md:p-6"
              >
                <div className="mb-5 h-48 overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-cyan-50 to-slate-100 md:mb-6 md:h-52 md:rounded-[1.75rem]">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
                <div className="mb-3 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-700">
                  {item.tag}
                </div>
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROCESO */}
        <section id="proceso" className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-8 max-w-3xl md:mb-12"
            >
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
                Proceso de trabajo
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-6xl">
                De la cotización al producto final.
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0"
            >
              {process.map((step) => (
                <motion.div
                  variants={fadeUp}
                  key={step.title}
                  className="flex min-w-[78%] flex-col items-center rounded-[2rem] border border-slate-100 bg-slate-50 p-5 text-center md:min-w-0 md:p-6"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white md:mb-6 md:h-14 md:w-14">
                    <I type={step.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
