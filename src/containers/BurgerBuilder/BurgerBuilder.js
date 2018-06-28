import React, { Component } from 'react';
import { Aux } from '../../hoc/index';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import './BurgerBuilder.css';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.5,
    cheese: 0.3,
    meat: 0.25,
};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 2,
            meat: 1,
        },
        totalPrice: 2.99
    };

    addIngredientHandler = (type) => {

        if ( this.state.ingredients[ type ] >= 3 ) {
            return;
        }

        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[ type ] = this.state.ingredients[ type ] + 1;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[ type ]
        });
    };

    removeIngredientHandler = (type) => {

        if ( this.state.ingredients[ type ] === 0 ) {
            return;
        }

        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[ type ] = this.state.ingredients[ type ] - 1;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: this.state.totalPrice - INGREDIENT_PRICES[ type ]
        });
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                {this.renderTotalPrice()}
                <BuildControls onAdd={this.addIngredientHandler} onRemove={this.removeIngredientHandler}/>
            </Aux>
        );
    }

    renderTotalPrice() {
        return (
            <div className="TotalPrice">
                <div className="Price">
                    Total price : {this.state.totalPrice.toFixed(2)}$
                </div>
            </div>
        );
    }
}

export default BurgerBuilder;