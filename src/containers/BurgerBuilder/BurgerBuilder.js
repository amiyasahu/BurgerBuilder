import React, { Component } from 'react';
import { Aux, withErrorHandler } from '../../hoc/index';
import Burger from '../../components/Burger/Burger';
import { BuildControls, Modal, OrderSummary } from '../../components';
import { defaultAxios } from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import './BurgerBuilder.css';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.5,
    cheese: 0.3,
    meat: 0.25,
};

class BurgerBuilder extends Component {

    state = {
        purchasable: true,
        purchasing: false,
        loading: true
    };

    async componentDidMount() {
        await this.loadIngredients();
    };

    loadIngredients = async () => {
        await this.sleep(250); // dummy to see the spinner
        const response = await defaultAxios.get('/ingredients');
        this.setState({ ingredients: response.data, loading: false });
        return response;
    };

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    };

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    };

    purchaseContinueHandler = async () => {
        const queryParams = [];

        for ( let ingredient in this.state.ingredients ) {
            queryParams.push(
                encodeURIComponent(ingredient)
                + "="
                + encodeURIComponent(this.state.ingredients[ ingredient ])
            );
        }

        // TODO : Find a better way to pass params
        queryParams.push("price=" + this.state.totalPrice);

        const queryString = queryParams.join("&");
        this.props.history.push({
            pathname: "/checkout",
            search: queryString
        });

        // const response = await defaultAxios.post('/orders', {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice
        // });
        //
        // // just an dummy wait to see the spinner for a second
        // await this.sleep(1000);
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
            totalPrice: this.props.totalPrice + INGREDIENT_PRICES[ type ],
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
        const lessShouldBeDisabled = { ...this.props.ings };
        const moreShouldBeDisabled = { ...this.props.ings };

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
                    <Burger
                        ingredients={this.props.ings}
                        suggest="Start adding ingredients to your burger!!"/>

                    <BuildControls
                        onAdd={this.props.onIngredientAdded}
                        onRemove={this.props.onIngredientRemoved}
                        lessShouldBeDisabled={lessShouldBeDisabled}
                        moreShouldBeDisabled={moreShouldBeDisabled}
                        totalPrice={this.props.totalPrice}
                        purchasable={this.state.purchasable}
                        onPurchase={this.purchaseHandler}/>
                </Aux>
            );
        }

        return (
            <Aux>
                {burger}
                <Modal show={this.state.purchasing}
                       modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary ingredients={this.props.ings}
                                  totalPrice={this.props.totalPrice}
                                  purchasing={this.state.purchasing}
                                  purchaseCancelled={this.purchaseCancelHandler}
                                  purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
            </Aux>
        );
    }

}

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        totalPrice : state.totalPrice
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded   : (name) => dispatch({type: actionTypes.ADD_INGREDIENT, payload : {ingredientName: name}}),
        onIngredientRemoved : (name) => dispatch({type: actionTypes.REMOVE_INGREDIENT, payload : {ingredientName: name}}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, defaultAxios));
