
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import LandingPage from './pages/LandingPage';
import ModeButton from './components/ModeButton' 
import './App.css';

const App = () => {
  return (
    <div className="app dark-mode">
      <ModeButton/>
      <Router>
        <Sidebar />
        <div className="content">
          
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
