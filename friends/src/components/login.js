import React, { useState } from 'react';
import Axios from 'axios';

const Login = (props) => {
    const [ userLog, setUserLog ] = useState({
        username: '',
        password: ''
    });

    const handleChanges = (e) => {
        setUserLog({
            ...userLog,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios
            .post('http://localhost:5000/api/login', userLog)
            .then(res => {
                console.log('post RES', res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/dashboard')
            })
            .catch(err => {
                console.log('Did Not Post', err)
            });
        setUserLog({
            username: '',
            password: ''
        })
    };
    return(
        <section>
            <h1>Log In!</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                    type='text'
                    name='username'
                    onChange={handleChanges}
                    value={userLog.username}/>
                </div>

                <div>
                    <label>Password</label>
                    <input 
                    type='password'
                    name='password'
                    onChange={handleChanges}
                    value={userLog.password}/>
                </div>

                <button>Log In!</button>
            </form>
        </section>
    )
};

export default Login;