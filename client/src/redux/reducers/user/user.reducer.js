import { GET_USER, SELF, CLEAR_USER, GET_ALL_USER, DELETE_USER, EDIT_USER } from "./user.type";

const initialState = {
    user: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
            };
        case GET_ALL_USER:
            return {
                ...state,
                ...action.payload
            };

        case SELF:
            return {
                ...state,
                ...action.payload,
            };
        case CLEAR_USER:
            return {
                user: {},
            };
        case DELETE_USER:
            return {
                ...state,
                ...action.payload,
            };
        case EDIT_USER:
            return {
                ...state,

            };
        default:
            return {
                ...state,
            };
    }
};

export default userReducer;