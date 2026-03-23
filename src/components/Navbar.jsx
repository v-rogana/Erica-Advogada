import { useState, useEffect } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas de Atuação' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center">
              <span className="text-gold font-heading font-bold text-lg">E</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-navy font-semibold text-sm sm:text-base leading-tight">
                Érika Vilela
              </span>
              <span className="block text-[10px] sm:text-xs text-navy/60 tracking-wider uppercase">
                Advogada
              </span>
            </div>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy/70 hover:text-gold-dark transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5531997444311"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-dark text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-navy"
            aria-label="Abrir menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-cream-dark px-4 pb-4 pt-2">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-navy/80 hover:text-gold-dark font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5531997444311"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block text-center bg-gold hover:bg-gold-dark text-white font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </nav>
  )
}
