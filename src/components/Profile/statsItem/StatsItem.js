import React from 'react';
import PropTypes from "prop-types"

const StatsItem = ({ stat: [key, value] }) => {
    return (
        <li className="statsItem">
            <span className="stat">{key}</span>
            <span className="quantity">{value}</span>
        </li>
    );
};

export default StatsItem;

StatsItem.propType = {
    key: PropTypes.string,
    value: PropTypes.number
}