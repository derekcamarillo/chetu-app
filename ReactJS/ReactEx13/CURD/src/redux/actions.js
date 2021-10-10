import * as types from "./actionType";
import axios from 'axios';

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
})

const userDeleted = () => ({
    type: types.DELETE_USERS,
})
const userAdded = () => ({
    type: types.ADD_USERS,
})

const getUser = (user) => ({
    type: types.GET_SINGLE_USER,
    payload: user,
})

const userUpdated = () => ({
    type: types.UPDATE_USER,
})


export const loadUsers = () => {
    return function (dishpatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((resp) => {
            console.log("resp", resp)
            dishpatch(getUsers(resp.data));
        })
            .catch((error) => console.log(error));
    }
}

export const deleteUser = (id) => {
    return function (dishpatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log("resp", resp)
            dishpatch(userDeleted());
            dishpatch(loadUsers());
        })
            .catch((error) => console.log(error));
    }
}
export const addUser = (user) => {
    return function (dishpatch) {
        axios.post(`${process.env.REACT_APP_API}`,user).then((resp) => {
            console.log("resp", resp)
            dishpatch(userAdded());
        })
            .catch((error) => console.log(error));
    }
}

export const getSingleUser = (id) => {
    return function (dishpatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log("resp", resp)
            dishpatch(getUser(resp.data));
        })
            .catch((error) => console.log(error));
    }
}

export const updateUser = (user,id) => {
    return function (dishpatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`, user)
        .then((resp) => {
            console.log("resp", resp)
            dishpatch(userUpdated(resp.data));
        })
            .catch((error) => console.log(error));
    }
}