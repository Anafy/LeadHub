import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Start from "./pages/Start/Start.tsx"
import Activate from "./pages/Activate/Activate.tsx"
import Auth from "./pages/Auth/Auth.tsx"
import Main from "./pages/Main/Main.tsx"
import Choose from "./pages/Choose/Choose.tsx"
import NavMenu from "./components/NavMenu/NavMenu.tsx"
import Chatgpt from "./pages/Chats/Chatgpt.tsx"
import Dalle from "./pages/Chats/Chatgpt.tsx"

function App() {

  return (
    <>
      <main className="block">
        <NavMenu/>
        <Router>
          <Routes>
            <Route path='/start' element={<Start/>} />
            <Route path='/activate' element={<Activate/>} />
            <Route path='/auth' element={<Auth/>} />
            <Route path='/main' element={<Main/>} />
            <Route path='/choose' element={<Choose/>} />
            <Route path='/chatgpt' element={<Chatgpt/>} />
            <Route path='/dalle' element={<Dalle/>} />
            <Route path='*' element={<Navigate to={`/start`} replace />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
