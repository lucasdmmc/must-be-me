import { useLocation } from 'react-router-dom'
import closeMenuImg from '../assets/images/icon-menu-close.svg'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface MenuMobileProps {
  menuIsVisible: boolean
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>
}

export const MenuMobile = ({
  menuIsVisible,
  setMenuIsVisible,
}: MenuMobileProps) => {
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
    <div
      className={`absolute transition duration-300 pointer-events-none opacity-0 w-full h-full top-0 left-0 right-0 bottom-0 z-10 flex items-center justify-center bg-lightBrown ${
        menuIsVisible && 'opacity-100 pointer-events-auto'
      }`}
    >
      <img
        onClick={() => setMenuIsVisible(false)}
        className="absolute top-12 right-4 w-7"
        src={closeMenuImg}
        alt=""
      />
      <ul className="flex flex-col gap-8 text-xl justify-center uppercase text-zinc-800 font-semibold">
        <li
          className={`transition w-[70px] duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'home' ? ' border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('home')}
        >
          <a className="ml-1" href="/">
            Home
          </a>
        </li>
        <li
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'whatWeDo' ? 'border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('whatWeDo')}
        >
          <a href="/what-we-do">What we do</a>
        </li>
        <li
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'whoWeAre' ? 'border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('whoWeAre')}
        >
          <a href="/who-we-are">Who we are</a>
        </li>
        <li
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'ourClasses' ? 'border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('ourClasses')}
        >
          <a href="/our-classes">Our classes</a>
        </li>
        <li
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'getInvolved' ? 'border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('getInvolved')}
        >
          <a href="/get-involved">Get involved</a>
        </li>
        <li
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'contactUs' ? 'border-b-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('contactUs')}
        >
          <a href="/contact-us">Contact us</a>
        </li>
      </ul>
    </div>
  )
}
