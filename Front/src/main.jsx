import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './UserContext'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <ScrollToTop />
      <App />
    </UserProvider>
  </BrowserRouter>
)
