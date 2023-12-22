import React from 'react'
import Friend from './friend'

function FriendList({ friends, onSelection, selection }) {
    return (
        <ul>
            {friends.map(friend =>
                <Friend friend={friend} onSelection={onSelection} selection={selection} key={friend.id} />
            )}
        </ul>
    )
}

export default FriendList