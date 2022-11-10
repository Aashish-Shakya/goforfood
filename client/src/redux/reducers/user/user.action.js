import axios from "axios";

// redux types
import { GET_USER, SELF, CLEAR_USER, GET_ALL_USER, DELETE_USER, EDIT_USER } from "./user.type";

export const getUser = (_id) => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/user/${_id}`,
        });

        return dispatch({ type: GET_USER, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getMySelf = () => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/user`,
        });

        return dispatch({ type: SELF, payload: { ...User.data.user } });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getAllUser = () => async (dispatch) => {
    try {
        const UserList = await axios({
            method: "GET",
            url: `http://localhost:4000/user/admin/all`,
        });


        return dispatch({ type: GET_ALL_USER, payload: { ...UserList.data } });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};



export const deleteUser = (_id) => async (dispatch) => {

    try {
        const User = await axios({
            method: "DELETE",
            url: `http://localhost:4000/user/delete/${_id}`,
        });

        console.log(User.data)
        return dispatch({ type: DELETE_USER, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const editUser = (userData, _id) => async (dispatch) => {
    try {
        const User = await axios({
            method: "PUT",
            url: `http://localhost:4000/user/update/${userData._id}`,
            data: { credentials: userData },
        });

        // localStorage.setItem(
        //     "goforfoodUser",
        //     JSON.stringify({ token: User.data.token })
        // );

        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${User.data.token}`;

        return dispatch({ type: EDIT_USER, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};


export const clearUser = () => async (dispatch) => {
    try {
        return dispatch({ type: CLEAR_USER, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};