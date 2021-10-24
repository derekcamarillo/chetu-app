import * as types from "./actionType";
import axios from "axios";

const getPatients = (patients) => ({
    type: types.GET_PATIENTS,
    payload: patients,
})
const addDoc = () => ({
    type: types.DOC_ADDED
})
export const loadPatients = async() => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/patients/`,{
            headers: {
                'content-type': 'multipart/form-data'
              }
        })
        
            .then((resp) => {
                // console.log("resp", resp)
                dispatch(getPatients(resp.data));
            })
            .catch((error) => console.log(error));
    }
}

export const addDocter = (Doctors) => {
    return function (dishpatch) {
        axios.post(`${process.env.REACT_APP_API}/doctors/`, Doctors)
        .then((resp) => {
            console.log("resp", resp)
            dishpatch(addDoc());
        })
            .catch((error) => console.log(error));
    }
}