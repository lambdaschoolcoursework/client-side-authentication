import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import {Link} from 'react-router-dom';

const Friend = props => {
    const [friend, setFriend] = useState({});

    useEffect(() => {
        axiosWithAuth().get(`/friends/${props.match.params.id}`)
            .then(res => setFriend(res.data))
            .catch(err => console.log(err));
    }, []);
    
    return (
        <>
            <Link to='/friends'>go back</Link>
            <div>
                <h3>{friend.name}</h3>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
            </div>
        </>
    );
};

export default Friend;