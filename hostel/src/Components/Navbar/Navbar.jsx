import React from 'react';

import './Navbar.css';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.utils';

import { connect } from 'react-redux';

const Navbar = ({name, currentUser}) => (
    <div>
        <nav className={` ${name} navbar navbar-expand-lg`}>
            <a className="navbar-brand" href="/">Hosteler</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link" to="/">FAQs</Link>
                    {
                        currentUser ? 
                        <Link className="nav-item nav-link" to="/signup" onClick={() => auth.signOut()}>Sign out</Link>
                        :
                        <Link className="nav-item nav-link" to="/signin">Sign in</Link> 
                    }
                </div>
            </div>
        </nav>
    </div>
)

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps, null)(Navbar);