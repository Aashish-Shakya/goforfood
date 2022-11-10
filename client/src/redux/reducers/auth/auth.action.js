import axios from "axios";

// redux types
import { SIGN_IN, SIGN_UP, GOOGLE_AUTH, SIGN_OUT } from "./auth.type";

export const signIn = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            // url: `${process.env.REACT_APP_CLIENT_URL}/auth/signin`,
            url: `http://localhost:4000/auth/signin`,
            data: { credentials: userData },
        });

        localStorage.setItem(
            "goforfoodUser",
            JSON.stringify({ token: User.data.token })
        );

        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${User.data.token}`;

        return dispatch({ type: SIGN_IN, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const signUp = (userData) => async (dispatch) => {
    try {
        const User = await axios({
            method: "POST",
            url: `http://localhost:4000/auth/signup`,
            data: { credentials: userData },
        });

        localStorage.setItem(
            "goforfoodUser",
            JSON.stringify({ token: User.data.token })
        );

        axios.defaults.headers.common[
            "Authorization"
        ] = `Bearer ${User.data.token}`;

        return dispatch({ type: SIGN_UP, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const signOut = () => async (dispatch) => {
    try {
        localStorage.removeItem("goforfoodUser");

        return dispatch({ type: SIGN_OUT, payload: {} });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

