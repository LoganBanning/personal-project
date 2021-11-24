import React, {useState} from 'react';
import './AccountComponent.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UPDATE_USER, DELETE_USER } from '../../ducks/userReducer';
import axios from 'axios';

const AccountComponent = (props) => {

  const [ firstName, setFirstName ] = useState(props.user.firstName);
  const [ lastName, setLastName ] = useState(props.user.lastName);
  const [ email, setEmail ] = useState(props.user.email);

  // when the value of the input changes, dispatch an event to the redux store

  const history = useHistory();

  const updateUser = async () => {
    const response = await axios.put('/api/updateUser', {firstName, lastName, email})
    if(response.status === 200) {
      console.log("Update user response", response);
      props.dispatch({
        type: UPDATE_USER,
        payload: {
          firstName: response.data.firstname,
          lastName: response.data.lastname,
          email: response.data.email,
        }
      });
    }
  }

  const deleteUser = async () => {
    const response = await axios.delete(`/api/deleteuser/${email}`);
    if(response.status === 200) {
      props.dispatch({
        type: DELETE_USER,
      })
      history.push('/');
    }
  }
    // have a 'save' button that sends a put to the server to update the user
  // have a 'delete' button that deletes the user (probably want to confirm this action w/the user)

  return (
    <div>
      <Nav />
      <div className="all-user-info">
        <h1 className='account-greeting'>Hello {firstName}!</h1>
        <div className='user-info'>
        <label className='user-data'>First Name</label>
        <input className='user-input' onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
        </div>
        <div className='user-info'>
        <label className='user-data'>Last Name</label>
        <input className='user-input' onChange={(e) => setLastName(e.target.value)} value={lastName} />
        </div>
        <div className='user-info'>
        <label className='user-data'>Email</label>
        <input className='user-input' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <button className='update-btn' onClick={updateUser}>Update Account</button>
        <button className='delete-btn' onClick={deleteUser}>Delete Account</button>
      </div>
      <Footer />
    </div>
  )
};

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(AccountComponent);