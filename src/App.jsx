import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import SignupPage from './pages/auth/SignupPage'
import Themebtn from './components/extra/ThemeBtn'
import SplashScreen from './pages/SplashScreen'
import LoginPage from './pages/auth/LoginPage'
import HomePage from './pages/HomePage'
import VerifyEmailPage from './pages/auth/VerifyEmailPage'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import PostCard from './components/PostCard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="profile/:id" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          <Route path="account/edit" element={<ProtectedRoutes><EditProfile /></ProtectedRoutes>} />
          <Route path="chat" element={<ProtectedRoutes><ChatPage /></ProtectedRoutes>} /> */}
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  )
}

export default App
