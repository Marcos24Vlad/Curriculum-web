import React, { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    // Detectar sección activa al hacer scroll
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "achievements"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "hero", label: "Inicio" },
    { id: "about", label: "Sobre mí" },
    { id: "experience", label: "Experiencia" },
    { id: "achievements", label: "Logros" },
  ];

  const handleClick = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 🔹 Navbar mejorado */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg border-b border-slate-200/50 dark:border-slate-700/50 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo mejorado */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleClick("hero");
              }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <img 
                src="/mi-logo.png" 
                alt="Logo" 
                className="w-10 h-10 lg:w-12 lg:h-12 object-contain rounded-lg shadow-lg group-hover:shadow-xl transition-all group-hover:scale-110"
              />
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-white-600 dark:from-blue-400 dark:to-green-400 bg-clip-text text-transparent">
                Marcos Vladimir Poot Cohuo 
              </span>
            </a>

            {/* Links en escritorio */}
            <div className="hidden md:flex items-center gap-2 lg:gap-8">
              {links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.id);
                    }}
                    className="relative px-4 py-2 font-medium text-sm lg:text-base transition-all group cursor-pointer"
                  >
                    <span
                      className={`relative z-10 transition-colors ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      }`}
                    >
                      {link.label}
                    </span>
                    {/* Indicador activo */}
                    {isActive && (
                      <span className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg transition-all" />
                    )}
                    {/* Efecto hover */}
                    {!isActive && (
                      <span className="absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Botón menú móvil */}
            <button
              className="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all hover:scale-105 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`md:hidden overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-700/50 transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-6 space-y-2">
            {links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.id);
                  }}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 🔹 Contenido principal */}
      <main className="pt-20">
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="experience" className="scroll-mt-20">
          <Experience />
        </section>

        <section id="achievements" className="scroll-mt-20">
          <Achievements />
        </section>

        <section id="footer" className="scroll-mt-20">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;