import * as actionTypes from './actionTypes';
import { defaultAxios } from '../../axios';

export const addIngredient = (name) => {
    return {
        type : actionTypes.ADD_INGREDIENT,
        payload : {ingredientName: name}
    };
};

export const removeIngredient = (name) => {
    return {
        type : actionTypes.REMOVE_INGREDIENT,
        payload : {ingredientName: name}
    };
};

const setIngredients = (ingredients) => {
    return {
        type : actionTypes.SET_INGREDIENTS,
        payload : {ingredients: ingredients}
    };
};

const fetchIngredientsFailed = (ingredients) => {
    return {
        type : actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const initIngredients = () => {
    return dispatch => {
        defaultAxios.get('/ingredients')
        .then(response => {
            dispatch(setIngredients(response.data));
        })
        .catch(error => {
            dispatch(fetchIngredientsFailed());
        });
    }
};
