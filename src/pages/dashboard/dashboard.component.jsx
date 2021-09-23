import React from 'react'

// COMPONENTS
import Sidebar from '../../components/sidebar/sidebar.component';

import './dashboard.style.scss'

const Dashboard = () => (
    <div className="dashboard">
        <div className="sidebar">
            <Sidebar/>
        </div>
        <div className="main-body">
            main body
        </div>
    </div>
)

export default Dashboard;