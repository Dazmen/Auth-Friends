import React from 'react'
import FriendCard from './friendsCard';


const FriendsList = ({friends, setFriends}) => {
    
    return (
        <div>
            {friends.map(person => {
                return <FriendCard 
                        key={person.id} 
                        person={person}
                        setFriends={setFriends}/>
            })}
        </div>
    )
};

export default FriendsList