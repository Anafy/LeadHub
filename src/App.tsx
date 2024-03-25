import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Start from "./pages/Start/Start.tsx"
import Activate from "./pages/Activate/Activate.tsx"
import Auth from "./pages/Auth/Auth.tsx"
import Cabinet from './components/Cabinet/Cabinet.tsx';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { SnackbarContext } from './context/SnackbarContext.tsx';
import Loader from './components/Loader/Loader.tsx';

import { LoaderProvider } from './context/LoaderContext';
import StartAi from './pages/StartAi/StartAi.tsx';
import StartGuru from './pages/StartGuru/StartGuru.tsx';
import StartIphone from './pages/StartIphone/StartIphone.tsx';
import StartWb from './pages/StartWb/StartWb.tsx';
import StartYandex from './pages/StartYandex/StartYandex.tsx';

function App() {

  const snackbar = useSnackbar();

  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <SnackbarContext.Provider value={snackbar}>
        <LoaderProvider>
          <Loader/>
          <Router>
            <Routes>
              <Route path='/lp1' element={<Start/>} />
              <Route path='/lp2' element={<StartAi/>} />
              <Route path='/lp3' element={<StartGuru/>} />
              <Route path='/lp4' element={<StartIphone/>} />
              <Route path='/lp5' element={<StartWb/>} />
              <Route path='/lp6' element={<StartYandex/>} />
              <Route path='/activate' element={<Activate/>} />
              <Route path='/auth' element={<Auth/>} />
              <Route path='/cabinet/*' element={<Cabinet/>} />
              <Route path='*' element={<Navigate to={`/lp1`} replace />} />
            </Routes>
          </Router>
        </LoaderProvider>
      </SnackbarContext.Provider>
    </SnackbarProvider>
  )
}

export default App
