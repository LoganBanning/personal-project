const initialState = {
  isLoggedIn: false,
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
}

export const UPDATE_USER = 'UPDATE_USER';
export const LOGIN = 'LOGIN';
export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

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
    case ADD_USER: 
        return { 
          ...state,
          ...action.payload
                  }
    case DELETE_USER:
      return {
        ...initialState,
      }
    default:
        return state;
  }
};