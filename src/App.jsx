import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignupPage from './pages/auth/SignupPage'
import LoginPage from './pages/auth/LoginPage'
import MainLayout from './pages/MainLayout'
import HomePage from './pages/home/HomePage'
import VerifyEmailPage from './pages/auth/VerifyEmailPage'
import ProtectedRoutes from './components/ProtectedRoutes'
import ChatPage from './pages/ChatPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>}>
          <Route index element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
          <Route path='/chat' element={<ProtectedRoutes><ChatPage /></ProtectedRoutes>} />
          <Route path="/profile" element={<ProtectedRoutes><ProfilePage /></ProtectedRoutes>} />
        </Route>
        <Route path='/verify/email' element={<VerifyEmailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App