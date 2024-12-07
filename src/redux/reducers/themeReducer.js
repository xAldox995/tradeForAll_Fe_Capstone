import { TOGGLE_TEMA } from "../actions/types";

const statoIniziale = 'dark';

const themeReducer = (stato = statoIniziale, action) => {
    switch (action.type) {
        case TOGGLE_TEMA:
            return {
                ...stato,
                tema: stato.tema === 'dark' ? 'light' : 'dark'
            };
        default:
            return stato;
    }
}
export default themeReducer