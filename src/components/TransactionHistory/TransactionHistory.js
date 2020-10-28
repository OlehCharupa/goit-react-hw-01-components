import React from 'react';
import Transaction from './Transaction/Transaction';
import "./TransactionHistory.css"
import PropTypes from "prop-types"

const TransactionHistory = ({ transactions }) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactions.map(({ id, type, amount, currency }) =>
                    <Transaction
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                )}
            </tbody>
        </table>
    );
};

export default TransactionHistory;

TransactionHistory.propType = {
    transactions: PropTypes.object
}