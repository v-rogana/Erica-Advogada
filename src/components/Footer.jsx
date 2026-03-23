export default function Footer() {
  return (
    <footer className="bg-navy-dark py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gold/20 rounded-lg flex items-center justify-center">
              <span className="text-gold font-heading font-bold text-lg">E</span>
            </div>
            <div>
              <span className="font-heading text-white font-semibold text-sm">
                Érika Vilela de Oliveira
              </span>
              <span className="block text-white/40 text-xs">Advogada</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
            <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
            <a href="#areas" className="hover:text-gold transition-colors">Áreas de Atuação</a>
            <a href="#formacao" className="hover:text-gold transition-colors">Formação</a>
            <a href="#contato" className="hover:text-gold transition-colors">Contato</a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Érika Vilela de Oliveira &mdash; Advogada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
