import React from 'react'

import './SignUp.css'


import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

import { auth, createUserProfileDocument } from '../../Firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props){
        super();

        this.state = {
            displayName: '',
            email: '',
            registration: '',
            password: ''
        }
    }

    onInput = (e) => {
        const { name, value } = e.target;

        this.setState({
            [ name ] : value
        })
    }


    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, registration } = this.state;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email,password);

        await createUserProfileDocument(user, {displayName, registration});
        this.setState({
            displayName: '',
            email: '',
            registration: '',
            password: ''
        })
        }catch(error){
            console.log('error creating user', error);
        }
    }


    render(){
        return(
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <form onSubmit={this.handleSubmit} className='sign-up-form mb-2'>
                                <div className="gradient-background"></div>
                                <h2 className="form__welcome-text">Sign up on Hosteler</h2>
                                <Input
                                type="text" 
                                placeholder="Fullname"
                                name='displayName'
                                loc='signup-input'
                                handleChange={this.onInput}
                                value={this.state.displayName}
                                />
                                <Input
                                type="email" 
                                placeholder="Email Address"
                                name='email'
                                loc='signup-input'
                                handleChange={this.onInput}
                                value={this.state.Email}
                                />
                                <Input
                                type="text" 
                                placeholder="Registration Number"
                                name="registration"
                                loc='signup-input'
                                handleChange={this.onInput}
                                value={this.state.Registration}
                                />
                                <Input
                                type="password" 
                                placeholder="Password"
                                name='password'
                                loc='signup-input'
                                handleChange={this.onInput}
                                value={this.state.Password}
                                />
                                <Button type='submit' for='sign-up-button'>Sign up</Button>
                                <a className="forgot-password" href='/'>Forgot Password?</a>
                                <p className="border-line"></p>
                                <small className='mb-2'>Don't have an account? <a href="/signin">Sign in</a></small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;