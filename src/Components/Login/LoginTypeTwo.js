// import React, { useEffect, useState } from 'react';
// import Nav from '../Nav/Nav';
// import Footer from '../Footer/Footer';
// import axios from 'axios';
// import './Login.css';
// import LoginImage from '../Images/LoginImage';
// import { connect } from 'react-redux';
// import { login } from '../actions.auth';
// import MuiAlert from '@material-ui/lab/Alert';

// function Alert(props) {
//   return <MuiAlert elevation={6} variant='filled' {...props} />
// }

// export default connect(null, { login })(props => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const submitForm = () => {
//     if( email === '' || password === ''){
//       setError('Fields are required');
//       return;
//     }
//     props.login({ email, password });
//   };



//   const login = async () => {
//     const response = await axios.post('/api/login', {email, password})
//   }


//   return (
//     <div>
//       <Nav />
//       <div>
//         <LoginImage className='beach-img' />
//         <div className='login-inputs'>
//           <div>
//         <input className='login-input' placeholder='EMAIL' onChange={(e) => setEmail(e.target.value)}></input>
//           </div>
//           <div>
//         <input className='login-input' type='password' placeholder='PASSWORD' onChange={(e) => setPassword(e.target.value)}></input>
//           </div>
//           <div>
//         <button className='login-button' onClick={login, submitForm}>Log In</button>
//         {error && (
//           <Alert severity='error' onClick={() => setError(null)}>
//             {props.error || error}
//           </Alert>
//         )}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// };
