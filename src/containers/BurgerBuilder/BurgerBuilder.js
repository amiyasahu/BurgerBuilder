import React, { Component } from 'react';
import { Aux } from '../../hoc/index';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            bacon: 0,
            cheese: 2,
            meat: 1,
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls />
            </Aux>
        );
    }

}

export default BurgerBuilder;