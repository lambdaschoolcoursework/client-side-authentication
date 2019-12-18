import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => (
    <>
        <h2>404: Page not found</h2>
        <Link to='/'>Sign In</Link>
    </>
);

export default Error;