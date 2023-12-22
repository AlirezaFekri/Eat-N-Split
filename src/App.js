import React, { useState } from 'react'
import FriendList from './components/friendList';
import FormAddFriend from './components/formAddFriend';
import Button from './components/button';
import FormSplitBill from './components/formSplitBill';

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

function App() {
  const [friends, setFreinds] = useState(initialFriends);
  const [addFriendShowForm, setAddFriendShowForm] = useState(false);
  const [splitBillShowForm, setSplitBillShowForm] = useState(false);
  const [friendSelected, setFriendSelected] = useState([]);

  function HandleShowAddFriendForm() {
    setAddFriendShowForm(i => !i)
  }



  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={friends} />
        {addFriendShowForm && <FormAddFriend HandleFriend={setFreinds} setFreinds={setFreinds} />}
        <Button setHandler={HandleShowAddFriendForm}>{addFriendShowForm ? "Close" : "Add Friend"}</Button>
      </div>
      {splitBillShowForm && <FormSplitBill friends={friends} setFriends={setFreinds} />}
    </div>
  )
}

export default App
