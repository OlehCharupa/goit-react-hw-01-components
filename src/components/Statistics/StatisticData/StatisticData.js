import React from 'react';
import PropTypes from "prop-types"

const StatisticData = ({ label, percentage }) => {
    return (
        <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
        </li>
    );
};

export default StatisticData;

StatisticData.propTypes = {
    label: PropTypes.string,
    percentage: PropTypes.number
}