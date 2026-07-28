import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';

// 1. IMPORTA AQUÍ TUS PÁGINAS/COMPONENTES
// import PaginaPolos from './pages/PaginaPolos';
// import PaginaMedias from './pages/PaginaMedias';
// import PaginaTercera from './pages/PaginaTercera';

// Componente para la barra de navegación activa
const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Medias', path: '/medias' },
    { name: 'Polos', path: '/polos' },
    { name: 'Catálogo / Otros', path: '/catalogo' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Identity */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-black tracking-tight text-white">CADI</span>
          <span className="text-xs bg-neutral-800 text-neutral-300 font-medium px-2 py-0.5 rounded-full border border-neutral-700">
            Fabricación B2B
          </span>
        </Link>

        {/* Navegación Principal */}
        <nav className="flex items-center space-x-1 sm:space-x-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

// Componente de la Página de Inicio (Hub / Selección)
const HomeHub = () => {
  return (
    <div className="min-h-[85vh] bg-black text-white flex flex-col justify-center items-center px-4 py-12">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
          Manufactura Textil <br />
          <span className="text-neutral-400">Directa y Personalizada</span>
        </h1>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto">
          Selecciona la línea de producción que deseas cotizar o personalizar al por mayor.
        </p>

        {/* Grilla de Acceso Rápido */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 max-w-2xl mx-auto">
          <Link
            to="/medias"
            className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all text-left group"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-white">Medias B2B</h3>
            <p className="text-sm text-neutral-400">Algodón seleccionado de alta densidad. Tobilleras, taloneras y deportivas.</p>
          </Link>

          <Link
            to="/polos"
            className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all text-left group"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-white">Polos B2B</h3>
            <p className="text-sm text-neutral-400">Cortes oversize, boxy fit y corporativos con acabados de primera.</p>
          </Link>

          <Link
            to="/catalogo"
            className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all text-left group"
          >
            <h3 className="text-xl font-bold mb-2 group-hover:text-white">Línea Especial</h3>
            <p className="text-sm text-neutral-400">Proyectos a medida, accesorios y personalizaciones avanzadas.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

// Componente Footer General
const Footer = () => (
  <footer className="border-t border-neutral-800 bg-black text-neutral-500 text-xs py-8 px-4 text-center">
    <div className="max-w-7xl mx-auto space-y-2">
      <p>© {new Date().getFullYear()} Corporación Textil CADI S.A.C. Todos los derechos reservados.</p>
      <p>Atención mayorista: <a href="mailto:ventas@caditextil.com" className="hover:underline text-neutral-400">ventas@caditextil.com</a></p>
    </div>
  </footer>
);

// COMPONENTE PRINCIPAL APP
export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans flex flex-col justify-between">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeHub />} />
            
            {/* 2. REEMPLAZA ESTOS PLACEHOLDERS CON TUS PÁGINAS REALES */}
            <Route path="/medias" element={<div className="p-8 text-center text-neutral-400">Página de Medias (Pega tu componente aquí)</div>} />
            <Route path="/polos" element={<div className="p-8 text-center text-neutral-400">Página de Polos (Pega tu componente aquí)</div>} />
            <Route path="/catalogo" element={<div className="p-8 text-center text-neutral-400">Tercera Página (Pega tu componente aquí)</div>} />
            
            {/* Redirección por defecto */}
            <Route path="*" element={<HomeHub />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
