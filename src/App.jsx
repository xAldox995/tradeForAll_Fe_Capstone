

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import {useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from"./pages/LandingPage"
import { toogleTema } from './redux/actions/themeActions';


function App() {
  const tema= useSelector((stato)=>stato.tema);
  const dispatch = useDispatch();

  const cambioTema = () => {
    dispatch(toogleTema());
  };

return (
  <div className={`app ${tema === 'dark'? 'dark-mode': 'light-mode'}`}>
    <Header onToggleTheme={cambioTema} />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
    </Routes>
    </BrowserRouter>

  </div>

  );
}

export default App
