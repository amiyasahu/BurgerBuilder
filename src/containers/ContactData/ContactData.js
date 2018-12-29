import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import { Spinner } from "../../components";
import { defaultAxios } from '../../axios';
import {connect} from 'react-redux';
import './ContactData.css';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
        orderComplete: false
    };

    componentDidMount() {
        const thisNode = ReactDOM.findDOMNode(this);
        thisNode && thisNode.scrollIntoView();
    }

    orderHandler = async (event) => {
        event.preventDefault();
        this.setState({ loading: true, orderComplete: false });

        const order = {
            ingredients: this.props.ings,
            price: this.props.totalPrice,
            customer: {
                name: 'Amiya',
                email: 'amiya@gmail.com',
                address: {
                    street: '5 Allandale',
                    postalCode: '19713'
                }
            },
            deliveryMethod: 'fastest',
            when: new Date()
        };

        await defaultAxios.post('/orders', order);

        // just an dummy wait to see the spinner for a second
        await this.sleep(1000);

        this.setState({ loading: false, orderComplete: true });
    };

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    renderContactForm = () => {
        return (
            <div>
                <h2>Lets finish your order.</h2>
                <h4>Enter your contact information</h4>
                <form>
                    <input type="text" className="u-full-width" name="name" placeholder="Your name"/>
                    <input type="email" className="u-full-width" name="email" placeholder="Your email"/>
                    <input type="text" className="u-full-width" name="street" placeholder="Your street"/>
                    <input type="text" className="u-full-width" name="postalCode" placeholder="Your postal code"/>
                    <button className="Button Success" onClick={this.orderHandler}>
                        Order now >>
                    </button>
                </form>
            </div>
        );
    };

    renderOrderFinished = () => {
        return (
            <div>
                <h2>Thank you for your order</h2>
                <p><Link to="/orders" className="button">View your orders</Link></p>
                <p><Link to="/" className="button">Go back</Link></p>
            </div>
        );
    };

    render() {

        if ( !this.props.totalPrice ) {
            // redirect to home when there is no price
            return <Redirect to="/"/>;
        }

        let response = null;

        if ( this.state.orderComplete ) {
            response = this.renderOrderFinished();
        } else if ( this.state.loading ) {
            response = <Spinner/>;
        } else {
            response = this.renderContactForm();
        }

        return (
            <div className="ContactData">
                {response}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        totalPrice : state.totalPrice
    };
};

export default connect(mapStateToProps)(ContactData);