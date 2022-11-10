import axios from "axios";

import { GET_FOOD, GET_SPECIFIC_FOOD } from "./food.type";

export const getFood = () => async (dispatch) => {
    try {
        const foodList = await axios({
            method: "GET",
            url: `http://localhost:4000/food`,
        });

        return dispatch({ type: GET_FOOD, payload: foodList.data.foodList });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};

export const getSpecificFood = (_id) => async (dispatch) => {
    try {
        const foodList = await axios({
            method: "GET",
            url: `http://localhost:4000/food/${_id}`,
        });

        return dispatch({ type: GET_SPECIFIC_FOOD, payload: foodList.data });
    } catch (error) {
        dispatch({ type: "ERROR", payload: error });
    }
};