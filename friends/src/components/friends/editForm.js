import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

const EditForm = ({person, setFriends, setIsEditing}) => {
    const [ editFriend, setEditFriend ] = useState({
        name: person.name,
        age: person.age,
        email: person.email
    });

    const handleChanges = (e) => {
        setEditFriend({
            ...editFriend,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/friends/${person.id}`, editFriend)
            .then(res => {
                console.log('Gratz, you changed your friend for the better!', res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log('We have been there, you cant always change your friends', err)
            })
        setIsEditing(false)
    };

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input 
                type='text'
                name='name'
                onChange={handleChanges}
                value={editFriend.name}/>
            </div>

            <div>
                <label>Age</label>
                <input 
                type='number'
                name='age'
                onChange={handleChanges}
                value={editFriend.age}/>
            </div>

            <div>
                <label>Email</label>
                <input 
                type='email'
                name='email'
                onChange={handleChanges}
                value={editFriend.email}/>
            </div>
            <button>Submit!</button>
        </form>
    </div>
    )
}

export default EditForm;