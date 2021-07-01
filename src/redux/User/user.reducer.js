import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
    user: {
      firstName: 'Sundaram',
      lastName: 'Srivastava'
    },
    isLoggedIn: false
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case userActionTypes.LOGIN:

           return {

             ...state, isLoggedIn: true,

           };

        case userActionTypes.LOGOUT:

           return {
              ...state, isLoggedIn: false,

           };

         default: return state;

    }

};

export default userReducer;