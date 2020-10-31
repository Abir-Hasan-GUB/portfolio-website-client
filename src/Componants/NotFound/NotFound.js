import React from 'react';
import { Link } from 'react-router-dom';
import notFound from'../Images/404 Not Found.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className = 'NotFound'>
            <Link to='/'><div className="backToHome">Back to Home</div></Link>
        <img style = {{width: '100%', height: '100vh'}} src={notFound} alt="admin"/>
    </div>
    );
};

export default NotFound;