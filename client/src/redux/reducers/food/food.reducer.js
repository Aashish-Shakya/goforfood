import { GET_FOOD, GET_SPECIFIC_FOOD } from "./food.type";

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
        default:
            return { ...state };
    }
};
export default foodReducer;