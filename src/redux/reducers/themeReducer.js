import { TOGGLE_TEMA } from "../actions/types";

const statoIniziale = {
    tema:'dark-mode',
};

const themeReducer = (stato = statoIniziale, action) => {
    switch (action.type) {
        case TOGGLE_TEMA:
            return {
                ...stato,
                tema: stato.tema === "dark-mode" ? "light-mode" : "dark-mode",
            };
        default:
            return stato;
    }
}
export default themeReducer