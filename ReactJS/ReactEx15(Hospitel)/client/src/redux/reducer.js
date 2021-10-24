import * as types from "./actionType";

const initialState = {
    patients: [],
    patient: {},
    loading: true
}

const patientReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PATIENTS:
            return {
                ...state,
                patients: action.payload,
                loading: false,
            }
        case types.DOC_ADDED:
            return {
                ...state,
                loading: false,
            }
        default:
            return state;
    };
}
export default patientReducers;