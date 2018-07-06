import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './ContactData.css';

class ContactData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    };

    componentDidMount() {
        ReactDOM.findDOMNode(this).scrollIntoView();
    }

    render() {
        return (
            <div className="ContactData">
                <h2>Lets finish your order.</h2>
                <h4>Enter your contact information</h4>
                <form action="">
                    <input type="text" className="u-full-width" name="name" placeholder="Your name"/>
                    <input type="email" className="u-full-width" name="email" placeholder="Your email"/>
                    <input type="text" className="u-full-width" name="street" placeholder="Your street"/>
                    <input type="text" className="u-full-width" name="postalCode" placeholder="Your postal code"/>
                    <button className="Button Success">
                        Order now >>
                    </button>
                </form>
            </div>
        )
            ;
    }
}

ContactData.propTypes = {};

export default ContactData;
