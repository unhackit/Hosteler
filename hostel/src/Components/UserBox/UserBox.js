import React from 'react';

import './UserBox.css';


const UserBox = ({userNum}) => (
    <div className=''>
        <div className={`user-box p-3`}>
            <div className='row'>
                 <div className='col-md-9'>
                    <p className='summary-box-data mt-4 mb-5 ml-4'>{userNum}</p>
                    <p className='summary-box-title mt-5 ml-4'>Users</p>
                 </div>
                 <div className='col-md-3'>
                    <p className='text-right box-icon mt-5'><i className={`fas fa-users`}></i></p>
                 </div>
            </div>
        </div>
    </div>
)

export default UserBox;