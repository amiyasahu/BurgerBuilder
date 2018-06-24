import React, { Component } from 'react';
import { Aux } from '../../hoc';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

class BurgerBuilder extends Component {

    render() {
        return (
            <Aux>
                <div>Awesome.. You can build a burger here</div>
                <BurgerIngredient type="bread-top" />
                <BurgerIngredient type="bread-bottom" />
            </Aux>
        );
    }

}

export default BurgerBuilder;