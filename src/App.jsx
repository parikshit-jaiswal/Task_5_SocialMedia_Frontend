import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import SignupPage from './pages/SignupPage'
import Themebtn from './components/extra/ThemeBtn'
import SplashScreen from './pages/SplashScreen'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import Navbar from "./components/Navbar"
// import './components/Navbar.css';
import Sidebar from "./components/Sidebar"

function App() {
  return (
    // <HomePage />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
