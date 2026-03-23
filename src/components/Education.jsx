import { HiAcademicCap } from 'react-icons/hi'

const education = [
  {
    year: '1997',
    title: 'Graduação em Direito',
    desc: 'Formação completa em ciências jurídicas',
  },
  {
    year: '',
    title: 'Pós-graduação em Direito',
    desc: 'Especialização para aprofundamento técnico',
  },
  {
    year: '',
    title: 'Mestrado',
    desc: 'Aperfeiçoamento acadêmico e científico',
  },
]

export default function Education() {
  return (
    <section id="formacao" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
            Trajetória
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3">
            Formação Acadêmica
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gold/30" />

            <div className="space-y-8">
              {education.map((item, i) => (
                <div key={i} className="flex items-start gap-6 relative">
                  {/* Timeline dot */}
                  <div className="w-12 h-12 bg-white border-2 border-gold rounded-full flex items-center justify-center shrink-0 z-10 shadow-sm">
                    <HiAcademicCap className="w-5 h-5 text-gold-dark" />
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-dark flex-1 hover:shadow-md hover:border-gold/20 transition-all duration-300">
                    {item.year && (
                      <span className="inline-block px-3 py-1 bg-navy/5 text-navy text-xs font-semibold rounded-full mb-2">
                        {item.year}
                      </span>
                    )}
                    <h3 className="font-heading font-bold text-navy text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
