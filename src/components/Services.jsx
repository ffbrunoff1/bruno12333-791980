import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Building, Home, Wrench, Users, CheckCircle, ArrowRight, Star, Clock, Shield, Award, Hammer, Zap } from 'lucide-react'

export default function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 0,
      icon: Home,
      title: 'Construção Residencial',
      subtitle: 'Casas dos seus sonhos',
      description: 'Transformamos sua visão em realidade com projetos residenciais únicos e personalizados.',
      fullDescription: 'Especializados em construção residencial de alto padrão, oferecemos soluções completas desde o projeto arquitetônico até a entrega das chaves. Nossa equipe trabalha com materiais de primeira qualidade e tecnologias inovadoras para garantir durabilidade, conforto e beleza em cada detalhe.',
      features: [
        'Projetos arquitetônicos personalizados',
        'Acompanhamento técnico especializado',
        'Materiais de alta qualidade',
        'Tecnologia em automação residencial',
        'Paisagismo integrado',
        'Garantia estendida'
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'primary',
      stats: { projects: '200+', time: '8-12 meses', warranty: '5 anos' }
    },
    {
      id: 1,
      icon: Building,
      title: 'Construção Comercial',
      subtitle: 'Espaços corporativos modernos',
      description: 'Desenvolvemos ambientes comerciais que potencializam negócios e impressionam clientes.',
      fullDescription: 'Nossa expertise em construção comercial abrange desde pequenos escritórios até grandes complexos empresariais. Priorizamos funcionalidade, sustentabilidade e design moderno para criar espaços que reflitam a identidade da sua empresa e proporcionem produtividade máxima.',
      features: [
        'Projetos corporativos funcionais',
        'Certificações ambientais',
        'Tecnologia predial avançada',
        'Layouts otimizados',
        'Segurança integrada',
        'Eficiência energética'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'accent',
      stats: { projects: '150+', time: '6-18 meses', warranty: '3 anos' }
    },
    {
      id: 2,
      icon: Wrench,
      title: 'Reformas & Ampliações',
      subtitle: 'Renovando espaços existentes',
      description: 'Revitalizamos e expandimos espaços com soluções criativas e execução impecável.',
      fullDescription: 'Especializados em reformas complexas e ampliações estratégicas, nossa equipe transforma espaços antigos em ambientes modernos e funcionais. Trabalhamos com mínimo impacto na rotina dos moradores, utilizando técnicas avançadas e materiais sustentáveis.',
      features: [
        'Reformas sem transtornos',
        'Ampliações estruturais',
        'Modernização completa',
        'Aproveitamento de espaços',
        'Sustentabilidade',
        'Orçamento transparente'
      ],
      image: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'secondary',
      stats: { projects: '100+', time: '2-6 meses', warranty: '2 anos' }
    },
    {
      id: 3,
      icon: Users,
      title: 'Consultoria Especializada',
      subtitle: 'Orientação técnica profissional',
      description: 'Oferecemos consultoria técnica especializada para otimizar seus projetos de construção.',
      fullDescription: 'Nossa consultoria técnica oferece orientação especializada em todas as fases do projeto, desde viabilidade técnica e econômica até execução e pós-entrega. Nossos especialistas ajudam você a tomar as melhores decisões para seu investimento.',
      features: [
        'Análise de viabilidade',
        'Gestão de projetos',
        'Acompanhamento de obra',
        'Controle de qualidade',
        'Otimização de custos',
        'Suporte pós-entrega'
      ],
      image: 'https://images.unsplash.com/photo-1664618655891-8bb78a2d0e0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      color: 'primary',
      stats: { projects: '300+', time: 'Flexível', warranty: '1 ano' }
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Consulta Inicial',
      description: 'Entendemos suas necessidades e sonhos',
      icon: Users,
      color: 'primary'
    },
    {
      step: '02',
      title: 'Projeto & Planejamento',
      description: 'Desenvolvemos projetos detalhados e cronogramas',
      icon: Building,
      color: 'accent'
    },
    {
      step: '03',
      title: 'Execução',
      description: 'Construção com qualidade e acompanhamento constante',
      icon: Hammer,
      color: 'secondary'
    },
    {
      step: '04',
      title: 'Entrega',
      description: 'Finalização e entrega do projeto dos seus sonhos',
      icon: Award,
      color: 'primary'
    }
  ]

  const benefits = [
    { icon: Shield, title: 'Garantia Total', desc: 'Qualidade assegurada em todos os projetos' },
    { icon: Clock, title: 'Prazos Cumpridos', desc: 'Cronograma rigorosamente seguido' },
    { icon: Star, title: 'Excelência', desc: 'Padrão premium em todos os detalhes' },
    { icon: Zap, title: 'Tecnologia', desc: 'Métodos construtivos inovadores' }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-white via-gray-50 to-primary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-20"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-40 left-20 w-80 h-80 bg-primary-200 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-40 right-20 w-60 h-60 bg-accent-200 rounded-full blur-3xl"
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
            <span className="font-semibold">Nossos Serviços</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Soluções Completas</span>
            <br />
            <span className="text-secondary-800">para Construção Civil</span>
          </h2>
          
          <p className="text-xl text-secondary-600 leading-relaxed">
            Da concepção à entrega, oferecemos serviços especializados que transformam 
            seus projetos em realidade com excelência e inovação.
          </p>
        </motion.div>

        {/* Services Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {services.map((service, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveService(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                activeService === index
                  ? 'bg-primary-500 text-white shadow-xl'
                  : 'bg-white text-secondary-700 hover:bg-primary-50 shadow-lg'
              }`}
            >
              <service.icon className={`w-8 h-8 mb-4 ${
                activeService === index ? 'text-white' : 'text-primary-500'
              }`} />
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className={`text-sm ${
                activeService === index ? 'text-primary-100' : 'text-secondary-500'
              }`}>
                {service.subtitle}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Service Detail */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-20"
        >
          <div className="grid lg:grid-cols-2">
            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 bg-${services[activeService].color}-500 rounded-xl flex items-center justify-center`}>
                  <services[activeService].icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-secondary-800">
                    {services[activeService].title}
                  </h3>
                  <p className="text-primary-500 font-medium">
                    {services[activeService].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                {services[activeService].fullDescription}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
                    <span className="text-secondary-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-500 mb-1">
                    {services[activeService].stats.projects}
                  </div>
                  <div className="text-sm text-secondary-500">Projetos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-500 mb-1">
                    {services[activeService].stats.time}
                  </div>
                  <div className="text-sm text-secondary-500">Prazo Médio</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {services[activeService].stats.warranty}
                  </div>
                  <div className="text-sm text-secondary-500">Garantia</div>
                </div>
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2 self-start"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-64 lg:h-full"
            >
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-secondary-800 mb-4">
              Nosso Processo de Trabalho
            </h3>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Um método comprovado que garante excelência do início ao fim do seu projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center card-hover"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 bg-${step.color}-500 text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                    {step.step}
                  </div>
                </div>

                <div className={`w-16 h-16 bg-${step.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4`}>
                  <step.icon className={`w-8 h-8 text-${step.color}-500`} />
                </div>

                <h4 className="text-xl font-semibold text-secondary-800 mb-3">
                  {step.title}
                </h4>
                
                <p className="text-secondary-600">
                  {step.description}
                </p>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-white/5 bg-pattern"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                Por que Escolher a bruno12333?
              </h3>
              <p className="text-primary-100 text-lg max-w-3xl mx-auto">
                Diferenciais que fazem toda a diferença no seu projeto
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300">
                    <benefit.icon className="w-8 h-8 text-accent-400" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-primary-100">{benefit.desc}</p>
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