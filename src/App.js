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
  const [friendSelected, setFriendSelected] = useState(null);

  function HandleShowAddFriendForm() {
    setAddFriendShowForm(i => !i)
    if (!addFriendShowForm) {
      setFriendSelected(null)
    }
  }
  function HandleAddFriend(newFriend) {
    setAddFriendShowForm(false);
    setFreinds(friend => [...friend, newFriend])
  }
  function HandleSelection(friend) {
    setFriendSelected(cur => cur?.id === friend.id ? null : friend)
    setAddFriendShowForm(false)
  }
  function HandleUpdateFriends(value) {
    setFreinds(friends.map(item => item.id === friendSelected.id ? {...item, balance: friendSelected.balance + value} : item))
    setFriendSelected(null)
  }


  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList friends={friends} onSelection={HandleSelection} selection={friendSelected}/>

        {addFriendShowForm && <FormAddFriend HandleFriend={HandleAddFriend} />}
        
        <Button onClick={HandleShowAddFriendForm}>{addFriendShowForm ? "Close" : "Add Friend"}</Button>
      </div>
      {friendSelected && <FormSplitBill selection={friendSelected} updateFriend={HandleUpdateFriends} />}
    </div>
  )
}

export default App
