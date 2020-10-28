import React from 'react';
import PropTypes from "prop-types"

const Transaction = ({ type, amount, currency }) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

export default Transaction;

Transaction.propType = {
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
}