import React from 'react';

import './Landing.css'

import Button from '../../Components/Button/Button';
import LandingVector from '../../Assets/Images/landing-vector.png'

const Landing = () => (
    <div className='landing-page'>
        <div className='container'>
            <div className='row'>
                 <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <div className='landing-caption'>
                        <h1 className='mt-3 mb-3'>Welcome to Hosteler</h1>
                        <p>You can now apply for and have a room allocated to you in our highly equipped and world class hostels.</p>
                        <div className="description__advantages mt-4">
                            <p>What you're offered</p>
                            <p><i className="fas fa-check pr-3"></i>View rooms and hostels</p>
                            <p><i className="fas fa-check pr-3"></i>Compare room features</p>
                            <p><i className="fas fa-check pr-3"></i>Apply for and have a hostel allocated to you</p>
                        </div>
                        <Button for='landing-page-button'>Get started</Button>
                    </div>
                 </div>
                 <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6'>
                    <div className='landing-caption'>
                        <img className='landing-page-vector' alt='landing page vector' src={LandingVector}/>
                    </div>
                 </div>
            </div>
        </div>
    </div>
)

export default Landing;