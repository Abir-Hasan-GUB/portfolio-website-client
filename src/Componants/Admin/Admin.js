import React from 'react';
import { Link } from 'react-router-dom';
import adminImg from '../Images/admin_under_constraction.jpg';
const Admin = () => {
    return (
        <div className = 'NotFound'>
            <Link to='/'><div className="backToHome">Back to Home</div></Link>
        <img style = {{width: '100%', height: '100vh'}} src={adminImg} alt="admin"/>
    </div>
    );
};

export default Admin;