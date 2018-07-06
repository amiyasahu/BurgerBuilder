import React from 'react';
import moment from 'moment';
import './Order.css';

const Order = (props) => {
    const { order } = props; // destructuring
    const ingredientSummary = Object.keys(order.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                    {igKey}
                    </span> : {order.ingredients[ igKey ]}
                </li>
            )
        });

    return (
        <div className="Order">
            <div className="OrderHeader">
                <div className="u-pull-left">
                    Ordered For <span className="CustomerName">{order.customer.name}</span>
                    <span className="CustomerEmail">({order.customer.email})</span>
                </div>
                <div className="u-pull-right">
                    {
                        order.when
                            ? <div>{humanTime(order.when)}</div>
                            : <span>Few days ago</span>
                    }
                </div>
                <div className="u-cf"/>
            </div>
            <div className="OrderDetail">
                Here are the ingredients included in this order
                <ul>
                    {ingredientSummary}
                </ul>
            </div>
            <div className="OrderFooter">
                <div className="DeliveryAddress u-pull-left">
                    @ Delivery Address : {order.customer.address.street}, {order.customer.address.postalCode}
                </div>
                <div className="OrderTotal u-pull-right">
                    $<span>{order.price}</span>
                </div>
                <div className="u-cf"/>
            </div>
        </div>
    );
};



/**
 * The `humanTime` utility converts a date to a localized, human-readable time-
 * ago string.
 * Source : Flarum (src/common/utils/humanTime.js)
 * @param {Date} time
 * @return {String}
 */
function humanTime(time) {
    let m = moment(time);
    const now = moment();

    // To prevent showing things like "in a few seconds" due to small offsets
    // between client and server time, we always reset future dates to the
    // current time. This will result in "just now" being shown instead.
    if ( m.isAfter(now) ) {
        m = now;
    }

    const day = 864e5;
    const diff = m.diff(moment());
    let ago = null;

    // If this date was more than a month ago, we'll show the name of the month
    // in the string. If it wasn't this year, we'll show the year as well.
    if ( diff < -30 * day ) {
        if ( m.year() === moment().year() ) {
            ago = m.format('D MMM');
        } else {
            ago = m.format('MMM \'YY');
        }
    } else {
        ago = m.fromNow();
    }

    return ago;
};


export default Order;
