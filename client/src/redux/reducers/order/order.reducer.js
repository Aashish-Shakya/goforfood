import { GET_ORDER, GET_ALL_ORDER } from "./order.type";

const initialState = {
    order: {},
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER:
            return {
                ...state,
                ...action.payload,
            };
        case GET_ALL_ORDER:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return {
                ...state,
            };
    }
};

export default orderReducer;