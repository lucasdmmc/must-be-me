import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { WhatWeDo } from '../pages/WhatWeDo'
import { WhoWeAre } from '../pages/WhoWeAre'
import { ContactUs } from '../pages/ContactUs'
import { DefaultLayout } from '../DefaultLayout'
import { OurClasses } from '../pages/OurClasses'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-classes" element={<OurClasses />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>
    </Routes>
  )
}
