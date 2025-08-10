import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Building2, Phone, Mail, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { 
      name: 'Serviços', 
      href: '#services',
      submenu: [
        { name: 'Construção Residencial', href: '#residencial' },
        { name: 'Construção Comercial', href: '#comercial' },
        { name: 'Reformas', href: '#reformas' },
        { name: 'Consultoria', href: '#consultoria' }
      ]
    },
    { name: 'Contato', href: '#contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 px-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img 
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754851436988_0.jpg" 
              alt="bruno12333" 
              className={`h-16 w-auto object-contain transition-all duration-500 ${
                isScrolled ? '' : 'filter invert brightness-0 contrast-100'
              }`}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center space-x-1 font-medium transition-all duration-300 hover:scale-105 ${
                        isScrolled 
                          ? 'text-secondary-700 hover:text-primary-500' 
                          : 'text-white hover:text-primary-200'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-3 text-secondary-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`font-medium transition-all duration-300 hover:scale-105 ${
                      isScrolled 
                        ? 'text-secondary-700 hover:text-primary-500' 
                        : 'text-white hover:text-primary-200'
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Solicitar Orçamento
            </motion.a>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className={`flex items-center space-x-2 ${
              isScrolled ? 'text-secondary-600' : 'text-white/90'
            }`}>
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">Construção Civil</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-secondary-700 hover:bg-secondary-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-primary-100"
        >
          <nav className="py-4 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full px-4 py-3 text-secondary-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-primary-25 border-l-4 border-primary-500 ml-4"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-3 text-secondary-600 hover:text-primary-500 transition-all duration-300"
                            onClick={() => {
                              setIsOpen(false)
                              setActiveDropdown(null)
                            }}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-secondary-700 hover:text-primary-500 hover:bg-primary-50 transition-all duration-300 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            
            <div className="px-4 pt-4 border-t border-primary-100">
              <motion.a
                href="#contact"
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full text-center block"
                onClick={() => setIsOpen(false)}
              >
                Solicitar Orçamento
              </motion.a>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}