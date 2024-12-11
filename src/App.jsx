import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import  "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import Dashboard from "./pages/DashBoard";

const App = () => {
  const tema = useSelector((state) => state.tema.tema);
  return (
    <Router>
      <div className={`app ${tema}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
