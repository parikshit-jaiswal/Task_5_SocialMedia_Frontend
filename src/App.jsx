import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
import PostCard from './components/PostCard'
import ProfilePage from './pages/ProfilePage'
import Privacy from "./components/privacy"
import CreatePost from './components/CreatePost'
import ExplorePage from './pages/ExplorePage'
import SearchPage from './pages/SearchPage'
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify/email" element={<VerifyEmailPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/createpost" element={<CreatePost/>} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/explore" element={<ExplorePage/>} />
        <Route path="/search" element={<SearchPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
