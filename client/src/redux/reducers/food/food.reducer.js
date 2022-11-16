import { GET_FOOD, GET_SPECIFIC_FOOD, DELETE_FOOD, ADD_FOOD } from "./food.type";

const initialState = {
    foods: [],
    selectedFood: [],
};

const foodReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FOOD:
            return {
                ...state,
                foods: [...action.payload],
            };
        case GET_SPECIFIC_FOOD: {
            return {
                ...state,
                selectedFood: action.payload,
            };
        }
        case DELETE_FOOD:
            return {
                ...state,
                ...action.payload,
            };
        case ADD_FOOD:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return { ...state };
    }
};
export default foodReducer;