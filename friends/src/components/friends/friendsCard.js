import React, { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import EditForm from './editForm';

const FriendCard = ({person, setFriends}) => {
    const [ isEditing, setIsEditing ] = useState(false)
    
    const deleteFriend = (person) => {
        axiosWithAuth()
            .delete(`/api/friends/${person.id}`)
            .then(res => {
                console.log('got rid of that toxic friend', res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log('Guess your stuck with em!', err)
            })
    };
    const toggleEdit = () => {
        setIsEditing(true)
    };

    if(isEditing === false){
         return (
            <div>
                <h3>{person.name}</h3>
                <p>Email: {person.email}</p>
                <p>Age: {person.age}</p>
                <button onClick={() => toggleEdit()}>Edit</button>
                <button onClick={() => deleteFriend(person)}>Delete</button>
            </div>
        )} else {
            return <EditForm 
                    person={person} 
                    setFriends={setFriends}
                    setIsEditing={setIsEditing}/>
        }
};

export default FriendCard;