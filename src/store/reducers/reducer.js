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

const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.ADD_INGREDIENT :
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] + 1 // Note : here we are using the dynamic name for a object key
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[ action.payload.ingredientName ],
            };
        case actionTypes.REMOVE_INGREDIENT :
            return {
                ...state,
                ingredients : {
                    ...state.ingredients,
                    [action.payload.ingredientName]: state.ingredients[action.payload.ingredientName] - 1 // Note : here we are using the dynamic name for a object key
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[ action.payload.ingredientName ],
            };

        case actionTypes.SET_INGREDIENTS :
            return {
                ...state,
                ingredients : action.payload.ingredients,
                error : false
            };
            
        case actionTypes.FETCH_INGREDIENTS_FAILED :
            return {
                ...state,
                error: true
            };

        default:
            return state;
    }
};

export default reducer;
