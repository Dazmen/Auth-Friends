import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

const NewFriend = ({setFriends}) => {
    const [ newFriend, setNewFriend ] = useState({
        name: '',
        age: '',
        email: ''
    })
    const handleChanges = (e) => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('/api/friends', newFriend)
            .then(res => {
                console.log('posting a new buddy', res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log('opps, guess they didnt want to be your friend', err)
            })
        setNewFriend({
            name: '',
            age: '',
            email: ''
        })
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input 
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    value={newFriend.name}/>
                </div>

                <div>
                    <label>Age</label>
                    <input 
                    type='number'
                    name='age'
                    onChange={handleChanges}
                    value={newFriend.age}/>
                </div>

                <div>
                    <label>Email</label>
                    <input 
                    type='email'
                    name='email'
                    onChange={handleChanges}
                    value={newFriend.email}/>
                </div>
                <button>Submit!</button>
            </form>
        </div>
    )
};

export default NewFriend;