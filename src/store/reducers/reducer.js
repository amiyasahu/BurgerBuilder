import * as actionTypes from '../actions/actions';

const initialState = {
    ingredients : {
        "salad": 1,
        "bacon": 1,
        "cheese": 1,
        "meat": 1
      },
    totalPrice : 4
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
        default:
            return state;
    }
};

export default reducer;
