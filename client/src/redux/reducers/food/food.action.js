import axios from "axios";

import { GET_FOOD, GET_SPECIFIC_FOOD, DELETE_FOOD, ADD_FOOD } from "./food.type";

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


export const deleteFood = (_id) => async (dispatch) => {

    try {
        const Food = await axios({
            method: "DELETE",
            url: `http://localhost:4000/food/delete/${_id}`,
        });

        console.log(Food.data)
        return dispatch({ type: DELETE_FOOD, payload: Food.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};

const dishData = {
    "name": "ddddd",
    "description": "dsdsd",
    "isVeg": "true",
    "category": "dgs",
    "photos": "asf",
    "price": "123"
}
export const addFood = (dishData) => async (dispatch) => {
    console.log("Hello I am food action 1" + { ...dishData } + "hahah")
    try {
        const Dish = await axios({
            method: "POST",
            url: `http://localhost:4000/food/new/dish`,
            data: { dishData: dishData },
        });
        console.log("Hello I am food action 2")
        console.log("action -->", Dish.data)
        return dispatch({ type: ADD_FOOD, payload: Dish.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
};
