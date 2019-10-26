import React from 'react';

import './Sidebar.css'

const Sidebar = ({role}) => (
    <div className=''>
       <nav className="sidebar" role="navigation">
            <div className="container-fluid">
                <div className='nav-header mt-5'>
                     <div className='image-holder text-center'>
                        <img alt='user display' className='user-img' src="https://via.placeholder.com/150"/>
                     </div>
                </div>
                <div className="mt-4 " id="">
                    <ul className="sideNav nav navbar">
                        {
                            role.map((item, i) => {
                                return <li key={i} className='mt-2 mb-4'><a href={`/admin/dashboard/${item.routeName}`} className='ml-3'>{item.navItem}</a><i className={`${item.icon} float-right`}></i></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </div>
)

export default Sidebar;