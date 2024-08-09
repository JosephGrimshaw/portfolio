import react from "react"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoute"
import Academia from "./pages/Academia"
import DofE from "./pages/DofE"
import Drama from "./pages/Drama"
import Music from "./pages/Music"
import IT from "./pages/IT"

function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}

function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }/>
        
        <Route path="/music" element={
          <ProtectedRoute>
            <Music />
          </ProtectedRoute>
        }/>

        <Route path="/drama" element={
          <ProtectedRoute>
            <Drama />
          </ProtectedRoute>
        }/>

        <Route path="/dofe" element={
          <ProtectedRoute>
            <DofE />
          </ProtectedRoute>
        }/>

        <Route path="/academia" element={
          <ProtectedRoute>
            <Academia />
          </ProtectedRoute>
        }/>

        <Route path="/it" element={
          <ProtectedRoute>
            <IT />
          </ProtectedRoute>
        }/>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
