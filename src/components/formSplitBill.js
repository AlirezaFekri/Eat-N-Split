import React, { useState } from 'react'
import Button from './button'

function FormSplitBill({ selection, updateFriend }) {
    const [billValue, setBillValue] = useState("");
    const [userExpense, setUserExpense] = useState("");
    const [paying, setPaying] = useState("you");


    function HandleSubmitForm(e) {
        e.preventDefault();
        if (!billValue || !userExpense || billValue < userExpense) return;
        if (paying === "you") {
            updateFriend(selection.id, selection.balance + (billValue - userExpense))
        }else{
            updateFriend(selection.id, selection.balance + ((billValue - userExpense) * -1))
        }

    }
    return (
        <form className='form-split-bill' onSubmit={HandleSubmitForm}>
            <h2>
                Split a Bill with {selection.name}
            </h2>

            <label>
                💰 Bill Value:
            </label>
            <input type='text' value={billValue} onChange={e => setBillValue(Number(e.target.value))} />
            <label>
                🧍‍♂️ Your expense:
            </label>
            <input type='text' value={userExpense} onChange={e => setUserExpense(Number(e.target.value))} />
            <label>
                👫 {selection.name}'s expense:
            </label>
            <input type='text' value={billValue - userExpense} disabled />
            <label>
                🤑 Who is paying the Bill?
            </label>
            <select onChange={e => setPaying(e.target.value)}>
                <option value="user">You</option>
                <option value="friend">{selection.name}</option>
            </select>
            <Button>
                Split Bill
            </Button>
        </form>
    )
}

export default FormSplitBill