import React, { Component } from 'react';
import { Order, Spinner } from "../../components";
import { defaultAxios } from "../../axios";
import { withErrorHandler } from "../../hoc";

import './Orders.css';

class Orders extends Component {

    state = {
        orders: [],
        loading: true
    };

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async componentDidMount() {
        this.setState({ loading: true });
        await this.sleep(250); // dummy to see the spinner
        const response = await defaultAxios.get('/orders');
        this.setState({ orders: response.data, loading: false });
    };

    render() {

        if ( this.state.loading ) {
            return <Spinner/>;
        }

        let response = null;

        if ( !this.state.orders ) {
            response = (
                <h3>Your orders would appear here</h3>
            );
        }

        if ( this.state.orders ) {
            response = (
                <div>
                    <h2>Your past orders</h2>
                    {
                        this.state.orders
                            .sort((oneDate, anotherDate) => new Date(anotherDate.when) - new Date(oneDate.when))
                            .map(order => {
                                    return <Order key={order.id} order={order}/>
                                }
                            )
                    }
                </div>
            );
        }

        return (
            <div className="Orders">
                {response}
            </div>
        )
    }
}

export default withErrorHandler(Orders, defaultAxios);
