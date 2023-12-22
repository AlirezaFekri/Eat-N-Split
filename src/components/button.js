import React from 'react'

function Button({ children, setHandler }) {
    return (
        <button onClick={setHandler} className='button'>
            {children}
        </button>
    )
}

export default Button