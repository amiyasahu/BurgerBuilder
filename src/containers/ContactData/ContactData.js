import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Redirect } from 'react-router-dom';
import { Spinner } from "../../components";
import { defaultAxios } from '../../axios';
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
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Amiya',
                email: 'amiya@gmail.com',
                address: {
                    street: '5 Allandale',
                    postalCode: '19713'
                }
            },
            deliveryMethod: 'fastest'
        };

        const response = await defaultAxios.post('/orders', order);

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
                <p>See you soon again.</p>
                <p>Click <Link to="/">here</Link> to go back</p>
            </div>
        );
    };

    render() {

        if ( !this.props.totalPrice ) {
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

export default ContactData;
