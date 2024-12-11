import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import  "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";

const App = () => {
  const tema = useSelector((state) => state.tema.tema);
  return (
    <Router>
      <div className={`app ${tema}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/market" element={<></>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
