import Image from 'next/image'
import IlustrationIntro from '../img/illustration-intro.svg'
import Btn from './subComponents/Btn'

export function Hero() {
  return (
    <section id="Hero">
     {/* Flex Container */} 
    <div className="container flex flex-col-reverse  items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
       {/* Left Item */} 
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="antialiased max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Reúna todos para construir produtos melhores
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Controller simplifica para as equipes o planejamento de tarefas diárias, mantendo em vista as metas maiores da equipe.
        </p>
        <div className="flex justify-center md:justify-start">
          <Btn />
        </div>
      </div>

       {/* Image */} 
      <div className="md:w-1/2">
        <Image src={IlustrationIntro} alt="illustration-intro" />
      </div>
    </div>
  </section>
  )
}