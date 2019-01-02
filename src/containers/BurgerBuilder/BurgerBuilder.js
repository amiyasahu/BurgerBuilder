import React, { Component } from 'react';
import { Aux, withErrorHandler } from '../../hoc/index';
import Burger from '../../components/Burger/Burger';
import { BuildControls, Modal, OrderSummary } from '../../components';
import { defaultAxios } from '../../axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/';

import './BurgerBuilder.css';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.5,
    cheese: 0.3,
    meat: 0.25,
};

class BurgerBuilder extends Component {

    state = {
        purchasing: false,
        loading: false
    };

    componentDidMount () {
        this.props.initIngredients();
    }

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
        this.props.history.push("/checkout");
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

    render() {

        if(this.props.error){
            return <p>Error while loading the ingredients!</p>;
        }

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
                        purchasable={this.isPurchasable(this.props.ings)}
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
                                  purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
            </Aux>
        );
    }

}

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        totalPrice : state.totalPrice,
        error : state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded   : (name) => dispatch(actions.addIngredient(name)),
        onIngredientRemoved : (name) => dispatch(actions.removeIngredient(name)),
        initIngredients : () => dispatch(actions.initIngredients()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, defaultAxios));
