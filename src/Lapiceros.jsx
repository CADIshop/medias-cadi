import ScrollToTopButton from "./components/ScrollToTopButton";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const I = ({ type, className = "h-5 w-5" }) => {
  const icons = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
    chat: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />,
    check: <path d="M20 6 9 17l-5-5" />,
    pen: (
      <>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
      </>
    ),
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z" />,
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
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[type]}
    </svg>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const lapiceros = [
  {
    name: "Lapicero ecológico retráctil",
    image: "/lapicero-ecologico-retractil.png",
    text: "Modelo ecológico ideal para campañas sostenibles, empresas y eventos."
  },
  {
    name: "Lapicero satinado anillos centrales",
    image: "/lapicero-satinado-anillos.png",
    text: "Diseño elegante para imagen corporativa."
  },
  {
    name: "Lapicero metálico un anillo",
    image: "/lapicero-metalico-un-anillo.png",
    text: "Modelo premium para regalos empresariales."
  },
  {
    name: "Lapicero plástico con touch",
    image: "/lapicero-plastico-touch.png",
    text: "Ideal para campañas publicitarias."
  }
];

const tazas = [
  {
    name: "Taza blanca",
    image: "/taza-blanca-11oz.png",
    text: "Modelo clásico de 11 oz."
  },
  {
    name: "Taza interior de color",
    image: "/taza-interior-color-11oz.png",
    text: "Personalizada con interior de color."
  },
  {
    name: "Taza brillante",
    image: "/taza-brillante-11oz.png",
    text: "Acabado brillante para mayor impacto visual."
  }
];

const bolsas = [
  {
    name: "Bolsa de tocuyo",
    image: "/bolsa-tocuyo.png",
    text: "Bolsa reutilizable personalizada."
  },
  {
    name: "Bolsa de notex",
    image: "/bolsa-notex.png",
    text: "Ideal para campañas promocionales y ferias."
  }
];

const modelos = [...lapiceros, ...tazas, ...bolsas];



const process = [
  {
    icon: "chat",
    title: "1. Cotización",
    text: "Nos indicas el modelo, cantidad, color y logo que deseas personalizar.",
  },
  {
    icon: "sparkles",
    title: "2. Propuesta",
    text: "Revisamos tu diseño y te orientamos con la mejor opción para tu campaña.",
  },
  {
    icon: "factory",
    title: "3. Personalización",
    text: "Realizamos la impresión del logo según el modelo elegido.",
  },
  {
    icon: "box",
    title: "4. Entrega",
    text: "Coordinamos el despacho del pedido listo para usar o distribuir.",
  },
];

const whatsappNumber = "51930967608";
const whatsappText = encodeURIComponent(
  "Hola, quiero cotizar Merch personalizado al por mayor."
);

export default function Lapiceros() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % modelos.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

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
  <a href="#modelos" className="hover:text-cyan-700">
    Modelos
  </a>

  <a href="#personalizacion" className="hover:text-cyan-700">
    Personalización
  </a>

  <a href="#proceso" className="hover:text-cyan-700">
    Proceso
  </a>

  <a href="/" className="hover:text-cyan-700">
    Medias
  </a>

  <a href="/polos" className="hover:text-cyan-700">
    Polos
  </a>
</nav>
        </div>
{openMenu && (
  <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg lg:hidden">
    <div className="grid gap-3 text-sm font-black text-slate-700">
      <a href="#modelos" onClick={() => setOpenMenu(false)}>
        Modelos
      </a>

      <a href="#personalizacion" onClick={() => setOpenMenu(false)}>
        Personalización
      </a>

      <a href="#proceso" onClick={() => setOpenMenu(false)}>
        Proceso
      </a>

      <a href="/" onClick={() => setOpenMenu(false)}>
        Medias
      </a>

      <a href="/polos" onClick={() => setOpenMenu(false)}>
        Polos personalizados
      </a>
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
              <I type="pen" className="h-4 w-4 text-cyan-700" />
              Merch personalizado al por mayor
            </div>

            <h1 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              Merch personalizado para empresas, campañas y eventos.
            </h1>

            <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Personalizamos productos promocionales para empresas, instituciones, ferias, campañas y regalos corporativos. Trabajamos lapiceros, tazas de 11 oz y bolsas personalizadas para fortalecer la imagen de tu marca.
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
                Cotizar por WhatsApp
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

        <section
  id="modelos"
  className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20"
>
  <div className="mb-12 max-w-3xl">
    <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
      MODELOS
    </p>

    <h2 className="text-3xl font-black tracking-tight md:text-5xl">
      Elige el producto ideal para tu marca.
    </h2>
  </div>

  {/* ===================== LAPICEROS ===================== */}

  <div className="mb-16">
    <h3 className="text-3xl font-black">
      Lapiceros personalizados
    </h3>

    <p className="mt-2 mb-8 text-slate-600">
      Ideales para campañas, empresas, ferias y regalos corporativos.
    </p>

    <div className="grid gap-5 md:grid-cols-4">
      {lapiceros.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ y: -8 }}
          className="rounded-[2rem] border border-white bg-white p-5 shadow-lg shadow-slate-100"
        >
          <div className="mb-5 h-60 overflow-hidden rounded-[1.5rem] bg-slate-100">
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-contain p-6 transition duration-500 hover:scale-110"
            />
          </div>

          <h3 className="text-2xl font-black">
            {item.name}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* ===================== TAZAS ===================== */}

  <div className="mb-16">
    <h3 className="text-3xl font-black">
      Tazas 11 oz
    </h3>

    <p className="mt-2 mb-8 text-slate-600">
      Personalizadas para oficinas, empresas, cafeterías y promociones.
    </p>

    <div className="grid gap-5 md:grid-cols-3">
      {tazas.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ y: -8 }}
          className="h-full w-full object-contain p-6 transition duration-500 hover:scale-110"
        >
          <div className="mb-5 aspect-square overflow-hidden rounded-[1.5rem] bg-slate-100">
  <img
    src={item.image}
    alt={item.name}
    className="h-full w-full object-contain p-5 transition duration-500 hover:scale-110"
  />
</div>

          <h3 className="text-2xl font-black">
            {item.name}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* ===================== BOLSAS ===================== */}

  <div>
    <h3 className="text-3xl font-black">
      Bolsas personalizadas
    </h3>

    <p className="mt-2 mb-8 text-slate-600">
      Reutilizables para tiendas, campañas y eventos promocionales.
    </p>

    <div className="grid gap-5 md:grid-cols-2">
      {bolsas.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ y: -8 }}
          className="rounded-[2rem] border border-white bg-white p-5 shadow-lg shadow-slate-100"
        >
          <div className="mb-5 aspect-square overflow-hidden rounded-[1.5rem] bg-slate-100">
  <img
    src={item.image}
    alt={item.name}
    className="h-full w-full object-contain p-5 transition duration-500 hover:scale-110"
  />
</div>

          <h3 className="text-2xl font-black">
            {item.name}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            {item.text}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        <section className="bg-slate-950 py-14 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                Ideal para
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Una opción práctica para promocionar tu marca.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
              {["Empresas", "Ferias", "Eventos", "Campañas", "Instituciones", "Municipalidades", "Universidades", "Negocios", "Distribuidores", "Regalos corporativos"].map((item) => (
                <span
                  key={item}
                  className="flex min-h-[44px] items-center justify-center rounded-full border border-white/10 bg-white/10 px-3 py-2 text-center text-xs font-black text-white sm:px-5 sm:py-3 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="personalizacion" className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
              Personalización
            </p>
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Adaptamos el lapicero a la imagen de tu empresa.
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {[
              "Impresión de logo",
              "Colores disponibles",
              "Pedidos mayoristas",
              "Campañas publicitarias",
              "Regalos corporativos",
              "Presentación promocional",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-[1.5rem] border border-white bg-white p-5 shadow-sm"
              >
                <span className="rounded-full bg-cyan-100 p-2 text-cyan-700">
                  <I type="check" className="h-4 w-4" />
                </span>
                <p className="font-black text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="proceso" className="bg-white py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-8 max-w-3xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">
                Proceso
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                De la cotización a la entrega final.
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

                  <h3 className="text-2xl font-black">{step.title}</h3>

                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-14 text-white md:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.9fr_1.1fr] md:items-center md:px-8">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
                Cotización
              </p>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                Cotiza tus productos personalizados.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                Escríbenos por WhatsApp y te asesoraremos según el producto, modelo, cantidad, tipo de personalización y el uso que necesites para tu empresa, marca o evento.
              </p>

              <div className="mt-6 grid gap-3 text-slate-300">
                <span className="flex gap-3">
                  <I type="phone" className="h-5 w-5 text-cyan-300" />
                  +51 930 967 608
                </span>

                <span className="flex items-start gap-3">
                  <I type="mail" className="mt-1 h-5 w-5 text-cyan-300" />
                  <span className="grid gap-1">
                    <span>ventas@caditextil.com</span>
                    <span>ventas@mediascadi.com</span>
                  </span>
                </span>

                <span className="flex gap-3">
                  <I type="pin" className="h-5 w-5 text-cyan-300" />
                  Perú
                </span>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl md:p-8">
              <h3 className="text-2xl font-black">
                Atención rápida por WhatsApp
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Cuéntanos qué producto necesitas, la cantidad aproximada y el tipo de personalización que deseas. Nuestro equipo te responderá con una cotización personalizada.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-600 px-6 py-4 font-black text-white transition hover:bg-cyan-700"
              >
                <I type="chat" className="mr-2 h-5 w-5" />
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      
<a
  href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`}
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-black text-white shadow-xl shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-green-600"
>
  <I type="chat" className="h-5 w-5" />
  Cotizar
</a>

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
              Fabricamos productos personalizados para empresas, marcas,
              eventos e instituciones.
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

              <span className="flex items-start gap-3">
                <I type="mail" className="mt-1 h-4 w-4 text-cyan-300" />
                <span className="grid gap-1">
                  <span>ventas@caditextil.com</span>
                  <span>ventas@mediascadi.com</span>
                </span>
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

              <a href="/polos" className="text-slate-300 transition hover:text-cyan-300">
                Polos personalizados
              </a>

              <a href="/lapiceros-personalizados" className="text-slate-300 transition hover:text-cyan-300">
                Lapiceros personalizados
              </a>

              <a href="/politica-de-privacidad.html" className="text-slate-300 transition hover:text-cyan-300">
                Política de privacidad
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CORPORACION TEXTIL CADI S.A.C. Todos los derechos reservados.</p>
          <p>Diseñado para marcas, empresas y negocios.</p>
        </div>
      </footer>
    </div>
  );
}
