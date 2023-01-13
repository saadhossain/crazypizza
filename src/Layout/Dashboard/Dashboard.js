import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <h1>This is Dashboard</h1>
        </div>
    );
};

export default Dashboard;