import React from 'react';

import './Users.css';


import Sidebar from '../../../../Components/Sidebar/Sidebar';
import { DashboardAdmin } from '../../../../Data/Admin/dashboardNavigation';
import Table from '../../../../Components/Table/Table';



const Users = () => (
    <div className='row'>
        <div className='col-md-3'>
            <Sidebar role={DashboardAdmin}/>
        </div>
        <div className='col-md-9'>
            <Table/>
       </div>
    </div> 
)


export default Users;
