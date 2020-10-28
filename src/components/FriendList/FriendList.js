import React from 'react';
import FriendItem from './FriendItem/FriendItem';
import "./FriendList.css"
import PropTypes from "prop-types"

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {/* <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве --> */}
            {friends.map((friend) => <FriendItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />)}
        </ul>);
};

export default FriendList;
FriendList.propType = {
    friends: PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
    })
}