import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignupPage from './pages/auth/SignupPage'
import LoginPage from './pages/auth/LoginPage'
import MainLayout from './pages/MainLayout'
import HomePage from './pages/home/HomePage'
import VerifyEmailPage from './pages/auth/VerifyEmailPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="profile/:id" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
          <Route path="account/edit" element={<ProtectedRoutes><EditProfile /></ProtectedRoutes>} />
          <Route path="chat" element={<ProtectedRoutes><ChatPage /></ProtectedRoutes>} /> */}
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path='/verify/email' element={<VerifyEmailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
