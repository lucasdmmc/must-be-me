import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/app.routes'
import '@coreui/coreui/dist/css/coreui.min.css'

export const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
