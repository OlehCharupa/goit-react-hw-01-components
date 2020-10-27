import React from 'react';

const StatsItem = ({ stat: [key, value] }) => {
    // console.log(stat);
    return (
        <li className="statsItem">
            <span className="stat">{key}</span>
            <span className="quantity">{value}</span>
        </li>
    );
};

export default StatsItem;