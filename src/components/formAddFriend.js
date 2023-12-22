import React, { useState } from 'react'
import Button from './button'

function FormAddFriend({ setFreinds, showForm }) {

    const [friendName, setFriendName] = useState("");
    const [friendPic, setFriendPic] = useState(`https://i.pravatar.cc/48?u=${Math.ceil(Math.random() * 99999)}`);
    function HandleSubmit(e) {
        e.preventDefault();
        if (!friendName || !friendPic) return;
        setFreinds(friends => [...friends, { id: Math.ceil(Math.random() * 9999 + 10506), name: friendName, image: friendPic, balance: 0 }]);
        showForm();
        setFriendName("");
        setFriendPic(`https://i.pravatar.cc/48?u=${Math.ceil(Math.random() * 99999)}`);
    }
    return (
        <form className='form-add-friend' onSubmit={HandleSubmit}>
            <label>
                👫 Friend name
            </label>
            <input type='text' value={friendName} onChange={(e) => setFriendName(e.target.value)} />

            <label>
                🖼 Image URL
            </label>
            <input type='text' placeholder='Enter URL' value={friendPic} onChange={(e) => setFriendPic(e.target.value)} />
            <Button>
                Add Friend
            </Button>
        </form>
    )
}

export default FormAddFriend