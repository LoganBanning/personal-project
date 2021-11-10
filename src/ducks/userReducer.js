const initialState = {
  isLoggedIn: false,
  firstName: '',
  lastName: '',
  email: '',
}

export const UPDATE_USER = 'UPDATE_USER';
export const LOGIN = 'LOGIN';

// export const Login = (productInfo) => {
  
//   return {
//     type: LOGIN,
//     payload: UserInfo
//   }
// };

export default function userReducer(state = initialState, action) {
  switch(action.type){
    // case UPDATE_CART:
    //   return {
    //     ...state,
    //     ...action.payload,
    //     firstName: action.payload.firstname,
    //   }
    case LOGIN: 
      return {
        ...state,
        isLoggedIn: true,
      }
    case UPDATE_USER:
        return {
          ...state,
          ...action.payload
        }
    default:
        return state;
  }
};