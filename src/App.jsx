import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import SignupPage from './pages/auth/SignupPage'
import Themebtn from './components/extra/ThemeBtn'
import SplashScreen from './pages/SplashScreen'
import LoginPage from './pages/auth/LoginPage'
import HomePage from './pages/HomePage'
import VerifyEmailPage from './pages/auth/VerifyEmailPage'

function App() {
  return (
    // <HomePage />
    // <VerifyEmailPage />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify/email" element={<VerifyEmailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
