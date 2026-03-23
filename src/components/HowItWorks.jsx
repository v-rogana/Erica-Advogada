import { FaWhatsapp } from 'react-icons/fa'
import { HiChat, HiSearchCircle, HiLightningBolt, HiShieldCheck } from 'react-icons/hi'

const steps = [
  {
    number: '1',
    icon: HiChat,
    title: 'Contato inicial',
    desc: 'Envie uma mensagem pelo WhatsApp com um breve resumo do seu caso para agendar uma consulta.',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600 bg-green-100',
  },
  {
    number: '2',
    icon: HiSearchCircle,
    title: 'Análise do caso',
    desc: 'Reunião presencial ou online para entender os detalhes, analisar documentos e avaliar a viabilidade jurídica.',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600 bg-blue-100',
  },
  {
    number: '3',
    icon: HiLightningBolt,
    title: 'Estratégia e ação',
    desc: 'Definição da melhor estratégia para o seu caso, com transparência sobre prazos, custos e expectativas.',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600 bg-amber-100',
  },
  {
    number: '4',
    icon: HiShieldCheck,
    title: 'Acompanhamento',
    desc: 'Atuação firme em todas as fases — da petição inicial até a execução. Você sempre informado.',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600 bg-purple-100',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
            Como Funciona
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3">
            Do primeiro contato ao resultado
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Um processo claro e transparente para você saber exatamente o que esperar em cada etapa.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-0.5 bg-gradient-to-r from-green-300 via-blue-300 via-amber-300 to-purple-300" />

          <div className="grid md:grid-cols-4 gap-6 md:gap-4">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                {/* Number badge */}
                <div className="relative z-10 mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${step.iconColor} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-navy rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Card */}
                <div className={`${step.color} border rounded-2xl p-5 w-full hover:shadow-md transition-all duration-300`}>
                  <h3 className="font-heading font-bold text-navy text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/5531997444311"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-gold/25"
          >
            <FaWhatsapp size={20} />
            Iniciar Atendimento
          </a>
        </div>
      </div>
    </section>
  )
}
