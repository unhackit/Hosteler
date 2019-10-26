import React from 'react';

import './Box.css';


const Box = ({item}) => (
    <div className=''>
        <div className={`summary-box p-3 ${item.bg}`}>
            <div className='row'>
                 <div className='col-md-9'>
                    <p className='summary-box-data mt-4 mb-5 ml-4'>{item.data}</p>
                    <p className='summary-box-title mt-5 ml-4'>{item.title}</p>
                 </div>
                 <div className='col-md-3'>
                    <p className='text-right box-icon mt-5'><i className={`${item.icon}`}></i></p>
                 </div>
            </div>
        </div>
    </div>
)

export default Box;