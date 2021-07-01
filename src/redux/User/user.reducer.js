import { userActionTypes } from "./user.types";

const INITIAL_STATE = {
    user: {
    },
    isLoggedIn: false
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case userActionTypes.LOGIN:

           return {

             ...state, user: {firstName: 'Sundaram', lastName: 'Srivastava'}, isLoggedIn: true,

           };

        case userActionTypes.LOGOUT:
           return {
              ...state, user: {}, isLoggedIn: false,
           };

         default: return state;

    }

};

export default userReducer;