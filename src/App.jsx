import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import Polos from "./Polos.jsx";

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
    text: "Convertimos tu idea en una propuesta clara: modelo, colores, tallas, estilo, empaque y presentación. Te asesoramos digitalmente para crear una línea lista para vender.",
  },
  {
    image: "/servicios/produccion-mayorista.jpg",
    title: "Producción mayorista",
    text: "Fabricamos por volumen con procesos ordenados, control de tiempos y consistencia entre lotes para marcas, empresas e instituciones.",
  },
  {
    image: "/servicios/marca-y-presentacion.jpg",
    title: "Marca y presentación",
    text: "Preparamos el producto con identidad propia: etiquetado, empaque y presentación comercial para que tus medias lleguen listas al cliente final.",
  },
];

const products = [
  "Medias y calcetines para empresas, colegios, clubes, academias e instituciones públicas o privadas.",
  "Producción por volumen desde 100 pares para cualquier tipo de negocio o institución.",
  "Marca blanca para negocios que desean vender medias con su propia identidad comercial.",
  "Personalización con marca, logo, etiqueta y empaque final según el objetivo del pedido.",
  "Líneas para clientes corporativos, distribuidores, emprendedores y negocios textiles.",
  "Mangas industriales en algodón, nylon, poliéster y dralón para distintas aplicaciones.",
];

const advantages = [
  {
    icon: "shield",
    title: "Composición confiable",
    text: "85% algodón, 10% spandex y 5% elástico para suavidad, ajuste y resistencia.",
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

const faqs = [
  {
    q: "¿Atienden pedidos para empresas y colegios?",
    a: "Sí. Trabajamos pedidos por volumen para empresas, colegios, instituciones, clubes, distribuidores y clientes corporativos.",
  },
  {
    q: "¿Puedo vender las medias con mi propia marca?",
    a: "Sí. Podemos orientar la presentación final con etiqueta, empaque e identidad de marca según el requerimiento.",
  },
  {
    q: "¿Qué modelos fabrican?",
    a: "Fabricamos taloneras, tobilleras, medias 3/4 y medias de futsal. También trabajamos mangas industriales.",
  },
];

export default function LandingMediasMayoristas() {
  const [cantidad, setCantidad] = useState("500");
  const [unidadCantidad, setUnidadCantidad] = useState("pares");
  const [modelo, setModelo] = useState("Tobilleras");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
const [activeSlide, setActiveSlide] = useState(0);
const [openFaq, setOpenFaq] = useState(null);

  const whatsappNumber = "51930967608";

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % models.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const whatsappText = useMemo(
    () =>
      encodeURIComponent(
        `Hola, quiero cotizar medias al por mayor.

Nombre o empresa: ${nombre || "Por completar"}
Teléfono: ${telefono || "Por completar"}
Modelo: ${modelo}
Cantidad aproximada: ${cantidad} ${unidadCantidad}
Mensaje adicional: ${mensaje || "Sin mensaje adicional"}`
      ),
    [cantidad, unidadCantidad, modelo, nombre, telefono, mensaje]
  );

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
                src="/logo-medias-cadi.png"
                alt="Logo Cadi"
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

<nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
  <a href="#servicios" className="hover:text-cyan-700">Servicios</a>
  <a href="#fabricamos" className="hover:text-cyan-700">Qué fabricamos</a>
  <a href="#modelos" className="hover:text-cyan-700">Modelos</a>
  <a href="#proceso" className="hover:text-cyan-700">Proceso</a>
  <a href="#cotizacion" className="hover:text-cyan-700">Cotización</a>

<div className="group relative">
  <button className="hover:text-cyan-700">
    Otros productos y servicios
  </button>

  <div className="invisible absolute right-0 top-full z-50 mt-0 w-64 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
    <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-xl">
      <p className="px-3 py-2 text-xs font-black uppercase tracking-widest text-cyan-700">
        Productos
      </p>

      <a href="/polos" className="block rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-cyan-50 hover:text-cyan-700">
        Polos
      </a>

      <p className="mt-3 px-3 py-2 text-xs font-black uppercase tracking-widest text-cyan-700">
        Servicios
      </p>

      <a href="/lapiceros-personalizados" className="block rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-cyan-50 hover:text-cyan-700">
        Lapiceros personalizados
      </a>

      <a href="/llaveros-personalizados" className="block rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-cyan-50 hover:text-cyan-700">
        Llaveros personalizados
      </a>

      <a href="/cajitas-personalizadas" className="block rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-cyan-50 hover:text-cyan-700">
        Cajitas personalizadas
      </a>

      <a href="/bolsas-tocuyo-notex" className="block rounded-xl px-3 py-2 text-sm font-bold text-slate-700 hover:bg-cyan-50 hover:text-cyan-700">
        Bolsas de tocuyo y notex
      </a>
    </div>
  </div>
</div>

</nav>

<a
  href="#cotizacion"
  className="rounded-full bg-slate-950 px-4 py-3 text-xs font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-700 md:px-5 md:text-sm"
>
  Cotizar
</a>

</div>
</header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-10 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-20 md:pt-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm md:text-sm"
            >
              <I type="spark" className="h-4 w-4 text-cyan-700" />
              Fabricación para marcas, empresas y distribuidores
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-5 md:space-y-6">
              <h1 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
                Fabricación de medias deportivas y casuales al por mayor para marcas, negocios y distribuidores.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                En Cadi Textil fabricamos medias deportivas, casuales e institucionales con algodón de alta calidad. Atendemos marcas, emprendedores, distribuidores, tiendas, empresas y colegios, ofreciendo producción flexible, precios competitivos y una excelente relación calidad-precio para pedidos mayoristas.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#cotizacion"
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-7 py-4 font-black text-white shadow-xl shadow-cyan-200 transition hover:-translate-y-1 hover:bg-cyan-700"
              >
                Cotizar por WhatsApp
                <I type="arrow" className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:bg-slate-50"
              >
                Ver servicios
              </a>
            </motion.div>

            </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-cyan-200 via-white to-blue-200 blur-2xl" />

            <div className="relative rounded-[2.25rem] bg-gradient-to-br from-slate-950 to-slate-800 p-5 text-white shadow-2xl shadow-slate-300 md:rounded-[3rem] md:p-7">
                <div className="mb-4 flex items-center justify-between md:mb-8">
                  <p className="text-sm font-bold text-cyan-200">
                    Producción mayorista
                  </p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">
                    Cadi
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-[1.5rem] bg-white/10 md:rounded-[2rem]">
                  <motion.img
                    key={models[activeSlide].images[0]}
                    src={models[activeSlide].images[0]}
                    alt={models[activeSlide].name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    className="h-[300px] w-full object-cover md:h-[420px]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5 md:p-6">
                    <p className="text-sm font-bold text-cyan-200">
                      {models[activeSlide].tag}
                    </p>
                    <h3 className="text-2xl font-black text-white md:text-3xl">
                      {models[activeSlide].name}
                    </h3>
                    <p className="mt-2 max-w-sm text-xs leading-5 text-slate-200 md:text-sm md:leading-6">
                      {models[activeSlide].text}
                    </p>
                  </div>

                  <div className="absolute bottom-5 right-5 flex gap-2">
                    {models.map((item, index) => (
                      <button
                        key={item.name}
                        onClick={() => setActiveSlide(index)}
                        className={`h-3 w-3 rounded-full transition ${
                          activeSlide === index ? "bg-cyan-300" : "bg-white/40"
                        }`}
                        aria-label={`Ver ${item.name}`}
                      />
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-6 max-w-3xl md:mb-10"
          >
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
              Ideal para
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Producción para negocios que necesitan vender, uniformar o
              abastecer.
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            {[
              "Tiendas de ropa",
              "Marcas de ropa",
              "Emprendedores",
              "Distribuidores",
              "Marca blanca",
              "Equipos deportivos",
              "Empresas",
              "Colegios",
              "Academias",
              "Campañas corporativas",
            ].map((item) => (
              <span
  key={item}
  className="flex min-h-[44px] items-center justify-center rounded-full border border-cyan-100 bg-white px-3 py-2 text-center text-xs font-black text-slate-800 shadow-sm sm:px-4 sm:text-sm"
>
  {item}
</span>
            ))}
          </div>
        </section>

<section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
  <div className="grid gap-6 rounded-[2rem] bg-white p-6 shadow-xl shadow-slate-100 md:grid-cols-3 md:rounded-[2.5rem] md:p-8">
    {[
      {
        title: "Pedidos mayoristas accesibles",
        text: "Trabajamos pedidos por volumen para emprendedores, tiendas, marcas, distribuidores, empresas y colegios.",
      },
      {
        title: "Precios competitivos",
        text: "Ofrecemos precios rentables para reventa, con mejores condiciones según la cantidad solicitada.",
      },
      {
        title: "Medias de algodón",
        text: "Fabricamos medias deportivas, casuales e institucionales con enfoque en comodidad, resistencia y presentación.",
      },
    ].map((item) => (
      <motion.div
        key={item.title}
        whileHover={{ y: -6 }}
        className="rounded-[1.5rem] bg-slate-50 p-5"
      >
        <h3 className="text-xl font-black text-slate-950">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
          {item.text}
        </p>
      </motion.div>
    ))}
  </div>
</section>
        
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
                Te ayudamos a crear un producto textil con identidad, calidad y
                salida comercial.
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
                Soluciones para empresas, instituciones y marcas que necesitan
                producir a escala.
              </h2>
            </div>
            <p className="text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              No solo entregamos medias: desarrollamos productos textiles
              pensados para campañas, uniformes, venta mayorista, licitaciones y
              líneas de marca propia.
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

<section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
  <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200 md:rounded-[2.5rem] md:p-10">
    <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
      <div>
        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
          Compra mayorista
        </p>
        <h2 className="text-3xl font-black tracking-tight md:text-5xl">
          Medias listas para vender, distribuir o personalizar.
        </h2>
        <p className="mt-5 text-base leading-8 text-slate-300">
          Atendemos negocios que buscan productos rentables, cómodos y de buena
          presentación para vender al por mayor o desarrollar su propia marca.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          "Ideal para emprendedores",
          "Para tiendas y distribuidores",
          "Precios por volumen",
          "Personalización con marca",
          "Modelos deportivos y casuales",
          "Producción nacional",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl bg-white/10 p-4"
          >
            <div className="rounded-full bg-cyan-300 p-2 text-slate-950">
              <I type="check" className="h-4 w-4" />
            </div>
            <p className="text-sm font-bold text-slate-100">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
        
        <section className="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
          <div className="grid gap-3 rounded-[2rem] bg-white p-5 shadow-xl shadow-slate-100 md:grid-cols-4 md:gap-4 md:rounded-[2.5rem] md:p-8">
            {[
              {
                title: "Atención directa",
                text: "Coordinación rápida por WhatsApp para cotizaciones y pedidos.",
              },
              {
                title: "Producción por volumen",
                text: "Fabricación pensada para empresas, campañas y distribución.",
              },
              {
                title: "Marca blanca",
                text: "Producto listo para presentarse con identidad comercial propia.",
              },
              {
                title: "Despacho coordinado",
                text: "Envíos y entregas según destino, volumen y requerimiento.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-[1.5rem] bg-slate-50 p-4 md:rounded-[1.75rem] md:p-5"
              >
                <h3 className="text-base font-black text-slate-950 md:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-14 text-white md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mb-8 max-w-3xl md:mb-12"
            >
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                Por qué elegirnos
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-6xl">
                Una fabricación pensada para que tu producto se vea mejor y se
                venda mejor.
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible md:pb-0"
            >
              {advantages.map((item) => (
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  key={item.title}
                  className="min-w-[78%] rounded-[2rem] border border-white/10 bg-white/10 p-5 backdrop-blur md:min-w-0 md:p-6"
                >
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-2xl bg-cyan-300 text-slate-950 md:mb-6 md:h-12 md:w-12">
                    <I type={item.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

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
        De la cotización al producto final, con una ruta clara.
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
            <I type={step.icon} className="h-6 w-6 md:h-7 md:w-7" />
          </div>

          <h3 className="text-lg font-black md:text-xl">
            {step.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
            {step.text}
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

<section className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-24">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="mb-8 max-w-3xl md:mb-10"
  >
    <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
      Preguntas frecuentes
    </p>
    <h2 className="text-3xl font-black tracking-tight md:text-5xl">
      Información rápida para cotizar mejor.
    </h2>
  </motion.div>

  <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl shadow-slate-100">
    {faqs.map((faq, index) => {
      const isOpen = openFaq === index;

      return (
        <div
          key={faq.q}
          className="border-b border-slate-100 last:border-b-0"
        >
          <button
            type="button"
            onClick={() => setOpenFaq(isOpen ? null : index)}
            className="flex w-full items-center justify-between gap-4 bg-slate-50 px-5 py-5 text-left transition hover:bg-slate-100 md:px-7"
          >
            <span className="text-base font-black text-slate-950 md:text-lg">
              {faq.q}
            </span>

            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-2xl font-light text-slate-700 shadow-sm">
              {isOpen ? "−" : "+"}
            </span>
          </button>

          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="bg-white px-5 py-5 md:px-7"
            >
              <p className="max-w-4xl leading-8 text-slate-600">
                {faq.a}
              </p>
            </motion.div>
          )}
        </div>
      );
    })}
  </div>
</section>

        <section className="bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-8 md:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
                Cobertura
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Atendemos pedidos mayoristas en Perú.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[2rem] bg-slate-50 p-6 text-sm leading-7 text-slate-600 md:p-7 md:text-base md:leading-8"
            >
              Coordinamos producción, presentación y despacho según el
              requerimiento del cliente. Trabajamos con empresas, colegios,
              instituciones, distribuidores, marcas y clientes corporativos que
              necesitan fabricar medias o calcetines por volumen.
            </motion.div>
          </div>
        </section>

        <section id="cotizacion" className="bg-slate-950 py-14 text-white md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="space-y-5 md:space-y-6"
            >
              <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                Cotización
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-6xl">
                Cuéntanos qué necesitas producir.
              </h2>
              <p className="text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                Completa tus datos y te responderemos por WhatsApp con una
                propuesta según modelo, cantidad, presentación y objetivo del
                pedido.
              </p>

<div className="grid gap-3 text-slate-300">

  <span className="flex gap-3">
    <I type="phone" className="h-5 w-5 shrink-0 text-cyan-300" />
    +51 930 967 608
  </span>

  <span className="flex items-start gap-3">
    <I type="mail" className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />

    <span className="grid gap-1">
      <span>ventas@caditextil.com</span>
      <span>ventas@mediascadi.com</span>
    </span>

  </span>

  <span className="flex gap-3">
    <I type="pin" className="h-5 w-5 shrink-0 text-cyan-300" />
    Perú
  </span>

</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-white/10 bg-white p-5 text-slate-950 shadow-2xl md:rounded-[2.5rem] md:p-8"
            >
              <div className="grid gap-4 md:gap-5">
                <label className="grid gap-2">
                  <span className="text-sm font-black">Nombre o empresa</span>
                  <input
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ej. Comercial Cadi"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-black">Teléfono</span>
                  <input
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                    placeholder="Ej. 930 967 608"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-black">
                    Mensaje{" "}
                    <span className="font-medium text-slate-400">
                      (opcional)
                    </span>
                  </span>
                  <textarea
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                    placeholder="Ej. Quiero cotizar con logo, etiqueta o empaque personalizado."
                    rows="3"
                    className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
                  />
                </label>

                <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                  <label className="grid gap-2">
                    <span className="text-sm font-black">Modelo</span>
                    <select
                      value={modelo}
                      onChange={(e) => setModelo(e.target.value)}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
                    >
                      {models.map((m) => (
                        <option key={m.name}>{m.name}</option>
                      ))}
                    </select>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-black">
                      Cantidad aprox.
                    </span>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_105px]">
                      <input
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        placeholder="500"
                        className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
                      />

                      <select
                        value={unidadCantidad}
                        onChange={(e) => setUnidadCantidad(e.target.value)}
                        className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 font-semibold outline-none transition focus:border-cyan-500"
                      >
                        <option value="pares">Pares</option>
                        <option value="docenas">Docenas</option>
                      </select>
                    </div>
                  </label>
                </div>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-cyan-600 px-6 py-4 font-black text-white transition hover:bg-cyan-700"
                >
                  <I type="chat" className="mr-2 h-5 w-5" />
                  Cotizar por WhatsApp
                </a>

                <p className="text-center text-xs leading-6 text-slate-500">
                  Te responderemos con una propuesta según tu necesidad de
                  producción.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 px-5 py-12 text-white md:px-8 md:py-14">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr] md:items-start md:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo-medias-cadi.png"
                alt="Logo Cadi"
                className="h-12 w-12 rounded-xl object-contain"
              />
              <div>
                <p className="text-2xl font-black">Cadi</p>
                <p className="text-sm text-slate-400">
                  Fabricación textil al por mayor
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300 md:mt-6 md:text-base">
              Fabricamos medias deportivas y casuales de algodón para tiendas, marcas, distribuidores, empresas, colegios y clientes mayoristas.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-cyan-300 md:mb-5">
              Contacto
            </p>

<div className="grid gap-3 text-sm text-slate-300">

  <span className="flex items-center gap-3">
    <I type="phone" className="h-4 w-4 shrink-0 text-cyan-300" />
    +51 930 967 608
  </span>

  <span className="flex items-start gap-3">
    <I type="mail" className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />

    <span className="grid gap-1">
      <span>ventas@caditextil.com</span>
      <span>ventas@mediascadi.com</span>
    </span>

  </span>

  <span className="flex items-center gap-3">
    <I type="pin" className="h-4 w-4 shrink-0 text-cyan-300" />
    Perú
  </span>

</div>

          </div>

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-cyan-300 md:mb-5">
              Información

            <div className="grid gap-3 text-sm">
              <a
                href="/politica-de-envios.html"
                className="text-slate-300 transition hover:text-cyan-300"
              >
                Política de envíos
              </a>

              <a
                href="/politica-de-devoluciones.html"
                className="text-slate-300 transition hover:text-cyan-300"
              >
                Política de devoluciones
              </a>

              <a
                href="/politica-de-privacidad.html"
                className="text-slate-300 transition hover:text-cyan-300"
              >
                Política de privacidad
              </a>

              <a
  href="/politica-de-cookies.html"
  className="text-slate-300 transition hover:text-cyan-300"
>
  Política de cookies
</a>

              <a
                href="#cotizacion"
                className="text-slate-300 transition hover:text-cyan-300"
              >
                Solicitar cotización
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:mt-12 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 CORPORACION TEXTIL CADI S.A.C. Todos los derechos reservados.
          </p>
          <p>Medias al por mayor en Perú</p>
        </div>
      </footer>

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "Hola, quiero información sobre medias al por mayor."
        )}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 text-sm font-black text-white shadow-2xl shadow-green-200 transition hover:scale-105 hover:bg-green-600 md:bottom-6 md:right-6 md:px-5 md:py-4 md:text-base"
      >
        <I type="chat" className="h-5 w-5" />
        Cotizar
      </motion.a>
    </div>
  );
}

const Page = window.location.pathname === "/polos" ? Polos : LandingMediasMayoristas;

createRoot(document.getElementById("root")).render(<Page />);
