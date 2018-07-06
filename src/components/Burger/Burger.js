import React from 'react';
import './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {

    let transformedIngredients =
        Object.keys(props.ingredients)
            .map(ingredientKey => {
                return [ ...Array(props.ingredients[ ingredientKey ]) ].map(
                    (_, i) => <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
                )
            })
            .reduce((previousValue, currentValue) => {
                return previousValue.concat(currentValue);
            }, []);

    if ( transformedIngredients.length === 0 ) {
        const suggest = props.suggest || "Start adding ingredients to your burger!!";
        transformedIngredients = <div>{suggest}</div>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;
