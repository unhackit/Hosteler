import React from 'react';

import './Summary.css'

import Sidebar from '../../../../Components/Sidebar/Sidebar';
import { DashboardAdmin } from '../../../../Data/Admin/dashboardNavigation';
import BoxContainer from '../../../../Components/BoxContainer/BoxContainer';

class AdminDashboard extends React.Component {
    constructor(){
        super();

        this.state = ''
    }

    render(){
        return (
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar role={DashboardAdmin}/>
                </div>
                <div className='col-md-9'>
                    <BoxContainer/>
                </div>
            </div>   
        )
    }
}

export default AdminDashboard; 