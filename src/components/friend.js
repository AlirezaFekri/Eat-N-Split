import React from 'react'
import Button from './button'

function Friend({ friend, onSelection, selection }) {


    return (
        <li>
            <img src={friend.image} alt='profile' />
            <h3>{friend.name}</h3>
            <p className={friend.balance > 0 ? "green" : friend.balance < 0 ? "red" : ""}>
                {friend.balance === 0 && `You and ${friend.name} are even`}
                {friend.balance > 0 && `${friend.name} owes you $${friend.balance}`}
                {friend.balance < 0 && `You owe ${friend.name} $${Math.abs(friend.balance)}`}
            </p>
            {
                (selection !== null && selection.id === friend.id) ?
                    <Button onClick={() => onSelection(null)}>
                        Cancel
                    </Button>
                    :
                    <Button onClick={() => onSelection(friend)}>
                        Select
                    </Button>
            }
        </li>
    )
}

export default Friend