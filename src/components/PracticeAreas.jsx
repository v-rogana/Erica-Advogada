import { HiUserGroup, HiOfficeBuilding, HiShoppingCart, HiClipboardCheck } from 'react-icons/hi'

const areas = [
  {
    icon: HiUserGroup,
    title: 'Direito do Trabalho',
    subtitle: 'Defesa de Empregados',
    items: [
      'Verbas rescisórias',
      'Horas extras',
      'Reconhecimento de vínculo',
      'Rescisão indireta',
      'Indenizações trabalhistas',
      'Assédio moral',
      'Adicional de insalubridade',
      'Adicional de periculosidade',
    ],
  },
  {
    icon: HiOfficeBuilding,
    title: 'Direito do Trabalho',
    subtitle: 'Defesa de Empresas',
    items: [
      'Elaboração de defesas processuais',
      'Acompanhamento de reclamações',
      'Atuação em audiências',
      'Orientação jurídica preventiva',
      'Recursos e demais fases processuais',
    ],
  },
  {
    icon: HiShoppingCart,
    title: 'Direito do Consumidor',
    subtitle: 'Proteção dos Direitos',
    items: [
      'Negativação indevida do nome',
      'Cobranças indevidas',
      'Indenização por danos morais',
    ],
  },
  {
    icon: HiClipboardCheck,
    title: 'Responsabilidade Civil',
    subtitle: 'Reparação de Danos',
    items: [
      'Indenização por danos morais',
      'Indenização por danos materiais',
    ],
  },
]

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
            Especialidades
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3">
            Áreas de Atuação
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {areas.map((area, i) => (
            <div
              key={i}
              className="group bg-cream/50 hover:bg-navy rounded-2xl p-6 sm:p-8 border border-cream-dark hover:border-navy transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 bg-gold/10 group-hover:bg-gold/20 rounded-2xl flex items-center justify-center transition-colors duration-500">
                  <area.icon className="w-7 h-7 text-gold-dark group-hover:text-gold-light transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy group-hover:text-white text-lg transition-colors duration-500">
                    {area.title}
                  </h3>
                  <p className="text-gold-dark group-hover:text-gold-light text-sm font-medium transition-colors duration-500">
                    {area.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {area.items.map(item => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-500"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
