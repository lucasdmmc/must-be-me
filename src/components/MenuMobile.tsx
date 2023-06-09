import { Link, useLocation } from 'react-router-dom'
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
    if (currentPath === '/home') {
      setActiveItem('home')
    } else if (currentPath === '/what-we-do') {
      setActiveItem('whatWeDo')
    } else {
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
          className={`transition duration-300 hover:text-zinc-500 cursor-pointer ${
            activeItem === 'home' ? ' border-l-4 border-orange100' : ''
          }`}
          onClick={() => handleItemClick('home')}
        >
          <Link className="ml-1" to="/home">
            Home
          </Link>
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
