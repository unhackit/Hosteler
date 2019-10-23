import React from 'react'

import './SignIn.css'


import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

import { auth, signInWithGoogle } from '../../Firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    onInput = (e) => {
        const { name, value } = e.target;

        this.setState({
            [ name ] : value
        })
    }

    handleSubmit =  async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '', password: ''})
        }
        catch(error){
            console.log(error.message)
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
                                <h2 className="form__welcome-text">Welcome back to Hosteler</h2>
                                <Input
                                type="email" 
                                placeholder="Email"
                                name='email'
                                loc='signup-input'
                                handleChange={this.onInput}
                                value={this.state.email} 
                                />
                                <Input
                                type="password" 
                                placeholder="Password"
                                name='password'
                                loc='signup-input'
                                handleChange={this.onInput}
                                value={this.state.password}
                                />
                                <Button type='submit' for='sign-up-button'>SIGN IN</Button>
                                <div>or</div>
                                <Button onClick={signInWithGoogle} for='sign-up-button'>SIGN IN WITH GOOGLE</Button>
                                <a className="forgot-password" href='/'>Forgot Password?</a>
                                <p className="border-line"></p>
                                <small className='mb-2'>Don't have an account? <a href="/signup">Sign up</a></small>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;