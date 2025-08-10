import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Mail, Phone, MapPin, ArrowRight, Star } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' }
  ]

  const services = [
    { name: 'Construção Residencial', href: '#services' },
    { name: 'Construção Comercial', href: '#services' },
    { name: 'Reformas e Ampliações', href: '#services' },
    { name: 'Consultoria Técnica', href: '#services' }
  ]

  const contactInfo = [
    { icon: Mail, info: 'contato@bruno12333.com', href: 'mailto:contato@bruno12333.com' },
    { icon: Phone, info: '(11) 9999-9999', href: 'tel:+5511999999999' },
    { icon: MapPin, info: 'São Paulo, SP', href: '#' }
  ]

  return (
    <footer className="bg-gradient-to-br from-secondary-900 via-secondary-800 to-secondary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-20 right-20 w-64 h-64 bg-primary-400 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-accent-400 rounded-full blur-3xl"
      />

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="container-custom px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754851436988_0.jpg" 
                  alt="bruno12333" 
                  className="h-16 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              
              <p className="text-secondary-300 leading-relaxed mb-6">
                Transformando visões em realidade através da excelência na construção civil. 
                Mais de 15 anos criando projetos únicos e superando expectativas.
              </p>

              {/* Trust Indicators */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-secondary-300 text-sm">4.9/5 - Clientes Satisfeitos</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Building2 className="w-4 h-4 text-primary-400" />
                  <span className="text-secondary-300 text-sm">500+ Projetos Concluídos</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Links Rápidos
              </h3>
              
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-2 text-secondary-300 hover:text-primary-400 transition-all duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:text-primary-400 transition-colors duration-300" />
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </nav>

              <div className="pt-6 border-t border-secondary-700">
                <h4 className="font-semibold text-white mb-4">Especialidades</h4>
                <div className="space-y-2">
                  <div className="text-secondary-300 text-sm">✓ Construção de Alto Padrão</div>
                  <div className="text-secondary-300 text-sm">✓ Projetos Sustentáveis</div>
                  <div className="text-secondary-300 text-sm">✓ Tecnologia Avançada</div>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Nossos Serviços
              </h3>
              
              <nav className="space-y-3">
                {services.map((service, index) => (
                  <motion.a
                    key={index}
                    href={service.href}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center space-x-2 text-secondary-300 hover:text-accent-400 transition-all duration-300 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:text-accent-400 transition-colors duration-300" />
                    <span>{service.name}</span>
                  </motion.a>
                ))}
              </nav>

              <div className="pt-6 border-t border-secondary-700">
                <h4 className="font-semibold text-white mb-4">Diferenciais</h4>
                <div className="space-y-2">
                  <div className="text-secondary-300 text-sm">• Garantia Estendida</div>
                  <div className="text-secondary-300 text-sm">• Acompanhamento 24/7</div>
                  <div className="text-secondary-300 text-sm">• Orçamento Transparente</div>
                  <div className="text-secondary-300 text-sm">• Prazos Rigorosos</div>
                </div>
              </div>
            </motion.div>

            {/* Contact & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                Entre em Contato
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 text-secondary-300 hover:text-primary-400 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-secondary-700 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm">{contact.info}</span>
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>

              {/* Business Hours */}
              <div className="pt-6 border-t border-secondary-700">
                <h4 className="font-semibold text-white mb-3">Horário de Atendimento</h4>
                <div className="space-y-1 text-sm text-secondary-300">
                  <div>Segunda à Sexta: 8h às 18h</div>
                  <div>Sábado: 8h às 12h</div>
                  <div>Domingo: Fechado</div>
                  <div className="text-accent-400 pt-2">📞 Emergências: 24h</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="border-t border-secondary-700 py-8"
        >
          <div className="container-custom px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              
              <div className="text-secondary-400 text-sm text-center lg:text-left">
                <p>Direitos reservados © 2023 bruno12333.</p>
                <p className="mt-1">
                  Criado com{' '}
                  <motion.a 
                    href="https://papum.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="text-primary-400 hover:text-primary-300 transition-colors duration-300 font-medium"
                  >
                    Papum
                  </motion.a>
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-secondary-400 text-sm"
                >
                  CNPJ: XX.XXX.XXX/0001-XX
                </motion.div>
                
                <motion.a
                  href="#home"
                  whileHover={{ scale: 1.1, rotate: -90 }}
                  className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors duration-300"
                  title="Voltar ao topo"
                >
                  <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-24 h-24 border border-primary-400/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-16 h-16 border border-accent-400/20 rounded-full"
        />
      </div>
    </footer>
  )
}