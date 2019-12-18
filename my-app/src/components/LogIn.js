import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const LogIn = props => {
    const [usernameInput,setUsernameInput] = useState('');
    const [passwordInput,setPasswordInput] = useState('');
    const [error, setError] = useState('');
    const [isLoading,setIsLoading] = useState(false);

    const onSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        axiosWithAuth().post('/login', {username: usernameInput, password: passwordInput})
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                setTimeout(() => {
                    setUsernameInput('');
                    setPasswordInput('');
                    props.history.push('/friends');
                }, 3000);
            })
            .catch(err => {
                setError('Invalid credentials');
                setIsLoading(false);
                setTimeout(() => setError(''), 3000);
            });
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' value={usernameInput} onChange={e => setUsernameInput(e.target.value)}/>
                
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' value={passwordInput} onChange={e => setPasswordInput(e.target.value)}/>
                
                <button type='submit'>{isLoading ? 'Logging In...' : 'Log In'}</button>
            </form>
            <p style={{color: 'red'}}>{error}</p>
        </>
    );
};

export default LogIn;