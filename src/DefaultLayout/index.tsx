import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '../components/Header'
import { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { MenuMobile } from '../components/MenuMobile'
import { NewsLetter } from '../components/NewsLetter'

export const DefaultLayout = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <div
        className={`max-w-[1360px] mt-0 mx-auto px-2 ${
          menuIsVisible && 'hidden'
        }`}
      >
        <Header setMenuIsVisible={setMenuIsVisible} />
        <Outlet />
        <NewsLetter />
        <Footer />
      </div>
    </>
  )
}
