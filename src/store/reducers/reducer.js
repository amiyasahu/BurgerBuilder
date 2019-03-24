import * as actionTypes from '../actions/';

const initialState = {
    ingredients : {},
    totalPrice : 4,
    error : false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.5,
    cheese: 0.3,
    meat: 0.25,
};

const addIngredient = (state, action) => {
    return {
        ...state,
        ingredients : {
            ...state.ingredients,
            [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1 // Note : here we are using the dynamic name for a object key
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[ action.payload.ingredientName ],
    };
};

const removeIngredient = (state, action) => {
    return {
        ...state,
        ingredients : {
            ...state.ingredients,
            [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1 // Note : here we are using the dynamic name for a object key
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[ action.payload.ingredientName ],
    };
};

const setIngredient = (state, action) => {
    return {
        ...state,
        ingredients : action.payload.ingredients,
        error : false
    };
};
const fetchIngredientFailed = (state, action) => {
    return {
        ...state,
        error: true
    };
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT :
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT :
            return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS :
            return setIngredient(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED :
            return fetchIngredientFailed(state, action);
        default:
            return state;
    }
};

export default reducer;
