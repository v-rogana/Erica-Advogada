import { HiArrowDown } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-navy" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-24 sm:py-32">
          {/* Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/30 rounded-full mb-6">
              <span className="text-gold-light text-sm font-medium tracking-wide">
                OAB/MG
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
              Érika Vilela
              <span className="block text-gold">de Oliveira</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 mb-3 font-light">
              Advogada
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {['Direito do Trabalho', 'Direito do Consumidor', 'Responsabilidade Civil'].map(area => (
                <span
                  key={area}
                  className="px-3 py-1 text-xs sm:text-sm text-gold-light/90 border border-gold/20 rounded-full"
                >
                  {area}
                </span>
              ))}
            </div>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              Mais de duas décadas de experiência na defesa dos seus direitos, com ética, responsabilidade e compromisso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/5531997444311"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-gold/25"
              >
                <FaWhatsapp size={20} />
                Fale pelo WhatsApp
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-8 py-3.5 rounded-full transition-all duration-200"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border-2 border-gold/20 flex items-center justify-center overflow-hidden">
                {/* Placeholder silhouette */}
                <div className="text-center">
                  <svg
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 text-gold/40 mx-auto"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <p className="text-gold/40 text-xs mt-2 font-medium">Sua foto aqui</p>
                </div>
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 border border-gold/10 rounded-full" />
              <div className="absolute -inset-6 border border-gold/5 rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <HiArrowDown size={24} />
        </div>
      </div>
    </section>
  )
}
