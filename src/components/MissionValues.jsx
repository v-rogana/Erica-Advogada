import { HiStar, HiAcademicCap, HiClock, HiHeart, HiDesktopComputer, HiShieldCheck } from 'react-icons/hi'

const differentials = [
  {
    icon: HiStar,
    title: 'Mais de 28 anos de experiência',
    desc: 'Atuação desde 1997 com sólida experiência em audiências trabalhistas e cíveis. Cada caso é estudado com profundidade para maximizar as chances de êxito.',
  },
  {
    icon: HiAcademicCap,
    title: 'Formação acadêmica sólida',
    desc: 'Graduação pela FUMEC, pós-graduação em Direito Civil e Processual Civil, e Mestrado em Direito do Trabalho pela PUC Minas.',
  },
  {
    icon: HiClock,
    title: 'Agilidade e acompanhamento',
    desc: 'Processos conduzidos com celeridade em todas as fases. Acompanhamento próximo e respostas rápidas para que você nunca fique sem informação.',
  },
  {
    icon: HiHeart,
    title: 'Atendimento humanizado',
    desc: 'Cada cliente é tratado com atenção e respeito. Acredito que o primeiro passo para uma boa defesa é ouvir e compreender a necessidade de cada pessoa.',
  },
  {
    icon: HiDesktopComputer,
    title: 'Atendimento presencial e online',
    desc: 'Flexibilidade para atender como você preferir. Presencial no escritório em Belo Horizonte ou online para maior praticidade.',
  },
  {
    icon: HiShieldCheck,
    title: 'Domínio na execução',
    desc: 'Ganhar a ação é só metade do caminho. Atuo com foco na fase de execução para garantir que o seu direito saia do papel e vire realidade.',
  },
]

export default function MissionValues() {
  return (
    <section className="py-20 sm:py-28 bg-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest uppercase">
            Por que me escolher
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mt-3">
            Diferenciais que impactam os resultados
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Cada caso recebe atenção individual, estratégia sob medida e o comprometimento de mais de 28 anos de experiência.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map(d => (
            <div
              key={d.title}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gold/15 group-hover:bg-gold/25 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <d.icon className="w-6 h-6 text-gold-light" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">
                {d.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
