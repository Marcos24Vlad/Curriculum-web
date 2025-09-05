import { motion } from "framer-motion";
import { 
  Music, 
  Code, 
  Phone, 
  Store, 
  TrendingUp, 
  Calendar,
  MapPin,
  Briefcase,
  Users,
  BarChart3
} from "lucide-react";
import { useState, useEffect } from "react";

const experiences = [
  {
    id: 1,
    company: "DJ VLAD",
    role: "DJ Profesional & Emprendedor",
    period: "2022 - 2023",
    type: "Empresa Propia",
    location: "Eventos Diversos",
    description:
      "Fundé y operé mi propia empresa de entretenimiento, especializándome en la animación de eventos medianos.",
    achievements: [
      "Animación exitosa de eventos medianos",
      "Gestión completa del negocio propio",
      "Desarrollo de habilidades de entretenimiento y comunicación",
    ],
    icon: Music,
  },
  {
    id: 2,
    company: "Proyecto Universitario",
    role: "Desarrollador Full Stack",
    period: "2024 - 2025",
    type: "Trabajo en Equipo",
    location: "Universidad",
    description:
      "Plataforma web completa para gestión de estancias, estadías y servicio social estudiantil.",
    achievements: [
      "Colaboración con equipo de 5 desarrolladores",
      "Sistema de gestión documental",
      "Panel administrativo completo",
    ],
    icon: Code,
  },
  {
    id: 3,
    company: "City Express Jr",
    role: "Ejecutivo de Ventas Directas",
    period: "2025",
    type: "Tiempo Completo",
    location: "Presencial",
    description:
      "Encargado de la negociación y ventas de habitaciones hoteleras, manejo de llamadas y atención presencial.",
    achievements: [
      "Mejore los numeros de Afiliaciones de Marriott Bonvoy con un programa",
      "Atención multicanal",
      "Ventas B2B y B2C",
    ],
    icon: Phone,
  },
  {
    id: 4,
    company: "Tienda Local",
    role: "Desarrollador de Sistema de Inventario",
    period: "2024 - 2025",
    type: "Proyecto Freelance",
    location: "Desarrollo a Medida",
    description:
      "Sistema de gestión de inventario y análisis de ventas con reportes y top productos vendidos.",
    achievements: [
      "Gestión de inventario en tiempo real",
      "Dashboard de ventas",
      "Análisis predictivo de stock",
    ],
    icon: Store,
  },
  {
    id: 5,
    company: "Freelance Marketing",
    role: "Especialista en Marketing Digital",
    period: "2023 - 2024",
    type: "Consultoría",
    location: "Trabajo Independiente",
    description:
      "Estrategias de marketing y edición de contenido para productos de profesores y familiares.",
    achievements: [
      "Marketing para productos de llaves",
      "Marketing digital en fisioterapia",
      "Edición y publicación estratégica",
    ],
    icon: TrendingUp,
  },
];

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experience"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 md:py-16"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(37 99 235) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Blobs */}
      <motion.div
        animate={{ y: [-15, 15, -15], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-5 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [15, -15, 15], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-5 w-28 h-28 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-xl"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block p-3 mb-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-lg"
            >
              <Briefcase className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4"
            >
              Experiencia Profesional
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
            >
              Un vistazo compacto a mis proyectos y experiencias laborales.
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/30 via-blue-400/30 to-blue-600/30 rounded-full"></div>
            <div className="space-y-10">
              {experiences.map((exp, index) => {
                const IconComponent = exp.icon;
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={exp.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex flex-col lg:flex-row items-center"
                  >
                    {/* Timeline Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                      className="absolute left-1/2 -translate-x-1/2 z-20 w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full border-4 border-white dark:border-slate-900 shadow-lg flex items-center justify-center"
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="w-full lg:hidden h-6" />

                    {/* Card */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`relative w-full lg:w-5/12 ${isEven ? "lg:mr-auto lg:pr-6" : "lg:ml-auto lg:pl-6"}`}
                    >
                      <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl p-5 md:p-6 border border-slate-200/50 dark:border-slate-700/50 shadow-lg">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm mb-2">
                          <Briefcase size={14} /> {exp.company}
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-2">
                          <Calendar size={12} /> {exp.period} • {exp.type}
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs mb-4">
                          <MapPin size={12} /> {exp.location}
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
                          {exp.description}
                        </p>
                        <div>
                          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">
                            <BarChart3 size={14} /> Logros:
                          </div>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-xs"
                              >
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1" />
                                <span>{achievement}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

      
           
        
        </motion.div>
      </div>
    </section>
  );
}
