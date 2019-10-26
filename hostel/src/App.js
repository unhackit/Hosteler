import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';

import Landing from './Views/Landing/Landing';
import SignUp from './Authentication/SignUp/SignUp';
import SignIn from './Authentication/SignIn/SignIn';
import Navbar from './Components/Navbar/Navbar';
import AdminDashboard from './Views/Admin/Dashboard/Summary/Summary';
import Users from './Views/Admin/Dashboard/Users/Users';

import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { connect } from 'react-redux';
import { firestore } from './Firebase/firebase.utils';

import { setCurrentUser } from './Redux/user/user.actions';
import { getAllUsers } from './Redux/allUsers/allUsers.actions';

class App extends React.Component{
  
unsubscribeFromAuth = null;

  componentDidMount(){
    
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        })
      }
      else {
        setCurrentUser(userAuth)
      }
    })

      let arr = []
      firestore.collection('user').get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              arr.push(doc.data())
          })
      })
      .then(() => this.props.getAllUsers(arr))
  
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div>
        <Navbar name={'landing'}/>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/Signup' render={() => this.props.currentUser ? (<Redirect to='/'/>) : <SignUp/>}/>
          <Route path='/Signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : <SignIn/>}/>
          <Route exact path='/admin/dashboard/summary' component={AdminDashboard}/>
          <Route exact path='/admin/dashboard/users' component={Users}/>
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  getAllUsers: users => dispatch(getAllUsers(users))
})

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
