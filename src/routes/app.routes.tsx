import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { WhatWeDo } from '../pages/WhatWeDo'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/what-we-do" element={<WhatWeDo />}/> 
    </Routes>
  )
}
