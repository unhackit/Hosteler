import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Landing from './Views/Landing/Landing';
import SignUp from './Authentication/SignUp/SignUp';
import SignIn from './Authentication/SignIn/SignIn';
import Navbar from './Components/Navbar/Navbar';

import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { connect } from 'react-redux';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => console.log(this.state))
        })
      }
      else {
        this.setState({
          currentUser: userAuth
        })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div>
        <Navbar currentUser={this.state.currentUser} name={'landing'}/>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/Signup' component={SignUp}/>
          <Route path='/Signin' component={SignIn}/>
        </Switch>
      </div>
    )
  }
}
const mapStateToProps = ({user}) => ({
  currentUser: user.userReducer
})

export default connect(mapStateToProps, null)(App);
