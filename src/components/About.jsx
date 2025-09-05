import { motion } from "framer-motion";
import { useState } from "react";
import {
  Lightbulb,
  Users,
  Target,
  Zap,
  Heart,
  Code2,
  Palette,
  BookOpen,
} from "lucide-react";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const passions = [
    {
      icon: Code2,
      title: "Desarrollo",
      description: "Crear soluciones innovadoras y escalables",
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Transformar ideas en proyectos reales",
    },
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajar en equipos multidisciplinarios",
    },
    {
      icon: Target,
      title: "Resultados",
      description: "Lograr impacto y resultados excepcionales",
    },
  ];

  const skills = [
    "Desarrollo Frontend",
    "Desarrollo Backend",
    "UI/UX Design",
    "Arquitectura de Software",
    "Gestión de Proyectos",
    "Metodologías Ágiles",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/3 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-8"
                whileHover={{ scale: 1.02 }}
              >
                Sobre{" "}
                <span className="text-blue-500 relative">
                  mí
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-blue-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                </span>
              </motion.h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <motion.p
                className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Soy estudiante de Ingeniería en Software, en búsqueda de
                oportunidades en distintas áreas para adquirir experiencia
                diversa y fortalecer mi capacidad de comprensión y adaptación.
                Me interesa contribuir al crecimiento de la empresa aportando
                ideas innovadoras y soluciones tecnológicas, mientras continúo
                desarrollando habilidades prácticas que me permitan mejorar con
                el tiempo.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Cuento con experiencia en ventas como Ejecutivo de Venta Directa
                en City Express, lo que me ha brindado herramientas de
                comunicación, trabajo en equipo y atención al cliente. Esta
                combinación de habilidades técnicas y comerciales me hace un
                perfil versátil y adaptable a diferentes entornos laborales.
              </motion.p>
            </motion.div>

            {/* Skills Tags */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <BookOpen size={20} className="text-blue-500" />
                Especialidades
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "#3B82F6",
                      color: "#FFFFFF",
                    }}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 border border-gray-300 dark:border-gray-600"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Interactive Cards */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center flex items-center justify-center gap-2">
              <Heart size={24} className="text-blue-500" />
              Lo que me apasiona
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.title}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                    backgroundColor:
                      hoveredCard === index ? "#3B82F6" : undefined,
                    color: hoveredCard === index ? "#FFFFFF" : undefined,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg cursor-pointer transition-all duration-300 group"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: hoveredCard === index ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4 group-hover:bg-white/20"
                  >
                    <passion.icon
                      size={24}
                      className={`${
                        hoveredCard === index ? "text-white" : "text-blue-500"
                      } transition-colors duration-300`}
                    />
                  </motion.div>

                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {passion.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-100 transition-colors duration-300">
                    {passion.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        ></motion.div>
      </div>
    </section>
  );
}
