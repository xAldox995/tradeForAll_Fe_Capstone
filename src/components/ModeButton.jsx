import { useDispatch, useSelector } from "react-redux";
import { toggleTema } from "../redux/actions/themeActions";

const ModeButton = ()=>{
    const tema= useSelector((stato)=>stato.tema.tema)
    const dispatch = useDispatch();

    const cambioTema = () => {
      dispatch(toggleTema());
    };
    return (
      <button onClick={cambioTema} className="theme-toggle">
        {tema === "dark" ? "🌙" : "☀️"}
      </button>
    );
}
export default ModeButton