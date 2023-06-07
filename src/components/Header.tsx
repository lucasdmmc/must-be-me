import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/images/logo.svg'

export const Header = () => {
  const [activeItem, setActiveItem] = useState('')
  const location = useLocation()

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName)
  }

  useEffect(() => {
    const currentPath = location.pathname
    if (currentPath === '/') {
      setActiveItem('home')
    } else {
      setActiveItem('')
    }
  }, [activeItem])

  return (
    <div className="w-[1440px] pt-10 flex justify-between items-center">
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>
      <ul className="flex gap-6 text-xl uppercase text-darkBlue font-semibold">
        <li
          className={`transition duration-300 hover:text-blue-600 cursor-pointer ${
            activeItem === 'home' ? 'border-b-4 border-blue-500' : ''
          }`}
          onClick={() => handleItemClick('home')}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={`transition duration-300 hover:text-blue-600 cursor-pointer ${
            activeItem === 'whatWeDo' ? 'border-b-4 border-blue-500' : ''
          }`}
          onClick={() => handleItemClick('whatWeDo')}
        >
          <Link to="/what-we-do">What we do</Link>
        </li>
        <li
          className={`transition duration-300 hover:text-blue-600 cursor-pointer ${
            activeItem === 'whoWeAre' ? 'border-b-4 border-blue-500' : ''
          }`}
          onClick={() => handleItemClick('whoWeAre')}
        >
          <Link to="/who-we-are">Who we are</Link>
        </li>
        <li
          className={`transition duration-300 hover:text-blue-600 cursor-pointer ${
            activeItem === 'ourClasses' ? 'border-b-4 border-blue-500' : ''
          }`}
          onClick={() => handleItemClick('ourClasses')}
        >
          <Link to="/our-classes">Our classes</Link>
        </li>
        <li
          className={`transition duration-300 hover:text-blue-600 cursor-pointer ${
            activeItem === 'getInvolved' ? 'border-b-4 border-blue-500' : ''
          }`}
          onClick={() => handleItemClick('getInvolved')}
        >
          <Link to="/get-involved">Get involved</Link>
        </li>
        <li
          className={`transition duration-300 hover:text-blue-600 cursor-pointer ${
            activeItem === 'contactUs' ? 'border-b-4 border-blue-500' : ''
          }`}
          onClick={() => handleItemClick('contactUs')}
        >
          <Link to="/contact-us">Contact us</Link>
        </li>
      </ul>
    </div>
  )
}
