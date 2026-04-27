import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

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
    arrow: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    shirt: <path d="M20.4 7.5 16 4l-2 2h-4L8 4 3.6 7.5 6 11v9h12v-9l2.4-3.5Z"/> ,
    spark: <><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/></>,
    factory: <><path d="M3 21h18"/><path d="M5 21V9l5 3V9l5 3V6h4v15"/><path d="M9 17h1"/><path d="M14 17h1"/></>,
    box: <><path d="M21 8v10a2 2 0 0 1-1 1.7l-7 4a2 2 0 0 1-2 0l-7-4A2 2 0 0 1 3 18V8"/><path d="M12 12 3.3 7"/><path d="m12 12 8.7-5"/><path d="M12 12v10"/></>,
    chat: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>,
    check: <path d="M20 6 9 17l-5-5"/>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8 9.5a16 16 0 0 0 6.5 6.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.5.6a2 2 0 0 1 1.7 2Z"/>,
    mail: <><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></>,
    pin: <><path d="M12 22s7-5 7-12a7 7 0 0 0-14 0c0 7 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></>,
    star: <path d="m12 2 3 6 6 .9-4.5 4.4 1.1 6.2L12 16.5 6.4 19.5l1.1-6.2L3 8.9 9 8l3-6Z"/>,
  };
  return <svg {...base}>{p[type]}</svg>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.11 } } };

const models = [
  { name: "Taloneras", tag: "Uso casual", text: "Formato discreto, fresco y de alta rotación para líneas urbanas y venta diaria.", shape: "h-16 w-32 rounded-full" },
  { name: "Tobilleras", tag: "Mayorista", text: "Versátiles para empresas, colegios, promociones y negocios de distribución.", shape: "h-24 w-32 rounded-b-3xl rounded-t-xl" },
  { name: "3/4", tag: "Institucional", text: "Mayor cobertura para uniformes, campañas corporativas y pedidos especiales.", shape: "h-36 w-28 rounded-b-3xl rounded-t-xl" },
  { name: "Futsal", tag: "Deportivo", text: "Pensadas para movimiento intenso, equipos, academias y entrenamientos.", shape: "h-44 w-28 rounded-b-3xl rounded-t-xl" },
];

const services = [
  { icon: "spark", title: "Diseño y desarrollo", text: "Convertimos tu idea en una propuesta clara: modelo, colores, tallas, estilo, empaque y presentación. Te asesoramos digitalmente para crear una línea lista para vender." },
  { icon: "factory", title: "Producción mayorista", text: "Fabricamos por volumen con procesos ordenados, control de tiempos y consistencia entre lotes para marcas, empresas e instituciones." },
  { icon: "box", title: "Marca y presentación", text: "Preparamos el producto con identidad propia: etiquetado, empaque y presentación comercial para que tus medias lleguen listas al cliente final." },
];

const products = [
  "Medias y calcetines para empresas, colegios, clubes, academias e instituciones públicas o privadas.",
  "Producción para licitaciones, campañas corporativas y requerimientos con especificaciones técnicas.",
  "Marca blanca para negocios que desean vender medias con su propia identidad comercial.",
  "Personalización con marca, logo, etiqueta y empaque final según el objetivo del pedido.",
  "Líneas para clientes corporativos, distribuidores, emprendedores y negocios textiles.",
  "Mangas industriales en algodón, nylon, poliéster y dralón para distintas aplicaciones.",
];

const advantages = [
  { icon: "shield", title: "Composición confiable", text: "85% algodón, 10% spandex y 5% elástico para suavidad, ajuste y resistencia." },
  { icon: "factory", title: "Producción flexible", text: "Adaptamos modelo, presentación y volumen según tu canal de venta o institución." },
  { icon: "chat", title: "Atención directa", text: "Cotización por WhatsApp, coordinación rápida y seguimiento de tu pedido mayorista." },
  { icon: "star", title: "Enfoque de marca", text: "Tu producto no solo se fabrica: se presenta para competir mejor en el mercado." },
];

const process = [
  { icon: "chat", title: "1. Requerimiento", text: "Nos cuentas modelo, cantidad, tallas, colores y objetivo del pedido." },
  { icon: "spark", title: "2. Propuesta", text: "Definimos una solución visual, técnica y comercial adecuada para tu negocio." },
  { icon: "factory", title: "3. Fabricación", text: "Producimos el lote con control de calidad y seguimiento del avance." },
  { icon: "box", title: "4. Entrega", text: "Despachamos el pedido organizado para venta, distribución o uso institucional." },
];

const faqs = [
  { q: "¿Atienden pedidos para empresas y colegios?", a: "Sí. Trabajamos pedidos por volumen para empresas, colegios, instituciones, clubes, distribuidores y clientes corporativos." },
  { q: "¿Puedo vender las medias con mi propia marca?", a: "Sí. Podemos orientar la presentación final con etiqueta, empaque e identidad de marca según el requerimiento." },
  { q: "¿Qué modelos fabrican?", a: "Fabricamos taloneras, tobilleras, medias 3/4 y medias de futsal. También trabajamos mangas industriales." },
];

export default function LandingMediasMayoristas() {
  const [cantidad, setCantidad] = useState("500");
  const [modelo, setModelo] = useState("Tobilleras");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const whatsappNumber = "51930967608";
  const whatsappText = useMemo(() => encodeURIComponent(`Hola, quiero cotizar medias al por mayor.%0AModelo: ${modelo}%0ACantidad aproximada: ${cantidad} pares%0ANombre/empresa: ${nombre || "Por completar"}%0ATeléfono: ${telefono || "Por completar"}`), [cantidad, modelo, nombre, telefono]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fb] text-slate-950">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-cyan-200/60 blur-3xl" />
        <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-slate-300/40 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/80 bg-white/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-white shadow-xl shadow-slate-300"><I type="shirt" className="h-6 w-6" /></div>
            <div><p className="text-lg font-black tracking-tight">Medias Cadi</p><p className="text-xs font-medium text-slate-500">Fabricación textil al por mayor</p></div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#servicios" className="hover:text-cyan-700">Servicios</a><a href="#fabricamos" className="hover:text-cyan-700">Qué fabricamos</a><a href="#modelos" className="hover:text-cyan-700">Modelos</a><a href="#proceso" className="hover:text-cyan-700">Proceso</a><a href="#cotizacion" className="hover:text-cyan-700">Cotización</a>
          </nav>
          <a href="#cotizacion" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-700">Cotizar ahora</a>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:pt-24">
          <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-8">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"><I type="spark" className="h-4 w-4 text-cyan-700" /> Desarrollo, fabricación y presentación para tu marca</motion.div>
            <motion.div variants={fadeUp} className="space-y-6"><h1 className="text-5xl font-black leading-[0.94] tracking-tight md:text-7xl">Medias al por mayor listas para vender, distribuir o representar tu marca.</h1><p className="max-w-2xl text-lg leading-8 text-slate-600">En Medias Cadi fabricamos medias y calcetines para empresas, instituciones, distribuidores y marcas que buscan un producto cómodo, resistente y con presentación profesional.</p></motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row"><a href="#cotizacion" className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-4 font-black text-white shadow-xl shadow-cyan-200 transition hover:-translate-y-1 hover:bg-cyan-700">Solicitar cotización <I type="arrow" className="ml-2 h-5 w-5" /></a><a href="#servicios" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 font-black text-slate-900 shadow-sm transition hover:-translate-y-1 hover:bg-slate-50">Ver servicios</a></motion.div>
            <motion.div variants={fadeUp} className="grid max-w-2xl grid-cols-3 gap-3">{["85% algodón", "10% spandex", "5% elástico"].map((item) => <div key={item} className="rounded-2xl border border-white bg-white/80 p-4 text-center shadow-sm"><p className="text-sm font-black text-slate-800">{item}</p></div>)}</motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-cyan-200 via-white to-blue-200 blur-2xl" />
            <div className="relative rounded-[3rem] border border-white bg-white/85 p-5 shadow-2xl shadow-slate-200 backdrop-blur-xl"><div className="rounded-[2.5rem] bg-gradient-to-br from-slate-950 to-slate-800 p-6 text-white"><div className="mb-8 flex items-center justify-between"><p className="text-sm font-bold text-cyan-200">Producción mayorista</p><span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">Medias Cadi</span></div><div className="grid grid-cols-2 gap-4">{models.map((item, index) => <motion.div key={item.name} animate={{ y: [0, -8, 0] }} transition={{ duration: 3 + index * 0.25, repeat: Infinity, ease: "easeInOut" }} className="rounded-[2rem] bg-white/10 p-4 backdrop-blur"><div className="mb-4 flex h-36 items-end justify-center rounded-[1.5rem] bg-white/10"><div className={`${item.shape} bg-gradient-to-b from-white via-cyan-100 to-slate-300 shadow-2xl`} /></div><p className="text-xs font-bold text-cyan-200">{item.tag}</p><h3 className="text-xl font-black">{item.name}</h3></motion.div>)}</div></div></div>
          </motion.div>
        </section>

        <section id="servicios" className="bg-white py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">Nuestros servicios</p><h2 className="text-4xl font-black tracking-tight md:text-6xl">Te ayudamos a crear un producto textil con identidad, calidad y salida comercial.</h2></motion.div><motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 md:grid-cols-3">{services.map((service) => <motion.div variants={fadeUp} whileHover={{ y: -8 }} key={service.title} className="rounded-[2.25rem] border border-slate-100 bg-slate-50 p-7 shadow-sm transition"><div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white"><I type={service.icon} className="h-7 w-7" /></div><h3 className="text-2xl font-black">{service.title}</h3><p className="mt-4 leading-8 text-slate-600">{service.text}</p></motion.div>)}</motion.div></div></section>

        <section id="fabricamos" className="mx-auto max-w-7xl px-5 py-24 md:px-8"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end"><div><p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">¿Qué fabricamos?</p><h2 className="text-4xl font-black tracking-tight md:text-6xl">Soluciones para empresas, instituciones y marcas que necesitan producir a escala.</h2></div><p className="text-lg leading-8 text-slate-600">No solo entregamos medias: desarrollamos productos textiles pensados para campañas, uniformes, venta mayorista, licitaciones y líneas de marca propia.</p></motion.div><motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-4 md:grid-cols-2">{products.map((item) => <motion.div variants={fadeUp} key={item} className="flex items-start gap-4 rounded-[1.75rem] border border-white bg-white/85 p-5 shadow-sm backdrop-blur"><div className="mt-1 rounded-full bg-cyan-100 p-2 text-cyan-700"><I type="check" className="h-5 w-5" /></div><p className="leading-7 text-slate-700">{item}</p></motion.div>)}</motion.div></section>

        <section className="bg-slate-950 py-24 text-white"><div className="mx-auto max-w-7xl px-5 md:px-8"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Por qué elegirnos</p><h2 className="text-4xl font-black tracking-tight md:text-6xl">Una fabricación pensada para que tu producto se vea mejor y se venda mejor.</h2></motion.div><motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 md:grid-cols-4">{advantages.map((item) => <motion.div variants={fadeUp} whileHover={{ y: -8 }} key={item.title} className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur"><div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950"><I type={item.icon} className="h-5 w-5" /></div><h3 className="text-xl font-black">{item.title}</h3><p className="mt-3 leading-7 text-slate-300">{item.text}</p></motion.div>)}</motion.div></div></section>

        <section id="modelos" className="mx-auto max-w-7xl px-5 py-24 md:px-8"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mb-12 max-w-2xl"><p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">Modelos disponibles</p><h2 className="text-4xl font-black tracking-tight md:text-6xl">Elige el formato ideal para tu mercado.</h2></motion.div><motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 md:grid-cols-4">{models.map((item) => <motion.div variants={fadeUp} whileHover={{ y: -10, scale: 1.02 }} key={item.name} className="rounded-[2.25rem] border border-white bg-white p-6 shadow-lg shadow-slate-100"><div className="mb-6 grid h-52 place-items-center rounded-[1.75rem] bg-gradient-to-br from-cyan-50 to-slate-100"><motion.div whileHover={{ rotate: 4 }} className={`${item.shape} bg-gradient-to-b from-white via-cyan-100 to-slate-300 shadow-xl`} /></div><div className="mb-3 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-700">{item.tag}</div><h3 className="text-2xl font-black">{item.name}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></motion.div>)}</motion.div></section>

        <section id="proceso" className="bg-white py-24"><div className="mx-auto max-w-7xl px-5 md:px-8"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mb-12 max-w-3xl"><p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">Proceso de trabajo</p><h2 className="text-4xl font-black tracking-tight md:text-6xl">De la cotización al producto final, con una ruta clara.</h2></motion.div><motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid gap-5 md:grid-cols-4">{process.map((step) => <motion.div variants={fadeUp} key={step.title} className="rounded-[2rem] border border-slate-100 bg-slate-50 p-6"><div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-slate-950 text-white"><I type={step.icon} className="h-7 w-7" /></div><h3 className="text-xl font-black">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.text}</p></motion.div>)}</motion.div></div></section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mb-10 max-w-2xl"><p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-cyan-700">Preguntas frecuentes</p><h2 className="text-4xl font-black tracking-tight md:text-5xl">Información rápida para cotizar mejor.</h2></motion.div><div className="grid gap-4 md:grid-cols-3">{faqs.map((faq) => <div key={faq.q} className="rounded-[2rem] border border-white bg-white p-6 shadow-sm"><h3 className="text-lg font-black">{faq.q}</h3><p className="mt-3 leading-7 text-slate-600">{faq.a}</p></div>)}</div></section>

        <section id="cotizacion" className="bg-slate-950 py-24 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8"><motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="space-y-6"><p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">Cotización</p><h2 className="text-4xl font-black tracking-tight md:text-6xl">Cuéntanos qué necesitas producir.</h2><p className="text-lg leading-8 text-slate-300">Envíanos tu requerimiento y te responderemos con una propuesta según modelo, cantidad, presentación y finalidad del pedido.</p><div className="grid gap-3 text-slate-300"><span className="flex gap-3"><I type="phone" className="h-5 w-5 shrink-0 text-cyan-300" /> +51 930 967 608</span><span className="flex gap-3"><I type="mail" className="h-5 w-5 shrink-0 text-cyan-300" /> ventas@mediascadi.com</span><span className="flex gap-3"><I type="pin" className="h-5 w-5 shrink-0 text-cyan-300" /> Perú</span></div></motion.div><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }} className="rounded-[2.5rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl md:p-8"><div className="grid gap-5"><label className="grid gap-2"><span className="text-sm font-black">Nombre o empresa</span><input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej. Comercial Cadi" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500" /></label><label className="grid gap-2"><span className="text-sm font-black">Teléfono</span><input value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Ej. 930 967 608" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500" /></label><div className="grid gap-5 md:grid-cols-2"><label className="grid gap-2"><span className="text-sm font-black">Modelo</span><select value={modelo} onChange={(e) => setModelo(e.target.value)} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500">{models.map((m) => <option key={m.name}>{m.name}</option>)}</select></label><label className="grid gap-2"><span className="text-sm font-black">Cantidad aprox.</span><input value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder="500" className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none transition focus:border-cyan-500" /></label></div><a href={`https://wa.me/${whatsappNumber}?text=${whatsappText}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-cyan-600 px-6 py-4 font-black text-white transition hover:bg-cyan-700"><I type="chat" className="mr-2 h-5 w-5" /> Enviar solicitud por WhatsApp</a><p className="text-center text-xs leading-6 text-slate-500">Te responderemos con una propuesta según tu necesidad de producción.</p></div></motion.div></div></section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 md:px-8"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3 md:items-center"><div><p className="text-2xl font-black">Medias Cadi</p><p className="mt-2 text-slate-500">Fabricación de medias y calcetines al por mayor.</p></div><div className="grid gap-2 text-sm text-slate-700"><span className="flex items-center gap-2"><I type="phone" className="h-4 w-4 text-cyan-700" /> +51 930 967 608</span><span className="flex items-center gap-2"><I type="mail" className="h-4 w-4 text-cyan-700" /> ventas@mediascadi.com</span><span className="flex items-center gap-2"><I type="pin" className="h-4 w-4 text-cyan-700" /> Perú</span></div><div className="text-sm text-slate-500 md:text-right">© 2026 Medias Cadi. Todos los derechos reservados.</div></div></footer>

      <motion.a initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, type: "spring" }} href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quiero información sobre medias al por mayor.")}`} target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 font-black text-white shadow-2xl shadow-green-200 transition hover:scale-105 hover:bg-green-600"><I type="chat" className="h-5 w-5" /> WhatsApp</motion.a>
    </div>
  );
}
