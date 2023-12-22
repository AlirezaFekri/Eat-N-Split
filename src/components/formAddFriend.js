import React from 'react'
import Button from './button'

function FormAddFriend() {
    return (
        <form className='form-add-friend'>
            <label>
                👫 Friend name
            </label>
            <input type='text' />

            <label>
                🖼 Image URL
            </label>
            <input type='text' />
            <Button>
                Add Friend
            </Button>
        </form>
    )
}

export default FormAddFriend