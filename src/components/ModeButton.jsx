import { useDispatch, useSelector } from "react-redux";
import { toggleTema } from "../redux/actions/themeActions";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect } from "react";

const ModeButton = () => {
  const tema = useSelector((stato) => stato.tema.tema);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Current theme:", tema)
    document.documentElement.setAttribute("data-theme", tema);
  }, [tema]);

  return (
    <button
      onClick={() => dispatch(toggleTema())}
      className="sidebar-btn"
      aria-label="Switch Theme"
    >
      {tema === "dark-mode" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};
export default ModeButton;
