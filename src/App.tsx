import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Start from "./pages/Start/Start.tsx"
import Activate from "./pages/Activate/Activate.tsx"
import Auth from "./pages/Auth/Auth.tsx"
import Agreement from "./pages/Agreement/Agreement.tsx"
import Landinggpt from "./pages/landinggpt/landinggpt.tsx"
import Rules from "./pages/Rules/Rules.tsx"
import Cabinet from './components/Cabinet/Cabinet.tsx';
import { SnackbarProvider, useSnackbar } from 'notistack';
import { SnackbarContext } from './context/SnackbarContext.tsx';
import Loader from './components/Loader/Loader.tsx';

import { LoaderProvider } from './context/LoaderContext';

import lp1Image from './assets/imgs/start1.png';
import lp1AdaptiveImage from './assets/imgs/start-bg1.png';
import lp2Image from './assets/imgs/start3.png';
import lp2AdaptiveImage from './assets/imgs/start-bg3.png';
import lp3Image from './assets/imgs/start2.png';
import lp3AdaptiveImage from './assets/imgs/start-bg2.png';
import lp4Image from './assets/imgs/start4.png';
import lp4AdaptiveImage from './assets/imgs/start-bg4.png';
import lp5Image from './assets/imgs/start5.png';
import lp5AdaptiveImage from './assets/imgs/start-bg5.png';
import lp6Image from './assets/imgs/start6.png';
import lp6AdaptiveImage from './assets/imgs/start-bg6.png';

function App() {

  const snackbar = useSnackbar();

  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <SnackbarContext.Provider value={snackbar}>
        <LoaderProvider>
          <Loader/>
          <Router>
            <Routes>
              <Route path='/lp1' element={<Start color={'#00A57D'} image={lp1Image} adaptiveImage={lp1AdaptiveImage} />} />
              <Route path='/lp2' element={<Start color={'#0055DB'} image={lp2Image} adaptiveImage={lp2AdaptiveImage} />} />
              <Route path='/lp3' element={<Start color={'#00C6A1'} image={lp3Image} adaptiveImage={lp3AdaptiveImage} />} />
              <Route path='/lp4' element={<Start color={'#8C00CE'} image={lp4Image} adaptiveImage={lp4AdaptiveImage} />} />
              <Route path='/lp5' element={<Start color={'#FF2FA4'} image={lp5Image} adaptiveImage={lp5AdaptiveImage} />} />
              <Route path='/lp6' element={<Start color={'#FF6300'} image={lp6Image} adaptiveImage={lp6AdaptiveImage} />} />
              <Route path='/activate' element={<Activate/>} />
              <Route path='/agreement' element={<Agreement/>} />
              <Route path='/rules' element={<Rules/>} />
              <Route path='/auth' element={<Auth/>} />
              <Route path='/' element={<Landinggpt/>} />
              <Route path='/cabinet/*' element={<Cabinet/>} />
              <Route path='*' element={<Navigate to={`/`} replace />} />
            </Routes>
          </Router>
        </LoaderProvider>
      </SnackbarContext.Provider>
    </SnackbarProvider>
  )
}

export default App
