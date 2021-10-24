import { combineReducers } from "redux";
import patientReducers from "./reducer";

const rootReducer = combineReducers({
    data: patientReducers
})

export default rootReducer;