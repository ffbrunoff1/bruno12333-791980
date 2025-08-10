import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Users, Award, TrendingUp, Building, Wrench, Shield } from 'lucide-react'

export default function Hero() {
  const stats = [
    { icon: Building, number: '500+', label: 'Projetos Concluídos', color: 'text-accent-500' },
    { icon: Users, number: '15', label: 'Anos de Experiência', color: 'text-primary-500' },
    { icon: Award, number: '100%', label: 'Satisfação Garantida', color: 'text-accent-500' },
    { icon: Shield, number: '24/7', label: 'Suporte Técnico', color: 'text-primary-500' }
  ]

  const features = [
    { icon: Building, title: 'Projetos Personalizados', desc: 'Cada obra é única e planejada conforme suas necessidades' },
    { icon: Wrench, title: 'Tecnologia Avançada', desc: 'Utilizamos as mais modernas técnicas de construção' },
    { icon: Shield, title: 'Garantia Total', desc: 'Qualidade assegurada em todos os nossos serviços' }
  ]

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-32 right-20 hidden lg:block"
      >
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Building className="w-8 h-8 text-white" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-40 left-20 hidden lg:block"
      >
        <div className="w-12 h-12 bg-accent-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Wrench className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      <div className="relative z-10 container-custom section-padding pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20"
            >
              <Star className="w-5 h-5 text-accent-400" />
              <span className="text-sm font-medium">Excelência em Construção Civil</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Transformando</span>
                <span className="block bg-gradient-to-r from-accent-400 to-accent-300 bg-clip-text text-transparent">
                  Visões
                </span>
                <span className="block">em Realidade</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-primary-100 max-w-xl">
                Excelência e compromisso: os pilares do seu sucesso na construção civil
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-accent inline-flex items-center space-x-2 text-lg"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center space-x-2 text-lg"
              >
                <Play className="w-5 h-5" />
                <span>Conheça Nosso Trabalho</span>
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center space-x-6 pt-8"
            >
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                ))}
              </div>
              <div className="text-primary-100">
                <span className="font-semibold text-white">4.9/5</span> baseado em avaliações de clientes
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center card-hover"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-primary-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Features Cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-center space-x-4 card-hover"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-primary-100 text-sm">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-24 h-24 border-2 border-accent-400/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-white/20 rounded-full"
            />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm mb-2">Role para baixo</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/50 rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}