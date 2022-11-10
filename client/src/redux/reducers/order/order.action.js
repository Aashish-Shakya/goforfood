import axios from "axios";

// redux types
import { GET_ORDER, GET_ALL_ORDER } from "./order.type";

export const getOrder = () => async (dispatch) => {
    try {
        const Order = await axios({
            method: "GET",
            url: `http://localhost:4000/order`,
        });

        return dispatch({ type: GET_ORDER, payload: { ...Order.data } });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

export const getAllOrder = () => async (dispatch) => {
    try {
        const OrderList = await axios({
            method: "GET",
            url: `http://localhost:4000/order/admin/all`,
        });


        return dispatch({ type: GET_ALL_ORDER, payload: { ...OrderList.data } });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

// export const getMySelf = () => async (dispatch) => {
//     try {
//         const User = await axios({
//             method: "GET",
//             url: `http://localhost:4000/user`,
//         });

//         return dispatch({ type: SELF, payload: { ...User.data.user } });
//     } catch (error) {
//         return dispatch({ type: "ERROR", payload: error });
//     }
// };

// export const clearUser = () => async (dispatch) => {
//     try {
//         return dispatch({ type: CLEAR_USER, payload: {} });
//     } catch (error) {
//         return dispatch({ type: "ERROR", payload: error });
//     }
// };