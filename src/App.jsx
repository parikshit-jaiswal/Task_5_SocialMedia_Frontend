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
import PostCard from './components/PostCard'
import ProfilePage from './pages/ProfilePage'
import Privacy from "./components/privacy"
import CreatePost from './components/CreatePost'
import ExplorePage from './pages/ExplorePage'
import SearchPage from './pages/SearchPage'
import Settings from "./components/Settings"
import PersonalDetails from "./components/PersonalDetails"
import PasswordSecurity from "./components/PasswordSecurity"
function App() {
  return (
    // <Router>
    //   <Routes>
    //     {/* <Route path="/" element={<MainLayout />}>
    //       <Route index element={<HomePage />} /> */}
    //     {/* <Route path="profile/:id" element={<ProtectedRoutes><Profile /></ProtectedRoutes>} />
    //       <Route path="account/edit" element={<ProtectedRoutes><EditProfile /></ProtectedRoutes>} />
    //       <Route path="chat" element={<ProtectedRoutes><ChatPage /></ProtectedRoutes>} /> */}
    //     {/* </Route> */}
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/verify/email" element={<VerifyEmailPage />} />
    //     <Route path="/home" element={<HomePage />} />
    //     <Route path="/profile" element={<ProfilePage />} />
    //     <Route path="/createpost" element={<CreatePost />} />
    //     <Route path="/privacy" element={<Privacy />} />
    //     <Route path="/explore" element={<ExplorePage />} />
    //     <Route path="/search" element={<SearchPage />} />
    //     <Route path="/settings" element={<Settings />} />
    //     <Route path="/details" element={<PersonalDetails />} />
    //     <Route path="/passwordsecurity" element={<PasswordSecurity />} />
    //     <Route path="/signup" element={<SignupPage />} />
    //   </Routes>
    // </Router>
    <ProfilePage />
  )
}

export default App