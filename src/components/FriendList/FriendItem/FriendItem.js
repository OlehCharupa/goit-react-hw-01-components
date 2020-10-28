import React from 'react';
import PropTypes from "prop-types"

const FriendItem = ({ avatar, name, isOnline }) => {
    const styles = {
        backgroundColor: isOnline ? "green" : "red",
        width: "30px",
        height: "30px",
        display: "block",
        borderRadius: "50%",
        margin: "0 auto",
        marginBottom: "20px",
    }
    return (
        <li className="itemFriend">
            <span style={styles}></span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
        </li>);
};

export default FriendItem;

FriendItem.propType = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}