import React from 'react'
import Button from './button'

function Friend({ id, image, name, balance }) {


    return (
        <li>
            <img src={image} alt='profile' />
            <h3>{name}</h3>
            <p className={balance > 0 ? "green" : balance < 0 ? "red" : ""}>
                {balance === 0 && `You and ${name} are even`}
                {balance > 0 && `${name} owes you $${balance}`}
                {balance < 0 && `You owe ${name} $${balance * -1}`}
            </p>
            <Button >
                Select
            </Button>
        </li>
    )
}

export default Friend