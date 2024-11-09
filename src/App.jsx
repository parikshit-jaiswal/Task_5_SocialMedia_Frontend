import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import SignupPage from './pages/SignupPage'
import Themebtn from './components/extra/ThemeBtn'
import SplashScreen from './pages/SplashScreen'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
