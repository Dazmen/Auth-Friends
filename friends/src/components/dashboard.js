import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import FriendsList from './friends/friendsList';
import NewFriend from './friends/newFriendForm';
import { Route, Switch, NavLink } from 'react-router-dom';

const Dashboard = () => {
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                console.log('friend list', res)
                setFriends(res.data)
            })
            .catch(err => {
                console.log('did not retrieve friend list', err)
            })
    }, [])

    return(
        <div>
            <h1>Welcome to your dashboard!</h1>
            <nav>
                <NavLink to='/dashboard/'>Home</NavLink>
                <NavLink to='/dashboard/addfriend'>Add A Friend!</NavLink>
                <NavLink to='/'>LogOut</NavLink>
            </nav>
            <Switch>
            <Route exact path='/dashboard/'
                render={(props) => <FriendsList {...props} 
                            friends={friends}
                            setFriends={setFriends}/>} />
            <Route path='/dashboard/addfriend'
                render={(props) => <NewFriend {...props} 
                            friends={friends} 
                            setFriends={setFriends}/>} />
            </Switch>
        </div>
    )
}

export default Dashboard