import { useDispatch, useSelector } from "react-redux";
import { toogleTema } from "../redux/actions/themeActions";

const ModeButton = ()=>{
    const tema= useSelector((stato)=>stato.tema)
    const dispatch = useDispatch();

    const cambioTema = () => {
      dispatch(toogleTema());
    };
    return (
      <button onClick={cambioTema} className="theme-toggle">
        {tema === 'dark-mode' ? 'Light Mode' : 'Dark Mode'}
      </button>
    );
}
export default ModeButton