import React from 'react'
import Button from './button'

function FormSplitBill({friends, setFriends, id}) {
    return (
        <form className='form-split-bill'>
            <h2>
                Split a Bill with
            </h2>

            <label>
                💰 Bill Value:
            </label>
            <input type='text' />
            <label>
                🧍‍♂️ Your expense:
            </label>
            <input type='text' />
            <label>
                👫 X's expense:
            </label>
            <input type='text' disabled />
            <label>
                🤑 Who is paying the Bill?
            </label>
            <select>
                <option value="user">You</option>
                <option value="friend">X</option>
            </select>
            <Button>
                Split Bill
            </Button>
        </form>
    )
}

export default FormSplitBill