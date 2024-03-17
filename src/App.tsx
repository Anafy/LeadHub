import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Start from "./pages/Start/Start.tsx"
import Activate from "./pages/Activate/Activate.tsx"
import Auth from "./pages/Auth/Auth.tsx"
import Cabinet from './components/Cabinet/Cabinet.tsx';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { SnackbarContext } from './context/SnackbarContext.tsx';

function App() {

  const snackbar = useSnackbar();

  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <SnackbarContext.Provider value={snackbar}>
        <Router>
          <Routes>
            <Route path='/start' element={<Start/>} />
            <Route path='/activate' element={<Activate/>} />
            <Route path='/auth' element={<Auth/>} />
            <Route path='/cabinet/*' element={<Cabinet/>} />
            <Route path='*' element={<Navigate to={`/start`} replace />} />
          </Routes>
        </Router>
      </SnackbarContext.Provider>
    </SnackbarProvider>
  )
}

export default App
