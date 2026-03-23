import { HiScale, HiAcademicCap, HiShieldCheck } from 'react-icons/hi'

const highlights = [
  {
    icon: HiScale,
    title: 'Desde 1997',
    desc: 'Mais de duas décadas de experiência jurídica',
  },
  {
    icon: HiAcademicCap,
    title: 'Pós e Mestrado',
    desc: 'Formação acadêmica sólida e continuada',
  },
  {
    icon: HiShieldCheck,
    title: 'Ética e Compromisso',
    desc: 'Atuação pautada pela responsabilidade',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
            Sobre
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3">
            Conheça a Dra. Érika
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio text */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Advogada com sólida formação acadêmica e experiência consolidada na advocacia, graduada em Direito no ano de 1997, com pós-graduação e mestrado, dedicando sua carreira ao exercício responsável e ético da profissão.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Ao longo de mais de duas décadas de atuação jurídica, desenvolveu experiência nas áreas de <strong className="text-navy">Direito do Trabalho</strong>, <strong className="text-navy">Direito do Consumidor</strong> e <strong className="text-navy">Responsabilidade Civil</strong>, atuando na defesa dos direitos de trabalhadores, consumidores e empresas.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Seu trabalho é pautado pela seriedade, estudo permanente e compromisso com a correta aplicação do Direito, oferecendo aos clientes atendimento jurídico responsável e personalizado.
            </p>
          </div>

          {/* Highlights cards */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map(item => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-5 shadow-sm border border-cream-dark hover:shadow-md hover:border-gold/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-gold-dark" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-0.5">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
