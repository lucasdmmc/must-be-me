import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { useState } from 'react'
import { Footer } from '../components/Footer'
import { MenuMobile } from '../components/MenuMobile'
import { NewsLetter } from '../components/NewsLetter'

export const DefaultLayout = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

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
        <Header
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />
        <Outlet />
        <NewsLetter />
        <Footer />
      </div>
    </>
  )
}
