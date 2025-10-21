  import { motion } from "framer-motion";
  import {
    Github,
    Linkedin,
    Mail,
    Download,
    Code,
    Palette,
    Zap,
    MessageCircle,
    User,
    Award,
  } from "lucide-react";
  import { useState, useEffect } from "react";
  import Perfil from "../assets/Perfil.jpg";

  export default function Hero() {
    const [particles, setParticles] = useState([]);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    const skills = [
      { name: "Trabajo en Equipo", level: "Avanzado", experience: 4, icon: User },
      { name: "Microsoft Office", level: "Avanzado", experience: 5, icon: Code },
      { name: "Programación y Desarrollo", level: "Avanzado", experience: 5, icon: Code },
      { name: "Marketing", level: "Intermedio", experience: 3, icon: Palette },
      { name: "Ventas", level: "Avanzado", experience: 4, icon: Award },
      { name: "Resolución de Problemas", level: "Avanzado", experience: 5, icon: Zap },
      { name: "Atención al Cliente", level: "Experto", experience: 5, icon: MessageCircle },
      { name: "Inglés", level: "Intermedio", experience: 3, icon: MessageCircle },
    ];

    const getLevelColor = (level) => {
      const colors = {
        "Básico": "from-slate-400 to-slate-500",
        "Intermedio-Bajo": "from-blue-400 to-blue-500",
        "Intermedio": "from-blue-500 to-blue-600",
        "Avanzado": "from-emerald-500 to-emerald-600",
        "Experto": "from-purple-500 to-purple-600"
      };
      return colors[level] || colors["Intermedio"];
    };

    const getLevelBadgeColor = (level) => {
      const colors = {
        "Básico": "bg-slate-100 text-slate-700 border-slate-300",
        "Intermedio-Bajo": "bg-blue-50 text-blue-700 border-blue-300",
        "Intermedio": "bg-blue-100 text-blue-800 border-blue-400",
        "Avanzado": "bg-emerald-100 text-emerald-800 border-emerald-400",
        "Experto": "bg-purple-100 text-purple-800 border-purple-400"
      };
      return colors[level] || colors["Intermedio"];
    };

    // Detect mobile devices
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Generate floating particles (reduced for mobile)
    useEffect(() => {
      const generateParticles = () => {
        const newParticles = [];
        const particleCount = isMobile ? 20 : 50;

        for (let i = 0; i < particleCount; i++) {
          newParticles.push({
            id: i,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * (isMobile ? 2 : 4) + 1,
            speedX: (Math.random() - 0.5) * (isMobile ? 1 : 2),
            speedY: (Math.random() - 0.5) * (isMobile ? 1 : 2),
            opacity: Math.random() * 0.5 + 0.1,
          });
        }
        setParticles(newParticles);
      };

      generateParticles();
    }, [isMobile]);

    // Handle mouse movement (disabled on mobile for performance)
    const handleMouseMove = (e) => {
      if (isMobile) return;

      setMousePosition({ x: e.clientX, y: e.clientY });

      // Create burst effect on mouse move
      const newParticles = [];
      for (let i = 0; i < 5; i++) {
        newParticles.push({
          id: Date.now() + i,
          x: e.clientX + (Math.random() - 0.5) * 50,
          y: e.clientY + (Math.random() - 0.5) * 50,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 6,
          speedY: (Math.random() - 0.5) * 6,
          opacity: 0.6,
          temporary: true,
        });
      }

      setParticles((prev) => [...prev.slice(-30), ...newParticles]);
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          duration: 0.6,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
      },
    };

    const skillVariants = {
      hidden: { opacity: 0, x: 50 },
      visible: (index) => ({
        opacity: 1,
        x: 0,
        transition: { delay: 0.3 + index * 0.1, duration: 0.5 },
      }),
    };

    return (
      <section
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
        onMouseMove={handleMouseMove}
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

        {/* Interactive Particles */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-gradient-to-r from-blue-400 to-blue-600"
                initial={{
                  x: particle.x,
                  y: particle.y,
                  opacity: particle.opacity,
                  scale: particle.size * 0.5,
                  width: particle.size,
                  height: particle.size,
                }}
                animate={{
                  x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 15,
                  y: particle.y + Math.cos(Date.now() * 0.001 + particle.id) * 15,
                  opacity: particle.temporary
                    ? [0.6, 0]
                    : [
                        particle.opacity,
                        particle.opacity * 0.3,
                        particle.opacity,
                      ],
                  scale: particle.temporary
                    ? [particle.size * 0.5, 0]
                    : [
                        particle.size * 0.5,
                        particle.size * 0.8,
                        particle.size * 0.5,
                      ],
                }}
                transition={{
                  duration: particle.temporary ? 1.5 : 8,
                  repeat: particle.temporary ? 0 : Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}

        {/* Mouse follower effect (desktop only) */}
        {!isMobile && (
          <motion.div
            className="absolute pointer-events-none z-10"
            animate={{
              x: mousePosition.x - 25,
              y: mousePosition.y - 25,
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 150,
            }}
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/20 blur-xl"></div>
          </motion.div>
        )}

        {/* Decorative Elements */}
        <motion.div
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 3, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-5 md:top-20 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [15, -15, 15],
            rotate: [0, -3, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-5 md:bottom-20 md:right-10 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 rounded-full blur-xl"
        />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-10 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center max-w-7xl mx-auto"
          >
            {/* Left Side - Profile & Info */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-1">
              {/* Profile Image */}
              <motion.div
                variants={itemVariants}
                className="relative mx-auto lg:mx-0 w-48 h-48 md:w-64 md:h-64 group"
                whileHover={{ scale: isMobile ? 1 : 1.05 }}
              >
                {/* Animated Ring */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Profile Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl backdrop-blur-sm">
                  <img
                    src={Perfil}
                    alt="Marcos Vladimir"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Status Indicator */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-5 h-5 md:w-6 md:h-6 bg-emerald-400 rounded-full border-3 md:border-4 border-white shadow-lg"
                />

                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-2 -right-2 md:-top-3 md:-right-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold shadow-lg"
                >
                  Disponible
                </motion.div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 md:space-y-6"
              >
                <motion.h1
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white leading-tight"
                  whileHover={{ scale: isMobile ? 1 : 1.02 }}
                >
                  Hola, soy{" "}
                  <motion.span
                    className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    Marcos Vladimir
                  </motion.span>
                </motion.h1>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start"
              >
                {/* Download CV Button */}
                <motion.a
                  href="/Curriculum-Marcos-Poot-Cohuo.pdf"
                  download="Curriculum-Marcos-Poot-Cohuo.pdf"
                  whileHover={{
                    scale: isMobile ? 1 : 1.05,
                    boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                >
                  <Download size={18} />
                  Descargar CV
                </motion.a>

                {/* Contact Button */}
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=marcosvladimir24@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: isMobile ? 1 : 1.05,
                    backgroundColor: "rgba(37, 99, 235, 0.05)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 md:px-8 md:py-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 rounded-xl font-semibold border border-slate-200 dark:border-slate-600 transition-all duration-300 flex items-center justify-center gap-2 hover:border-blue-600 dark:hover:border-blue-400"
                >
                  <Mail size={18} />
                  Contactar
                </motion.a>

                {/* WhatsApp Button */}
                <motion.a
                  href="https://wa.me/529983238717"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: isMobile ? 1 : 1.05,
                    backgroundColor: "#059669",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 md:px-8 md:py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </motion.a>
              </motion.div>
            </div>

            {/* Right Side - Skills */}
            <motion.div
              variants={itemVariants}
              className="order-1 lg:order-2 w-full max-w-lg mx-auto lg:max-w-none"
            >
              <motion.div
                className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-3xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-700/50 shadow-2xl"
                whileHover={{
                  scale: isMobile ? 1 : 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3
                  className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white mb-6 md:mb-8 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Habilidades Técnicas
                </motion.h3>

                <div className="space-y-3 md:space-y-4">
                  {skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        custom={index}
                        variants={skillVariants}
                        initial="hidden"
                        animate="visible"
                        className="group"
                        whileHover={{ scale: isMobile ? 1 : 1.02 }}
                      >
                        <div className="flex items-center justify-between p-3 md:p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600 group-hover:border-blue-400 dark:group-hover:border-blue-500 transition-all duration-300 group-hover:shadow-lg">
                          <div className="flex items-center gap-3 md:gap-4 flex-1">
                            <motion.div
                              className={`p-2 md:p-2.5 rounded-lg bg-gradient-to-br ${getLevelColor(skill.level)} shadow-md`}
                              whileHover={{ rotate: isMobile ? 0 : 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <IconComponent
                                size={18}
                                className="text-white"
                              />
                            </motion.div>
                            
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-100 truncate">
                                {skill.name}
                              </h4>
                              <div className="flex items-center gap-1.5 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <motion.div
                                    key={i}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 + i * 0.05 }}
                                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                                      i < skill.experience
                                        ? `bg-gradient-to-r ${getLevelColor(skill.level)} shadow-sm`
                                        : 'bg-slate-300 dark:bg-slate-600'
                                    } ${i === 0 ? 'w-6' : i === 1 ? 'w-5' : i === 2 ? 'w-4' : i === 3 ? 'w-4' : 'w-3'}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>

                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            className={`px-2.5 md:px-3 py-1 md:py-1.5 rounded-lg border text-xs md:text-sm font-semibold whitespace-nowrap ${getLevelBadgeColor(skill.level)} shadow-sm`}
                          >
                            {skill.level}
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 dark:text-slate-500"
        >
          <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-transparent via-blue-600/50 to-transparent rounded-full"></div>
        </motion.div>
      </section>
    );
  }