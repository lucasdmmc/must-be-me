import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'
import openMenuImg from '../assets/images/icon-menu.svg'

interface HeaderProps {
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>
}

export const Header = ({ setMenuIsVisible }: HeaderProps) => {
  const [activeItem, setActiveItem] = useState('')
  const location = useLocation()

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName)
  }

  useEffect(() => {
    const currentPath = location.pathname
    switch (currentPath) {
      case '/':
        setActiveItem('home')
        break
      case '/what-we-do':
        setActiveItem('whatWeDo')
        break
      case '/who-we-are':
        setActiveItem('whoWeAre')
        break
      case '/our-classes':
        setActiveItem('ourClasses')
        break
      case '/get-involved':
        setActiveItem('getInvolved')
        break
      case '/contact-us':
        setActiveItem('contactUs')
        break
      default:
        setActiveItem('')
    }
  }, [location.pathname])

  return (
    <div className="w-full pt-10 flex justify-between items-center">
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>

      <img
        className="lg:hidden absolute top-12 right-4 w-7"
        onClick={() => setMenuIsVisible(true)}
        src={openMenuImg}
        alt=""
      />

      <ul className="hidden lg:flex gap-6 text-xl uppercase text-zinc-800 font-semibold">
        <li
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'home' ? 'border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('home')}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'whatWeDo' ? 'border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('whatWeDo')}
        >
          <Link to="/what-we-do">What we do</Link>
        </li>
        <li
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'whoWeAre' ? 'border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('whoWeAre')}
        >
          <Link to="/who-we-are">Who we are</Link>
        </li>
        <li
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'ourClasses' ? 'border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('ourClasses')}
        >
          <Link to="/our-classes">Our classes</Link>
        </li>
        <li
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'getInvolved' ? 'border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('getInvolved')}
        >
          <Link to="/get-involved">Get involved</Link>
        </li>
        <li
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'contactUs' ? 'border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('contactUs')}
        >
          <Link to="/contact-us">Contact us</Link>
        </li>
      </ul>
    </div>
  )
}
