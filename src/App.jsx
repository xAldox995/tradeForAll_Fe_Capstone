import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Sidebar from "./components/Sidebar";
import ModeButton from "./components/ModeButton";

function App() {
  const tema = useSelector((stato) => stato.tema);

  return (
    <div className={`app ${tema}`}>
      <Sidebar />
      <div className="content">
        <ModeButton/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
