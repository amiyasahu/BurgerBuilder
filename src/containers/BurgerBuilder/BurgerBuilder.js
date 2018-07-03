import React, { Component } from 'react';
import { Aux } from '../../hoc/index';
import Burger from '../../components/Burger/Burger';
import { BuildControls, Modal, OrderSummary } from '../../components';
import { defaultAxios } from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
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
        totalPrice: 2.99,
        purchasable: true,
        purchasing: false,
        orderIsInProgress: false,
        orderComplete: false,
        loading: true
    };

    async componentDidMount() {
        await this.loadIngredients();
    }

    loadIngredients = async () => {
        await this.sleep(1000); // dummy to see the spinner
        const response = await defaultAxios.get('/ingredients');
        this.setState({ ingredients: response.data, loading: false });
        return response;
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = async () => {

        this.setState({ orderIsInProgress: true, purchasing: true });

        const response = await defaultAxios.post('/orders', {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice
        });

        // just an dummy wait to see the spinner for a second
        await this.sleep(1000);

        this.setState({ orderIsInProgress: false, orderComplete: true });
    };

    isPurchasable = (updatedIngredients) => {
        const sum = Object.keys(updatedIngredients).map(igKey => {
            return updatedIngredients[ igKey ]
        }).reduce(
            (val, currVal) => {
                return val + currVal
            }, 0);

        return sum > 0;
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
            totalPrice: this.state.totalPrice + INGREDIENT_PRICES[ type ],
            purchasable: this.isPurchasable(updatedIngredients)
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
            totalPrice: this.state.totalPrice - INGREDIENT_PRICES[ type ],
            purchasable: this.isPurchasable(updatedIngredients)
        });
    };

    render() {
        const lessShouldBeDisabled = { ...this.state.ingredients };
        const moreShouldBeDisabled = { ...this.state.ingredients };

        for ( let key in lessShouldBeDisabled ) {
            lessShouldBeDisabled[ key ] = lessShouldBeDisabled[ key ] === 0;
        }

        for ( let key in moreShouldBeDisabled ) {
            moreShouldBeDisabled[ key ] = moreShouldBeDisabled[ key ] >= 3;
        }

        let burger = <Spinner/>;

        if ( !this.state.loading ) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls
                        onAdd={this.addIngredientHandler}
                        onRemove={this.removeIngredientHandler}
                        lessShouldBeDisabled={lessShouldBeDisabled}
                        moreShouldBeDisabled={moreShouldBeDisabled}
                        totalPrice={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                        onPurchase={this.purchaseHandler}/>
                </Aux>
            );
        }

        return (
            <Aux>
                {burger}
                <Modal show={this.state.purchasing}
                       update={this.state.orderComplete || this.state.orderIsInProgress}
                       modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  totalPrice={this.state.totalPrice}
                                  purchasing={this.state.purchasing}
                                  orderIsInProgress={this.state.orderIsInProgress}
                                  orderComplete={this.state.orderComplete}
                                  purchaseCancelled={this.purchaseCancelHandler}
                                  purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
            </Aux>
        );
    }

}

export default BurgerBuilder;