import React from 'react';

import './BoxContainer.css';

import Box from '../Box/Box';
import  UserBox from '../UserBox/UserBox';
import Button from '../Button/Button';
import { summaryData } from '../../Data/Admin/summaryData';
import { firestore } from '../../Firebase/firebase.utils';

import { connect } from 'react-redux';

class BoxContainer extends React.Component {
    constructor(){
        super();

        this.state = {
            totalUsers: ''
        }
    }

    componentDidMount(){
        let arr = []
        firestore.collection('user').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                arr.push(doc.data())
            })
        })
        .then(() => this.setState({
            totalUsers: arr.length
        }))       
    }

    render(){
        const {totalUsers} = this.state;
        return(
            <div className='box-container mt-2 row'>
                <div className='col-md-12'>
                    <Button for='dashboard-summary'>CREATE HOSTEL<i className='fas fa-plus ml-1 mr-1'></i> </Button>
                </div>
                <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                    <UserBox userNum={totalUsers}/>    
                </div>
                    {
                        summaryData.map((item, i ) => {
                            return <div key={i}className='col-md-4 mb-3 mt-3'>
                                <Box key={i} item={item} />    
                            </div>
                        })
                    }
            </div>
        )
    }
}


const mapStateToProps = state => ({
    allUsers: state.allUsers.allUsers
})

export default connect(mapStateToProps, null)(BoxContainer);