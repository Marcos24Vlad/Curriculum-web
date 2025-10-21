import { motion } from "framer-motion";
import { useState } from "react";
import {
  Lightbulb,
  Users,
  Target,
  Zap,
  Code2,
  Rocket,
  Brain,
  TrendingUp,
} from "lucide-react";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const values = [
    {
      icon: Code2,
      title: "Tecnología",
      description: "Apasionado por crear soluciones digitales",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Lightbulb,
      title: "Innovación",
      description: "Siempre buscando nuevas formas de resolver problemas",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva hacia objetivos comunes",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Crecimiento",
      description: "Aprendizaje continuo y desarrollo profesional",
      color: "from-purple-500 to-purple-600"
    },
  ];

  const highlights = [
    { number: "3+", label: "Años de Experiencia", icon: Zap },
    { number: "8+", label: "Proyectos Completados", icon: Rocket },
    { number: "100%", label: "Compromiso", icon: Target },
    { number: "∞", label: "Ganas de Aprender", icon: Brain },
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

  return (
    <section
      id="about"
      className="min-h-screen px-4 sm:px-6 py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
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

      {/* Decorative Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4"
              whileHover={{ scale: 1.02 }}
            >
              Sobre{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
                Mí
              </span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            {/* Left Side - Brief Introduction */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
                <motion.p
                  className="text-lg md:text-xl leading-relaxed text-slate-700 dark:text-slate-300 mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Soy <strong className="text-blue-600 dark:text-blue-400">Estudiante de Ingeniero en Software</strong> con pasión por crear experiencias digitales excepcionales. Combino habilidades técnicas con una mentalidad orientada a resultados.
                </motion.p>

                <motion.p
                  className="text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Mi experiencia abarca desde el desarrollo frontend hasta la gestión comercial, lo que me permite entender tanto el aspecto técnico como el impacto en el negocio.
                </motion.p>

                {/* Quick Stats */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="grid grid-cols-2 gap-4">
                    {highlights.slice(0, 2).map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <IconComponent size={16} className="text-blue-600" />
                            <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                              {stat.number}
                            </span>
                          </div>
                          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                            {stat.label}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Additional Stats */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.slice(2).map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg text-center"
                    >
                      <IconComponent size={24} className="text-blue-600 mx-auto mb-2" />
                      <span className="text-3xl font-bold text-blue-600 dark:text-blue-400 block mb-1">
                        {stat.number}
                      </span>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Side - Values Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
                Lo que me define
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  const isHovered = hoveredCard === index;
                  
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onHoverStart={() => setHoveredCard(index)}
                      onHoverEnd={() => setHoveredCard(null)}
                      className="relative group cursor-pointer"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                      
                      <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full">
                        <motion.div
                          animate={{
                            rotate: isHovered ? [0, -10, 10, 0] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                          className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl mb-4 shadow-lg`}
                        >
                          <IconComponent size={24} className="text-white" />
                        </motion.div>

                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                          {value.title}
                        </h4>

                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}