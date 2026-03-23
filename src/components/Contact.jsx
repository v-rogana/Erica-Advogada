import { FaWhatsapp } from 'react-icons/fa'
import { HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi'

export default function Contact() {
  return (
    <section id="contato" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
            Contato
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy mt-3">
            Entre em Contato
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 mt-4 max-w-md mx-auto">
            Atendimento mediante agendamento. Entre em contato para agendar sua consulta.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact info */}
          <div className="space-y-5">
            <a
              href="https://wa.me/5531997444311"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-50 hover:bg-green-100 border border-green-200 rounded-2xl p-5 transition-colors duration-300 group"
            >
              <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FaWhatsapp className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">WhatsApp</p>
                <p className="text-green-700 text-sm">(31) 99744-4311</p>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-cream rounded-2xl p-5 border border-cream-dark">
              <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center shrink-0">
                <HiPhone className="w-6 h-6 text-navy" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Telefone</p>
                <p className="text-gray-500 text-sm">(31) 99744-4311</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-cream rounded-2xl p-5 border border-cream-dark">
              <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center shrink-0">
                <HiLocationMarker className="w-6 h-6 text-navy" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Escritório</p>
                <p className="text-gray-500 text-sm">
                  Rua Paula Cândido, 430, Grajaú
                  <br />
                  Belo Horizonte/MG
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-cream rounded-2xl p-5 border border-cream-dark">
              <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center shrink-0">
                <HiClock className="w-6 h-6 text-navy" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Atendimento</p>
                <p className="text-gray-500 text-sm">Mediante agendamento</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-cream-dark shadow-sm h-full min-h-[300px]">
            <iframe
              title="Localização do escritório"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.6!2d-43.9437!3d-19.9227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzIxLjciUyA0M8KwNTYnMzcuMyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
