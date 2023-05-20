import Image from "next/image"

/* Avatar Images */
import Anisha from '../img/avatar-anisha.png'
import Ali from '../img/avatar-ali.png'
import Richard from '../img/avatar-richard.png'


export function Testimonials() {
  return (
    <section id="testimonials">
    {/* Container to heading and tesmonial blocks */}
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center">Clientes Satisfeitos!

      </h2>
      {/* Testimonials Container */}
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        {/* Testimonial 1 */}
        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
          <Image src={Anisha} className="w-16 -mt-14" alt="Anisha" />
          <h5 className="text-lg font-bold">Anisha Li</h5>
          <p className="text-sm text-darkGrayishBlue">
          &quot;O Controller impulsionou o fluxo de trabalho da nossa equipe. A capacidade de manter a visibilidade sobre marcos importantes o tempo todo mantém todos motivados.&quot;
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
          <Image src={Ali} className="w-16 -mt-14" alt="Ali" />
          <h5 className="text-lg font-bold">Ali Bravo</h5>
          <p className="text-sm text-darkGrayishBlue">
          &quot;Conseguimos cancelar tantas outras assinaturas desde que começamos a usar o Controller. Não há mais confusão entre canais e todos estão muito mais focados.&quot;
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
          <Image src={Richard} className="w-16 -mt-14" alt="Richard" />
          <h5 className="text-lg font-bold">Richard Watts</h5>
          <p className="text-sm text-darkGrayishBlue">
            &quot;Controller revolucionou nosso gerenciamento de projetos. Com recursos avançados, mantemos visibilidade, colaboramos e alcançamos resultados excepcionais.&quot;
          </p>
        </div>
      </div>
      {/* Button */}
      <div className="my-16">
        <a href="#" className="p-3 px-6 pt-2 text-white bg-mediumBlue rounded-full baseline transition hover:bg-mediumBlueLight">Comece agora!</a>
      </div>
    </div>
  </section>
  )
}