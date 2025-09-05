import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importa tus archivos desde assets
import Claudstore from "../assets/Claudstore Tienda.png";
import MejoraAfiliaciones from "../assets/Mejora Numerica de Afiliaciones.jpg";
import Becado from "../assets/Reconocimiento de Plataforma Becado.jpg";
import AfiliacionesMes from "../assets/Reconocimiento por mayoria de Afiliaciones en un Mes.jpg";
import ReporteVentas from "../assets/Reporte de Ventas ClaudStore.png";
import VideoDJ from "../assets/Video Evidencia Evento DJ.mp4";
import VideoPlataforma from "../assets/Video Evidencia Expocision de Plataforma Estudiantil.mp4";

const achievements = [
  { type: "image", title: "Claudstore Tienda", file: Claudstore, description: "Captura de la tienda Claudstore mostrando su diseño y funcionalidad." },
  { type: "image", title: "Mejora Numérica de Afiliaciones", file: MejoraAfiliaciones, description: "Reporte de crecimiento significativo en afiliaciones." },
  { type: "image", title: "Reconocimiento de Plataforma Becado", file: Becado, description: "Certificado por desarrollo de la plataforma de gestión estudiantil." },
  { type: "image", title: "Mayoría de Afiliaciones en un Mes", file: AfiliacionesMes, description: "Premio por alcanzar la mayor cantidad de afiliaciones en un mes." },
  { type: "image", title: "Reporte de Ventas Claudstore", file: ReporteVentas, description: "Análisis de ventas y desempeño en la tienda Claudstore." },
  { type: "video", title: "Evidencia Evento DJ", file: VideoDJ, description: "Video mostrando mi participación como DJ en un evento en vivo." },
  { type: "video", title: "Exposición Plataforma Estudiantil", file: VideoPlataforma, description: "Presentación oficial de la plataforma académica ante docentes y alumnos." },
];

export default function AchievementsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // 🔎 Detectar si el carrusel está visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 } // Se considera visible si el 50% está en pantalla
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  // ⏯️ Manejar autoplay solo si es visible
  useEffect(() => {
    if (!isVisible) {
      // Pausar video si no es visible
      if (videoRef.current) videoRef.current.pause();
      return;
    }

    const isVideo = achievements[current].type === "video";
    if (isVideo) {
      videoRef.current?.play();
      return;
    }

    const timer = setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => clearTimeout(timer);
  }, [current, isVisible]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % achievements.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + achievements.length) % achievements.length);

  return (
    <section
      ref={containerRef}
      id="achievements"
      className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden px-6 py-16"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
          Evidencias
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mt-3 text-base md:text-lg">
          Reconocimientos, reportes y presentaciones de mi trayectoria.
        </p>
      </div>

      {/* Carrusel */}
      <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative"
          >
            {achievements[current].type === "image" ? (
              <img
                src={achievements[current].file}
                alt={achievements[current].title}
                className="w-full h-[450px] object-cover"
              />
            ) : (
              <video
                ref={videoRef}
                src={achievements[current].file}
                controls
                onEnded={nextSlide}
                className="w-full h-[450px] object-cover"
              />
            )}

            {/* Overlay info */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent text-white p-6">
              <h3 className="text-xl font-semibold">{achievements[current].title}</h3>
              <p className="text-sm mt-2">{achievements[current].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controles */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 left-4 p-3 bg-blue-600/70 hover:bg-blue-700 rounded-full shadow-lg text-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 right-4 p-3 bg-blue-600/70 hover:bg-blue-700 rounded-full shadow-lg text-white"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex gap-2 mt-6">
        {achievements.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current
                ? "bg-blue-600 scale-125"
                : "bg-slate-400 dark:bg-slate-600 hover:bg-blue-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
