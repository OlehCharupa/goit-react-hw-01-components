import React from 'react';
import "./Statistics.css"
import StatisticData from './StatisticData/StatisticData';
import PropTypes from "prop-types"

const Statistics = ({ title, statisticals }) => {
    return (
        <section className="statistics">
            {title && <h2 className="title">Upload stats</h2>}
            <ul className="stat-list">
                {statisticals.map(elem => <StatisticData
                    key={elem.id}
                    label={elem.label}
                    percentage={elem.percentage}
                />)}
            </ul>
        </section >
    );
};

export default Statistics;
Statistics.propTypes = {
    title: PropTypes.string,
    statisticals: PropTypes.array

}