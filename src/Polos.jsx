import ScrollToTopButton from "./components/ScrollToTopButton";
import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const I = ({ type, className = "h-5 w-5" }) => {
  const icons = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
    chat: (
      <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
    ),
    check: <path d="M20 6 9 17l-5-5" />,
    shirt: (
      <path d="M20.4 7.5 16 4l-2 2h-4L8 4 3.6 7.5 6 11v9h12v-9l2.4-3.5Z" />
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
    sparkles: (
      <>
        <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
        <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
      </>
    ),
    factory: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V10l6 3V7l8 4v10" />
        <path d="M8 17h2" />
        <path d="M12 17h2" />
        <path d="M16 17h2" />
      </>
    ),
    box: (
      <>
        <path d="M21 8l-9-5-9 5 9 5 9-5z" />
        <path d="M3 8v8l9 5 9-5V8" />
        <path d="M12 13v8" />
      </>
    ),
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[type]}
    </svg>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const modelos = [
  {
    name: "Polo clásico",
    tag: "Corporativo",
    text: "Ideal para empresas, eventos, campañas y uso diario.",
    image: "/clasico.png",
  },
  {
    name: "Polo oversize",
    tag: "Moda urbana",
    text: "Formato amplio para marcas de ropa, emprendimientos y colecciones urbanas.",
    image: "/oversize.png",
  },
  {
    name: "Polo piqué",
    tag: "Uniformes",
    text: "Perfecto para personal de empresa, atención al cliente e instituciones.",
    image: "/pique.png",
  },
  {
    name: "Polo deportivo",
    tag: "Alto movimiento",
    text: "Pensado para equipos, academias, eventos deportivos y entrenamientos.",
    image: "/deportivo.png",
  },
];

const process = [
  {
    icon: "chat",
    title: "1. Requerimiento",
    text: "Cuéntanos el modelo, la cantidad, las tallas, el tipo de tela y la personalización que necesitas.",
  },
  {
    icon: "sparkles",
    title: "2. Propuesta",
    text: "Definimos el modelo, los acabados, el tipo de estampado o bordado y elaboramos la cotización.",
  },
  {
    icon: "factory",
    title: "3. Fabricación",
    text: "Producimos los polos con telas 20/1 o 30/1, realizando control de calidad durante el proceso.",
  },
  {
    icon: "box",
    title: "4. Entrega",
    text: "Coordinamos el despacho para que recibas tu pedido listo para su uso o distribución.",
  },
];

const whatsappNumber = "51930967608";

export default function Polos() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const [nombre, setNombre] = useState("");
  const [tipoCliente, setTipoCliente] = useState("Emprendedor");
  const [objetivo, setObjetivo] = useState("Reventa al por mayor");
  const [modeloPolo, setModeloPolo] = useState("Polo clásico");
  const [cantidad, setCantidad] = useState("100");
  const [unidadCantidad, setUnidadCantidad] = useState("unidades");
  const [tipoTela, setTipoTela] = useState("Algodón 30/1");
  const [personalizacion, setPersonalizacion] = useState("Solo polos");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % modelos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const whatsappText = useMemo(
  () =>
    encodeURIComponent(
      `Hola, quiero cotizar polos personalizados.

Nombre o empresa: ${nombre || "Por completar"}
Tipo de cliente: ${tipoCliente}
Objetivo del pedido: ${objetivo}
Modelo de polo: ${modeloPolo}
Cantidad aproximada: ${cantidad} ${unidadCantidad}
Tipo de tela: ${tipoTela}
Personalización requerida: ${personalizacion}
Mensaje adicional: ${mensaje || "Sin mensaje adicional"}`
    ),
  [
    nombre,
    tipoCliente,
    objetivo,
    modeloPolo,
    cantidad,
    unidadCantidad,
    tipoTela,
    personalizacion,
    mensaje,
  ]
);
  
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fb] text-slate-950">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-28 -top-28 h-96 w-96 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-blue-200/50 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/80 bg-white/80 backdrop-blur-2xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
    <a href="/" className="flex items-center gap-3">
      <img
        src="/logo-medias-cadi.png"
        alt="Logo Cadi"
        className="h-11 w-11 rounded-xl object-contain md:h-12 md:w-12"
      />
      <div>
        <p className="text-lg font-black tracking-tight">Cadi Textil</p>
        <p className="text-xs font-medium text-slate-500">
          Fabricación textil al por mayor
        </p>
      </div>
    </a>

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
  <a href="#modelos" className="hover:text-cyan-700">Modelos</a>
  <a href="#telas" className="hover:text-cyan-700">Telas</a>
  <a href="#personalizacion" className="hover:text-cyan-700">Personalización</a>
  <a href="#proceso" className="hover:text-cyan-700">Proceso</a>
  <a href="#cotizacion" className="hover:text-cyan-700">Cotización</a>
  <a href="/" className="hover:text-cyan-700">Medias</a>
  <a href="/merch-personalizado" className="hover:text-cyan-700">Merchandising</a>
</nav>
  </div>

  {openMenu && (
    <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg lg:hidden">
<div className="grid gap-3 text-sm font-black text-slate-700">
  <a href="#modelos" onClick={() => setOpenMenu(false)}>Modelos</a>
  <a href="#telas" onClick={() => setOpenMenu(false)}>Telas</a>
  <a href="#personalizacion" onClick={() => setOpenMenu(false)}>Personalización</a>
  <a href="#proceso" onClick={() => setOpenMenu(false)}>Proceso</a>
  <a href="#cotizacion" onClick={() => setOpenMenu(false)}>Cotización</a>
  <a href="/" onClick={() => setOpenMenu(false)}>Medias</a>
  <a href="/merch-personalizado" onClick={() => setOpenMenu(false)}>Merchandising personalizado</a>
</div>
    </div>
  )}
</header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-10 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pb-20 md:pt-24">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm md:text-sm">
              <I type="shirt" className="h-4 w-4 text-cyan-700" />
              Fabricación de polos al por mayor
            </div>

            <h1 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              Polos personalizados para empresas, marcas y eventos.
            </h1>

            <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Fabricamos polos por pedido para campañas, uniformes,
              emprendimientos y activaciones. Trabajamos modelos clásicos,
              oversize, piqué y deportivos, con telas 30/1 y 20/1 según el
              acabado que necesites.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#modelos"
                className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-7 py-4 font-black text-white shadow-xl shadow-cyan-200 transition hover:-translate-y-1 hover:bg-cyan-700"
              >
                Ver modelos
                <I type="arrow" className="ml-2 h-5 w-5" />
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:bg-slate-50"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-cyan-200 via-white to-blue-200 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-slate-950 to-slate-800 p-5 text-white shadow-2xl shadow-slate-300 md:rounded-[3rem] md:p-7">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-white/10">
                <motion.img
                  key={modelos[activeSlide].image}
                  src={modelos[activeSlide].image}
                  alt={modelos[activeSlide].name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  className="h-[320px] w-full object-cover md:h-[460px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-5 md:p-6">
                  <p className="text-sm font-bold text-cyan-300">
                    {modelos[activeSlide].tag}
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-white">
                    {modelos[activeSlide].name}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-200">
                    {modelos[activeSlide].text}
                  </p>
                </div>

                <div className="absolute bottom-5 right-5 flex gap-2">
                  {modelos.map((item, index) => (
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

                <section id="modelos" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
              Modelos
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Elige el tipo de polo según tu proyecto.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {modelos.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-white bg-white p-5 shadow-lg shadow-slate-100"
              >
                <div className="mb-5 h-48 overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>

                <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-700">
                  {item.tag}
                </span>

                <h3 className="mt-4 text-2xl font-black">{item.name}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="telas" className="bg-white py-14 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-8">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
                Telas disponibles
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Trabajamos con 30/1 y 20/1.
              </h2>
            </div>

            <div className="rounded-[2rem] bg-slate-50 p-6 text-base leading-8 text-slate-600 md:p-8 md:text-lg">
              Utilizamos telas 30/1 y 20/1 para polos personalizados,
              uniformes, campañas y producción por volumen. La elección depende
              del acabado, uso y presupuesto del pedido.
            </div>
          </div>
        </section>

        <section id="personalizacion" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
              Personalización
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Adaptamos el polo a la identidad de tu marca o campaña.
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {["Logo", "Estampado", "Bordado", "DTF", "Sublimado", "Colores y tallas"].map(
              (item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[1.5rem] border border-white bg-white p-5 shadow-sm"
                >
                  <span className="rounded-full bg-cyan-100 p-2 text-cyan-700">
                    <I type="check" className="h-4 w-4" />
                  </span>
                  <p className="font-black text-slate-800">{item}</p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="bg-slate-950 py-14 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                Ideal para
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Una solución simple para pedidos personalizados.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {["Empresas", "Eventos", "Colegios", "Marcas", "Campañas", "Uniformes", "Emprendedores"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex min-h-[44px] items-center justify-center rounded-full border border-white/10 bg-white/10 px-3 py-2 text-center text-xs font-black text-white sm:px-5 sm:py-3 sm:text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

                <section id="proceso" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
              PROCESO DE FABRICACIÓN
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Así convertimos tu idea en un producto listo para usar.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {process.map((step) => (
              <motion.div
                key={step.title}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-slate-100 bg-slate-50 p-8 text-center shadow-sm transition"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <I type={step.icon} className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-black">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-600">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="cotizacion"
          className="bg-slate-950 py-14 text-white md:py-24"
        >
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
                Cuéntanos qué polos necesitas producir.
              </h2>

              <p className="text-base leading-7 text-slate-300 md:text-lg md:leading-8">
                Completa la información de tu pedido y te responderemos por
                WhatsApp con una propuesta según el modelo, tela, cantidad y
                personalización requerida.
              </p>

              <div className="grid gap-3 text-slate-300">
                <span className="flex gap-3">
                  <I
                    type="phone"
                    className="h-5 w-5 shrink-0 text-cyan-300"
                  />
                  +51 930 967 608
                </span>

                <span className="flex items-start gap-3">
                  <I
                    type="mail"
                    className="mt-1 h-5 w-5 shrink-0 text-cyan-300"
                  />

                  <span className="grid gap-1">
                    <span>ventas@caditextil.com</span>
                    <span>ventas@mediascadi.com</span>
                  </span>
                </span>

                <span className="flex gap-3">
                  <I
                    type="pin"
                    className="h-5 w-5 shrink-0 text-cyan-300"
                  />
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
                  <span className="text-sm font-black">Tipo de cliente</span>

                  <select
                    value={tipoCliente}
                    onChange={(e) => setTipoCliente(e.target.value)}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
                  >
                    <option>Emprendedor</option>
                    <option>Tienda</option>
                    <option>Distribuidor</option>
                    <option>Empresa</option>
                    <option>Club deportivo</option>
                    <option>Academia</option>
                    <option>Colegio</option>
                    <option>Institución pública</option>
                    <option>Institución privada</option>
                  </select>
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-black">
                    ¿Para qué necesitas los polos?
                  </span>

                  <select
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
                  >
                    <option>Reventa al por mayor</option>
                    <option>Reventa al por menor</option>
                    <option>Marca propia</option>
                    <option>Uniformes</option>
                    <option>Campaña publicitaria</option>
                    <option>Merchandising</option>
                    <option>Evento</option>
                    <option>Uso interno de la empresa</option>
                    <option>Otro</option>
                  </select>
                </label>

                <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                  <label className="grid gap-2">
                    <span className="text-sm font-black">Modelo de polo</span>

                    <select
                      value={modeloPolo}
                      onChange={(e) => setModeloPolo(e.target.value)}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
                    >
                      {modelos.map((modelo) => (
                        <option key={modelo.name} value={modelo.name}>
                          {modelo.name}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-black">
                      Cantidad aproximada
                    </span>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_120px]">
                      <input
                        value={cantidad}
                        onChange={(e) => setCantidad(e.target.value)}
                        placeholder="100"
                        className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
                      />

                      <select
                        value={unidadCantidad}
                        onChange={(e) => setUnidadCantidad(e.target.value)}
                        className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-4 font-semibold outline-none transition focus:border-cyan-500"
                      >
                        <option value="unidades">Unidades</option>
                        <option value="docenas">Docenas</option>
                      </select>
                    </div>
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2 md:gap-5">
                  <label className="grid gap-2">
                    <span className="text-sm font-black">Tipo de tela</span>

                    <select
                      value={tipoTela}
                      onChange={(e) => setTipoTela(e.target.value)}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
                    >
                      <option>Algodón 30/1</option>
                      <option>Algodón 20/1</option>
                      <option>Tela piqué</option>
                      <option>Tela deportiva</option>
                      <option>Necesito asesoría</option>
                    </select>
                  </label>

                  <label className="grid gap-2">
                    <span className="text-sm font-black">
                      Personalización requerida
                    </span>

                    <select
                     <select
  value={personalizacion}
  onChange={(e) => setPersonalizacion(e.target.value)}
  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
>
  <option>Solo polos</option>
  <option>Logo personalizado</option>
  <option>Estampado DTF</option>
  <option>Sublimación</option>
</select>
                  </label>
                </div>

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
                    placeholder="Ej. Necesito polos negros con logo estampado al frente."
                    rows="3"
                    className="resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500"
                  />
                </label>

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

      <ScrollToTopButton />
      
      <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950 px-5 py-12 text-white md:px-8 md:py-14">
        <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
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

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Fabricamos medias, calcetines y otros productos textiles para
              empresas, marcas, eventos e instituciones.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Contacto
            </p>

            <div className="grid gap-3 text-sm text-slate-300">
              <span className="flex items-center gap-3">
                <I type="phone" className="h-4 w-4 text-cyan-300" />
                +51 930 967 608
              </span>

              <span className="flex items-center gap-3">
                <I type="mail" className="h-4 w-4 text-cyan-300" />
                ventas@mediascadi.com
              </span>

              <span className="flex items-center gap-3">
                <I type="pin" className="h-4 w-4 text-cyan-300" />
                Perú
              </span>
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Información
            </p>

            <div className="grid gap-3 text-sm">
              <a href="/" className="text-slate-300 transition hover:text-cyan-300">
                Página principal
              </a>

              <a href="/politica-de-envios.html" className="text-slate-300 transition hover:text-cyan-300">
                Política de envíos
              </a>

              <a href="/politica-de-devoluciones.html" className="text-slate-300 transition hover:text-cyan-300">
                Política de devoluciones
              </a>

              <a href="/politica-de-privacidad.html" className="text-slate-300 transition hover:text-cyan-300">
                Política de privacidad
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CORPORACION TEXTIL CADI S.A.C. Todos los derechos reservados.</p>
          <p>Polos personalizados en Perú</p>
        </div>
      </footer>

      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
        href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
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
        
