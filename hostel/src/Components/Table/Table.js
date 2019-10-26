import React from 'react';

import './Table.css';
import Button from '../Button/Button';

import { connect } from 'react-redux';
import { firestore } from '../../Firebase/firebase.utils';
import DeleteModal  from '../DeleteModal/DeleteModal';

class Table extends React.Component {
    constructor(){
        super();

        this.state = {
            users: [],
            show: false
        }
    }

    showModal = (n) => {
        console.log(n)
        this.setState({ show: true });
      };
    
    hideModal = () => {
        this.setState({ show: false });
    };

    componentDidMount(){
        let allUser = []
        firestore.collection('user').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                allUser.push(doc.data())
            })
        }).then(() => this.setState({
            users: allUser
        }))
        .catch((error) => console.log(error))
    }
    
    formatDate = (num) => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today  = new Date(num);
        return today.toLocaleDateString("en-US", options);
    }
    

    renderTable = (arr) => {
        return this.state.users.map((item, i) => {
            const { displayName, createdAt, email, hostel, role } = item;
            return <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{displayName}</td>
                        <td>{role}</td>
                        <td>{hostel ? hostel : 'none'}</td>
                        <td>{email}</td>
                        <td>{this.formatDate(createdAt.seconds * 1000)}</td>
                        <td><Button 
                        for='user-table'>
                            View
                        </Button>
                        <Button 
                        for='user-table' 
                        onClick = {()=>this.showModal(item)}>
                            Delete
                        </Button></td>
                    </tr>
        })
    }
    
    render(){
        return(
            <div className='mt-5 mb-5'>
                <div className='container-fluid'>
                    <div className='table-container'>
                    <div className='table-responsive'> 
                            <table className='table table-striped'>
                            <caption className='pt-2 pb-2'>Users</caption>
                            <thead>
                                <tr>
                                    <th scope="col">S.N</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Hostel</th>
                                    <th scope="col">Email</th>
                                    <th>Registration Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderTable()}
                            </tbody>
                            </table>
                            <DeleteModal show={this.state.show} handleClose={this.hideModal}>
                                <p>Modal</p>
                                <p>Data</p>
                            </DeleteModal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    allUsers: state.allUsers.allUsers
})

export default connect(mapStateToProps, null)(Table);