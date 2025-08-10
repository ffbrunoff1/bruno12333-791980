import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Award, TrendingUp, Building, Hammer, Shield, Star, CheckCircle, ArrowRight } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Foco na Qualidade',
      description: 'Priorizamos a excelência em cada detalhe, garantindo resultados que superam expectativas.',
      color: 'bg-primary-500'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais experientes e certificados trabalhando em sintonia para seu projeto.',
      color: 'bg-accent-500'
    },
    {
      icon: Shield,
      title: 'Compromisso Total',
      description: 'Cumprimos prazos, orçamentos e mantemos total transparência em nossos processos.',
      color: 'bg-primary-600'
    },
    {
      icon: Award,
      title: 'Reconhecimento',
      description: 'Anos de experiência resultaram em diversos projetos premiados e clientes satisfeitos.',
      color: 'bg-accent-600'
    }
  ]

  const achievements = [
    { number: '500+', label: 'Projetos Entregues', icon: Building },
    { number: '15', label: 'Anos de Mercado', icon: TrendingUp },
    { number: '100%', label: 'Clientes Satisfeitos', icon: Star },
    { number: '50+', label: 'Profissionais', icon: Users }
  ]

  const services = [
    'Construção Residencial de Alto Padrão',
    'Projetos Comerciais e Industriais',
    'Reformas e Ampliações Completas',
    'Consultoria em Engenharia Civil',
    'Gerenciamento de Obras',
    'Projetos Sustentáveis e Eco-friendly'
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>
      
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-20 right-20 w-64 h-64 bg-primary-200 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-accent-200 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 rounded-full px-6 py-3 mb-6"
          >
            <Building className="w-5 h-5" />
            <span className="font-semibold">Sobre a bruno12333</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Excelência</span> e{' '}
            <span className="gradient-text">Compromisso</span>
            <br />
            <span className="text-secondary-800">na Construção Civil</span>
          </h2>
          
          <p className="text-xl text-secondary-600 leading-relaxed">
            Há mais de uma década transformando sonhos em realidade através de projetos 
            inovadores e construções de alta qualidade. Nossa paixão pela perfeição nos 
            move a superar limites em cada obra.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-secondary-800 mb-4">
                Transformando Visões em Realidade
              </h3>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                A <strong className="text-primary-600">bruno12333</strong> nasceu da visão de revolucionar 
                o mercado da construção civil, combinando tradição, inovação e excelência técnica. 
                Cada projeto é uma oportunidade de criar algo extraordinário.
              </p>
              
              <p className="text-lg text-secondary-600 leading-relaxed">
                Nossa abordagem integrada garante que desde o planejamento inicial até a entrega 
                final, cada detalhe seja executado com precisão e cuidado excepcionais.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-secondary-800 mb-4">
                Nossos Serviços Especializados:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 group"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500 group-hover:text-accent-500 transition-colors duration-300" />
                    <span className="text-secondary-700 group-hover:text-secondary-900 transition-colors duration-300">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Converse Conosco</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover group"
              >
                <div className={`w-12 h-12 ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-secondary-800 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                  {value.title}
                </h4>
                
                <p className="text-secondary-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/5 bg-pattern"></div>
          
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Números que Falam por Si
              </h3>
              <p className="text-primary-100 text-lg max-w-2xl mx-auto">
                Nossa trajetória de sucesso é medida pela confiança de nossos clientes 
                e pela qualidade de nossos projetos entregues.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <achievement.icon className="w-8 h-8 text-accent-400" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">
                    {achievement.number}
                  </div>
                  <div className="text-primary-100 font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-6 right-6 w-20 h-20 border border-white/20 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-6 left-6 w-16 h-16 border border-accent-400/30 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}