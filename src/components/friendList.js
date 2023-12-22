import React from 'react'
import Friend from './friend'

function FriendList({ friends }) {
    return (
        <ul>
            {friends.map(friend =>
                <Friend id={friend.id} image={friend.image} balance={friend.balance} name={friend.name} key={friend.id} />
            )}
        </ul>
    )
}

export default FriendList