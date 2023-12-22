import React, { useState } from 'react'
import FriendList from './components/friendList';
import FormAddFriend from './components/formAddFriend';
import Button from './components/button';


function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const [addFriendShowForm, setAddFriendShowForm] = useState(false);
  function HandleAddFriend() {
    setAddFriendShowForm(i => !i)
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={initialFriends} />
        {addFriendShowForm && <FormAddFriend /> }
        <Button setHandler={HandleAddFriend}>{addFriendShowForm? "Close" : "Add Friend"}</Button>
      </div>
    </div>
  )
}

export default App
