import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const FriendsList = props => {
    const [friends, setFriends] = useState([]);
    const [inputName, setInputName] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    
    useEffect(() => {
        axiosWithAuth().get('/friends')
            .then(res => setFriends(res.data))
            .catch(err => console.log(err));
    }, [friends]);
    
    const logOut = () => {
        localStorage.removeItem('token');
        props.history.push('/');
    };

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth().post('/friends', {name: inputName, age: inputAge, email: inputEmail})
            .then(res => setFriends(res.data))
            .catch(err => console.log(err));
        setInputName('');
        setInputAge('');
        setInputEmail('');
    };

    const removeFriend = id => {
        axiosWithAuth().delete(`/friends/${id}`)
            .then(res => setFriends(res.data))
            .catch(err => console.log(err));
    };

    const friend = id => {
        props.history.push(`/friends/${id}`);
    };
    
    return(
        <div className='friends-list-container'>
            <button onClick={logOut}>Log Out</button>
            <form onSubmit={addFriend}>
                <input type='text' value={inputName} placeholder='name' onChange={e => setInputName(e.target.value)}/>
                <input type='text' value={inputAge} placeholder='age' onChange={e => setInputAge(e.target.value)}/>
                <input type='email' value={inputEmail} placeholder='email' onChange={e => setInputEmail(e.target.value)}/>
                <button type='submit'>Add Friend</button>
            </form>
            <h2>Friends List:</h2>
            <div className='friends-list'>
                {friends.map((item, index) => (
                    <div className='friend' key={index}>
                        <h3 onClick={() => friend(item.id)}>{item.name}</h3>
                        <p>Age: {item.age}</p>
                        <p>Email: {item.email}</p>
                        <button onClick={() => removeFriend(item.id)}>Unfriend {item.name}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FriendsList;