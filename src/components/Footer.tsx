import Image from "next/image"
import LogoWhite from '../img/logoWhite.svg'

import { InstagramIcon, LinkedinIcon, GithubIcon} from 'lucide-react'

export function Footer(){
  return (
    <footer className="bg-veryDarkBlue">
    {/* Flex Container */}
    <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
      {/* Logo and social links container */}
      <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-center">
        <div className="mx-auto my-6 text-center text-white md:hidden">
          Desenvolvido por <a href="https://www.linkedin.com/in/lfilipets/" target="_blank" className="text-purple-200"> Luiz Tosta</a>.
        </div>
        
        {/* Logo */}
        <div>
          <Image src={LogoWhite}  alt="Logo"/>
            
        </div>
        {/* Social Links Container */}
        <div className="flex justify-center space-x-4 text-white">
          {/* Link 1 */}
          <a href="https://www.instagram.com/luizftosta/" target="_blank" className="hover:text-purple-500 transition">
            <InstagramIcon className="h-8" />
          </a>

           {/* Link 2 */}
           <a href="https://www.linkedin.com/in/lfilipets/" target="_blank" className="hover:text-purple-500 transition">
            <LinkedinIcon className="h-8" />
          </a>

           {/* Link 4 */}
           <a href="https://github.com/luizfts" target="_blank" className="hover:text-purple-500 transition">
            <GithubIcon className="h-8" />
          </a>

        </div>
      </div>

      {/* List Container */}
      <div className="flex justify-around space-x-32">
        <div className="flex flex-col space-y-3 text-white">
          <a href="#" className="hover:text-mediumBlue">Início</a>
          <a href="#" className="hover:text-mediumBlue">Preços</a>
          <a href="#" className="hover:text-mediumBlue">Produtos</a>
          <a href="#" className="hover:text-mediumBlue">Sobre nós</a>
        </div>
        <div className="flex flex-col space-y-3 text-white">
          <a href="#" className="hover:text-mediumBlue">Carreiras</a>
          <a href="#" className="hover:text-mediumBlue">Comunidade</a>
          <a href="#" className="hover:text-mediumBlue">Política de Privacidade</a>
        </div>
      </div>

      {/* Input Container */}
      <div className="flex flex-col justify-between">
        <form>
          <div className="flex space-x-3">
            <input type="email" className="flex-1 px-6 rounded-full focus:outline-none" placeholder="Atualizações no seu email" />
            <button className="px-6 py-2 text-white rounded-full bg-mediumBlue hover:bg-mediumBlueLight focus:outline-none transition">Inicie!</button>
          </div>
        </form>
        <div className="hidden text-white md:block">
          Desenvolvido por <a href="https://www.linkedin.com/in/lfilipets/" target="_blank" className="text-purple-200"> Luiz Tosta</a>.
        </div>
      </div>
    </div>
  </footer>
  )
}