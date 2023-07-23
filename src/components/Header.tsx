import Image from 'next/image'
import Logo from '../img/logoSymbol.svg'
import MobileMenu from './subComponents/MobileMenu'
import Btn from './subComponents/Btn'

export function Header() {


  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2 flex items-center ">
          {/* <Image src={Logo} alt='logo' className='w-64'/> */}
          <Image src={Logo} alt='logo' className='h-8' />
          <h1 className='text-5xl font-bold text-darkBlue antialiased'>Controller</h1>
        </div>
        {/* Menu items */}
        <div className="hidden lg:flex space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">Preços</a>
          <a href="#" className="hover:text-darkGrayishBlue">Produtos</a>
          <a href="#" className="hover:text-darkGrayishBlue">Sobre nós</a>
          <a href="#" className="hover:text-darkGrayishBlue">Carreiras</a>
          <a href="#" className="hover:text-darkGrayishBlue">Comunidade</a>
        </div>
        {/* Button */}
        <Btn />
        <MobileMenu />
      </div>
    </nav>
  )
}