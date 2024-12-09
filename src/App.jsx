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
import { io } from "socket.io-client";
import { useDispatch, useSelector } from 'react-redux'
import { setSocket } from './redux/socketSlice'
import { useEffect } from 'react'
import SettingsPage from './pages/SettingsPage'


function App() {

  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch()
  const { socket } = useSelector(store => store.socketio)

  useEffect(() => {
    if (user) {
      const socketio = io('https://snapverse-6nqx.onrender.com/', {
        transports: ['websocket']
      });
      dispatch(setSocket(socketio));
      socketio.emit('join', { userId: user._id });

      return () => {
        socketio.close();
        dispatch(setSocket(null));
      }
    } else if (socket) {
      socket.close();
      dispatch(setSocket(null));
    }
  }, [user, dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>}>
          <Route index element={<ProtectedRoutes><HomePage /></ProtectedRoutes>} />
          <Route path='/chat' element={<ProtectedRoutes><ChatPage /></ProtectedRoutes>} />
          <Route path="/profile" element={<ProtectedRoutes><ProfilePage /></ProtectedRoutes>} />
          <Route path="/setting" element={<ProtectedRoutes><SettingsPage /></ProtectedRoutes>} />
        </Route>
        <Route path='/verify/email' element={<VerifyEmailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App